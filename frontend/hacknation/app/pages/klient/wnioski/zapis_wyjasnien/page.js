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
    pomoc: {
      dataPomoc: "",
      nazwaPlacowki: "",
      okresHospitalizacji: "",
      rozpoznanyUraz: "",
      niezdolnoscOd: "",
      niezdolnoscDo: "",
      zwolnienieLekarskie: "",
      miejscowosc: "",
      dataPodpisu: "",
      podpisPoszkodowanego: "",
      protokolanci: "",
    },
  });

  const alertContent = {
    osobaImiona: {
      title: 'Dane personalne',
      body: 'Uzupełnij oba imiona zgodnie z dokumentem tożsamości.',
      changed: false
    },
    osobaUrodzenie: {
      title: 'Data i miejsce urodzenia',
      body: 'Podaj pełną datę urodzenia oraz miejscowość.',
      changed: false
    },
    osobaAdres: {
      title: 'Adres zamieszkania',
      body: 'Adres musi zawierać miejscowość i ulicę wraz z numerem.',
      changed: false
    },
    osobaZatrudnienie: {
      title: 'Miejsce zatrudnienia',
      body: 'Wpisz nazwę firmy lub pełną nazwę prowadzonej działalności.',
      changed: false
    },
    wypadekData: {
      title: 'Data wypadku',
      body: 'Data powinna odpowiadać dacie z oficjalnego zgłoszenia.',
      changed: false
    },
    wypadekSzczegoly: {
      title: 'Okoliczności wypadku',
      body: 'Uzupełnij datę, miejsce i dokładną godzinę zdarzenia.',
      changed: false
    },
    wypadekStart: {
      title: 'Planowana godzina rozpoczęcia',
      body: 'Podaj godzinę rozpoczęcia pracy w dniu zdarzenia.',
      changed: false
    },
    wypadekEnd: {
      title: 'Planowana godzina zakończenia',
      body: 'Podaj planowaną godzinę zakończenia pracy w tym dniu.',
      changed: false
    },
    wypadekCzynnosci: {
      title: 'Wykonywane czynności',
      body: 'Opisz czynności wykonywane tuż przed wypadkiem.',
      changed: false
    },
    wypadekOkolicznosci: {
      title: 'Opis okoliczności',
      body: 'Podaj szczegółowy opis przyczyn i przebiegu wypadku.',
      changed: false
    }
  };

  const alertContentPage2 = {
    wypadekMaszyna: {
      title: 'Obsługa maszyn',
      body: 'Wskaż czy wypadek powstał podczas obsługi urządzenia.',
      changed: false
    },
    nazwaMaszyny: {
      title: 'Opis urządzenia',
      body: 'Podaj nazwę, typ oraz rok produkcji urządzenia.',
      changed: false
    },
    sprawnosc: {
      title: 'Sprawność urządzenia',
      body: 'Wyjaśnij czy urządzenie było sprawne i używane zgodnie z instrukcją.',
      changed: false
    },
    zabezpieczenia: {
      title: 'Zabezpieczenia',
      body: 'Oznacz czy były stosowane zabezpieczenia przed wypadkiem.',
      changed: false
    },
    rodzajSrodkow: {
      title: 'Środki ochronne',
      body: 'Wymień środki ochronne stosowane podczas pracy (np. buty, kask).',
      changed: false
    },
    sprawnoscSrodkow: {
      title: 'Sprawność środków ochrony',
      body: 'Opisz czy środki ochronne były właściwe i sprawne.',
      changed: false
    },
    asekuracja: {
      title: 'Asekuracja',
      body: 'Wskaż czy stosowana była asekuracja podczas pracy.',
      changed: false
    },
    obowiazekDwochOsob: {
      title: 'Praca w zespole',
      body: 'Ustal czy prace wymagały obecności co najmniej dwóch osób.',
      changed: false
    },
    bhp: {
      title: 'Zasady BHP',
      body: 'Potwierdź czy przestrzegałeś/aś zasad bezpieczeństwa i higieny pracy.',
      changed: false
    },
    przygotowanie: {
      title: 'Przygotowanie',
      body: 'Wskaż czy posiadasz przygotowanie do wykonywania swoich zadań.',
      changed: false
    },
    szkolenie: {
      title: 'Szkolenie z BHP',
      body: 'Potwierdź czy odbyłeś/aś obowiązkowe szkolenie z BHP.',
      changed: false
    },
    ocenaRyzyka: {
      title: 'Ocena ryzyka zawodowego',
      body: 'Potwierdź, czy posiadasz opracowaną ocenę ryzyka zawodowego.',
      changed: false
    },
    stanNietrzezwosci: {
      title: 'Stan trzeźwości',
      body: 'Wskaż czy w chwili wypadku byłeś/aś w stanie trzeźwości.',
      changed: false
    },
    badanieTrzezwosci: {
      title: 'Badanie trzeźwości',
      body: 'Wskaż czy badanie stanu trzeźwości zostało przeprowadzone.',
      changed: false
    },
    czynnosciWyjasniajace: {
      title: 'Czynności wyjaśniające',
      body: 'Wskaż czy były podjęte czynności wyjaśniające przez organy.',
      changed: false
    },
    srodkiZmniejszenia: {
      title: 'Środki ograniczające ryzyko',
      body: 'Opisz środki zastosowane w celu zmniejszenia ryzyka.',
      changed: false
    },
    opisCzynnosci: {
      title: 'Opis czynności wyjaśniających',
      body: 'Podaj szczegóły czynności podjętych przez organy: kto, numer sprawy/decyzji, status.',
      changed: false
    }
  };

  const alertContentPage3 = {
    dataPomoc: {
      title: 'Data pierwszej pomocy',
      body: 'Podaj datę udzielenia pierwszej pomocy poszkodowanemu.',
      changed: false
    },
    zwolnienieLekarskie: {
      title: 'Zwolnienie lekarskie',
      body: 'Wskaż czy w dacie wypadku przebywałeś/aś na zwolnieniu lekarskim.',
      changed: false
    },
    nazwaPlacowki: {
      title: 'Placówka medyczna',
      body: 'Wpisz nazwę placówki służby zdrowia, w której udzielono pomocy.',
      changed: false
    },
    okresHospitalizacji: {
      title: 'Hospitalizacja',
      body: 'Podaj okres i miejsce hospitalizacji związanej z wypadkiem.',
      changed: false
    },
    rozpoznanyUraz: {
      title: 'Rozpoznany uraz',
      body: 'Opisz uraz na podstawie dostępnej dokumentacji lekarskiej.',
      changed: false
    },
    podpisPoszkodowanego: {
      title: 'Podpis poszkodowanego',
      body: 'Potwierdź własnoręczny podpis poszkodowanego lub pozostaw notatkę.',
      changed: false
    },
    protokolanci: {
      title: 'Protokół podpisów',
      body: 'Wpisz osoby, które protokołowały i potwierdziły podpis.',
      changed: false
    },
    niezdolnoscDo: {
      title: 'Niezdolność do pracy',
      body: 'Podaj datę zakończenia niezdolności do świadczenia pracy.',
      changed: false
    }
  };

  const validatePage1 = () => {
    const { osoba, wypadek } = formData;
    const errors = [];

    if (!osoba.imie1?.trim()) errors.push('Wpisz pierwsze imię');
    if (!osoba.imie2?.trim()) errors.push('Wpisz drugie imię');
    if (!osoba.dataUrodzenia?.trim()) errors.push('Podaj datę urodzenia');
    if (!osoba.miejsceUrodzenia?.trim()) errors.push('Podaj miejsce urodzenia');
    if (!osoba.miejsceZamieszkania?.trim()) errors.push('Podaj miejscowość zamieszkania');
    if (!osoba.ulica?.trim()) errors.push('Podaj ulicę i numer domu');
    if (!osoba.zatrudnionyW?.trim()) errors.push('Podaj miejsce zatrudnienia');
    if (!wypadek.dataWypadku?.trim()) errors.push('Podaj datę wypadku');

    return errors;
  };

  const validatePage2 = () => {
    const { wypadek, maszyny } = formData;
    const errors = [];

    if (!wypadek.dataWypadkuSzczegoly?.trim()) errors.push('Podaj datę wypadku (szczegóły)');
    if (!wypadek.miejsceWypadku?.trim()) errors.push('Podaj miejsce wypadku');
    if (!wypadek.godzinaWypadku?.trim()) errors.push('Podaj godzinę wypadku');
    if (!wypadek.rodzajCzynnosci?.trim()) errors.push('Opisz wykonywane czynności');
    if (!wypadek.opisOkolicznosci?.trim()) errors.push('Podaj opis okoliczności wypadku');
    if (!maszyny.wypadekMaszyna?.trim()) errors.push('Zaznacz czy wypadek powstał podczas obsługi maszyn');
    if (maszyny.wypadekMaszyna === 'tak') {
      if (!maszyny.nazwaMaszyny?.trim()) errors.push('Podaj nazwę i opis maszyny');
      if (!maszyny.sprawnosc?.trim()) errors.push('Opisz sprawność maszyny');
    }
    if (!maszyny.zabezpieczenia?.trim()) errors.push('Zaznacz czy były stosowane zabezpieczenia');
    if (!maszyny.bhp?.trim()) errors.push('Zaznacz czy przestrzegałeś zasad BHP');
    if (!maszyny.przygotowanie?.trim()) errors.push('Zaznacz czy posiadasz przygotowanie');
    if (!maszyny.szkolenie?.trim()) errors.push('Zaznacz czy odbyłeś szkolenie z BHP');
    if (!maszyny.ocenaRyzyka?.trim()) errors.push('Zaznacz czy posiadasz ocenę ryzyka');
    if (!maszyny.stanNietrzezwosci?.trim()) errors.push('Zaznacz stan trzeźwości');
    if (!maszyny.badanieTrzezwosci?.trim()) errors.push('Zaznacz czy było badanie trzeźwości');
    if (!maszyny.czynnosciWyjasniajace?.trim()) errors.push('Zaznacz czy były czynności wyjaśniające');

    return errors;
  };

  const validatePage3 = () => {
    const { pomoc } = formData;
    const errors = [];

    if (!pomoc.dataPomoc?.trim()) errors.push('Podaj datę udzielenia pierwszej pomocy');
    if (!pomoc.nazwaPlacowki?.trim()) errors.push('Podaj nazwę placówki medycznej');
    if (!pomoc.okresHospitalizacji?.trim()) errors.push('Podaj okres hospitalizacji');
    if (!pomoc.rozpoznanyUraz?.trim()) errors.push('Opisz rozpoznany uraz');
    if (!pomoc.niezdolnoscOd?.trim()) errors.push('Podaj datę rozpoczęcia niezdolności do pracy');
    if (!pomoc.niezdolnoscDo?.trim()) errors.push('Podaj datę zakończenia niezdolności do pracy');
    if (!pomoc.zwolnienieLekarskie?.trim()) errors.push('Zaznacz czy byłeś na zwolnieniu lekarskim');
    if (!pomoc.miejscowosc?.trim()) errors.push('Podaj miejscowość');
    if (!pomoc.dataPodpisu?.trim()) errors.push('Podaj datę podpisu');
    if (!pomoc.podpisPoszkodowanego?.trim()) errors.push('Potwierdź podpis poszkodowanego');
    if (!pomoc.protokolanci?.trim()) errors.push('Podaj dane protokołantów');

    return errors;
  };

  const handleNextPage = () => {
    let errors = [];
    if (page === 1) errors = validatePage1();
    else if (page === 2) errors = validatePage2();

    if (errors.length > 0) {
      alert('Proszę uzupełnić następujące pola:\n\n' + errors.join('\n'));
      return;
    }

    setPage((p) => Math.min(3, p + 1));
  };

  const renderPage = () => {
    switch (page) {
      case 1:
        return <Strona1 formData={formData} setFormData={setFormData} alertContent={alertContent} />;
      case 2:
        return <Strona2 formData={formData} setFormData={setFormData} alertContent={alertContentPage2} />;
      case 3:
        return <Strona3 formData={formData} setFormData={setFormData} alertContent={alertContentPage3} />;
      default:
        return <Strona1 formData={formData} setFormData={setFormData} alertContent={alertContent} />;
    }
  }

  const handleSubmit = () => {
    const errors = validatePage3();

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
      <h1 className="text-4xl font-bold mb-4">Zapis Wyjaśnień</h1>
      {/* FORM */}
      <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-2xl">
        {renderPage()}
        {/* BUTTONS: Cofnij (lewo), Dalej (prawo), Prześlij (prawo, tylko na ostatniej stronie) */}
        <div className="flex flex-row-reverse justify-between">
          {/* Dalej lub Prześlij po prawej */}
          {page === 3 ? (
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
