'use client';

import { useState } from 'react';

export default function Strona5({ formData, setFormData, alertContent = {} }) {
  const [activeAlert, setActiveAlert] = useState(null);

  const toggleAlert = (key) => {
    setActiveAlert(prev => (prev === key ? null : key));
  };

  const alertButtonClass = `absolute top-0 right-0 px-3 py-1 bg-red-500 text-white rounded shadow border border-red-600 cursor-pointer hover:bg-red-100 hover:text-red-700 hover:border-red-200`;
  const activeAlertContent = activeAlert ? alertContent[activeAlert] : null;
  // Helpers for updating formData
  const handleChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };
  const handleNestedChange = (section, subsection, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [subsection]: {
          ...prev[section][subsection],
          [field]: value
        }
      }
    }));
  };
  // Destructure needed data from formData
  const swiadkowie = formData.swiadkowie;
  const zalaczniki = formData.zalaczniki;
  // ...existing code...
  return (
    <div className="bg-gray-50/60 w-full max-w-2xl p-4 rounded-xl flex flex-col space-y-4 mb-4 relative">
      {activeAlertContent && (
        <div className="fixed inset-x-0 top-4 z-50 flex justify-center pointer-events-none">
          <div className="w-[min(90%,28rem)] max-w-xl bg-white border border-red-200 rounded-lg shadow-lg p-4 flex items-start gap-3 pointer-events-auto">
            <div className="text-red-600 font-bold text-lg">!</div>
            <div className="space-y-1">
              <div className="font-semibold text-gray-900">{activeAlertContent.title}</div>
              <div className="text-sm text-gray-700">{activeAlertContent.body}</div>
            </div>
            <button
              className="ml-auto text-sm text-red-700 hover:text-red-900 cursor-pointer"
              onClick={() => setActiveAlert(null)}
              aria-label="Zamknij alert"
            >
              Zamknij
            </button>
          </div>
        </div>
      )}
      {/* ŚWIADEK 1 */}
      <div className="relative">
        <h1 className="font-semibold mb-2">DANE ŚWIADKA 1</h1>
        <hr className="bg-gray-100 mb-2"></hr>
        {alertContent['swiadek1']?.changed && <button className={alertButtonClass} type='button' onClick={() => toggleAlert('swiadek1')}>!</button>}
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
      <div className="relative">
        <h1 className="font-semibold mb-2">DANE ŚWIADKA 2</h1>
        <hr className="bg-gray-100 mb-2"></hr>
        {alertContent['swiadek2']?.changed && <button className={alertButtonClass} type='button' onClick={() => toggleAlert('swiadek2')}>!</button>}
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
      <div className="relative">
        <h1 className="font-semibold mb-2">DANE ŚWIADKA 3</h1>
        <hr className="bg-gray-100 mb-2"></hr>
        {alertContent['swiadek3']?.changed && <button className={alertButtonClass} type='button' onClick={() => toggleAlert('swiadek3')}>!</button>}
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
      <div className="relative">
        <h1 className="font-semibold mb-2">ZAŁĄCZNIKI</h1>
        <hr className="bg-gray-100 mb-2"></hr>
        {alertContent['zalaczniki']?.changed && <button className={alertButtonClass} type='button' onClick={() => toggleAlert('zalaczniki')}>!</button>}
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
