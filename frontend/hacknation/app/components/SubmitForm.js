'use client';

import { useState } from 'react';
import { ConversationForm } from '@/app/components/ConversationForm';
import './SubmitForm.css';

export default function SubmitForm() {
  const [currentStep, setCurrentStep] = useState('selector');
  const [selectedFormType, setSelectedFormType] = useState(null);
  const [allResponses, setAllResponses] = useState({});

  const handleFormTypeSelect = (type) => {
    setSelectedFormType(type);
    setCurrentStep('form');
  };

  const handleFormComplete = (formResponses) => {
    const formKey = selectedFormType;
    setAllResponses(prev => ({
      ...prev,
      [formKey]: formResponses
    }));
    setCurrentStep('completed');
  };

  const handleContinueSecondForm = () => {
    setSelectedFormType(null);
    setCurrentStep('selector');
  };

  const handleBackToSelector = () => {
    setSelectedFormType(null);
    setCurrentStep('selector');
  };

  if (currentStep === 'selector') {
    return (
      <div className="form-selector">
        <div className="selector-container">
          <h1>Zglos wypadek przy pracy</h1>
          <p>Wybierz typ zgłoszenia, które chcesz przesłać:</p>

          <div className="info-alert">
            <p>
              <strong>Informacja:</strong> Możesz złożyć oba wnioski: najpierw Zawiadomienie o wypadku, 
              a następnie Wyjaśnienia poszkodowanego.
            </p>
          </div>

          <div className="form-options">
            <div
              className="form-card"
              onClick={() => handleFormTypeSelect('accident_report')}
            >
              <div className="form-icon">ZAWIADOMIENIE</div>
              <h3>Zawiadomienie o wypadku</h3>
              <p>
                Zgłoś wypadek, który miał miejsce. To zawiadomienie musi być złożone 
                w terminie 7 dni od zdarzenia.
              </p>
              <button className="btn-select">Wybierz</button>
            </div>

            <div
              className="form-card"
              onClick={() => handleFormTypeSelect('explanation')}
            >
              <div className="form-icon">WYJASNIENIA</div>
              <h3>Wyjaśnienia poszkodowanego</h3>
              <p>
                Dodaj szczegółowe wyjaśnienia zdarzenia. Ta część uzupełnia 
                zawiadomienie o dodatkowe informacje.
              </p>
              <button className="btn-select">Wybierz</button>
            </div>
          </div>

          <div className="faq-section">
            <h3>Pytania i odpowiedzi</h3>
            <div className="faq-item">
              <strong>Czy muszę złożyć oba wnioski?</strong>
              <p>Nie, ale zalecamy. Zawiadomienie to wymagane, a wyjaśnienia pomagają ZUS-owi w ocenie sprawy.</p>
            </div>
            <div className="faq-item">
              <strong>Ile czasu mam na złożenie?</strong>
              <p>Zawiadomienie - 7 dni od wypadku. Wyjaśnienia - bez ograniczeń czasowych.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 'form') {
    return (
      <div>
        <ConversationForm
          formType={selectedFormType}
          onBack={handleBackToSelector}
          onComplete={handleFormComplete}
        />

      </div>
    );
  }

  if (currentStep === 'completed') {
    return (
      <div className="completed-screen">
        <div className="container">
          <div className="completion-content">
            <div className="success-icon">GOTOWE</div>
            <h2>Dziękujemy!</h2>
            <p>
              {selectedFormType === 'accident_report' && 'Zawiadomienie o wypadku zostało przygotowane'}
              {selectedFormType === 'explanation' && 'Wyjaśnienia poszkodowanego zostały przygotowane'}
            </p>

            <div className="summary-box">
              <h3>Twoje odpowiedzi:</h3>
              <div className="responses-list">
                {Object.entries(allResponses[selectedFormType] || {}).map(([key, value]) => (
                  <div key={key} className="response-item">
                    <strong>{formatFieldName(key)}:</strong>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="completion-actions">
              <button className="btn btn-primary" onClick={() => handleDownloadPDF(selectedFormType, allResponses[selectedFormType])}>
                Pobierz PDF
              </button>
              <button className="btn btn-secondary" onClick={() => handleSubmitForm(selectedFormType, allResponses[selectedFormType])}>
                Wyslij do ZUS
              </button>
              <button className="btn btn-tertiary" onClick={handleContinueSecondForm}>
                Dodaj kolejny wniosek
              </button>
              <button className="btn btn-cancel" onClick={handleBackToSelector}>
                Wroć
              </button>
            </div>

            <div className="info-box">
              <h4>Co dalej?</h4>
              <p>
                Po złożeniu formularza otrzymasz potwierdzenie. Możesz dodać kolejny wniosek
                (np. wyjaśnienia poszkodowanego) lub zakończyć proces.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function formatFieldName(fieldName) {
  const names = {
    'full_name': 'Imię i nazwisko',
    'pesel': 'PESEL',
    'business_activity': 'Prowadzi działalność',
    'nip': 'NIP',
    'regon': 'REGON',
    'accident_date': 'Data wypadku',
    'accident_time': 'Godzina wypadku',
    'accident_location': 'Miejsce wypadku',
    'accident_description': 'Opis wypadku',
    'accident_causes': 'Przyczyny wypadku',
    'injury_type': 'Rodzaj urazu',
    'medical_help': 'Czy udzielono pierwszej pomocy',
    'witnesses': 'Świadkowie'
  };
  return names[fieldName] || fieldName;
}

function handleDownloadPDF(formType, responses) {
  console.log('Pobieranie PDF...', formType, responses);
  alert('Funkcja pobierania PDF - w przygotowaniu');
}

function handleSubmitForm(formType, responses) {
  console.log('Wysyłanie formularza...', formType, responses);
  alert('Funkcja wysyłania - w przygotowaniu');
}
