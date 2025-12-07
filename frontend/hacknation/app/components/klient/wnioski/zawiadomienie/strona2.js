'use client';

import { useState } from 'react';

export default function Strona2() {
  // Adres działalności
  const [ulicaDzialalnosci, setUlicaDzialalnosci] = useState('');
  const [numerDomuDzialalnosci, setNumerDomuDzialalnosci] = useState('');
  const [numerLokaluDzialalnosci, setNumerLokaluDzialalnosci] = useState('');
  const [kodPocztowyDzialalnosci, setKodPocztowyDzialalnosci] = useState('');
  const [miejscowoscDzialalnosci, setMiejscowoscDzialalnosci] = useState('');
  const [gminaDzialalnosci, setGminaDzialalnosci] = useState('');
  const [numerTelefonu, setNumerTelefonu] = useState('');
  
  // Adres opieki nad dzieckiem
  const [ulicaOpieka, setUlicaOpieka] = useState('');
  const [numerDomuOpieka, setNumerDomuOpieka] = useState('');
  const [numerLokaluOpieka, setNumerLokaluOpieka] = useState('');
  const [kodPocztowyOpieka, setKodPocztowyOpieka] = useState('');
  const [miejscowoscOpieka, setMiejscowoscOpieka] = useState('');
  
  // Dane osoby zawiadamiającej
  const [peselZawiadamiajacy, setPeselZawiadamiajacy] = useState('');
  const [dokumentRodzajZawiadamiajacy, setDokumentRodzajZawiadamiajacy] = useState('');
  const [dokumentSeriaZawiadamiajacy, setDokumentSeriaZawiadamiajacy] = useState('');
  const [dokumentNumerZawiadamiajacy, setDokumentNumerZawiadamiajacy] = useState('');
  const [imieZawiadamiajacy, setImieZawiadamiajacy] = useState('');
  const [nazwiskoZawiadamiajacy, setNazwiskoZawiadamiajacy] = useState('');
  const [dzienUrodzenia, setDzienUrodzenia] = useState('');
  const [miesiacUrodzenia, setMiesiacUrodzenia] = useState('');
  const [rokUrodzenia, setRokUrodzenia] = useState('');
  const [plec, setPlec] = useState('');
  
  // Adres zamieszkania zawiadamiającego
  const [ulicaZamieszkania, setUlicaZamieszkania] = useState('');
  const [numerDomuZamieszkania, setNumerDomuZamieszkania] = useState('');
  const [numerLokaluZamieszkania, setNumerLokaluZamieszkania] = useState('');
  const [kodPocztowyZamieszkania, setKodPocztowyZamieszkania] = useState('');
  const [miejscowoscZamieszkania, setMiejscowoscZamieszkania] = useState('');
  const [gminaZamieszkania, setGminaZamieszkania] = useState('');
  const [panstwoZamieszkania, setPanstwoZamieszkania] = useState('');

  return (
    <div className="bg-gray-50/60 w-full max-w-2xl p-4 rounded-xl flex flex-col space-y-4 mb-4">
      <div>
        <h1 className="font-semibold mb-2">ADRES MIEJSCA PROWADZENIA POZAROLNICZEJ DZIAŁALNOŚCI</h1>
        <hr className="bg-gray-100 mb-2"></hr>
        <label className="col-span-3 block text-xs font-medium text-gray-500 mb-1">Podaj, jeśli poszkodowany prowadzi albo współpracuje przy prowadzeniu pozarolniczej działalności</label>
        <label className="block text-sm font-medium text-gray-700">Ulica:</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź nazwę ulicy"
          value={ulicaDzialalnosci}
          onChange={(e) => setUlicaDzialalnosci(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-2 block text-sm font-medium text-gray-700">Numer domu i lokalu</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź numer domu"
          value={numerDomuDzialalnosci}
          onChange={(e) => setNumerDomuDzialalnosci(e.target.value)}
        /> 
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź numer lokalu"
          value={numerLokaluDzialalnosci}
          onChange={(e) => setNumerLokaluDzialalnosci(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-2 block text-sm font-medium text-gray-700">Kod pocztowy i miejscowość</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź kod pocztowy"
          value={kodPocztowyDzialalnosci}
          onChange={(e) => setKodPocztowyDzialalnosci(e.target.value)}
        /> 
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź miejscowość"
          value={miejscowoscDzialalnosci}
          onChange={(e) => setMiejscowoscDzialalnosci(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Gmina/dzielnica:</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź nazwę gminy lub dzielnicy"
          value={gminaDzialalnosci}
          onChange={(e) => setGminaDzialalnosci(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Numer telefonu:</label>
        <label className="col-span-3 block text-xs font-medium text-gray-500 mb-1">Podaj numer telefonu - to ułatwi nam kontakt w tej sprawie</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź numer telefonu"
          value={numerTelefonu}
          onChange={(e) => setNumerTelefonu(e.target.value)}
        />
      </div>
            <div>
        <h1 className="font-semibold mb-2">ADRES SPRAWOWANIA OPIEKI NAD DZIECKIEM W WIEKU DO LAT 3</h1>
        <hr className="bg-gray-100 mb-2"></hr>
        <label className="col-span-3 block text-xs font-medium text-gray-500 mb-1">Podaj, jeśli poszkodowany wykonuje pracę na podstawie umowy uaktywniającej (jako niania)</label>
        <label className="block text-sm font-medium text-gray-700">Ulica:</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź nazwę ulicy"
          value={ulicaOpieka}
          onChange={(e) => setUlicaOpieka(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-2 block text-sm font-medium text-gray-700">Numer domu i lokalu</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź numer domu"
          value={numerDomuOpieka}
          onChange={(e) => setNumerDomuOpieka(e.target.value)}
        /> 
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź numer lokalu"
          value={numerLokaluOpieka}
          onChange={(e) => setNumerLokaluOpieka(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-2 block text-sm font-medium text-gray-700">Kod pocztowy i miejscowość</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź kod pocztowy"
          value={kodPocztowyOpieka}
          onChange={(e) => setKodPocztowyOpieka(e.target.value)}
        /> 
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź miejscowość"
          value={miejscowoscOpieka}
          onChange={(e) => setMiejscowoscOpieka(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Gmina/dzielnica:</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź nazwę gminy lub dzielnicy"
        />
      </div>
            <div>
        <h1 className="font-semibold mb-2">DANE OSOBY, KTÓRA ZAWIADAMIA O WYPADKU</h1>
        <hr className="bg-gray-100 mb-2"></hr>
        <label className="block text-sm font-medium text-gray-700">PESEL</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź PESEL"
          value={peselZawiadamiajacy}
          onChange={(e) => setPeselZawiadamiajacy(e.target.value)}
        />
      </div>    
      <div className="grid grid-cols-3 gap-2">
        <label className="col-span-3 block text-sm font-medium text-gray-700">Dokument Potwierdzający Tożsamość</label>
        <label className="col-span-3 block text-xs font-medium text-gray-500">Jeśli nie ma numeru PESEL, podaj serię i numer innego dokumentu</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Rodzaj"
          value={dokumentRodzajZawiadamiajacy}
          onChange={(e) => setDokumentRodzajZawiadamiajacy(e.target.value)}
        />
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Seria"
          value={dokumentSeriaZawiadamiajacy}
          onChange={(e) => setDokumentSeriaZawiadamiajacy(e.target.value)}
        />      
        <input
          type="number"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Numer"
          value={dokumentNumerZawiadamiajacy}
          onChange={(e) => setDokumentNumerZawiadamiajacy(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-2 block text-sm font-medium text-gray-700">Imię i Nazwisko:</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź imię"
          value={imieZawiadamiajacy}
          onChange={(e) => setImieZawiadamiajacy(e.target.value)}
        /> 
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź nazwisko"
          value={nazwiskoZawiadamiajacy}
          onChange={(e) => setNazwiskoZawiadamiajacy(e.target.value)}
        />
      </div>
        <div className="grid grid-cols-3 gap-2">
        <label className="col-span-3 block text-sm font-medium text-gray-700">Data Urodzenia</label>
        <input
          type="number"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Dzień"
          value={dzienUrodzenia}
          onChange={(e) => setDzienUrodzenia(e.target.value)}
        />
        <input
          type="number"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Miesiąc"
          value={miesiacUrodzenia}
          onChange={(e) => setMiesiacUrodzenia(e.target.value)}
        />      
        <input
          type="number"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Rok"
          value={rokUrodzenia}
          onChange={(e) => setRokUrodzenia(e.target.value)}
        />
      </div>
        <div className="grid grid-cols-2 gap-2">
        <label className="col-span-3 block text-sm font-medium text-gray-700">Płeć</label>
        <div className="flex items-center">
          <input
            type="radio"
            id="mezczyzna"
            name="plec"
            value="mezczyzna"
            checked={plec === 'mezczyzna'}
            onChange={(e) => setPlec(e.target.value)}
            className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 cursor-pointer"
          />
          <label htmlFor="mezczyzna" className="ml-2 text-sm text-gray-700 cursor-pointer">
            Mężczyzna
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="kobieta"
            name="plec"
            value="kobieta"
            checked={plec === 'kobieta'}
            onChange={(e) => setPlec(e.target.value)}
            className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 cursor-pointer"
          />
          <label htmlFor="kobieta" className="ml-2 text-sm text-gray-700 cursor-pointer">
            Kobieta
          </label>
        </div>
      </div>
      <div>
        <h1 className="font-semibold mb-2">ADRES ZAMIESZKANIA</h1>
        <hr className="bg-gray-100 mb-2"></hr>
        <label className="block text-sm font-medium text-gray-700">Ulica:</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź nazwę ulicy"
          value={ulicaZamieszkania}
          onChange={(e) => setUlicaZamieszkania(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-2 block text-sm font-medium text-gray-700">Numer domu i Lokalu</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź domu"
          value={numerDomuZamieszkania}
          onChange={(e) => setNumerDomuZamieszkania(e.target.value)}
        /> 
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź lokalu"
          value={numerLokaluZamieszkania}
          onChange={(e) => setNumerLokaluZamieszkania(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-2 block text-sm font-medium text-gray-700">Kod Pocztowy i Miejscowość</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź kod pocztowy"
          value={kodPocztowyZamieszkania}
          onChange={(e) => setKodPocztowyZamieszkania(e.target.value)}
        /> 
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź miejscowość"
          value={miejscowoscZamieszkania}
          onChange={(e) => setMiejscowoscZamieszkania(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Gmina/Dzielnica:</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź nazwę ulicy"
          value={gminaZamieszkania}
          onChange={(e) => setGminaZamieszkania(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Państwo:</label>
        <label className="col-span-3 block text-xs font-medium text-gray-500 mb-1">Podaj, jeśli adres inny niż polski</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź państwo"
          value={panstwoZamieszkania}
          onChange={(e) => setPanstwoZamieszkania(e.target.value)}
        />
      </div>   
    </div>
  );
}
