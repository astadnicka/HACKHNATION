"use client";
import Link from "next/link";
import Strona1 from "./Strona1";
import Strona2 from "./Strona2";
import SubmitButton from "../../SubmitButton";
import { useState } from "react";

export default function KartaWypadku() {
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    podmiot: {
      nazwaAdres: "",
    },
    platnik: {
      imieNazwisko: "",
      adresSiedzby: "",
      nip: "",
      region: "",
      pesel: "",
      dokument: {
        rodzaj: "",
        seria: "",
        numer: "",
      },
    },
    poszkodowany: {
      imieNazwisko: "",
      pesel: "",
      dokument: {
        rodzaj: "",
        seria: "",
        numer: "",
      },
      dataMiejsceUrodzenia: "",
      adresZamieszkania: "",
      tytulUbezpieczenia: "",
    },
    wypadek: {
      dataZgloszenia: "",
      osobaZglaszajaca: "",
      informacje: "",
    },
    swiadkowie: {
      brak: false,
      imieNazwisko: "",
      miejsceZamieszkania: "",
    },
    status: {
      czyWypadek: null,
      uzasadnienie: "",
      naruszenie: false,
      powodyNaruszenia: "",
      badanoNietrz: false,
      uzasadnienieBadania: "",
    },
    pozostale: {
      zapoznanoImieNazwisko: "",
      zapoznanoData: "",
      zapoznanoPodpis: "",
      kartaSporządzona: "",
      zus: "",
      sporadzajacy: "",
      przeszkody: false,
      opisPrzeszkod: "",
      kartaOdebrana: "",
      podpisPrzyjmujacego: "",
      zalaczniki: {
        zawiadomienie: false,
        wyjasnienia: false,
        oswiadczenie: false,
        faktura: false,
        ceidg: false,
        ortopedia: false,
        badanie: false,
      },
    },
    podmiotPieczatka: {
      nazwaAdresPieczatka: "",
      adres: "",
    },
  });

  const renderPage = () => {
    switch (page) {
      case 1:
        return <Strona1 formData={formData} setFormData={setFormData} />;
      case 2:
        return <Strona2 formData={formData} setFormData={setFormData} />;
      default:
        return <Strona1 formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    
    <div className="flex flex-col items-center min-h-screen pt-16 m-4">
            <h1 className="text-4xl font-bold mb-4">Karta Wypadku</h1>

      {renderPage()}

      <div className="absolute top-4 left-4">
        
        <Link href="/">
          <button className="px-2 py-1 bg-[#00923f] cursor-pointer rounded-md hover:bg-[#007a33] transition-colors text-white">
            Wróć
          </button>
        </Link>
      </div>


      <div className="w-full max-w-2xl">
        <div className="flex justify-between mt-4 gap-4">
          {page === 2 && (
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
            >
              Cofnij
            </button>
          )}

          <div className="flex justify-end w-full gap-2">
            {page === 1 && (
              <button
                onClick={() => setPage((p) => Math.min(2, p + 1))}
                className="px-2 py-1  bg-gray-300 rounded-md hover:bg-gray-400"
              >
                Następna
              </button>
            )}
            {page === 2 && (
              <SubmitButton formData={formData} formType="KartaWypadku" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
