'use client'

import Link from "next/link";
import Strona1 from "@/app/components/klient/wnioski/zapis_wyjasnien/strona1";
import Strona2 from "@/app/components/klient/wnioski/zapis_wyjasnien/strona2";
import Strona3 from "@/app/components/klient/wnioski/zapis_wyjasnien/strona3";

import { useState } from 'react';

export default function zapis_wyjasnien() {
  const [page, setPage] = useState(1);

  const [formData, setFormData] = useState({
    osoba: {
      imie1: "",
      imie2: "",
      dataUrodzenia: "",
      miejsceUrodzenia: "",
      miejsceZamieszkania: "",
      ulica: "",
      zatrudnionyW: "",
    },
    wypadek: {
      dataWypadku: "",
      dataWypadkuSzczegoly: "",
      miejsceWypadku: "",
      godzinaWypadku: "",
      godzinaRozpoczecia: "",
      godzinaZakonczenia: "",
      rodzajCzynnosci: "",
      opisOkolicznosci: "",
    },
    maszyny: {
      wypadekMaszyna: "",
      nazwaMaszyny: "",
      sprawnosc: "",
      zabezpieczenia: "",
      rodzajSrodkow: "",
      sprawnoscSrodkow: "",
      asekuracja: "",
      obowiazekDwochOsob: "",
      bhp: "",
      przygotowanie: "",
      szkolenie: "",
      ocenaRyzyka: "",
      srodkiZmniejszenia: "",
      stanNietrzezwosci: "",
      badanieTrzezwosci: "",
      czynnosciWyjasniajace: "",
      opisCzynnosci: "",
    },
  });

  const renderPage = () => {
    switch (page) {
      case 1:
        return <Strona1 formData={formData} setFormData={setFormData} />;
      case 2:
        return <Strona2 formData={formData} setFormData={setFormData} />;
      case 3:
        return <Strona3 formData={formData} setFormData={setFormData} />;
      default:
        return <Strona1 formData={formData} setFormData={setFormData} />;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    // Add form submission logic here
  }

  return (
    <div className="flex flex-col items-center min-h-screen pt-16">    
      {/* GO BACK BUTTON */}
      <div className="absolute top-4 left-4">
        <Link href="/">
            <button type="button" className="px-2 py-1 bg-white cursor-pointer rounded-md hover:bg-gray-100">
              Powrót do panelu klienta
            </button>
        </Link>
      </div>
      {/* title */}
      <h1 className="text-4xl font-bold mb-4">Zapis Wyjaśnień</h1>
      {/* FORM */}
      <form onSubmit={handleSubmit} className="w-full max-w-2xl">
        {renderPage()}
        {/* BUTTONS: Cofnij (lewo), Dalej (prawo), Prześlij (prawo, tylko na ostatniej stronie) */}
        <div className="flex flex-row-reverse justify-between">
          {/* Dalej lub Prześlij po prawej */}
          {page === 3 ? (
            <button
              type="submit"
              className="px-4 py-1 bg-white rounded-md hover:bg-gray-100 mb-8 cursor-pointer"
            >
              Prześlij
            </button>
          ) : (
            <button
              type="submit"
              onClick={() => setPage((p) => Math.min(3, p + 1))}
              className="px-4 py-1 bg-white rounded-md hover:bg-gray-100 mb-8 cursor-pointer"
            >
              Dalej
            </button>
          )}
          {/* Cofnij po lewej, zawsze widoczny, ale nieaktywny na 1 stronie */}
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className={`px-4 py-1 bg-white rounded-md hover:bg-gray-100 mb-8 cursor-pointer ${page === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={page === 1}
          >
            Cofnij
          </button>
        </div>
      </form>
    </div>
  );
}
