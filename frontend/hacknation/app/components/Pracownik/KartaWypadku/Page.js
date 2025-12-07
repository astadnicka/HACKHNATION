"use client";
import Link from "next/link";
import Strona1 from "./Strona1";
import Strona2 from "./Strona2";
import SubmitButton from "../../SubmitButton";
import { useState, useEffect } from "react";

export default function KartaWypadku() {
  const [page, setPage] = useState(1);
  const [errors, setErrors] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const defaultFormData = {
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
  };

  const [formData, setFormData] = useState(defaultFormData);

  // Wczytanie danych z localStorage przy montowaniu komponentu
  useEffect(() => {
    const savedData = localStorage.getItem("kartaWypadkuFormData");
    if (savedData) {
      try {
        setFormData(JSON.parse(savedData));
      } catch (e) {
        console.error("Błąd wczytywania danych z localStorage:", e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Zapisywanie danych do localStorage przy każdej zmianie
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("kartaWypadkuFormData", JSON.stringify(formData));
    }
  }, [formData, isLoaded]);

  const clearForm = () => {
    if (
      confirm(
        "Czy na pewno chcesz wyczyścić cały formularz? Wszystkie dane zostaną usunięte."
      )
    ) {
      setFormData(defaultFormData);
      localStorage.removeItem("kartaWypadkuFormData");
      setErrors({});
      setPage(1);
    }
  };

  const validatePage1 = () => {
    const newErrors = {};

    if (!formData.platnik.imieNazwisko.trim()) {
      newErrors.platnikImieNazwisko = "Pole jest wymagane";
    }

    if (!formData.platnik.adresSiedzby.trim()) {
      newErrors.platnikAdresSiedzby = "Pole jest wymagane";
    }

    if (!formData.platnik.nip.trim()) {
      newErrors.platnikNip = "NIP jest wymagany";
    } else if (!/^\d{10}$/.test(formData.platnik.nip)) {
      newErrors.platnikNip = "NIP musi mieć 10 cyfr";
    }

    if (!formData.platnik.region.trim()) {
      newErrors.platnikRegion = "Region jest wymagany";
    }

    if (!formData.platnik.pesel.trim()) {
      newErrors.platnikPesel = "PESEL jest wymagany";
    } else if (!/^\d{11}$/.test(formData.platnik.pesel)) {
      newErrors.platnikPesel = "PESEL musi mieć 11 cyfr";
    }

    if (!formData.platnik.dokument.rodzaj.trim()) {
      newErrors.platnikDokumentRodzaj = "Rodzaj dokumentu jest wymagany";
    }

    if (!formData.platnik.dokument.seria.trim()) {
      newErrors.platnikDokumentSeria = "Seria dokumentu jest wymagana";
    }

    if (!formData.platnik.dokument.numer.trim()) {
      newErrors.platnikDokumentNumer = "Numer dokumentu jest wymagany";
    }

    if (!formData.poszkodowany.imieNazwisko.trim()) {
      newErrors.poszkodowanyImieNazwisko = "Pole jest wymagane";
    }

    if (!formData.poszkodowany.pesel.trim()) {
      newErrors.poszkodowanyPesel = "PESEL jest wymagany";
    } else if (!/^\d{11}$/.test(formData.poszkodowany.pesel)) {
      newErrors.poszkodowanyPesel = "PESEL musi mieć 11 cyfr";
    }

    if (!formData.poszkodowany.dokument.rodzaj.trim()) {
      newErrors.poszkodowanyDokumentRodzaj = "Rodzaj dokumentu jest wymagany";
    }

    if (!formData.poszkodowany.dokument.seria.trim()) {
      newErrors.poszkodowanyDokumentSeria = "Seria dokumentu jest wymagana";
    }

    if (!formData.poszkodowany.dokument.numer.trim()) {
      newErrors.poszkodowanyDokumentNumer = "Numer dokumentu jest wymagany";
    }

    if (!formData.poszkodowany.dataMiejsceUrodzenia.trim()) {
      newErrors.poszkodowanyDataMiejsceUrodzenia =
        "Data i miejsce urodzenia są wymagane";
    }

    if (!formData.poszkodowany.adresZamieszkania.trim()) {
      newErrors.poszkodowanyAdresZamieszkania =
        "Adres zamieszkania jest wymagany";
    }

    if (!formData.poszkodowany.tytulUbezpieczenia.trim()) {
      newErrors.poszkodowanyTytulUbezpieczenia =
        "Tytuł ubezpieczenia jest wymagany";
    }

    if (!formData.wypadek.dataZgloszenia.trim()) {
      newErrors.dataZgloszenia = "Data zgłoszenia jest wymagana";
    }

    if (!formData.wypadek.informacje.trim()) {
      newErrors.wypadekInformacje = "Informacje o wypadku są wymagane";
    }

    return newErrors;
  };

  const validatePage2 = () => {
    const newErrors = {};

    if (!formData.swiadkowie.brak) {
      if (!formData.swiadkowie.imieNazwisko.trim()) {
        newErrors.swiadkowieImieNazwisko =
          "Imię i nazwisko świadka jest wymagane (lub zaznacz 'Brak świadków')";
      }
      if (!formData.swiadkowie.miejsceZamieszkania.trim()) {
        newErrors.swiadkowieMiejsceZamieszkania =
          "Miejsce zamieszkania świadka jest wymagane (lub zaznacz 'Brak świadków')";
      }
    }

    if (
      !formData.status.naruszenie &&
      !formData.status.powodyNaruszenia.trim()
    ) {
      newErrors.powodyNaruszenia =
        "Podaj powody naruszenia (lub zaznacz 'Nie stwierdzono')";
    }

    if (
      !formData.status.badanoNietrz &&
      !formData.status.uzasadnienieBadania.trim()
    ) {
      newErrors.uzasadnienieBadania =
        "Podaj uzasadnienie (lub zaznacz 'Nie badano')";
    }

    if (
      !formData.pozostale.przeszkody &&
      !formData.pozostale.opisPrzeszkod.trim()
    ) {
      newErrors.opisPrzeszkod = "Podaj opis przeszkód (lub zaznacz 'Brak')";
    }

    if (formData.status.czyWypadek === null) {
      newErrors.czyWypadek = "Należy określić czy to był wypadek";
    }

    if (
      formData.status.czyWypadek === false &&
      !formData.status.uzasadnienie.trim()
    ) {
      newErrors.statusUzasadnienie =
        "Uzasadnienie jest wymagane gdy zdarzenie nie jest wypadkiem";
    }

    if (!formData.pozostale.zapoznanoImieNazwisko.trim()) {
      newErrors.zapoznanoImieNazwisko =
        "Imię i nazwisko poszkodowanego jest wymagane";
    }

    if (!formData.pozostale.zapoznanoData.trim()) {
      newErrors.zapoznanoData = "Data zapoznania jest wymagana";
    }

    if (!formData.pozostale.zapoznanoPodpis.trim()) {
      newErrors.zapoznanoPodpis = "Podpis jest wymagany";
    }

    if (!formData.pozostale.kartaSporządzona.trim()) {
      newErrors.kartaSporządzona = "Data sporządzenia karty jest wymagana";
    }

    if (!formData.pozostale.zus.trim()) {
      newErrors.zus = "Nazwa podmiotu (pieczątka ZUS) jest wymagana";
    }

    if (!formData.pozostale.sporadzajacy.trim()) {
      newErrors.sporadzajacy = "Osoba sporządzająca jest wymagana";
    }

    if (!formData.pozostale.kartaOdebrana.trim()) {
      newErrors.kartaOdebrana = "Data odbioru karty jest wymagana";
    }

    if (!formData.pozostale.podpisPrzyjmujacego.trim()) {
      newErrors.podpisPrzyjmujacego = "Podpis uprawnionego jest wymagany";
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
      <h1 className="text-4xl font-bold mb-4">Karta Wypadku</h1>

      {renderPage()}

      <div className="absolute top-4 left-4">
        <Link href="/">
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
                className="px-2 py-1  bg-gray-300 rounded-md hover:bg-gray-400"
              >
                Następna
              </button>
            )}
            {page === 2 && (
              <SubmitButton
                formData={formData}
                formType="KartaWypadku"
                onValidate={handleSubmit}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
