'use client';

import { useState } from 'react';

export default function Strona3({ formData, setFormData, alertContent = {} }) {
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

  const korespondencja = formData.zawiadamiajacy.adresKorespondencji;
  const wypadek = formData.wypadek;

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
      <div>
        <h1 className="font-semibold mb-2">ADRES DO KORESPONDENCJI</h1>
        <hr className="bg-gray-100 mb-2"></hr>
        <label className="col-span-3 block text-xs font-medium text-gray-500 mb-1">Podaj, jeśli adres do korespondencji jest inny niż adres zamieszkania</label>
        <label className="block text-sm font-medium text-gray-700">Ulica:</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź nazwę ulicy"
          value={korespondencja.ulica}
          onChange={(e) => handleNestedChange('zawiadamiajacy', 'adresKorespondencji', 'ulica', e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-2 block text-sm font-medium text-gray-700">Numer domu i Lokalu</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź domu"
          value={korespondencja.numerDomu}
          onChange={(e) => handleNestedChange('zawiadamiajacy', 'adresKorespondencji', 'numerDomu', e.target.value)}
        /> 
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź lokalu"
          value={korespondencja.numerLokalu}
          onChange={(e) => handleNestedChange('zawiadamiajacy', 'adresKorespondencji', 'numerLokalu', e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-2 block text-sm font-medium text-gray-700">Kod pocztowy i miejscowość</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź kod pocztowy"
          value={korespondencja.kodPocztowy}
          onChange={(e) => handleNestedChange('zawiadamiajacy', 'adresKorespondencji', 'kodPocztowy', e.target.value)}
        /> 
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź miejscowość"
          value={korespondencja.miejscowosc}
          onChange={(e) => handleNestedChange('zawiadamiajacy', 'adresKorespondencji', 'miejscowosc', e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Gmina/dzielnica:</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź nazwę gminy lub dzielnicy"
          value={korespondencja.gmina}
          onChange={(e) => handleNestedChange('zawiadamiajacy', 'adresKorespondencji', 'gmina', e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Państwo:</label>
        <label className="col-span-3 block text-xs font-medium text-gray-500 mb-1">Podaj, jeśli adres inny niż polski</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź państwo"
          value={korespondencja.panstwo}
          onChange={(e) => handleNestedChange('zawiadamiajacy', 'adresKorespondencji', 'panstwo', e.target.value)}
        />
      </div>

      <div className="grid grid-cols-3 gap-2 relative">
        <label className="col-span-3 block text-sm font-medium text-gray-700">Data wypadku</label>
        <input
          type="date"
          className="col-span-3 mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={wypadek.dataWypadku}
          onChange={(e) => handleChange('wypadek', 'dataWypadku', e.target.value)}
        />
        {alertContent['wypadekData']?.changed && <button className={alertButtonClass} type='button' onClick={() => toggleAlert('wypadekData')}>!</button>}
      </div>
      <div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Godzina Wypadku</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź godzinę wypadku"
          value={wypadek.godzinaWypadku}
          onChange={(e) => handleChange('wypadek', 'godzinaWypadku', e.target.value)}
        />
      </div>
      <div className="relative mb-4">
        <label className="block text-sm font-medium text-gray-700">Miejsce Wypadku</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź miejsce wypadku"
          value={wypadek.miejsceWypadku}
          onChange={(e) => handleChange('wypadek', 'miejsceWypadku', e.target.value)}
        />
        {alertContent['wypadekMiejsce']?.changed && <button className={alertButtonClass} type='button' onClick={() => toggleAlert('wypadekMiejsce')}>!</button>}
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="block text-sm font-medium text-gray-700">Planowana godzina rozpoczęcia pracy w dniu wypadku</label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Wprowadź godzinę"
            value={wypadek.godzinaPoczatkuPracy}
            onChange={(e) => handleChange('wypadek', 'godzinaPoczatkuPracy', e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Planowana godzina zakończenia pracy w dniu wypadku</label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Wprowadź godzinę"
            value={wypadek.godzinaKoncaPracy}
            onChange={(e) => handleChange('wypadek', 'godzinaKoncaPracy', e.target.value)}
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Rodzaj doznanych urazów</label>
        <textarea
          className="mt-1 block w-full min-h-20 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Opisz doznane urazy"
          value={wypadek.rodzajUrazow}
          onChange={(e) => handleChange('wypadek', 'rodzajUrazow', e.target.value)}
        />
      </div>
      <div className="relative">
        <label className="block text-sm font-medium text-gray-700">Szczegółowy opis okoliczności, miejsca i przyczyn wypadku</label>
        <textarea
          className="mt-1 block w-full min-h-60 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Szczegółowy opis okoliczności, miejsca i przyczyn wypadku"
          value={wypadek.opisOkolicznosci}
          onChange={(e) => handleChange('wypadek', 'opisOkolicznosci', e.target.value)}
        />
        {alertContent['wypadekOpis']?.changed && <button className={alertButtonClass} type='button' onClick={() => toggleAlert('wypadekOpis')}>!</button>}
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-3 block text-sm font-medium text-gray-700">Czy była udzielona pierwsza pomoc medyczna:</label>
        <div className="flex items-center">
          <input
            type="radio"
            id="pierwsza_pomoc_TAK"
            name="pierwsza_pomoc"
            value="TAK"
            checked={wypadek.pierwszaPomoc === true}
            onChange={() => handleChange('wypadek', 'pierwszaPomoc', true)}
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
            checked={wypadek.pierwszaPomoc === false}
            onChange={() => handleChange('wypadek', 'pierwszaPomoc', false)}
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
          value={wypadek.opisPierwszejPomocy}
          onChange={(e) => handleChange('wypadek', 'opisPierwszejPomocy', e.target.value)}
        />        
        <label className="col-span-3 block text-xs font-medium text-gray-500 mb-1">Jeśli TAK, podaj nazwę i adres placówki służby zdrowia</label>
      </div>
    </div>
  );
}
