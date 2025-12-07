'use client';

import { useState } from 'react';
import { useConversation } from '@/app/hooks/useConversation';
import './ConversationForm.css';

export const ConversationForm = ({ formType, onComplete }) => {
  const {
    currentQuestion,
    responses,
    loading,
    completed,
    error,
    step,
    totalSteps,
    analysis,
    startConversation,
    sendAnswer,
    reset
  } = useConversation();

  const [currentAnswer, setCurrentAnswer] = useState('');
  const [conversationStarted, setConversationStarted] = useState(false);

  const handleStart = () => {
    setConversationStarted(true);
    startConversation(formType);
  };

  const handleSubmitAnswer = async (e) => {
    e.preventDefault();
    
    if (!currentAnswer.trim()) {
      alert('Proszę wpisać odpowiedź');
      return;
    }

    const fieldName = `field_${step}`;
    await sendAnswer(fieldName, currentAnswer);
    setCurrentAnswer('');
  };

  const handleRestart = () => {
    reset();
    setConversationStarted(false);
    setCurrentAnswer('');
  };

  const handleFinish = () => {
    if (onComplete) {
      onComplete(responses);
    }
  };

  // Przed rozpoczęciem rozmowy
  if (!conversationStarted) {
    return (
      <div className="conversation-form">
        <div className="intro-section">
          <h2>Formularz {formType === 'accident_report' ? 'Zawiadomienia o Wypadku' : 'Wyjaśnień'}</h2>
          <p>
            Ten formularz poprowadzi Cię przez proces wypełniania zawiadomienia o wypadku.
            Odpowiadaj szczerze i dokładnie na każde pytanie.
          </p>
          <button 
            className="btn-start" 
            onClick={handleStart}
            disabled={loading}
          >
            {loading ? 'Ładowanie...' : 'Rozpocznij'}
          </button>
        </div>
      </div>
    );
  }

  // Podczas rozmowy
  if (!completed && currentQuestion) {
    return (
      <div className="conversation-form">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${(step / totalSteps) * 100}%` }}></div>
        </div>
        
        <div className="progress-info">
          Pytanie {step} z {totalSteps}
        </div>

        <form onSubmit={handleSubmitAnswer} className="conversation-form-body">
          <div className="question-section">
            <label className="question-text">{currentQuestion}</label>
            
            <textarea
              value={currentAnswer}
              onChange={(e) => setCurrentAnswer(e.target.value)}
              placeholder="Twoja odpowiedź..."
              className="answer-input"
              rows="4"
              disabled={loading}
              autoFocus
            />

            {analysis && analysis.needs_clarification && (
              <div className="analysis-note">
                <strong>Uwaga:</strong> {analysis.analysis}
              </div>
            )}

            {error && (
              <div className="error-message">
                {error}
              </div>
            )}
          </div>

          <div className="form-actions">
            <button 
              type="button" 
              className="btn-cancel" 
              onClick={handleRestart}
              disabled={loading}
            >
              Przerwij
            </button>
            
            <button 
              type="submit" 
              className="btn-submit" 
              disabled={loading || !currentAnswer.trim()}
            >
              {loading ? 'Przetwarzanie...' : 'Dalej'}
            </button>
          </div>
        </form>
      </div>
    );
  }

  // Po zakończeniu rozmowy
  if (completed) {
    return (
      <div className="conversation-form">
        <div className="completion-section">
          <h2>✓ Rozmowa zakończona</h2>
          <p>Dziękujemy za wypełnienie formularza!</p>

          <div className="responses-summary">
            <h3>Podsumowanie Twoich odpowiedzi:</h3>
            <ul>
              {Object.entries(responses).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>

          <div className="form-actions">
            <button 
              className="btn-restart" 
              onClick={handleRestart}
            >
              Zacznij od nowa
            </button>
            
            <button 
              className="btn-finish" 
              onClick={handleFinish}
            >
              Potwierdź i Kontynuuj
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
