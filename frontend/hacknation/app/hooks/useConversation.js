import { useState, useCallback, useEffect } from 'react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export const useConversation = () => {
  const [sessionId] = useState(() => `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [responses, setResponses] = useState({});
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState(null);
  const [step, setStep] = useState(0);
  const [totalSteps, setTotalSteps] = useState(0);
  const [formType, setFormType] = useState(null);
  const [analysis, setAnalysis] = useState(null);

  const startConversation = useCallback(async (form_type) => {
    console.log('startConversation called with:', form_type);
    console.log('API URL:', API_BASE_URL);
    
    setLoading(true);
    setError(null);
    setResponses({});
    setCompleted(false);
    setAnalysis(null);
    
    try {
      const url = `${API_BASE_URL}/api/assistant/start-conversation`;
      console.log('Fetching:', url);
      
      const response = await fetch(url, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          session_id: sessionId,
          form_type: form_type
        })
      });

      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Response data:', data);
      
      if (data.status === 'success') {
        setCurrentQuestion(data.data.question);
        setStep(data.data.step);
        setTotalSteps(data.data.total_steps);
        setFormType(data.data.form_type);
        console.log('Conversation started successfully, first question:', data.data.question);
      } else {
        setError(data.message || 'Błąd przy rozpoczynaniu rozmowy');
        console.error('Failed to start conversation:', data);
      }
    } catch (error) {
      console.error('Error starting conversation:', error);
      setError('Nie udało się połączyć z serwerem');
    } finally {
      setLoading(false);
    }
  }, [sessionId]);

  const sendAnswer = useCallback(async (fieldName, answer) => {
    console.log('sendAnswer called with:', { fieldName, answer });
    
    setLoading(true);
    setError(null);
    
    try {
      const url = `${API_BASE_URL}/api/assistant/answer`;
      console.log('Fetching:', url);
      
      const response = await fetch(url, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          session_id: sessionId,
          field_name: fieldName,
          answer: answer
        })
      });

      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Response data:', data);
      
      if (data.status === 'success') {
        setResponses(prev => ({ ...prev, [fieldName]: answer }));
        setAnalysis(data.data.analysis || null);
        
        if (data.data.status === 'completed') {
          console.log('Conversation completed');
          setCompleted(true);
          setCurrentQuestion(null);
        } else {
          console.log('Next question:', data.data.question);
          setCurrentQuestion(data.data.question);
          setStep(data.data.step);
          setTotalSteps(data.data.total_steps);
        }
      } else {
        setError(data.error || 'Błąd przy przetwarzaniu odpowiedzi');
        console.error('Failed to send answer:', data);
      }
    } catch (error) {
      console.error('Error sending answer:', error);
      setError('Nie udało się wysłać odpowiedzi');
    } finally {
      setLoading(false);
    }
  }, [sessionId]);

  const getConversationHistory = useCallback(async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/assistant/get-conversation?session_id=${sessionId}`, {
        method: 'GET',
        headers: { 
          'Content-Type': 'application/json',
        }
      });

      const data = await response.json();
      return data.status === 'success' ? data.data : null;
    } catch (error) {
      console.error('Error getting conversation:', error);
      return null;
    }
  }, [sessionId]);

  const endConversation = useCallback(async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/assistant/end-conversation`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          session_id: sessionId
        })
      });

      const data = await response.json();
      
      if (data.status === 'success') {
        setCompleted(true);
      }
      
      return data.status === 'success';
    } catch (error) {
      console.error('Error ending conversation:', error);
      return false;
    }
  }, [sessionId]);

  const reset = useCallback(() => {
    setCurrentQuestion(null);
    setResponses({});
    setLoading(false);
    setCompleted(false);
    setError(null);
    setStep(0);
    setTotalSteps(0);
    setFormType(null);
    setAnalysis(null);
  }, []);

  return {
    sessionId,
    currentQuestion,
    responses,
    loading,
    completed,
    error,
    step,
    totalSteps,
    formType,
    analysis,
    startConversation,
    sendAnswer,
    getConversationHistory,
    endConversation,
    reset
  };
};
