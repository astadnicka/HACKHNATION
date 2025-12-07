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

  const pomoc = formData.pomoc;

  const simpleClassName = `px-2 py-1 border border-gray-300 rounded`
  const buttonClassName = `px-2 py-1 border border-gray-400 rounded hover:bg-gray-200 transition-colors`
  const separatorClassName = `mx-1 text-gray-600`
  
  const getButtonClass = (value, selected) => {
    const isNotSelected = value && value !== selected;
    return `${buttonClassName} ${selected === value ? 'bg-cyan-100' : ''} ${isNotSelected ? 'line-through text-gray-500' : ''}`;
  }

  return (
    <div className="bg-gray-50/60 w-full max-w-2xl p-4 rounded-xl flex flex-col space-y-4 mb-4 relative">
      {/* Alert Overlay */}
      <div className="pointer-events-none fixed inset-x-0 top-4 z-50">
        {activeAlert && alertContent[activeAlert] && !alertContent[activeAlert].changed && (
          <div className="pointer-events-auto max-w-md mx-auto bg-white border border-gray-300 rounded-lg shadow-lg p-4">
            <div className="font-bold text-gray-800 mb-2">{alertContent[activeAlert].title}</div>
            <div className="text-sm text-gray-700 mb-3">{alertContent[activeAlert].body}</div>
            <button
              onClick={() => setActiveAlert(null)}
              className="text-sm bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded transition-colors"
            >
              Zamknij
            </button>
          </div>
        )}
      </div>

      <div className="space-y-2">
        <label className="block font-medium">12. Pierwsza pomoc</label>
      </div>
      <div className="space-y-3">
        <div className="space-y-1">
          <label className="block text-sm">- pierwszej pomocy udzielono w dacie urazu - w dniu</label>
          <input className={simpleClassName} type='date' value={pomoc.dataPomoc} onChange={(e) => handleChange('dataPomoc', e.target.value)}></input>
        </div>
        <div className="space-y-1">
          <label className="block text-sm">- nazwa placówki służby zdrowia</label>
          <textarea className="w-full border border-gray-300 rounded p-2" placeholder='........' value={pomoc.nazwaPlacowki} onChange={(e) => handleChange('nazwaPlacowki', e.target.value)}></textarea>
        </div>
        <div className="space-y-1">
          <label className="block text-sm">- okres i miejsce hospitalizacji</label>
          <textarea className="w-full border border-gray-300 rounded p-2" placeholder='........' value={pomoc.okresHospitalizacji} onChange={(e) => handleChange('okresHospitalizacji', e.target.value)}></textarea>
        </div>
        <div className="space-y-1">
          <label className="block text-sm">- rozpoznany uraz na podstawie dokumentacji lekarskiej</label>
          <textarea className="w-full border border-gray-300 rounded p-2" placeholder='........' value={pomoc.rozpoznanyUraz} onChange={(e) => handleChange('rozpoznanyUraz', e.target.value)}></textarea>
        </div>
        <div className="space-y-1">
          <label className="block text-sm">- niezdolność do świadczenia pracy od</label>
          <div className="flex gap-2 items-center">
            <input className={simpleClassName} type='date' value={pomoc.niezdolnoscOd} onChange={(e) => handleChange('niezdolnoscOd', e.target.value)}></input>
            <label className="text-sm">do</label>
            <input className={simpleClassName} type='date' value={pomoc.niezdolnoscDo} onChange={(e) => handleChange('niezdolnoscDo', e.target.value)}></input>
          </div>
        </div>
        <div className="space-y-2">
          <label className="block text-sm">- w dacie wypadku</label>
          <div className="flex items-center gap-2">
            <button className={getButtonClass('tak', pomoc.zwolnienieLekarskie)} type='button' onClick={() => handleChange('zwolnienieLekarskie', 'tak')}>przebywałem/am</button>
            <span className={separatorClassName}>/</span>
            <button className={getButtonClass('nie', pomoc.zwolnienieLekarskie)} type='button' onClick={() => handleChange('zwolnienieLekarskie', 'nie')}>nie przebywałem/am</button>
            <button className="px-2 py-1 border border-gray-400 rounded hover:bg-gray-200 transition-colors ml-2 font-bold" type='button' onClick={() => setActiveAlert(prev => (prev === 'zwolnienieLekarskie' ? null : 'zwolnienieLekarskie'))}>!</button>
            <span className="text-red-600 text-lg ml-2">*</span><label>na zwolnieniu lekarskim</label>
          </div>
        </div>
      </div>
      <div className='flex justify-between gap-4'>
        <div className='space-y-1'>
          <input className={simpleClassName} placeholder='miejscowość' value={pomoc.miejscowosc} onChange={(e) => handleChange('miejscowosc', e.target.value)}></input>
          <input className={simpleClassName} type='date' value={pomoc.dataPodpisu} onChange={(e) => handleChange('dataPodpisu', e.target.value)}></input>
        </div>
        <div>
          <textarea className={`${simpleClassName} resize-none h-20`} placeholder='podpis poszkodowanego' value={pomoc.podpisPoszkodowanego} onChange={(e) => handleChange('podpisPoszkodowanego', e.target.value)}></textarea>
        </div>
      </div>
      <div className='flex gap-4 items-start'>
        <label className='text-sm pt-2'>Protokowali i potwierdzili własnoręczność podpisu</label>
        <textarea className={`${simpleClassName} resize-none h-20`} placeholder='........' value={pomoc.protokolanci} onChange={(e) => handleChange('protokolanci', e.target.value)}></textarea>
      </div>
      <div className='mt-8'>
        <label className='text-sm text-gray-600'><span className='text-lg text-red-600'>*</span> niepotrzebne skreślić</label>
      </div>
    </div>
  );
}