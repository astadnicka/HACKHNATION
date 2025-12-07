'use client';

import React, { useState } from 'react';
import { useConversation } from '@/app/hooks/useConversation';
import './ConversationForm.css';

export const ConversationForm = ({ formType, onBack, onComplete }) => {
  const {
    sessionId,
    currentQuestion,
    responses,
    loading,
    completed,
    error,
    step,
    totalSteps,
    startConversation,
    sendAnswer
  } = useConversation();

  const [currentAnswer, setCurrentAnswer] = useState('');
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
    if (formType) {
      startConversation(formType);
    }
  }, [formType, startConversation]);

  const handleSubmitAnswer = async (e) => {
    e.preventDefault();
    
    if (!currentAnswer.trim()) {
      alert('Proszę wpisać odpowiedź');
      return;
    }

    const fieldNames = {
      'accident_report': ['full_name', 'pesel', 'business_activity', 'nip', 'accident_date', 'accident_location', 'accident_description', 'accident_causes'],
      'explanation': ['what_happened', 'when_happened', 'what_were_doing', 'injuries', 'medical_help', 'witnesses_present', 'additional_info']
    };

    const currentFieldName = fieldNames[formType]?.[step - 1] || `field_${step}`;
    await sendAnswer(currentFieldName, currentAnswer);
    setCurrentAnswer('');
  };

  const handleCancel = () => {
    setMounted(false);
    if (onBack) {
      onBack();
    }
  };

  if (!mounted) {
    return null;
  }

  if (!currentQuestion && !completed) {
    return (
      <div className="conversation-form loading">
        <div className="container">
          <div className="spinner"></div>
          <p>Przygotowywanie pytania...</p>
        </div>
      </div>
    );
  }

  if (completed) {
    React.useEffect(() => {
      if (onComplete) {
        onComplete(responses);
      }
    }, [completed, onComplete, responses]);

    return (
      <div className="conversation-form completion-screen">
        <div className="container">
          <div className="completion-content">
            <div className="success-icon">GOTOWE</div>
            <h2>Wszystkie pytania udzielone!</h2>
            <p>Przygotowujemy podsumowanie...</p>
            <div className="spinner"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="conversation-form">
      <div className="container">
        <div className="form-header">
          <button className="back-btn" onClick={handleCancel}>
            Wroć
          </button>
          <div className="progress-info">
            Krok {step} z {totalSteps}
          </div>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          ></div>
        </div>

        <form onSubmit={handleSubmitAnswer} className="question-form">
          <div className="question-container">
            <div className="form-type-header">
              {formType === 'accident_report' && 'Zawiadomienie o wypadku'}
              {formType === 'explanation' && 'Wyjaśnienia poszkodowanego'}
            </div>

            <h2 className="question-text">{currentQuestion}</h2>

            <textarea
              className="answer-input"
              value={currentAnswer}
              onChange={(e) => {
                setCurrentAnswer(e.target.value);
              }}
              placeholder="Tutaj wpisz swoją odpowiedź..."
              disabled={loading}
              rows={5}
              autoFocus
            />

            {error && <div className="error-message">{error}</div>}

            <div className="button-group">
              <button
                type="submit"
                className="btn btn-submit"
                disabled={loading || !currentAnswer.trim()}
              >
                {loading ? 'Przetwarzanie...' : 'Dalej'}
              </button>
            </div>
          </div>
        </form>

        <div className="form-footer">
          <p className="tip">
            Porada: Odpowiadaj szczerze i dokładnie. Im więcej szczegółów, tym lepiej.
          </p>
        </div>
      </div>
    </div>
  );
};
