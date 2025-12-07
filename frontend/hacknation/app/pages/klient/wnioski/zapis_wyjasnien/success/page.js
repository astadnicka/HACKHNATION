'use client'

import Link from "next/link";
import { useEffect, useState } from "react";

export default function SuccessPage() {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem('zapisWyjasnienData');
    if (data) {
      setFormData(JSON.parse(data));
    }
  }, []);

  const handleDownload = async () => {
    if (!formData) return;

    try {
      const response = await fetch('http://localhost:8000/api/pdf/wyjasnienie', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          window.open(url, '_blank');
      } else {
          console.error('Failed to fetch PDF');
          alert('Błąd podczas generowania PDF');
      }
    } catch (error) {
      console.error('Error downloading PDF:', error);
      alert('Błąd podczas pobierania PDF');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md w-full">
        <div className="mb-6">
          <svg className="w-16 h-16 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Sukces!</h1>
        <p className="text-gray-600 mb-8">Twój wniosek został pomyślnie zapisany.</p>
        
        <button 
          onClick={handleDownload}
          className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mb-4 font-medium flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
          </svg>
          Pobierz PDF
        </button>

        <Link href="/">
          <button className="text-gray-500 hover:text-gray-700 text-sm underline">
            Powrót do strony głównej
          </button>
        </Link>
      </div>
    </div>
  );
}
