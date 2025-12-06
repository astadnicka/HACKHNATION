'use client';

import { useState } from 'react';

export default function Strona4() {
  const [maszynaWypadek, setMaszynaWypadek] = useState(null);
  const [atest, setAtest] = useState(null);
  const [ewidencjaSrodkowTrwalych, setEwidencjaSrodkowTrwalych] = useState(null);

  return (
    <div className="bg-gray-50/60 w-full max-w-2xl p-4 rounded-xl flex flex-col space-y-4 mb-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Organ, który prowadził postępowanie w sprawie wypadku</label>
        <textarea
          className="mt-1 block w-full min-h-20 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wpisz nazwę i adres organu prowadzącego postępowanie"
        />        
        <label className="col-span-3 block text-xs font-medium text-gray-500 mb-1">Podaj nazwę i adres organu, który prowadził postępowanie w sprawie wypadku (Policja, Prokuratura, inne)</label>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-3 block text-sm font-medium text-gray-700">Czy wypadek powstał podczas obsługi maszyn lub urządzeń:</label>
        <div className="flex items-center">
          <input
            type="radio"
            id="TAK"
            name="maszyna_wypadek"
            value="TAK"
            checked={maszynaWypadek === true}
            onChange={() => setMaszynaWypadek(true)}
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
            name="maszyna_wypadek"
            value="NIE"
            checked={maszynaWypadek === false}
            onChange={() => setMaszynaWypadek(false)}
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
          placeholder="Opisz stan maszyny, sposób jej użytkowania oraz zabezpieczenia"
        />        
        <label className="col-span-3 block text-xs font-medium text-gray-500 mb-1">Jeśli TAK, podaj czy maszyna/urządzenie były sprawne i użytkowane zgodnie z zasadami producenta oraz w jaki sposób</label>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-3 block text-sm font-medium text-gray-700">Czy maszyna lub urządzenie posiada atest/deklarację zgodności:</label>
        <div className="flex items-center">
          <input
            type="radio"
            id="TAK"
            name="atest"
            value="TAK"
            checked={atest === true}
            onChange={() => setAtest(true)}
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
            name="atest"
            value="NIE"
            checked={atest === false}
            onChange={() => setAtest(false)}
            className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 cursor-pointer"
          />
          <label htmlFor="NIE" className="ml-2 text-sm text-gray-700 cursor-pointer">
            NIE
          </label>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-3 block text-sm font-medium text-gray-700">Czy maszyna lub urządzenie zostało wpisane do ewidencji środków trwałych:</label>
        <div className="flex items-center">
          <input
            type="radio"
            id="TAK"
            name="ewidencja_srodkow_trwalych"
            value="TAK"
            checked={ewidencjaSrodkowTrwalych === true}
            onChange={() => setEwidencjaSrodkowTrwalych(true)}
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
            name="ewidencja_srodkow_trwalych"
            value="NIE"
            checked={ewidencjaSrodkowTrwalych === false}
            onChange={() => setEwidencjaSrodkowTrwalych(false)}
            className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 cursor-pointer"
          />
          <label htmlFor="NIE" className="ml-2 text-sm text-gray-700 cursor-pointer">
            NIE
          </label>
        </div>
      </div>
    </div>
  );
}