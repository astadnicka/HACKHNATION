'use client'

import Link from "next/link";
import Strona1 from "@/app/components/klient/wnioski/zawiadomienie/strona1";
import Strona2 from "@/app/components/klient/wnioski/zawiadomienie/strona2";
import Strona3 from "@/app/components/klient/wnioski/zawiadomienie/strona3";
import Strona4 from "@/app/components/klient/wnioski/zawiadomienie/strona4";
import Strona5 from "@/app/components/klient/wnioski/zawiadomienie/strona5";
import Strona6 from "@/app/components/klient/wnioski/zawiadomienie/strona6";

import { useState } from 'react';

export default function Zawiadomienie() {
  const [page, setPage] = useState(1);

  const [formData, setFormData] = useState({
    poszkodowany: {
      pesel: "",
      dokument: {
        rodzaj: "",
        seria: "",
        numer: "",
      },
      imie: "",
      nazwisko: "",
      dataUrodzenia: "",
      plec: "",
      adresZamieszkania: {
        ulica: "",
        numerDomu: "",
        numerLokalu: "",
        kodPocztowy: "",
        miejscowosc: "",
        gmina: "",
        panstwo: "",
      },
      adresKorespondencji: {
        ulica: "",
        numerDomu: "",
        numerLokalu: "",
        kodPocztowy: "",
        miejscowosc: "",
        gmina: "",
        panstwo: "",
      },
    },
    zawiadamiajacy: {
      pesel: "",
      dokument: {
        rodzaj: "",
        seria: "",
        numer: "",
      },
      imie: "",
      nazwisko: "",
      dzienUrodzenia: "",
      miesiacUrodzenia: "",
      rokUrodzenia: "",
      plec: "",
      adresZamieszkania: {
        ulica: "",
        numerDomu: "",
        numerLokalu: "",
        kodPocztowy: "",
        miejscowosc: "",
        gmina: "",
        panstwo: "",
      },
    },
    miejscaDzialalnosci: {
      ulica: "",
      numerDomu: "",
      numerLokalu: "",
      kodPocztowy: "",
      miejscowosc: "",
      gmina: "",
      numerTelefonu: "",
    },
    opieka: {
      ulica: "",
      numerDomu: "",
      numerLokalu: "",
      kodPocztowy: "",
      miejscowosc: "",
    },
    korespondencja: {
      ulica: "",
      numerDomu: "",
      numerLokalu: "",
      kodPocztowy: "",
      miejscowosc: "",
      gmina: "",
      panstwo: "",
    },
    wypadek: {
      dataWypadku: "",
      godzinaWypadku: "",
      miejsceWypadku: "",
      godzinaPoczatkuPracy: "",
      godzinaKoncaPracy: "",
      rodzajUrazow: "",
      opisOkolicznosci: "",
      pierwszaPomoc: null,
      opisPierwszejPomocy: "",
    },
    organy: {
      organPostepowanie: "",
      maszynaWypadek: null,
      opisMaszyny: "",
      atest: null,
      ewidencjaSrodkowTrwalych: null,
    },
    swiadkowie: {
      swiadek1: {
        imie: "",
        nazwisko: "",
        numerDomu: "",
        numerLokalu: "",
        kodPocztowy: "",
        miejscowosc: "",
        gmina: "",
        panstwo: "",
      },
      swiadek2: {
        imie: "",
        nazwisko: "",
        numerDomu: "",
        numerLokalu: "",
        kodPocztowy: "",
        miejscowosc: "",
        gmina: "",
        panstwo: "",
      },
      swiadek3: {
        imie: "",
        nazwisko: "",
        numerDomu: "",
        numerLokalu: "",
        kodPocztowy: "",
        miejscowosc: "",
        gmina: "",
        panstwo: "",
      },
    },
    zalaczniki: {
      kartaInformacyjna: false,
      postanowienieProkuratury: false,
      aktZgonu: false,
      dokumentyPrawo: false,
      inneDokumenty: false,
      opisInnychDokumentow: "",
      dataDostarczenia: "",
      dokumenty: ["", "", "", "", "", "", "", ""],
      odbiorPlacowka: false,
      odbiorPoczta: false,
      odbiorPUE: false,
      dataPodpisu: "",
      podpis: "",
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
      case 4:
        return <Strona4 formData={formData} setFormData={setFormData} />;
      case 5:
        return <Strona5 formData={formData} setFormData={setFormData} />;
      case 6:
        return <Strona6 formData={formData} setFormData={setFormData} />;
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
      <h1 className="text-4xl font-bold mb-4">Zawiadomienie o Wypadku</h1>
      {/* FORM */}
      <form onSubmit={handleSubmit} className="w-full max-w-2xl">
        {renderPage()}
        {/* BUTTONS: Cofnij (lewo), Dalej (prawo), Prześlij (prawo, tylko na ostatniej stronie) */}
        <div className="flex flex-row-reverse justify-between">
          {/* Dalej lub Prześlij po prawej */}
          {page === 6 ? (
            <button
              type="submit"
              className="px-4 py-1 bg-white rounded-md hover:bg-gray-100 mb-8 cursor-pointer"
            >
              Prześlij
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setPage((p) => Math.min(6, p + 1))}
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
