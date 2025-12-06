'use client';

import { useState } from 'react';

export default function Strona3() {
  const [pierwszaPomoc, setPierwszaPomoc] = useState(null);

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
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-2 block text-sm font-medium text-gray-700">Numer domu i Lokalu</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź domu"
        /> 
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź lokalu"
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-2 block text-sm font-medium text-gray-700">Kod pocztowy i miejscowość</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź kod pocztowy"
        /> 
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź miejscowość"
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
        <label className="block text-sm font-medium text-gray-700">Państwo:</label>
        <label className="col-span-3 block text-xs font-medium text-gray-500 mb-1">Podaj, jeśli adres inny niż polski</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź państwo"
        />
      </div>  
      <div>
        <h1 className="font-semibold mb-2">INFORMACJE O WYPADKU</h1>
        <hr className="bg-gray-100 mb-2"></hr>
        </div>
      <div className="grid grid-cols-3 gap-2">
        <label className="col-span-3 block text-sm font-medium text-gray-700">Data wypadku</label>
        <input
          type="date"
          className="col-span-3 mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
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
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Miejsce Wypadku</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź miejsce wypadku"
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="block text-sm font-medium text-gray-700">Planowana godzina rozpoczęcia pracy w dniu wypadku</label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Wprowadź godzinę"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Planowana godzina zakończenia pracy w dniu wypadku</label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Wprowadź godzinę"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Rodzaj doznanych urazów</label>
        <textarea
          className="mt-1 block w-full min-h-20 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Opisz doznane urazy"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Szczegółowy opis okoliczności, miejsca i przyczyn wypadku</label>
        <textarea
          className="mt-1 block w-full min-h-60 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Szczegółowy opis okoliczności, miejsca i przyczyn wypadku"
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-3 block text-sm font-medium text-gray-700">Czy była udzielona pierwsza pomoc medyczna:</label>
        <div className="flex items-center">
          <input
            type="radio"
            id="TAK"
            name="pierwsza_pomoc"
            value="TAK"
            checked={pierwszaPomoc === true}
            onChange={() => setPierwszaPomoc(true)}
            className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 cursor-pointer"
          />
          <label htmlFor="TAK" className="ml-2 text-sm text-gray-700 cursor-pointer">
            TAK
          </label>
          </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="NIE"
            name="pierwsza_pomoc"
            value="NIE"
            checked={pierwszaPomoc === false}
            onChange={() => setPierwszaPomoc(false)}
            className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 cursor-pointer"
          />
          <label htmlFor="NIE" className="ml-2 text-sm text-gray-700 cursor-pointer">
            NIE
          </label>
        </div>
      </div>
      <div>
        <textarea
          className="mt-1 block w-full min-h-20 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Opis gdzie udzielono pierwszą pomoc medyczną"
        />        
        <label className="col-span-3 block text-xs font-medium text-gray-500 mb-1">Jeśli TAK, podaj nazwę i adres placówki służby zdrowia</label>
      </div>
    </div>
  );
}