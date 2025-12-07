'use client';

import { useState } from 'react';
import { ConversationForm } from '@/app/components/ConversationForm';

export default function SubmitForm() {
  const [selectedFormType, setSelectedFormType] = useState(null);
  const [responses, setResponses] = useState(null);

  const handleFormTypeSelect = (type) => {
    setSelectedFormType(type);
    setResponses(null);
  };

  const handleFormComplete = (formResponses) => {
    setResponses(formResponses);
    console.log('Completed responses:', formResponses);
  };

  // Ekran wyboru typu formularza
  if (!selectedFormType) {
    return (
      <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>
          Co chciałbyś zrobić?
        </h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px',
          marginBottom: '20px'
        }}>
          <button
            onClick={() => handleFormTypeSelect('accident_report')}
            style={{
              padding: '30px',
              fontSize: '16px',
              fontWeight: 'bold',
              backgroundColor: '#2563eb',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}
          >
            Zawiadomienie o Wypadku
          </button>

          <button
            onClick={() => handleFormTypeSelect('explanation')}
            style={{
              padding: '30px',
              fontSize: '16px',
              fontWeight: 'bold',
              backgroundColor: '#059669',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#047857'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#059669'}
          >
            Wyjaśnienia Poszkodowanego
          </button>
        </div>

        <button
          onClick={() => handleFormTypeSelect('opinion')}
          style={{
            width: '100%',
            padding: '20px',
            fontSize: '16px',
            fontWeight: 'bold',
            backgroundColor: '#7c3aed',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#6d28d9'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#7c3aed'}
        >
          Opinia Eksperta
        </button>
      </div>
    );
  }

  // Ekran formularza
  return (
    <div style={{ marginTop: '20px' }}>
      <button
        onClick={() => handleFormTypeSelect(null)}
        style={{
          padding: '8px 16px',
          marginBottom: '20px',
          backgroundColor: '#f3f4f6',
          border: '1px solid #d1d5db',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        ← Wróć
      </button>

      <ConversationForm
        formType={selectedFormType}
        onComplete={handleFormComplete}
      />

      {responses && (
        <div style={{
          marginTop: '30px',
          padding: '20px',
          backgroundColor: '#f0fdf4',
          borderRadius: '8px',
          border: '1px solid #bbf7d0'
        }}>
          <h3>Formularz gotowy do wysłania</h3>
          <p>Możesz teraz pobrać PDF lub wysłać formularz.</p>
        </div>
      )}
    </div>
  );
}
