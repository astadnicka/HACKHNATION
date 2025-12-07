'use client';

import { useState } from 'react';

export default function Strona2({ formData, setFormData, alertContent = {} }) {
  const [activeAlert, setActiveAlert] = useState(null);

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      maszyny: {
        ...prev.maszyny,
        [field]: value
      }
    }));
  };

  const maszyny = formData.maszyny;

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
        <label className="block font-medium">4. Wypadek powstał pod czas obsługi maszyn i/lub urządzenia:</label>
        <div className="flex items-center gap-2">
          <button className={getButtonClass('tak', maszyny.wypadekMaszyna)} type='button' onClick={() => handleChange('wypadekMaszyna', 'tak')}>tak</button>
          <span className={separatorClassName}>/</span>
          <button className={getButtonClass('nie', maszyny.wypadekMaszyna)} type='button' onClick={() => handleChange('wypadekMaszyna', 'nie')}>Nie</button>
          <button className="px-2 py-1 border border-gray-400 rounded hover:bg-gray-200 transition-colors ml-2 font-bold" type='button' onClick={() => setActiveAlert(prev => (prev === 'wypadekMaszyna' ? null : 'wypadekMaszyna'))}>!</button>
          <span className="text-red-600 text-lg ml-2">*</span>
        </div>
      </div>
      <div className="space-y-3">
        <label className="block text-sm">- nazwa, typ urządzenia, data produkcji</label>
        <textarea className="w-full border border-gray-300 rounded p-2" placeholder='........' value={maszyny.nazwaMaszyny} onChange={(e) => handleChange('nazwaMaszyny', e.target.value)}></textarea>
        <label className="block text-sm">- czy urządzenie było sprawne i użytkowane zgodnie z zasadami producenta (w jaki sposób)</label>
        <textarea className="w-full border border-gray-300 rounded p-2" placeholder='........' value={maszyny.sprawnosc} onChange={(e) => handleChange('sprawnosc', e.target.value)}></textarea>
      </div>
      <div className="space-y-2">
        <label className="block font-medium">5. Czy były stosowane zabezpieczenia przed wypadkiem:</label>
        <div className="flex items-center gap-2 flex-wrap">
          <button className={getButtonClass('tak', maszyny.zabezpieczenia)} type='button' onClick={() => handleChange('zabezpieczenia', 'tak')}>tak</button>
          <span className={separatorClassName}>/</span>
          <button className={getButtonClass('nie', maszyny.zabezpieczenia)} type='button' onClick={() => handleChange('zabezpieczenia', 'nie')}>Nie</button>
          <span className={separatorClassName}>/</span>
          <button className={getButtonClass('nie dotyczy', maszyny.zabezpieczenia)} type='button' onClick={() => handleChange('zabezpieczenia', 'nie dotyczy')}>Nie dotyczy</button>
          <span className="text-red-600 text-lg ml-2">*</span>
        </div>
      </div>
      <div className="space-y-3">
        <label className="block text-sm">- rodzaj stosowanych środków (np. buty, kask, odzież ochronna)</label>
        <textarea className="w-full border border-gray-300 rounded p-2" placeholder='........' value={maszyny.rodzajSrodkow} onChange={(e) => handleChange('rodzajSrodkow', e.target.value)}></textarea>
        <label className="block text-sm">- czy stosowane środki były właściwe i sprawne</label>
        <textarea className="w-full border border-gray-300 rounded p-2" placeholder='........' value={maszyny.sprawnoscSrodkow} onChange={(e) => handleChange('sprawnoscSrodkow', e.target.value)}></textarea>
      </div>
      <div className="space-y-2">
        <label className="block font-medium">6. Czy była stosowana asekuracja podczas pracy:</label>
        <div className="flex items-center gap-2 flex-wrap">
          <button className={getButtonClass('tak', maszyny.asekuracja)} type='button' onClick={() => handleChange('asekuracja', 'tak')}>tak</button>
          <span className={separatorClassName}>/</span>
          <button className={getButtonClass('nie', maszyny.asekuracja)} type='button' onClick={() => handleChange('asekuracja', 'nie')}>Nie</button>
          <span className={separatorClassName}>/</span>
          <button className={getButtonClass('nie dotyczy', maszyny.asekuracja)} type='button' onClick={() => handleChange('asekuracja', 'nie dotyczy')}>Nie dotyczy</button>
          <span className="text-red-600 text-lg ml-2">*</span>
        </div>
      </div>
      <div className="space-y-3">
        <label className="block text-sm">- czy istniał obowiązek wykonywania pracy przez co najmniej 2 osoby</label>
        <textarea className="w-full border border-gray-300 rounded p-2" placeholder='........' value={maszyny.obowiazekDwochOsob} onChange={(e) => handleChange('obowiazekDwochOsob', e.target.value)}></textarea>
      </div>
      <div className="space-y-2">
        <label className="block font-medium">7. W trakcie pracy przestrzegałem/am zasad BHP:</label>
        <div className="flex items-center gap-2">
          <button className={getButtonClass('tak', maszyny.bhp)} type='button' onClick={() => handleChange('bhp', 'tak')}>tak</button>
          <span className={separatorClassName}>/</span>
          <button className={getButtonClass('nie', maszyny.bhp)} type='button' onClick={() => handleChange('bhp', 'nie')}>Nie</button>
          <span className="text-red-600 text-lg ml-2">*</span>
        </div>
      </div>
      <div className="space-y-2">
        <label className="block font-medium">8. Posiadam przygotowanie do wykonywania zakresu przedmiotowego zadań związanych z prowadzeniem działalności:</label>
        <div className="flex items-center gap-2">
          <button className={getButtonClass('tak', maszyny.przygotowanie)} type='button' onClick={() => handleChange('przygotowanie', 'tak')}>tak</button>
          <span className={separatorClassName}>/</span>
          <button className={getButtonClass('nie', maszyny.przygotowanie)} type='button' onClick={() => handleChange('przygotowanie', 'nie')}>Nie</button>
          <span className="text-red-600 text-lg ml-2">*</span>
        </div>
      </div>
      <div className="space-y-2">
        <label className="block font-medium">9. Odbyłem/am stosowane szkolenie z BHP dla pracodawców</label>
        <div className="flex items-center gap-2">
          <button className={getButtonClass('tak', maszyny.szkolenie)} type='button' onClick={() => handleChange('szkolenie', 'tak')}>tak</button>
          <span className={separatorClassName}>/</span>
          <button className={getButtonClass('nie', maszyny.szkolenie)} type='button' onClick={() => handleChange('szkolenie', 'nie')}>Nie</button>
          <span className="text-red-600 text-lg ml-2">*</span>
        </div>
      </div>
      <div className="space-y-2">
        <label className="block text-sm">- posiadam opracowaną ocenę ryzyka zawodowego:</label>
        <div className="flex items-center gap-2">
          <button className={getButtonClass('tak', maszyny.ocenaRyzyka)} type='button' onClick={() => handleChange('ocenaRyzyka', 'tak')}>tak</button>
          <span className={separatorClassName}>/</span>
          <button className={getButtonClass('nie', maszyny.ocenaRyzyka)} type='button' onClick={() => handleChange('ocenaRyzyka', 'nie')}>Nie</button>
          <span className="text-red-600 text-lg ml-2">*</span>
        </div>
      </div>
      <div className="space-y-3">
        <label className="block text-sm">- stosowane środki w celu zmniejszenia ryzyka:</label>
        <textarea className="w-full border border-gray-300 rounded p-2" placeholder='........' value={maszyny.srodkiZmniejszenia} onChange={(e) => handleChange('srodkiZmniejszenia', e.target.value)}></textarea>
      </div>
      <div className="space-y-2">
        <label className="block font-medium">10. W chwili wypadku</label>
        <div className="flex items-center gap-2 flex-wrap">
          <button className={getButtonClass('tak', maszyny.stanNietrzezwosci)} type='button' onClick={() => handleChange('stanNietrzezwosci', 'tak')}>byłem/am</button>
          <span className={separatorClassName}>/</span>
          <button className={getButtonClass('nie', maszyny.stanNietrzezwosci)} type='button' onClick={() => handleChange('stanNietrzezwosci', 'nie')}>nie byłem/am</button>
          <span className="text-red-600 text-lg">*</span><label>w stanie nietrzeźwości lub pod wpływem środków odurzających lub psychotropowych.</label>
        </div>
      </div>
      <div className="space-y-2">
        <label className="block font-medium">Stan trzeźwości w dacie wypadku:</label>
        <div className="flex items-center gap-2 flex-wrap">
          <button className={getButtonClass('policja', maszyny.badanieTrzezwosci)} type='button' onClick={() => handleChange('badanieTrzezwosci', 'policja')}>badany przez organ policji</button>
          <span className={separatorClassName}>/</span>
          <button className={getButtonClass('pomoc', maszyny.badanieTrzezwosci)} type='button' onClick={() => handleChange('badanieTrzezwosci', 'pomoc')}>badany w czasie udzielania pierwszej pomocy lekarskiej</button>
          <span className={separatorClassName}>/</span>
          <button className={getButtonClass('nie', maszyny.badanieTrzezwosci)} type='button' onClick={() => handleChange('badanieTrzezwosci', 'nie')}>nie był badany</button>
          <span className="text-red-600 text-lg ml-2">*</span>
        </div>
      </div>
      <div className="space-y-2">
        <label className="block font-medium">11. W sprawie</label>
        <div className="flex items-center gap-2">
          <button className={getButtonClass('tak', maszyny.czynnosciWyjasniajace)} type='button' onClick={() => handleChange('czynnosciWyjasniajace', 'tak')}>były</button>
          <span className={separatorClassName}>/</span>
          <button className={getButtonClass('nie', maszyny.czynnosciWyjasniajace)} type='button' onClick={() => handleChange('czynnosciWyjasniajace', 'nie')}>nie były</button>
          <span className="text-red-600 text-lg ml-2">*</span><label>podjęte czynności wyjaśniające przez organ kontroli państwowej - tj. policji, prokuratury, inspekcji pracy, dozoru technicznego, inspekcji sanitarnej, straży pożarnej (jeżeli tak, należy podać przez jakie - adres, nr sprawy / decyzji, stan sprawy - zakończony / w trakcie / umorzone itp.)</label>
        </div>
        <textarea className="w-full border border-gray-300 rounded p-2" placeholder='........' value={maszyny.opisCzynnosci} onChange={(e) => handleChange('opisCzynnosci', e.target.value)}></textarea>
      </div>
      <div className='mt-8'>
        <label className='text-sm text-gray-600'><span className='text-lg text-red-600'>*</span> niepotrzebne skreślić</label>
      </div>
    </div>
  );
}