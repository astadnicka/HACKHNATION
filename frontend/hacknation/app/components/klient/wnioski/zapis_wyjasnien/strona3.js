'use client';

import { useState } from 'react';

export default function Strona3({ formData, setFormData, alertContent = {} }) {
  const [activeAlert, setActiveAlert] = useState(null);

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      pomoc: {
        ...prev.pomoc,
        [field]: value
      }
    }));
  };

  const toggleAlert = (key) => {
    setActiveAlert(prev => (prev === key ? null : key));
  };

  const pomoc = formData.pomoc;

  const simpleClassName = `px-2 py-1 border border-gray-300 rounded`
  const buttonClassName = `px-2 py-1 border border-gray-400 rounded hover:bg-gray-200 transition-colors`
  const separatorClassName = `mx-1 text-gray-600`
  const alertButtonClass = `absolute top-0 right-0 px-3 py-1 bg-red-500 text-white rounded shadow border border-red-600 cursor-pointer hover:bg-red-100 hover:text-red-700 hover:border-red-200`
  const activeAlertContent = activeAlert ? alertContent[activeAlert] : null;
  
  const getButtonClass = (value, selected) => {
    const isNotSelected = value && value !== selected;
    return `${buttonClassName} ${selected === value ? 'bg-cyan-100' : ''} ${isNotSelected ? 'line-through text-gray-500' : ''}`;
  }

  return (
    <div className="bg-gray-50/60 w-full max-w-2xl p-4 rounded-xl flex flex-col space-y-4 mb-4 relative">
      {/* Alert Overlay */}
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

      <div className="space-y-2 relative">
        <label className="block font-medium">12. Pierwsza pomoc</label>
      </div>
      <div className="space-y-3">
        <div className='relative space-y-1'>
          <label className='block text-sm'>- pierwszej pomocy udzielono w dacie urazu - w dniu</label>
          <input className={simpleClassName} type='date' value={pomoc.dataPomoc} onChange={(e) => handleChange('dataPomoc', e.target.value)}></input>
          {alertContent['dataPomoc']?.changed && (
            <button className={alertButtonClass} type='button' onClick={() => toggleAlert('dataPomoc')}>!</button>
          )}
        </div>
        <div className="space-y-1 relative">
          <label className="block text-sm">- nazwa placówki służby zdrowia</label>
          <textarea className="w-full border border-gray-300 rounded p-2" placeholder='........' value={pomoc.nazwaPlacowki} onChange={(e) => handleChange('nazwaPlacowki', e.target.value)}></textarea>
          {alertContent['nazwaPlacowki']?.changed && (
            <button className={alertButtonClass} type='button' onClick={() => toggleAlert('nazwaPlacowki')}>!</button>
          )}
        </div>
        <div className="space-y-1 relative">
          <label className="block text-sm">- okres i miejsce hospitalizacji</label>
          <textarea className="w-full border border-gray-300 rounded p-2" placeholder='........' value={pomoc.okresHospitalizacji} onChange={(e) => handleChange('okresHospitalizacji', e.target.value)}></textarea>
          {alertContent['okresHospitalizacji']?.changed && (
            <button className={alertButtonClass} type='button' onClick={() => toggleAlert('okresHospitalizacji')}>!</button>
          )}
        </div>
        <div className="space-y-1 relative">
          <label className="block text-sm">- rozpoznany uraz na podstawie dokumentacji lekarskiej</label>
          <textarea className="w-full border border-gray-300 rounded p-2" placeholder='........' value={pomoc.rozpoznanyUraz} onChange={(e) => handleChange('rozpoznanyUraz', e.target.value)}></textarea>
          {alertContent['rozpoznanyUraz']?.changed && (
            <button className={alertButtonClass} type='button' onClick={() => toggleAlert('rozpoznanyUraz')}>!</button>
          )}
        </div>
        <div className="space-y-1 relative">
          <label className="block text-sm">- niezdolność do świadczenia pracy od</label>
          <div className="flex gap-2 items-center">
            <input className={simpleClassName} type='date' value={pomoc.niezdolnoscOd} onChange={(e) => handleChange('niezdolnoscOd', e.target.value)}></input>
            <label className="text-sm">do</label>
            <input className={simpleClassName} type='date' value={pomoc.niezdolnoscDo} onChange={(e) => handleChange('niezdolnoscDo', e.target.value)}></input>
          </div>
          {alertContent['niezdolnoscDo']?.changed && <button className={alertButtonClass} type='button' onClick={() => toggleAlert('niezdolnoscDo')}>!</button>}
        </div>
        <div className="space-y-2 relative">
          <label className="block text-sm">- w dacie wypadku</label>
          <div className="flex items-center gap-2">
            <button className={getButtonClass('tak', pomoc.zwolnienieLekarskie)} type='button' onClick={() => handleChange('zwolnienieLekarskie', 'tak')}>przebywałem/am</button>
            <span className={separatorClassName}>/</span>
            <button className={getButtonClass('nie', pomoc.zwolnienieLekarskie)} type='button' onClick={() => handleChange('zwolnienieLekarskie', 'nie')}>nie przebywałem/am</button>
            {alertContent['zwolnienieLekarskie']?.changed && (
              <button className={alertButtonClass} type='button' onClick={() => toggleAlert('zwolnienieLekarskie')}>!</button>
            )}
            <span className="text-red-600 text-lg ml-2">*</span><label>na zwolnieniu lekarskim</label>
          </div>
        </div>
      </div>
      <div className='flex justify-between gap-4'>
        <div className='space-y-1'>
          <input className={simpleClassName} placeholder='miejscowość' value={pomoc.miejscowosc} onChange={(e) => handleChange('miejscowosc', e.target.value)}></input>
          <input className={simpleClassName} type='date' value={pomoc.dataPodpisu} onChange={(e) => handleChange('dataPodpisu', e.target.value)}></input>
        </div>
        <div className="space-y-1 relative">
          <textarea className={`${simpleClassName} resize-none h-20`} placeholder='podpis poszkodowanego' value={pomoc.podpisPoszkodowanego} onChange={(e) => handleChange('podpisPoszkodowanego', e.target.value)}></textarea>
          {alertContent['podpisPoszkodowanego']?.changed && (
            <button className={alertButtonClass} type='button' onClick={() => toggleAlert('podpisPoszkodowanego')}>!</button>
          )}
        </div>
      </div>
      <div className='flex gap-4 items-start'>
        <label className='text-sm pt-2'>Protokowali i potwierdzili własnoręczność podpisu</label>
        <div className="flex flex-col gap-1 relative flex-1">
          <textarea className={`${simpleClassName} resize-none h-20`} placeholder='........' value={pomoc.protokolanci} onChange={(e) => handleChange('protokolanci', e.target.value)}></textarea>
          {alertContent['protokolanci']?.changed && (
            <button className={alertButtonClass} type='button' onClick={() => toggleAlert('protokolanci')}>!</button>
          )}
        </div>
      </div>
      <div className='mt-8'>
        <label className='text-sm text-gray-600'><span className='text-lg text-red-600'>*</span> niepotrzebne skreślić</label>
      </div>
    </div>
  );
}