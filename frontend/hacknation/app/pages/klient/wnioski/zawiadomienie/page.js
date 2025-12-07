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
      imie: "",
      nazwisko: "",
      dataUrodzenia: "",
      plec: "",
      dokument: {
        rodzaj: "",
        seria: "",
        numer: "",
      },
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
      gmina: "",
    },
    zawiadamiajacy: {
      pesel: "",
      imie: "",
      nazwisko: "",
      dzienUrodzenia: "",
      miesiacUrodzenia: "",
      rokUrodzenia: "",
      plec: "",
      dokument: {
        rodzaj: "",
        seria: "",
        numer: "",
      },
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
    organy: {
      organPostepowanie: "",
      maszynaWypadek: null,
      opisMaszyny: "",
      atest: null,
      ewidencjaSrodkowTrwalych: null,
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
      dokumenty: Array(8).fill(""),
      inne: "",
      dataDostarczenia: "",
      sposobOdbioru: "",
      kartaInformacyjna: false,
      postanowienieProkuratury: false,
      aktZgonu: false,
      odbiorPlacowka: false,
      odbiorPoczta: false,
      odbiorPUE: false,
      dataPodpisu: "",
      podpis: "",
    },
  });

  const alertContent = {
    poszkodowanyPesel: {
      title: 'Numer PESEL',
      body: 'Podaj PESEL poszkodowanego lub dokument potwierdzający tożsamość.',
      changed: true
    },
    poszkodowanyDokument: {
      title: 'Dokument tożsamości',
      body: 'Uzupełnij serię i numer dokumentu.',
      changed: true
    },
    miejscaPracy: {
      title: 'Miejsce pracy',
      body: 'Podaj nazwę, adres i rodzaj prowadzonej działalności.',
      changed: true
    },
    pracownikOpieka: {
      title: 'Osoba opiekująca się',
      body: 'Uzupełnij dane pracownika odpowiedzialnego za opiekę.',
      changed: true
    },
    zawiadamiajacy: {
      title: 'Zawiadamiający',
      body: 'Podaj dane osoby zawiadamiającej o wypadku.',
      changed: true
    },
  };

  const alertContentPage2 = {
    organPostepowanie: {
      title: 'Organ prowadzący postępowanie',
      body: 'Wpisz nazwę i adres organu prowadzącego postępowanie w sprawie wypadku.',
      changed: true
    },
    maszyny: {
      title: 'Obsługa maszyn',
      body: 'Wskaż czy wypadek powstał podczas obsługi urządzenia i opisz stan maszyny.',
      changed: true
    },
    atest: {
      title: 'Atest maszyny',
      body: 'Wskaż czy maszyna posiada atest/deklarację zgodności.',
      changed: true
    },
  };

  const alertContentPage3 = {
    korespondencja: {
      title: 'Adres korespondencji',
      body: 'Uzupełnij pełny adres do korespondencji.',
      changed: true
    },
    wypadek: {
      title: 'Dane wypadku',
      body: 'Podaj datę, godzinę, miejsce wypadku oraz godziny pracy.',
      changed: true
    },
    uraz: {
      title: 'Uraz i obrażenia',
      body: 'Opisz rodzaj urazów i okoliczności wypadku.',
      changed: true
    },
  };

  const alertContentPage4 = {
    organPostepowanie: {
      title: 'Organ prowadzący postępowanie',
      body: 'Wpisz nazwę i adres organu prowadzącego postępowanie.',
      changed: true
    },
    maszyny: {
      title: 'Obsługa maszyn',
      body: 'Wskaż czy wypadek powstał podczas obsługi urządzenia.',
      changed: true
    },
  };

  const alertContentPage5 = {
    swiadek1: {
      title: 'Świadek 1',
      body: 'Uzupełnij dane pierwszego świadka wypadku.',
      changed: true
    },
    swiadek2: {
      title: 'Świadek 2',
      body: 'Uzupełnij dane drugiego świadka wypadku.',
      changed: true
    },
  };

  const alertContentPage6 = {
    zalaczniki: {
      title: 'Załączniki',
      body: 'Podaj listę dokumentów dołączanych do zawiadomienia.',
      changed: true
    },
    sposObOdbioru: {
      title: 'Sposób odbioru odpowiedzi',
      body: 'Wskaż preferowany sposób odbioru odpowiedzi.',
      changed: true
    },
  };

  const validatePage1 = () => {
    const { poszkodowany } = formData;
    const errors = [];

    // Dane poszkodowanego
    if (!poszkodowany.pesel?.trim()) errors.push('Podaj PESEL poszkodowanego');
    if (!poszkodowany.dokument.rodzaj?.trim()) errors.push('Podaj rodzaj dokumentu tożsamości');
    if (!poszkodowany.dokument.seria?.trim()) errors.push('Podaj serię dokumentu');
    if (!poszkodowany.dokument.numer?.trim()) errors.push('Podaj numer dokumentu');
    if (!poszkodowany.imie?.trim()) errors.push('Podaj imię poszkodowanego');
    if (!poszkodowany.nazwisko?.trim()) errors.push('Podaj nazwisko poszkodowanego');
    if (!poszkodowany.dataUrodzenia?.trim()) errors.push('Podaj datę urodzenia');
    if (!poszkodowany.plec?.trim()) errors.push('Wybierz płeć');
    
    // Adres zamieszkania
    if (!poszkodowany.adresZamieszkania.ulica?.trim()) errors.push('Podaj ulicę zamieszkania');
    if (!poszkodowany.adresZamieszkania.numerDomu?.trim()) errors.push('Podaj numer domu');
    if (!poszkodowany.adresZamieszkania.kodPocztowy?.trim()) errors.push('Podaj kod pocztowy');
    if (!poszkodowany.adresZamieszkania.miejscowosc?.trim()) errors.push('Podaj miejscowość zamieszkania');
    if (!poszkodowany.adresZamieszkania.gmina?.trim()) errors.push('Podaj gminę');
    
    // Adres korespondencji
    if (!poszkodowany.adresKorespondencji.ulica?.trim()) errors.push('Podaj ulicę do korespondencji');
    if (!poszkodowany.adresKorespondencji.numerDomu?.trim()) errors.push('Podaj numer domu do korespondencji');
    if (!poszkodowany.adresKorespondencji.kodPocztowy?.trim()) errors.push('Podaj kod pocztowy do korespondencji');
    if (!poszkodowany.adresKorespondencji.miejscowosc?.trim()) errors.push('Podaj miejscowość do korespondencji');
    if (!poszkodowany.adresKorespondencji.gmina?.trim()) errors.push('Podaj gminę do korespondencji');
    
    // Miejsce pracy

    return errors;
  };

  const validatePage2 = () => {
    const { miejscaDzialalnosci, opieka } = formData;
    const errors = [];

if (!miejscaDzialalnosci.ulica?.trim()) errors.push('Podaj ulicę miejsca pracy');
    if (!miejscaDzialalnosci.numerDomu?.trim()) errors.push('Podaj numer domu miejsca pracy');
    if (!miejscaDzialalnosci.kodPocztowy?.trim()) errors.push('Podaj kod pocztowy miejsca pracy');
    if (!miejscaDzialalnosci.miejscowosc?.trim()) errors.push('Podaj miejscowość pracy');
    if (!miejscaDzialalnosci.gmina?.trim()) errors.push('Podaj gminę pracy');
    if (!miejscaDzialalnosci.numerTelefonu?.trim()) errors.push('Podaj numer telefonu miejsca pracy');
    
    // Opieka
    if (!opieka.ulica?.trim()) errors.push('Podaj ulicę opieki');
    if (!opieka.numerDomu?.trim()) errors.push('Podaj numer domu opieki');
    if (!opieka.kodPocztowy?.trim()) errors.push('Podaj kod pocztowy opieki');
    if (!opieka.miejscowosc?.trim()) errors.push('Podaj miejscowość opieki');
    if (!opieka.gmina?.trim()) errors.push('Podaj gminę opieki');

    return errors;
  };

  const validatePage3 = () => {
    
    const { zawiadamiajacy } = formData;
    const errors = [];

    
    // Zawiadamiający
    if (!zawiadamiajacy.pesel?.trim()) errors.push('Podaj PESEL zawiadamiającego');
    if (!zawiadamiajacy.dokument.rodzaj?.trim()) errors.push('Podaj rodzaj dokumentu zawiadamiającego');
    if (!zawiadamiajacy.dokument.seria?.trim()) errors.push('Podaj serię dokumentu zawiadamiającego');
    if (!zawiadamiajacy.dokument.numer?.trim()) errors.push('Podaj numer dokumentu zawiadamiającego');
    if (!zawiadamiajacy.imie?.trim()) errors.push('Podaj imię zawiadamiającego');
    if (!zawiadamiajacy.nazwisko?.trim()) errors.push('Podaj nazwisko zawiadamiającego');
    if (!zawiadamiajacy.dzienUrodzenia?.trim()) errors.push('Podaj dzień urodzenia zawiadamiającego');
    if (!zawiadamiajacy.miesiacUrodzenia?.trim()) errors.push('Podaj miesiąc urodzenia zawiadamiającego');
    if (!zawiadamiajacy.rokUrodzenia?.trim()) errors.push('Podaj rok urodzenia zawiadamiającego');
    if (!zawiadamiajacy.plec?.trim()) errors.push('Wybierz płeć zawiadamiającego');
    if (!zawiadamiajacy.adresZamieszkania.ulica?.trim()) errors.push('Podaj ulicę zawiadamiającego');
    if (!zawiadamiajacy.adresZamieszkania.numerDomu?.trim()) errors.push('Podaj numer domu zawiadamiającego');
    if (!zawiadamiajacy.adresZamieszkania.kodPocztowy?.trim()) errors.push('Podaj kod pocztowy zawiadamiającego');
    if (!zawiadamiajacy.adresZamieszkania.miejscowosc?.trim()) errors.push('Podaj miejscowość zawiadamiającego');
    if (!zawiadamiajacy.adresZamieszkania.gmina?.trim()) errors.push('Podaj gminę zawiadamiającego');
    
    // Organy   

    // Strona 3 uses local state, validation can be added when migrating to formData
    return errors;
  };

  const validatePage4 = () => {
    const { organy } = formData;
    const errors = [];

    if (!organy.organPostepowanie?.trim()) errors.push('Podaj nazwę organu prowadzącego postępowanie');
    if (organy.maszynaWypadek === null) errors.push('Zaznacz czy wypadek powstał podczas obsługi maszyn lub urządzeń');

    // Strona 4 uses local state, validation can be added when migrating to formData
    return errors;
  };

  const validatePage5 = () => {
    const errors = [];
    
    return errors;
  };

  const validatePage6 = () => {
    const errors = [];  


    return errors;
  }

  const handleNextPage = () => {
    let errors = [];
    if (page === 1) errors = validatePage1();
    else if (page === 2) errors = validatePage2();
    else if (page === 3) errors = validatePage3();
    else if (page === 4) errors = validatePage4();
    else if (page === 5) errors = validatePage5();
    else if (page === 6) errors = validatePage6();

    if (errors.length > 0) {
      alert('Proszę uzupełnić następujące pola:\n\n' + errors.join('\n'));
      return;
    }

    setPage((p) => Math.min(6, p + 1));
  };

  const renderPage = () => {
    switch (page) {
      case 1:
        return <Strona1 formData={formData} setFormData={setFormData} alertContent={alertContent} />;
      case 2:
        return <Strona2 formData={formData} setFormData={setFormData} alertContent={alertContentPage2} />;
      case 3:
        return <Strona3 formData={formData} setFormData={setFormData} alertContent={alertContentPage3} />;
      case 4:
        return <Strona4 formData={formData} setFormData={setFormData} alertContent={alertContentPage4} />;
      case 5:
        return <Strona5 formData={formData} setFormData={setFormData} alertContent={alertContentPage5} />;
      case 6:
        return <Strona6 formData={formData} setFormData={setFormData} alertContent={alertContentPage6} />;
      default:
        return <Strona1 formData={formData} setFormData={setFormData} alertContent={alertContent} />;
    }
  }

  const handleSubmit = () => {
    // Validate all pages before submission
    let errors = [];
    errors = errors.concat(validatePage1());
    errors = errors.concat(validatePage2());
    errors = errors.concat(validatePage3());
    errors = errors.concat(validatePage4());
    errors = errors.concat(validatePage5());

    if (errors.length > 0) {
      alert('Proszę uzupełnić następujące pola:\n\n' + errors.join('\n'));
      return;
    }

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
      <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-2xl">
        {renderPage()}
        {/* BUTTONS: Cofnij (lewo), Dalej (prawo), Prześlij (prawo, tylko na ostatniej stronie) */}
        <div className="flex flex-row-reverse justify-between">
          {/* Dalej lub Prześlij po prawej */}
          {page === 6 ? (
            <button
              type="button"
              onClick={handleSubmit}
              className="px-4 py-1 bg-white rounded-md hover:bg-gray-100 mb-8 cursor-pointer"
            >
              Prześlij
            </button>
          ) : (
            <button
              type="button"
              onClick={handleNextPage}
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
