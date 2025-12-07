"use client";
import Link from "next/link";
import Strona1 from "./Strona1";
import Strona2 from "./Strona2";
import SubmitButton from "../../SubmitButton";
import { useState } from "react";

export default function Opinia() {
  const [page, setPage] = useState(1);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    podstawowe: {
      znakSrawy: "",
      imieNazwiskoPoszkodowanego: "",
      kwestiaDoRozstrzygniecza: "",
    },
    zdarzenie: {
      dataZdarzenia: "",
      typyZdarzen: {
        czywiklychCzynnosci: false,
        czyWspolpraca: false,
        czyUmowaAktywizujaca: false,
        czyWDrodze: false,
        czyWDrozePozarolnicza: false,
        czyWDrozeWspolpraca: false,
        czyWDrozeUmowaAktywizujaca: false,
      },
    },
    opinia: {
      opiniaOUznaniu: "",
      uzasadnienie: "",
      dataOpracowania: "",
      pieczatkaOpracowania: "",
      podpisOpracowania: "",
    },
    zatwierdzenie: {
      opiniaUprawnionegoDoAproby: "",
      dataAproby: "",
      pieczatkaAproby: "",
      podpisAproby: "",
      uzasadnienieAproby: "",
      opiniaSuperaproby: "",
      dataSuperaproby: "",
      pieczatkaSuperaproby: "",
      podpisSuperaproby: "",
      opiniaKonsultanta: "",
      dataKonsultanta: "",
      pieczatkaKonsultanta: "",
      podpisKonsultanta: "",
      opiniaZcyDyrektora: "",
      dataZcyDyrektora: "",
      pieczatkaZcyDyrektora: "",
      podpisZcyDyrektora: "",
      decyzjaSuperaproby: "",
      dataDecyzja: "",
      pieczatkaDecyzja: "",
      podpisDecyzja: "",
    },
  });

  const validatePage1 = () => {
    const newErrors = {};

    if (!formData.podstawowe.imieNazwiskoPoszkodowanego.trim()) {
      newErrors.imieNazwiskoPoszkodowanego =
        "Imię i nazwisko poszkodowanego jest wymagane";
    }

    if (!formData.podstawowe.kwestiaDoRozstrzygniecza.trim()) {
      newErrors.kwestiaDoRozstrzygniecza =
        "Kwestia do rozstrzygnięcia jest wymagana";
    }

    if (!formData.zdarzenie.dataZdarzenia.trim()) {
      newErrors.dataZdarzenia = "Data zdarzenia jest wymagana";
    }

    const czyZaznaczonoTyp = Object.values(formData.zdarzenie.typyZdarzen).some(
      (val) => val === true
    );
    if (!czyZaznaczonoTyp) {
      newErrors.typyZdarzen =
        "Należy zaznaczyć przynajmniej jeden typ zdarzenia";
    }

    if (!formData.opinia.opiniaOUznaniu.trim()) {
      newErrors.opiniaOUznaniu = "Opinia o uznaniu jest wymagana";
    }

    if (!formData.opinia.uzasadnienie.trim()) {
      newErrors.uzasadnienie = "Uzasadnienie jest wymagane";
    }

    if (!formData.opinia.dataOpracowania.trim()) {
      newErrors.dataOpracowania = "Data opracowania jest wymagana";
    }

    if (!formData.opinia.pieczatkaOpracowania.trim()) {
      newErrors.pieczatkaOpracowania = "Pieczątka opracowania jest wymagana";
    }

    if (!formData.opinia.podpisOpracowania.trim()) {
      newErrors.podpisOpracowania = "Podpis opracowania jest wymagany";
    }

    return newErrors;
  };

  const validatePage2 = () => {
    const newErrors = {};

    if (!formData.zatwierdzenie.opiniaUprawnionegoDoAproby.trim()) {
      newErrors.opiniaUprawnionegoDoAproby =
        "Opinia uprawnionego do aproby jest wymagana";
    }

    if (!formData.zatwierdzenie.dataAproby.trim()) {
      newErrors.dataAproby = "Data aproby jest wymagana";
    }

    if (!formData.zatwierdzenie.pieczatkaAproby.trim()) {
      newErrors.pieczatkaAproby = "Pieczątka aproby jest wymagana";
    }

    if (!formData.zatwierdzenie.podpisAproby.trim()) {
      newErrors.podpisAproby = "Podpis aproby jest wymagany";
    }

    if (!formData.zatwierdzenie.uzasadnienieAproby.trim()) {
      newErrors.uzasadnienieAproby = "Uzasadnienie aproby jest wymagane";
    }

    return newErrors;
  };

  const handleNextPage = () => {
    const validationErrors = validatePage1();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setPage((p) => Math.min(2, p + 1));
    }
  };

  const handleSubmit = () => {
    const validationErrors = validatePage2();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return false; 
    }

    return true; 
  };

  const renderPage = () => {
    switch (page) {
      case 1:
        return (
          <Strona1
            formData={formData}
            setFormData={setFormData}
            errors={errors}
          />
        );
      case 2:
        return (
          <Strona2
            formData={formData}
            setFormData={setFormData}
            errors={errors}
          />
        );
      default:
        return (
          <Strona1
            formData={formData}
            setFormData={setFormData}
            errors={errors}
          />
        );
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen pt-16 m-4">
      <h1 className="text-4xl font-bold mb-4">Opinia w sprawie wypadku</h1>

      {renderPage()}

      <div className="absolute top-4 left-4">
        <Link href="/PracownikWniosek">
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
                onClick={handleNextPage}
                className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
              >
                Następna
              </button>
            )}
            {page === 2 && (
              <SubmitButton
                formData={formData}
                formType="Opinia"
                onValidate={handleSubmit}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
