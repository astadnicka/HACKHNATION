'use client';

import { useState } from 'react';

export default function Strona1() {
  // Dane osoby poszkodowanej
  const [pesel, setPesel] = useState('');
  const [dokumentRodzaj, setDokumentRodzaj] = useState('');
  const [dokumentSeria, setDokumentSeria] = useState('');
  const [dokumentNumer, setDokumentNumer] = useState('');
  const [imie, setImie] = useState('');
  const [nazwisko, setNazwisko] = useState('');
  const [dataUrodzenia, setDataUrodzenia] = useState('');
  const [plec, setPlec] = useState('');
  
  // Adres zamieszkania poszkodowanego
  const [ulicaZamieszkania, setUlicaZamieszkania] = useState('');
  const [numerDomuZamieszkania, setNumerDomuZamieszkania] = useState('');
  const [numerLokaluZamieszkania, setNumerLokaluZamieszkania] = useState('');
  const [kodPocztowyZamieszkania, setKodPocztowyZamieszkania] = useState('');
  const [miejscowoscZamieszkania, setMiejscowoscZamieszkania] = useState('');
  const [gminaZamieszkania, setGminaZamieszkania] = useState('');
  const [panstwoZamieszkania, setPanstwoZamieszkania] = useState('');
  
  // Adres do korespondencji poszkodowanego
  const [ulicaKorespondencji, setUlicaKorespondencji] = useState('');
  const [numerDomuKorespondencji, setNumerDomuKorespondencji] = useState('');
  const [numerLokaluKorespondencji, setNumerLokaluKorespondencji] = useState('');
  const [kodPocztowyKorespondencji, setKodPocztowyKorespondencji] = useState('');
  const [miejscowoscKorespondencji, setMiejscowoscKorespondencji] = useState('');
  const [gminaKorespondencji, setGminaKorespondencji] = useState('');
  const [panstwoKorespondencji, setPanstwoKorespondencji] = useState('');

  return (
    <div className="bg-gray-50/60 w-full max-w-2xl p-4 rounded-xl flex flex-col space-y-4 mb-4">
      <div>
        <h1 className="font-semibold mb-2">DANE OSOBY POSZKODOWANEJ</h1>
        <hr className="bg-gray-100 mb-2"></hr>
        <label className="block text-sm font-medium text-gray-700">PESEL</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź PESEL"
          value={pesel}
          onChange={(e) => setPesel(e.target.value)}
        />
      </div>    
      <div className="grid grid-cols-3 gap-2">
        <label className="col-span-3 block text-sm font-medium text-gray-700">Dokument Potwierdzający Tożsamość</label>
        <label className="col-span-3 block text-xs font-medium text-gray-500">Jeśli nie ma numeru PESEL, podaj serię i numer innego dokumentu</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Rodzaj"
          value={dokumentRodzaj}
          onChange={(e) => setDokumentRodzaj(e.target.value)}
        />
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Seria"
          value={dokumentSeria}
          onChange={(e) => setDokumentSeria(e.target.value)}
        />      
        <input
          type="number"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Numer"
          value={dokumentNumer}
          onChange={(e) => setDokumentNumer(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-2 block text-sm font-medium text-gray-700">Imię i nazwisko:</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź imię"
          value={imie}
          onChange={(e) => setImie(e.target.value)}
        /> 
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź nazwisko"
          value={nazwisko}
          onChange={(e) => setNazwisko(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-3 gap-2">
        <label className="col-span-3 block text-sm font-medium text-gray-700">Data urodzenia</label>
        <input
          type="date"
          className="col-span-3 mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={dataUrodzenia}
          onChange={(e) => setDataUrodzenia(e.target.value)}
        />
      </div>
        <div className="grid grid-cols-2 gap-2">
          <label className="col-span-2 block text-sm font-medium text-gray-700">Płeć</label>
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
        <label className="col-span-2 block text-sm font-medium text-gray-700">Numer domu i lokalu</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź numer domu"
          value={numerDomuZamieszkania}
          onChange={(e) => setNumerDomuZamieszkania(e.target.value)}
        /> 
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź numer lokalu"
          value={numerLokaluZamieszkania}
          onChange={(e) => setNumerLokaluZamieszkania(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-2 block text-sm font-medium text-gray-700">Kod pocztowy i miejscowość</label>
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
        <label className="block text-sm font-medium text-gray-700">Gmina/dzielnica:</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź nazwę gminy lub dzielnicy"
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
      <div>
        <h1 className="font-semibold mb-2">ADRES DO KORESPONDENCJI</h1>
        <hr className="bg-gray-100 mb-2"></hr>
        <label className="col-span-3 block text-xs font-medium text-gray-500 mb-1">Podaj, jeśli adres do korespondencji jest inny niż adres zamieszkania</label>
        <label className="block text-sm font-medium text-gray-700">Ulica:</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź nazwę ulicy"
          value={ulicaKorespondencji}
          onChange={(e) => setUlicaKorespondencji(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-2 block text-sm font-medium text-gray-700">Numer domu i lokalu</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź numer domu"
          value={numerDomuKorespondencji}
          onChange={(e) => setNumerDomuKorespondencji(e.target.value)}
        /> 
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź numer lokalu"
          value={numerLokaluKorespondencji}
          onChange={(e) => setNumerLokaluKorespondencji(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-2 block text-sm font-medium text-gray-700">Kod pocztowy i miejscowość</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź kod pocztowy"
          value={kodPocztowyKorespondencji}
          onChange={(e) => setKodPocztowyKorespondencji(e.target.value)}
        /> 
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź miejscowość"
          value={miejscowoscKorespondencji}
          onChange={(e) => setMiejscowoscKorespondencji(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Gmina/dzielnica:</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź nazwę gminy lub dzielnicy"
          value={gminaKorespondencji}
          onChange={(e) => setGminaKorespondencji(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Państwo:</label>
        <label className="col-span-3 block text-xs font-medium text-gray-500 mb-1">Podaj, jeśli adres inny niż polski</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź państwo"
          value={panstwoKorespondencji}
          onChange={(e) => setPanstwoKorespondencji(e.target.value)}
        />
      </div>   
    </div>
  );
}