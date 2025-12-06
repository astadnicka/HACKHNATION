'use client';

import { useState } from 'react';

export default function Strona3() {
  const [dataPomoc, setDataPomoc] = useState('');
  const [nazwaPlacowki, setNazwaPlacowki] = useState('');
  const [okresHospitalizacji, setOkresHospitalizacji] = useState('');
  const [rozpoznanyUraz, setRozpoznanyUraz] = useState('');
  const [niezdolnoscOd, setNiezdolnoscOd] = useState('');
  const [niezdolnoscDo, setNiezdolnoscDo] = useState('');
  const [zwolnienieLekarskie, setZwolnienieLekarskie] = useState('');
  const [miejscowosc, setMiejscowosc] = useState('');
  const [dataPodpisu, setDataPodpisu] = useState('');
  const [podpisPoszkodowanego, setPodpisPoszkodowanego] = useState('');
  const [protokolanci, setProtokolanci] = useState('');

  const simpleClassName = `px-2 py-1 border border-gray-300 rounded`
  const buttonClassName = `px-2 py-1 border border-gray-400 rounded hover:bg-gray-200 transition-colors`
  const separatorClassName = `mx-1 text-gray-600`
  
  const getButtonClass = (value, selected) => {
    const isNotSelected = value && value !== selected;
    return `${buttonClassName} ${selected === value ? 'bg-cyan-100' : ''} ${isNotSelected ? 'line-through text-gray-500' : ''}`;
  }

  return (
    <div className="bg-gray-50/60 w-full max-w-2xl p-4 rounded-xl flex flex-col space-y-4 mb-4">
      <div className="space-y-2">
        <label className="block font-medium">12. Pierwsza pomoc</label>
      </div>
      <div className="space-y-3">
        <div className="space-y-1">
          <label className="block text-sm">- pierwszej pomocy udzielono w dacie urazu - w dniu</label>
          <input className={simpleClassName} type='date' value={dataPomoc} onChange={(e) => setDataPomoc(e.target.value)}></input>
        </div>
        <div className="space-y-1">
          <label className="block text-sm">- nazwa placówki służby zdrowia</label>
          <textarea className="w-full border border-gray-300 rounded p-2" placeholder='........' value={nazwaPlacowki} onChange={(e) => setNazwaPlacowki(e.target.value)}></textarea>
        </div>
        <div className="space-y-1">
          <label className="block text-sm">- okres i miejsce hospitalizacji</label>
          <textarea className="w-full border border-gray-300 rounded p-2" placeholder='........' value={okresHospitalizacji} onChange={(e) => setOkresHospitalizacji(e.target.value)}></textarea>
        </div>
        <div className="space-y-1">
          <label className="block text-sm">- rozpoznany uraz na podstawie dokumentacji lekarskiej</label>
          <textarea className="w-full border border-gray-300 rounded p-2" placeholder='........' value={rozpoznanyUraz} onChange={(e) => setRozpoznanyUraz(e.target.value)}></textarea>
        </div>
        <div className="space-y-1">
          <label className="block text-sm">- niezdolność do świadczenia pracy od</label>
          <div className="flex gap-2 items-center">
            <input className={simpleClassName} type='date' value={niezdolnoscOd} onChange={(e) => setNiezdolnoscOd(e.target.value)}></input>
            <label className="text-sm">do</label>
            <input className={simpleClassName} type='date' value={niezdolnoscDo} onChange={(e) => setNiezdolnoscDo(e.target.value)}></input>
          </div>
        </div>
        <div className="space-y-2">
          <label className="block text-sm">- w dacie wypadku</label>
          <div className="flex items-center gap-2">
            <button className={getButtonClass('tak', zwolnienieLekarskie)} onClick={() => setZwolnienieLekarskie('tak')}>przebywałem/am</button>
            <span className={separatorClassName}>/</span>
            <button className={getButtonClass('nie', zwolnienieLekarskie)} onClick={() => setZwolnienieLekarskie('nie')}>nie przebywałem/am</button>
            <span className="text-red-600 text-lg ml-2">*</span><label>na zwolnieniu lekarskim</label>
          </div>
        </div>
      </div>
      <div className='flex justify-between gap-4'>
        <div className='space-y-1'>
          <input className={simpleClassName} placeholder='miejscowość' value={miejscowosc} onChange={(e) => setMiejscowosc(e.target.value)}></input>
          <input className={simpleClassName} type='date' value={dataPodpisu} onChange={(e) => setDataPodpisu(e.target.value)}></input>
        </div>
        <div>
          <textarea className={`${simpleClassName} resize-none h-20`} placeholder='podpis poszkodowanego' value={podpisPoszkodowanego} onChange={(e) => setPodpisPoszkodowanego(e.target.value)}></textarea>
        </div>
      </div>
      <div className='flex gap-4 items-start'>
        <label className='text-sm pt-2'>Protokowali i potwierdzili własnoręczność podpisu</label>
        <textarea className={`${simpleClassName} resize-none h-20`} placeholder='........' value={protokolanci} onChange={(e) => setProtokolanci(e.target.value)}></textarea>
      </div>
      <div className='mt-8'>
        <label className='text-sm text-gray-600'><span className='text-lg text-red-600'>*</span> niepotrzebne skreślić</label>
      </div>
    </div>
  );
}