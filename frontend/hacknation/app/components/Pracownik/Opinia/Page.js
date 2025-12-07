"use client";
import Link from "next/link";
import Strona1 from "./Strona1";
import Strona2 from "./Strona2";
import SubmitButton from "../../SubmitButton";
import { useState, useEffect } from "react";

export default function Opinia() {
  const [page, setPage] = useState(1);
  const [errors, setErrors] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const defaultFormData = {
    podstawowe: {
      znakSprawy: "",
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
  };

  const [formData, setFormData] = useState(defaultFormData);

  useEffect(() => {
    const savedData = localStorage.getItem("opiniaFormData");
    if (savedData) {
      try {
        setFormData(JSON.parse(savedData));
      } catch (e) {
        console.error("Błąd wczytywania danych z localStorage:", e);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("opiniaFormData", JSON.stringify(formData));
    }
  }, [formData, isLoaded]);

  const clearForm = () => {
    if (
      confirm(
        "Czy na pewno chcesz wyczyścić cały formularz? Wszystkie dane zostaną usunięte."
      )
    ) {
      setFormData(defaultFormData);
      localStorage.removeItem("opiniaFormData");
      setErrors({});
      setPage(1);
      setSelectedFiles([]);
    }
  };

  const handleFileSelect = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "application/pdf";
    input.multiple = true;

    input.onchange = (e) => {
      const files = Array.from(e.target.files);
      setSelectedFiles((prev) => [...prev, ...files]);
    };

    input.click();
  };

  const removeFile = (index) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAskAssistant = () => {
    if (selectedFiles.length === 0) {
      alert("Proszę najpierw dodać pliki PDF");
      return;
    }

    // Tutaj będzie logika wysyłania do backendu
    console.log("Wysyłanie plików do asystenta:", selectedFiles);
    alert(`Wysłano ${selectedFiles.length} plik(ów) do asystenta AI`);
  };

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
    <div className="flex flex-col items-center min-h-screen pt-16 m-6 relative">
      {/* Główny formularz wycentrowany */}
      <div className="flex flex-col items-center w-full max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Opinia w sprawie wypadku</h1>

        {renderPage()}

        <div className="absolute top-4 left-4">
          <Link href="/PracownikWniosek">
            <button className="px-2 py-1 bg-[#00923f] cursor-pointer rounded-md hover:bg-[#007a33] transition-colors text-white">
              Wróć
            </button>
          </Link>
        </div>

        <div className="absolute top-4 right-4">
          <button
            onClick={clearForm}
            className="px-2 py-1 bg-red-600 cursor-pointer rounded-md hover:bg-red-700 transition-colors text-white"
          >
            Wyczyść formularz
          </button>
        </div>

        <div className="w-full">
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

      {/* Panel asystenta AI - stały po prawej stronie */}
      <div className="fixed right-6 top-24 w-80 max-h-[calc(100vh-8rem)] overflow-y-auto">
        <div className="p-5 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border-2 border-purple-200 shadow-lg">
          <h2 className="text-lg font-bold mb-3 text-purple-900 flex items-center gap-2">
            Asystent AI
          </h2>

          <p className="text-xs text-gray-700 mb-3">
            Prześlij dokumenty PDF, a asystent pomoże przygotować opinię
          </p>

          {/* Lista wybranych plików */}
          {selectedFiles.length > 0 && (
            <div className="mb-3 space-y-1.5">
              <p className="text-xs font-semibold text-gray-700">
                Pliki ({selectedFiles.length}):
              </p>
              <div className="max-h-48 overflow-y-auto space-y-1.5">
                {selectedFiles.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-white p-1.5 rounded border text-xs"
                  >
                    <span className="truncate flex-1 text-xs">{file.name}</span>
                    <button
                      onClick={() => removeFile(index)}
                      className="ml-2 px-1.5 py-0.5 bg-red-500 text-white rounded hover:bg-red-600 text-xs"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col gap-2">
            <button
              onClick={handleFileSelect}
              className="w-full px-3 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md text-xs"
            >
             Dodaj pliki PDF
            </button>

            <button
              onClick={handleAskAssistant}
              disabled={selectedFiles.length === 0}
              className="w-full px-3 py-2.5 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors shadow-md disabled:bg-gray-400  text-xs"
            >
             Poproś o opinię
            </button>
          </div>

          {selectedFiles.length === 0 && (
            <p className="text-xs text-gray-500 mt-3 text-center italic">
              Dodaj pliki aby aktywować asystenta
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
