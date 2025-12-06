'use client';

import { useState } from 'react';

export default function Strona5() {
  // Świadek 1
  const [imieSwiadek1, setImieSwiadek1] = useState('');
  const [nazwiskoSwiadek1, setNazwiskoSwiadek1] = useState('');
  const [numerDomuSwiadek1, setNumerDomuSwiadek1] = useState('');
  const [numerLokaluSwiadek1, setNumerLokaluSwiadek1] = useState('');
  const [kodPocztowySwiadek1, setKodPocztowySwiadek1] = useState('');
  const [miejscowoscSwiadek1, setMiejscowoscSwiadek1] = useState('');
  const [gminaSwiadek1, setGminaSwiadek1] = useState('');
  const [panstwoSwiadek1, setPanstwoSwiadek1] = useState('');
  
  // Świadek 2
  const [imieSwiadek2, setImieSwiadek2] = useState('');
  const [nazwiskoSwiadek2, setNazwiskoSwiadek2] = useState('');
  const [numerDomuSwiadek2, setNumerDomuSwiadek2] = useState('');
  const [numerLokaluSwiadek2, setNumerLokaluSwiadek2] = useState('');
  const [kodPocztowySwiadek2, setKodPocztowySwiadek2] = useState('');
  const [miejscowoscSwiadek2, setMiejscowoscSwiadek2] = useState('');
  const [gminaSwiadek2, setGminaSwiadek2] = useState('');
  const [panstwoSwiadek2, setPanstwoSwiadek2] = useState('');
  
  // Świadek 3
  const [imieSwiadek3, setImieSwiadek3] = useState('');
  const [nazwiskoSwiadek3, setNazwiskoSwiadek3] = useState('');
  const [numerDomuSwiadek3, setNumerDomuSwiadek3] = useState('');
  const [numerLokaluSwiadek3, setNumerLokaluSwiadek3] = useState('');
  const [kodPocztowySwiadek3, setKodPocztowySwiadek3] = useState('');
  const [miejscowoscSwiadek3, setMiejscowoscSwiadek3] = useState('');
  const [gminaSwiadek3, setGminaSwiadek3] = useState('');
  const [panstwoSwiadek3, setPanstwoSwiadek3] = useState('');
  
  // Załączniki (checkboxes)
  const [kartaInformacyjna, setKartaInformacyjna] = useState(false);
  const [postanowienieProkuratury, setPostanowienieProkuratury] = useState(false);
  const [aktZgonu, setAktZgonu] = useState(false);
  return (
    <div className="bg-gray-50/60 w-full max-w-2xl p-4 rounded-xl flex flex-col space-y-4 mb-4">
      {/* ŚWIADEK 1 */}
      <div>
        <h1 className="font-semibold mb-2">DANE ŚWIADKA 1</h1>
        <hr className="bg-gray-100 mb-2"></hr>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-2 block text-sm font-medium text-gray-700">Imię i nazwisko:</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź imię"
          value={imieSwiadek1}
          onChange={(e) => setImieSwiadek1(e.target.value)}
        /> 
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź nazwisko"
          value={nazwiskoSwiadek1}
          onChange={(e) => setNazwiskoSwiadek1(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-2 block text-sm font-medium text-gray-700">Numer domu i lokalu</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź numer domu"
          value={numerDomuSwiadek1}
          onChange={(e) => setNumerDomuSwiadek1(e.target.value)}
        /> 
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź numer lokalu"
          value={numerLokaluSwiadek1}
          onChange={(e) => setNumerLokaluSwiadek1(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-2 block text-sm font-medium text-gray-700">Kod pocztowy i miejscowość</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź kod pocztowy"
          value={kodPocztowySwiadek1}
          onChange={(e) => setKodPocztowySwiadek1(e.target.value)}
        /> 
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź miejscowość"
          value={miejscowoscSwiadek1}
          onChange={(e) => setMiejscowoscSwiadek1(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Gmina/dzielnica:</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź gminę/dzielnicę"
          value={gminaSwiadek1}
          onChange={(e) => setGminaSwiadek1(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Państwo:</label>
        <label className="col-span-3 block text-xs font-medium text-gray-500 mb-1">Podaj, jeśli adres inny niż polski</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź państwo"
          value={panstwoSwiadek1}
          onChange={(e) => setPanstwoSwiadek1(e.target.value)}
        />
      </div>

{/* ŚWIADEK 2 */}
      <div>
        <h1 className="font-semibold mb-2">DANE ŚWIADKA 2</h1>
        <hr className="bg-gray-100 mb-2"></hr>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-2 block text-sm font-medium text-gray-700">Imię i nazwisko:</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź imię"
          value={imieSwiadek2}
          onChange={(e) => setImieSwiadek2(e.target.value)}
        /> 
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź nazwisko"
          value={nazwiskoSwiadek2}
          onChange={(e) => setNazwiskoSwiadek2(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-2 block text-sm font-medium text-gray-700">Numer domu i lokalu</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź numer domu"
          value={numerDomuSwiadek2}
          onChange={(e) => setNumerDomuSwiadek2(e.target.value)}
        /> 
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź numer lokalu"
          value={numerLokaluSwiadek2}
          onChange={(e) => setNumerLokaluSwiadek2(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-2 block text-sm font-medium text-gray-700">Kod pocztowy i miejscowość</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź kod pocztowy"
          value={kodPocztowySwiadek2}
          onChange={(e) => setKodPocztowySwiadek2(e.target.value)}
        /> 
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź miejscowość"
          value={miejscowoscSwiadek2}
          onChange={(e) => setMiejscowoscSwiadek2(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Gmina/dzielnica:</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź gminę/dzielnicę"
          value={gminaSwiadek2}
          onChange={(e) => setGminaSwiadek2(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Państwo:</label>
        <label className="col-span-3 block text-xs font-medium text-gray-500 mb-1">Podaj, jeśli adres inny niż polski</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź państwo"
          value={panstwoSwiadek2}
          onChange={(e) => setPanstwoSwiadek2(e.target.value)}
        />
      </div>

{/* ŚWIADEK 3 */}
      <div>
        <h1 className="font-semibold mb-2">DANE ŚWIADKA 3</h1>
        <hr className="bg-gray-100 mb-2"></hr>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-2 block text-sm font-medium text-gray-700">Imię i nazwisko:</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź imię"
          value={imieSwiadek3}
          onChange={(e) => setImieSwiadek3(e.target.value)}
        /> 
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź nazwisko"
          value={nazwiskoSwiadek3}
          onChange={(e) => setNazwiskoSwiadek3(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-2 block text-sm font-medium text-gray-700">Numer domu i lokalu</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź numer domu"
          value={numerDomuSwiadek3}
          onChange={(e) => setNumerDomuSwiadek3(e.target.value)}
        /> 
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź numer lokalu"
          value={numerLokaluSwiadek3}
          onChange={(e) => setNumerLokaluSwiadek3(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-2 block text-sm font-medium text-gray-700">Kod pocztowy i miejscowość</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź kod pocztowy"
          value={kodPocztowySwiadek3}
          onChange={(e) => setKodPocztowySwiadek3(e.target.value)}
        /> 
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź miejscowość"
          value={miejscowoscSwiadek3}
          onChange={(e) => setMiejscowoscSwiadek3(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Gmina/dzielnica:</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź gminę/dzielnicę"
          value={gminaSwiadek3}
          onChange={(e) => setGminaSwiadek3(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Państwo:</label>
        <label className="col-span-3 block text-xs font-medium text-gray-500 mb-1">Podaj, jeśli adres inny niż polski</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź państwo"
          value={panstwoSwiadek3}
          onChange={(e) => setPanstwoSwiadek3(e.target.value)}
        />
      </div>
      <div>
        <h1 className="font-semibold mb-2">ZAŁĄCZNIKI</h1>
        <hr className="bg-gray-100 mb-2"></hr>
      </div>
      <div className="flex items-center justify-center gap-3">
        <input className="h-6 w-6 rounded border-gray-300 text-cyan-500 focus:ring-cyan-500 shrink-0" type="checkbox" checked={kartaInformacyjna} onChange={(e) => setKartaInformacyjna(e.target.checked)} />
        <label className="text-sm">kserokopia karty informacyjnej ze szpitala/zaświadczenia o udzieleniu pierwszej pomocy z pogotowia ratunkowego wraz z wywiadem</label>
      </div>
      <div className="flex items-center justify-center gap-3">
        <input className="h-6 w-6 rounded border-gray-300 text-cyan-500 focus:ring-cyan-500 shrink-0" type="checkbox" checked={postanowienieProkuratury} onChange={(e) => setPostanowienieProkuratury(e.target.checked)} />
        <label className="text-sm">kserokopia postanowienia prokuratury o wszczęciu postępowania karnego lub zawieszeniu/umorzeniu postępowania</label>
      </div>
      <div className="flex items-center justify-center gap-3">
        <input className="h-6 w-6 rounded border-gray-300 text-cyan-500 focus:ring-cyan-500 shrink-0" type="checkbox" checked={aktZgonu} onChange={(e) => setAktZgonu(e.target.checked)} />
        <label className="text-sm">kserokopia statystycznej karty zgonu lub zaświadczenie lekarskie stwierdzające przyczynę zgonu, skrócony odpis aktu zgonu (w przypadku wypadku ze skutkiem śmiertelnym)</label>
      </div>
    </div>
  );
}
