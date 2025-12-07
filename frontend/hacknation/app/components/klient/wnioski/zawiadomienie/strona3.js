'use client';

import { useState } from 'react';

export default function Strona3() {
  // Adres do korespondencji
  const [ulicaKorespondencji, setUlicaKorespondencji] = useState('');
  const [numerDomuKorespondencji, setNumerDomuKorespondencji] = useState('');
  const [numerLokaluKorespondencji, setNumerLokaluKorespondencji] = useState('');
  const [kodPocztowyKorespondencji, setKodPocztowyKorespondencji] = useState('');
  const [miejscowoscKorespondencji, setMiejscowoscKorespondencji] = useState('');
  const [gminaKorespondencji, setGminaKorespondencji] = useState('');
  const [panstwoKorespondencji, setPanstwoKorespondencji] = useState('');
  
  // Informacje o wypadku
  const [dataWypadku, setDataWypadku] = useState('');
  const [godzinaWypadku, setGodzinaWypadku] = useState('');
  const [miejsceWypadku, setMiejsceWypadku] = useState('');
  const [godzinaPoczatkuPracy, setGodzinaPoczatkuPracy] = useState('');
  const [godzinaKoncaPracy, setGodzinaKoncaPracy] = useState('');
  const [rodzajUrazow, setRodzajUrazow] = useState('');
  const [opisOkolicznosci, setOpisOkolicznosci] = useState('');
  const [pierwszaPomoc, setPierwszaPomoc] = useState(null);
  const [opisPierwszejPomocy, setOpisPierwszejPomocy] = useState('');

  return (
    <div className="bg-gray-50/60 w-full max-w-2xl p-4 rounded-xl flex flex-col space-y-4 mb-4">
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
        <label className="col-span-2 block text-sm font-medium text-gray-700">Numer domu i Lokalu</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź domu"
          value={numerDomuKorespondencji}
          onChange={(e) => setNumerDomuKorespondencji(e.target.value)}
        /> 
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź lokalu"
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

      <div className="grid grid-cols-3 gap-2">
        <label className="col-span-3 block text-sm font-medium text-gray-700">Data wypadku</label>
        <input
          type="date"
          className="col-span-3 mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={dataWypadku}
          onChange={(e) => setDataWypadku(e.target.value)}
        />
      </div>
      <div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Godzina Wypadku</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź godzinę wypadku"
          value={godzinaWypadku}
          onChange={(e) => setGodzinaWypadku(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Miejsce Wypadku</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź miejsce wypadku"
          value={miejsceWypadku}
          onChange={(e) => setMiejsceWypadku(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="block text-sm font-medium text-gray-700">Planowana godzina rozpoczęcia pracy w dniu wypadku</label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Wprowadź godzinę"
            value={godzinaPoczatkuPracy}
            onChange={(e) => setGodzinaPoczatkuPracy(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Planowana godzina zakończenia pracy w dniu wypadku</label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Wprowadź godzinę"
            value={godzinaKoncaPracy}
            onChange={(e) => setGodzinaKoncaPracy(e.target.value)}
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Rodzaj doznanych urazów</label>
        <textarea
          className="mt-1 block w-full min-h-20 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Opisz doznane urazy"
          value={rodzajUrazow}
          onChange={(e) => setRodzajUrazow(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Szczegółowy opis okoliczności, miejsca i przyczyn wypadku</label>
        <textarea
          className="mt-1 block w-full min-h-60 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Szczegółowy opis okoliczności, miejsca i przyczyn wypadku"
          value={opisOkolicznosci}
          onChange={(e) => setOpisOkolicznosci(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-3 block text-sm font-medium text-gray-700">Czy była udzielona pierwsza pomoc medyczna:</label>
        <div className="flex items-center">
          <input
            type="radio"
            id="pierwsza_pomoc_TAK"
            name="pierwsza_pomoc"
            value="TAK"
            checked={pierwszaPomoc === true}
            onChange={() => setPierwszaPomoc(true)}
            className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 cursor-pointer"
          />
          <label htmlFor="pierwsza_pomoc_TAK" className="ml-2 text-sm text-gray-700 cursor-pointer">
            TAK
          </label>
          </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="pierwsza_pomoc_NIE"
            name="pierwsza_pomoc"
            value="NIE"
            checked={pierwszaPomoc === false}
            onChange={() => setPierwszaPomoc(false)}
            className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 cursor-pointer"
          />
          <label htmlFor="pierwsza_pomoc_NIE" className="ml-2 text-sm text-gray-700 cursor-pointer">
            NIE
          </label>
        </div>
      </div>
      <div>
        <textarea
          className="mt-1 block w-full min-h-20 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Opis gdzie udzielono pierwszą pomoc medyczną"
          value={opisPierwszejPomocy}
          onChange={(e) => setOpisPierwszejPomocy(e.target.value)}
        />        
        <label className="col-span-3 block text-xs font-medium text-gray-500 mb-1">Jeśli TAK, podaj nazwę i adres placówki służby zdrowia</label>
      </div>
    </div>
  );
}