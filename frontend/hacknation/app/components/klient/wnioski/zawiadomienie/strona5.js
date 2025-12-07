'use client';

import { useState } from 'react';

export default function Strona5({ formData, setFormData, alertContent = {} }) {
  const [activeAlert, setActiveAlert] = useState(null);

  const toggleAlert = (key) => {
    setActiveAlert(prev => (prev === key ? null : key));
  };

  const alertButtonClass = `absolute top-0 right-0 px-3 py-1 bg-red-500 text-white rounded shadow border border-red-600 cursor-pointer hover:bg-red-100 hover:text-red-700 hover:border-red-200`;
  const activeAlertContent = activeAlert ? alertContent[activeAlert] : null;

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

  const handleChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const swiadek1 = formData.swiadkowie.swiadek1;
  const swiadek2 = formData.swiadkowie.swiadek2;
  const swiadek3 = formData.swiadkowie.swiadek3;
  const zalaczniki = formData.zalaczniki;
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
          value={swiadek1.imie}
          onChange={(e) => handleNestedChange('swiadkowie', 'swiadek1', 'imie', e.target.value)}
        /> 
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź nazwisko"
          value={swiadek1.nazwisko}
          onChange={(e) => handleNestedChange('swiadkowie', 'swiadek1', 'nazwisko', e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-2 block text-sm font-medium text-gray-700">Numer domu i lokalu</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź numer domu"
          value={swiadek1.numerDomu}
          onChange={(e) => handleNestedChange('swiadkowie', 'swiadek1', 'numerDomu', e.target.value)}
        /> 
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź numer lokalu"
          value={swiadek1.numerLokalu}
          onChange={(e) => handleNestedChange('swiadkowie', 'swiadek1', 'numerLokalu', e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-2 block text-sm font-medium text-gray-700">Kod pocztowy i miejscowość</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź kod pocztowy"
          value={swiadek1.kodPocztowy}
          onChange={(e) => handleNestedChange('swiadkowie', 'swiadek1', 'kodPocztowy', e.target.value)}
        /> 
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź miejscowość"
          value={swiadek1.miejscowosc}
          onChange={(e) => handleNestedChange('swiadkowie', 'swiadek1', 'miejscowosc', e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Gmina/dzielnica:</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź gminę/dzielnicę"
          value={swiadek1.gmina}
          onChange={(e) => handleNestedChange('swiadkowie', 'swiadek1', 'gmina', e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Państwo:</label>
        <label className="col-span-3 block text-xs font-medium text-gray-500 mb-1">Podaj, jeśli adres inny niż polski</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź państwo"
          value={swiadek1.panstwo}
          onChange={(e) => handleNestedChange('swiadkowie', 'swiadek1', 'panstwo', e.target.value)}
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
          value={swiadek2.imie}
          onChange={(e) => handleNestedChange('swiadkowie', 'swiadek2', 'imie', e.target.value)}
        /> 
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź nazwisko"
          value={swiadek2.nazwisko}
          onChange={(e) => handleNestedChange('swiadkowie', 'swiadek2', 'nazwisko', e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-2 block text-sm font-medium text-gray-700">Numer domu i lokalu</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź numer domu"
          value={swiadek2.numerDomu}
          onChange={(e) => handleNestedChange('swiadkowie', 'swiadek2', 'numerDomu', e.target.value)}
        /> 
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź numer lokalu"
          value={swiadek2.numerLokalu}
          onChange={(e) => handleNestedChange('swiadkowie', 'swiadek2', 'numerLokalu', e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-2 block text-sm font-medium text-gray-700">Kod pocztowy i miejscowość</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź kod pocztowy"
          value={swiadek2.kodPocztowy}
          onChange={(e) => handleNestedChange('swiadkowie', 'swiadek2', 'kodPocztowy', e.target.value)}
        /> 
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź miejscowość"
          value={swiadek2.miejscowosc}
          onChange={(e) => handleNestedChange('swiadkowie', 'swiadek2', 'miejscowosc', e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Gmina/dzielnica:</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź gminę/dzielnicę"
          value={swiadek2.gmina}
          onChange={(e) => handleNestedChange('swiadkowie', 'swiadek2', 'gmina', e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Państwo:</label>
        <label className="col-span-3 block text-xs font-medium text-gray-500 mb-1">Podaj, jeśli adres inny niż polski</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź państwo"
          value={swiadek2.panstwo}
          onChange={(e) => handleNestedChange('swiadkowie', 'swiadek2', 'panstwo', e.target.value)}
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
          value={swiadek3.imie}
          onChange={(e) => handleNestedChange('swiadkowie', 'swiadek3', 'imie', e.target.value)}
        /> 
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź nazwisko"
          value={swiadek3.nazwisko}
          onChange={(e) => handleNestedChange('swiadkowie', 'swiadek3', 'nazwisko', e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-2 block text-sm font-medium text-gray-700">Numer domu i lokalu</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź numer domu"
          value={swiadek3.numerDomu}
          onChange={(e) => handleNestedChange('swiadkowie', 'swiadek3', 'numerDomu', e.target.value)}
        /> 
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź numer lokalu"
          value={swiadek3.numerLokalu}
          onChange={(e) => handleNestedChange('swiadkowie', 'swiadek3', 'numerLokalu', e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-2 block text-sm font-medium text-gray-700">Kod pocztowy i miejscowość</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź kod pocztowy"
          value={swiadek3.kodPocztowy}
          onChange={(e) => handleNestedChange('swiadkowie', 'swiadek3', 'kodPocztowy', e.target.value)}
        /> 
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź miejscowość"
          value={swiadek3.miejscowosc}
          onChange={(e) => handleNestedChange('swiadkowie', 'swiadek3', 'miejscowosc', e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Gmina/dzielnica:</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź gminę/dzielnicę"
          value={swiadek3.gmina}
          onChange={(e) => handleNestedChange('swiadkowie', 'swiadek3', 'gmina', e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Państwo:</label>
        <label className="col-span-3 block text-xs font-medium text-gray-500 mb-1">Podaj, jeśli adres inny niż polski</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź państwo"
          value={swiadek3.panstwo}
          onChange={(e) => handleNestedChange('swiadkowie', 'swiadek3', 'panstwo', e.target.value)}
        />
      </div>
      <div className="relative">
        <h1 className="font-semibold mb-2">ZAŁĄCZNIKI</h1>
        <hr className="bg-gray-100 mb-2"></hr>
        {alertContent['zalaczniki']?.changed && <button className={alertButtonClass} type='button' onClick={() => toggleAlert('zalaczniki')}>!</button>}
      </div>
      <div className="flex items-center justify-center gap-3">
        <input className="h-6 w-6 rounded border-gray-300 text-cyan-500 focus:ring-cyan-500 shrink-0" type="checkbox" checked={zalaczniki.kartaInformacyjna} onChange={(e) => handleChange('zalaczniki', 'kartaInformacyjna', e.target.checked)} />
        <label className="text-sm">kserokopia karty informacyjnej ze szpitala/zaświadczenia o udzieleniu pierwszej pomocy z pogotowia ratunkowego wraz z wywiadem</label>
      </div>
      <div className="flex items-center justify-center gap-3">
        <input className="h-6 w-6 rounded border-gray-300 text-cyan-500 focus:ring-cyan-500 shrink-0" type="checkbox" checked={zalaczniki.postanowienieProkuratury} onChange={(e) => handleChange('zalaczniki', 'postanowienieProkuratury', e.target.checked)} />
        <label className="text-sm">kserokopia postanowienia prokuratury o wszczęciu postępowania karnego lub zawieszeniu/umorzeniu postępowania</label>
      </div>
      <div className="flex items-center justify-center gap-3">
        <input className="h-6 w-6 rounded border-gray-300 text-cyan-500 focus:ring-cyan-500 shrink-0" type="checkbox" checked={zalaczniki.aktZgonu} onChange={(e) => handleChange('zalaczniki', 'aktZgonu', e.target.checked)} />
        <label className="text-sm">kserokopia statystycznej karty zgonu lub zaświadczenie lekarskie stwierdzające przyczynę zgonu, skrócony odpis aktu zgonu (w przypadku wypadku ze skutkiem śmiertelnym)</label>
      </div>
    </div>
  );
}
