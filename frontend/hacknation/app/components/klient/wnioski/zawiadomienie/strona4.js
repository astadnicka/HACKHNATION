'use client';

import { useState } from 'react';

export default function Strona4({ formData, setFormData, alertContent = {} }) {
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
  // Destructure needed data from formData
  const organy = formData.organy;

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
      <div className="relative mb-4">
        <label className="block text-sm font-medium text-gray-700">Organ, który prowadził postępowanie w sprawie wypadku</label>
        <textarea
          className="mt-1 block w-full min-h-20 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wpisz nazwę i adres organu prowadzącego postępowanie"
          value={organy.organPostepowanie}
          onChange={(e) => handleChange('organy', 'organPostepowanie', e.target.value)}
        />        
        <label className="col-span-3 block text-xs font-medium text-gray-500 mb-1">Podaj nazwę i adres organu, który prowadził postępowanie w sprawie wypadku (Policja, Prokuratura, inne)</label>
        {alertContent['organPostepowanie']?.changed && <button className={alertButtonClass} type='button' onClick={() => toggleAlert('organPostepowanie')}>!</button>}
      </div>
      <div className="grid grid-cols-2 gap-2 relative">
        <label className="col-span-3 block text-sm font-medium text-gray-700">Czy wypadek powstał podczas obsługi maszyn lub urządzeń:</label>
        <div className="flex items-center">
          <input
            type="radio"
            id="maszyna_wypadek_TAK"
            name="maszyna_wypadek"
            value="TAK"
            checked={organy.maszynaWypadek === true}
            onChange={() => handleChange('organy', 'maszynaWypadek', true)}
            className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 cursor-pointer"
          />
          <label htmlFor="maszyna_wypadek_TAK" className="ml-2 text-sm text-gray-700 cursor-pointer">
            TAK
          </label>
          </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="maszyna_wypadek_NIE"
            name="maszyna_wypadek"
            value="NIE"
            checked={organy.maszynaWypadek === false}
            onChange={() => handleChange('organy', 'maszynaWypadek', false)}
            className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 cursor-pointer"
          />
          <label htmlFor="maszyna_wypadek_NIE" className="ml-2 text-sm text-gray-700 cursor-pointer">
            NIE
          </label>
        </div>
        {alertContent['maszyny']?.changed && <button className={alertButtonClass} type='button' onClick={() => toggleAlert('maszyny')}>!</button>}
      </div>
      <div>
        <textarea
          className="mt-1 block w-full min-h-20 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Opisz stan maszyny, sposób jej użytkowania oraz zabezpieczenia"
          value={opisMaszyny}
          onChange={(e) => setOpisMaszyny(e.target.value)}
        />        
        <label className="col-span-3 block text-xs font-medium text-gray-500 mb-1">Jeśli TAK, podaj czy maszyna/urządzenie były sprawne i użytkowane zgodnie z zasadami producenta oraz w jaki sposób</label>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-3 block text-sm font-medium text-gray-700">Czy maszyna lub urządzenie posiada atest/deklarację zgodności:</label>
        <div className="flex items-center">
          <input
            type="radio"
            id="atest_TAK"
            name="atest"
            value="TAK"
            checked={atest === true}
            onChange={() => setAtest(true)}
            className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 cursor-pointer"
          />
          <label htmlFor="atest_TAK" className="ml-2 text-sm text-gray-700 cursor-pointer">
            TAK
          </label>
          </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="atest_NIE"
            name="atest"
            value="NIE"
            checked={atest === false}
            onChange={() => setAtest(false)}
            className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 cursor-pointer"
          />
          <label htmlFor="atest_NIE" className="ml-2 text-sm text-gray-700 cursor-pointer">
            NIE
          </label>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-3 block text-sm font-medium text-gray-700">Czy maszyna lub urządzenie zostało wpisane do ewidencji środków trwałych:</label>
        <div className="flex items-center">
          <input
            type="radio"
            id="ewidencja_srodkow_trwalych_TAK"
            name="ewidencja_srodkow_trwalych"
            value="TAK"
            checked={ewidencjaSrodkowTrwalych === true}
            onChange={() => setEwidencjaSrodkowTrwalych(true)}
            className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 cursor-pointer"
          />
          <label htmlFor="ewidencja_srodkow_trwalych_TAK" className="ml-2 text-sm text-gray-700 cursor-pointer">
            TAK
          </label>
          </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="ewidencja_srodkow_trwalych_NIE"
            name="ewidencja_srodkow_trwalych"
            value="NIE"
            checked={ewidencjaSrodkowTrwalych === false}
            onChange={() => setEwidencjaSrodkowTrwalych(false)}
            className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 cursor-pointer"
          />
          <label htmlFor="ewidencja_srodkow_trwalych_NIE" className="ml-2 text-sm text-gray-700 cursor-pointer">
            NIE
          </label>
        </div>
      </div>
    </div>
  );
}