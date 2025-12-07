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
  const [isLoading, setIsLoading] = useState(false);

  function handleDownload() {
    setIsLoading(true);
    fetch('/zawiadomienie', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => {
      if (!response.ok) throw new Error('Failed to download PDF');
      return response.blob();
    })
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'ZUS_EWYP_wypelniony.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      setIsLoading(false);
    })
    .catch(error => {
      console.error('Error downloading PDF:', error);
      alert('Błąd przy pobieraniu PDF');
      setIsLoading(false);
    });
  }

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
      changed: false
    },
    poszkodowanyDokument: {
      title: 'Dokument tożsamości',
      body: 'Uzupełnij serię i numer dokumentu.',
      changed: false
    },
    miejscaPracy: {
      title: 'Miejsce pracy',
      body: 'Podaj nazwę, adres i rodzaj prowadzonej działalności.',
      changed: false
    },
    pracownikOpieka: {
      title: 'Osoba opiekująca się',
      body: 'Uzupełnij dane pracownika odpowiedzialnego za opiekę.',
      changed: false
    },
    zawiadamiajacy: {
      title: 'Zawiadamiający',
      body: 'Podaj dane osoby zawiadamiającej o wypadku.',
      changed: false
    },
  };

  const alertContentPage2 = {
    organPostepowanie: {
      title: 'Organ prowadzący postępowanie',
      body: 'Wpisz nazwę i adres organu prowadzącego postępowanie w sprawie wypadku.',
      changed: false
    },
    maszyny: {
      title: 'Obsługa maszyn',
      body: 'Wskaż czy wypadek powstał podczas obsługi urządzenia i opisz stan maszyny.',
      changed: false
    },
    atest: {
      title: 'Atest maszyny',
      body: 'Wskaż czy maszyna posiada atest/deklarację zgodności.',
      changed: false
    },
  };

  const alertContentPage3 = {
    korespondencja: {
      title: 'Adres korespondencji',
      body: 'Uzupełnij pełny adres do korespondencji.',
      changed: false
    },
    wypadek: {
      title: 'Dane wypadku',
      body: 'Podaj datę, godzinę, miejsce wypadku oraz godziny pracy.',
      changed: false
    },
    uraz: {
      title: 'Uraz i obrażenia',
      body: 'Opisz rodzaj urazów i okoliczności wypadku.',
      changed: false
    },
  };

  const alertContentPage4 = {
    organPostepowanie: {
      title: 'Organ prowadzący postępowanie',
      body: 'Wpisz nazwę i adres organu prowadzącego postępowanie.',
      changed: false
    },
    maszyny: {
      title: 'Obsługa maszyn',
      body: 'Wskaż czy wypadek powstał podczas obsługi urządzenia.',
      changed: false
    },
  };

  const alertContentPage5 = {
    swiadek1: {
      title: 'Świadek 1',
      body: 'Uzupełnij dane pierwszego świadka wypadku.',
      changed: false
    },
    swiadek2: {
      title: 'Świadek 2',
      body: 'Uzupełnij dane drugiego świadka wypadku.',
      changed: false
    },
  };

  const alertContentPage6 = {
    zalaczniki: {
      title: 'Załączniki',
      body: 'Podaj listę dokumentów dołączanych do zawiadomienia.',
      changed: false
    },
    sposObOdbioru: {
      title: 'Sposób odbioru odpowiedzi',
      body: 'Wskaż preferowany sposób odbioru odpowiedzi.',
      changed: false
    },
  };

  const validatePage1 = () => {
    const { poszkodowany } = formData;
    const errors = [];

    // Dane poszkodowanego - PESEL lub dokument (przynajmniej jeden)
    const hasPesel = poszkodowany.pesel?.trim();
    const hasDocumentData = poszkodowany.dokument.rodzaj?.trim() && 
                            poszkodowany.dokument.seria?.trim() && 
                            poszkodowany.dokument.numer?.trim();
    
    if (!hasPesel && !hasDocumentData) {
      errors.push('Podaj PESEL poszkodowanego lub dokument potwierdzający tożsamość (rodzaj, seria, numer)');
    }
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
  
    
    // Sprawdzenie czy adresy się różnią
    const addressesAreIdentical = 
      poszkodowany.adresZamieszkania.ulica === poszkodowany.adresKorespondencji.ulica &&
      poszkodowany.adresZamieszkania.numerDomu === poszkodowany.adresKorespondencji.numerDomu &&
      poszkodowany.adresZamieszkania.numerLokalu === poszkodowany.adresKorespondencji.numerLokalu &&
      poszkodowany.adresZamieszkania.kodPocztowy === poszkodowany.adresKorespondencji.kodPocztowy &&
      poszkodowany.adresZamieszkania.miejscowosc === poszkodowany.adresKorespondencji.miejscowosc &&
      poszkodowany.adresZamieszkania.gmina === poszkodowany.adresKorespondencji.gmina &&
      poszkodowany.adresZamieszkania.panstwo === poszkodowany.adresKorespondencji.panstwo;
    
    if (addressesAreIdentical) {
      errors.push('Adres zamieszkania i adres do korespondencji powinny być różne');
    }
    
    // Miejsce pracy

    return errors;
  };

  const validatePage2 = () => {
    const { zawiadamiajacy } = formData;
    const errors = [];

    const hasPesel = zawiadamiajacy.pesel?.trim();
    const hasDocumentData = zawiadamiajacy.dokument.rodzaj?.trim() && 
                            zawiadamiajacy.dokument.seria?.trim() && 
                            zawiadamiajacy.dokument.numer?.trim();
    if (!hasPesel && !hasDocumentData) {
      errors.push('Podaj PESEL poszkodowanego lub dokument potwierdzający tożsamość (rodzaj, seria, numer)');
    }

    if (!zawiadamiajacy.imie?.trim()) errors.push('Podaj imię zawiadamiającego');
    if (!zawiadamiajacy.nazwisko?.trim()) errors.push('Podaj nazwisko zawiadamiającego');
    if (!zawiadamiajacy.dataUrodzenia?.trim()) errors.push('Podaj datę urodzenia zawiadamiającego');
    if (!zawiadamiajacy.plec?.trim()) errors.push('Wybierz płeć zawiadamiającego');

    if (!zawiadamiajacy.adresZamieszkania.ulica?.trim()) errors.push('Podaj ulicę zawiadamiającego');
    if (!zawiadamiajacy.adresZamieszkania.numerDomu?.trim()) errors.push('Podaj numer domu zawiadamiającego');
    if (!zawiadamiajacy.adresZamieszkania.kodPocztowy?.trim()) errors.push('Podaj kod pocztowy zawiadamiającego');
    if (!zawiadamiajacy.adresZamieszkania.miejscowosc?.trim()) errors.push('Podaj miejscowość zawiadamiającego');
    if (!zawiadamiajacy.adresZamieszkania.gmina?.trim()) errors.push('Podaj gminę zawiadamiającego');

    return errors;
  };

  const validatePage3 = () => {
    
    const { zawiadamiajacy } = formData;
    
    const errors = [];
    const addressesAreIdentical = 
      zawiadamiajacy.adresZamieszkania.ulica === zawiadamiajacy.adresKorespondencji.ulica &&
      zawiadamiajacy.adresZamieszkania.numerDomu === zawiadamiajacy.adresKorespondencji.numerDomu &&
      zawiadamiajacy.adresZamieszkania.numerLokalu === zawiadamiajacy.adresKorespondencji.numerLokalu &&
      zawiadamiajacy.adresZamieszkania.kodPocztowy === zawiadamiajacy.adresKorespondencji.kodPocztowy &&
      zawiadamiajacy.adresZamieszkania.miejscowosc === zawiadamiajacy.adresKorespondencji.miejscowosc &&
      zawiadamiajacy.adresZamieszkania.gmina === zawiadamiajacy.adresKorespondencji.gmina &&
      zawiadamiajacy.adresZamieszkania.panstwo === zawiadamiajacy.adresKorespondencji.panstwo;
    
    if (addressesAreIdentical) {
      errors.push('Adres zamieszkania i adres do korespondencji powinny być różne');
    }
    
    // Zawiadamiający
  if (!zawiadamiajacy.pesel?.trim()) {
    if (!zawiadamiajacy.dokument.rodzaj?.trim() || !zawiadamiajacy.dokument.seria?.trim() || !zawiadamiajacy.dokument.numer?.trim()) {
      errors.push('Podaj PESEL lub komplet danych dokumentu zawiadamiającego');
    }
  }
    if (!zawiadamiajacy.imie?.trim()) errors.push('Podaj imię zawiadamiającego');
    if (!zawiadamiajacy.nazwisko?.trim()) errors.push('Podaj nazwisko zawiadamiającego');
    if (!zawiadamiajacy.dataUrodzenia?.trim()) errors.push('Podaj datę urodzenia zawiadamiającego');
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
    if (organy.maszynaWypadek) {
      if (!organy.opisMaszyny?.trim()) errors.push('Opisz stan techniczny maszyny lub urządzenia');
      if (organy.atest === null) errors.push('Zaznacz czy maszyna posiada atest/deklarację zgodności');
      if (organy.ewidencjaSrodkowTrwalych === null) errors.push('Zaznacz czy maszyna jest wpisana do ewidencji środków trwałych');
    }
    // Strona 4 uses local state, validation can be added when migrating to formData
    return errors;
  };

  const validatePage5 = () => {
    const errors = [];
    
    return errors;
  };

  const validatePage6 = () => {
    const errors = [zalaczniki];
    
    if (!zalaczniki.sposobOdbioru?.trim()) errors.push('Wybierz sposób odbioru odpowiedzi');
    if (!zalaczniki.dataPodpisu?.trim()) errors.push('Podaj datę podpisu');
    if (!zalaczniki.podpis?.trim()) errors.push('Podaj podpis');

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
      {page === 6 && (
      <div className="absolute top-4 right-4">
        <button className='px-2 py-1 bg-white cursor-pointer rounded-md hover:bg-gray-100' type="button" onClick={handleDownload} disabled={isLoading}>Pobierz jako PDF</button>
        {isLoading && (
          <div className="mt-4 flex items-center justify-center">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900"></div>
            <span className="ml-2 text-sm text-gray-700">Generowanie PDF...</span>
          </div>
        )}
      </div>
      )}
    </div>
  );
}
