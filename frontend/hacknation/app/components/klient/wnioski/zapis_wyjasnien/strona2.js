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

  const toggleAlert = (key) => {
    setActiveAlert(prev => (prev === key ? null : key));
  };

  const maszyny = formData.maszyny;

  const buttonClassName = `px-2 py-1 border border-gray-400 rounded hover:bg-gray-200 transition-colors`
  const alertButtonClass = `absolute top-0 right-0 px-3 py-1 bg-red-500 text-white rounded shadow border border-red-600 cursor-pointer hover:bg-red-100 hover:text-red-700 hover:border-red-200`
  const separatorClassName = `mx-1 text-gray-600`

  const activeAlertContent = activeAlert ? alertContent[activeAlert] : null;
  
  const containerClasses = `bg-gray-50/60 w-full max-w-2xl p-4 rounded-xl flex flex-col space-y-4 mb-4 relative`;

  
  const getButtonClass = (value, selected) => {
    const isNotSelected = value && value !== selected;
    return `${buttonClassName} ${selected === value ? 'bg-cyan-100' : ''} ${isNotSelected ? 'line-through text-gray-500' : ''}`;
  }

  return (
    <div className={containerClasses}>
      {/* Alert Overlay */}
      <div className="pointer-events-none fixed inset-x-0 top-4 z-50">
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
      </div>
      
      <div className="space-y-2 relative">
        <label className="block font-medium">4. Wypadek powstał pod czas obsługi maszyn i/lub urządzenia:</label>
        <div className="flex items-center gap-2">
          <button className={getButtonClass('tak', maszyny.wypadekMaszyna)} type='button' onClick={() => handleChange('wypadekMaszyna', 'tak')}>tak</button>
          <span className={separatorClassName}>/</span>
          <button className={getButtonClass('nie', maszyny.wypadekMaszyna)} type='button' onClick={() => handleChange('wypadekMaszyna', 'nie')}>Nie</button>
          <span className="text-red-600 text-lg ml-2">*</span>
          {alertContent['wypadekMaszyna']?.changed && <button className={alertButtonClass} type='button' onClick={() => toggleAlert('wypadekMaszyna')}>!</button>}
        </div>

      </div>
      <div className="space-y-3">
        <div className="relative space-y-1">
          <label className="block text-sm">- nazwa, typ urządzenia, data produkcji</label>
          <textarea className="w-full border border-gray-300 rounded p-2" placeholder='........' value={maszyny.nazwaMaszyny} onChange={(e) => handleChange('nazwaMaszyny', e.target.value)}></textarea>
          {alertContent['nazwaMaszyny']?.changed && <button className={alertButtonClass} type='button' onClick={() => toggleAlert('nazwaMaszyny')}>!</button>}
        </div>
        <div className="relative space-y-1">
          <label className="block text-sm">- czy urządzenie było sprawne i użytkowane zgodnie z zasadami producenta (w jaki sposób)</label>
          <textarea className="w-full border border-gray-300 rounded p-2" placeholder='........' value={maszyny.sprawnosc} onChange={(e) => handleChange('sprawnosc', e.target.value)}></textarea>
          {alertContent['sprawnosc']?.changed && <button className={alertButtonClass} type='button' onClick={() => toggleAlert('sprawnosc')}>!</button>}
        </div>
      </div>
      <div className="space-y-2 relative">
        <label className="block font-medium">5. Czy były stosowane zabezpieczenia przed wypadkiem:</label>
        <div className="flex items-center gap-2 flex-wrap">
          <button className={getButtonClass('tak', maszyny.zabezpieczenia)} type='button' onClick={() => handleChange('zabezpieczenia', 'tak')}>tak</button>
          <span className={separatorClassName}>/</span>
          <button className={getButtonClass('nie', maszyny.zabezpieczenia)} type='button' onClick={() => handleChange('zabezpieczenia', 'nie')}>Nie</button>
          <span className={separatorClassName}>/</span>
          <button className={getButtonClass('nie dotyczy', maszyny.zabezpieczenia)} type='button' onClick={() => handleChange('zabezpieczenia', 'nie dotyczy')}>Nie dotyczy</button>
          <span className="text-red-600 text-lg ml-2">*</span>
        </div>
        {alertContent['zabezpieczenia']?.changed && <button className={alertButtonClass} type='button' onClick={() => toggleAlert('zabezpieczenia')}>!</button>}
      </div>
      <div className="space-y-3">
        <div className="relative space-y-1">
          <label className="block text-sm">- rodzaj stosowanych środków (np. buty, kask, odzież ochronna)</label>
          <textarea className="w-full border border-gray-300 rounded p-2" placeholder='........' value={maszyny.rodzajSrodkow} onChange={(e) => handleChange('rodzajSrodkow', e.target.value)}></textarea>
          {alertContent['rodzajSrodkow']?.changed && <button className={alertButtonClass} type='button' onClick={() => toggleAlert('rodzajSrodkow')}>!</button>}
        </div>
        <div className="relative space-y-1">
          <label className="block text-sm">- czy stosowane środki były właściwe i sprawne</label>
          <textarea className="w-full border border-gray-300 rounded p-2" placeholder='........' value={maszyny.sprawnoscSrodkow} onChange={(e) => handleChange('sprawnoscSrodkow', e.target.value)}></textarea>
          {alertContent['sprawnoscSrodkow']?.changed && <button className={alertButtonClass} type='button' onClick={() => toggleAlert('sprawnoscSrodkow')}>!</button>}
        </div>
      </div>
      <div className="space-y-2 relative">
        <label className="block font-medium">6. Czy była stosowana asekuracja podczas pracy:</label>
        <div className="flex items-center gap-2 flex-wrap">
          <button className={getButtonClass('tak', maszyny.asekuracja)} type='button' onClick={() => handleChange('asekuracja', 'tak')}>tak</button>
          <span className={separatorClassName}>/</span>
          <button className={getButtonClass('nie', maszyny.asekuracja)} type='button' onClick={() => handleChange('asekuracja', 'nie')}>Nie</button>
          <span className={separatorClassName}>/</span>
          <button className={getButtonClass('nie dotyczy', maszyny.asekuracja)} type='button' onClick={() => handleChange('asekuracja', 'nie dotyczy')}>Nie dotyczy</button>
          <span className="text-red-600 text-lg ml-2">*</span>
        </div>
        {alertContent['asekuracja']?.changed && <button className={alertButtonClass} type='button' onClick={() => toggleAlert('asekuracja')}>!</button>}
      </div>
      <div className="space-y-3 relative">
        <label className="block text-sm">- czy istniał obowiązek wykonywania pracy przez co najmniej 2 osoby</label>
        <textarea className="w-full border border-gray-300 rounded p-2" placeholder='........' value={maszyny.obowiazekDwochOsob} onChange={(e) => handleChange('obowiazekDwochOsob', e.target.value)}></textarea>
        {alertContent['obowiazekDwochOsob']?.changed && <button className={alertButtonClass} type='button' onClick={() => toggleAlert('obowiazekDwochOsob')}>!</button>}
      </div>
      <div className="space-y-2 relative">
        <label className="block font-medium">7. W trakcie pracy przestrzegałem/am zasad BHP:</label>
        <div className="flex items-center gap-2">
          <button className={getButtonClass('tak', maszyny.bhp)} type='button' onClick={() => handleChange('bhp', 'tak')}>tak</button>
          <span className={separatorClassName}>/</span>
          <button className={getButtonClass('nie', maszyny.bhp)} type='button' onClick={() => handleChange('bhp', 'nie')}>Nie</button>
          <span className="text-red-600 text-lg ml-2">*</span>
        </div>
        {alertContent['bhp']?.changed && <button className={alertButtonClass} type='button' onClick={() => toggleAlert('bhp')}>!</button>}
      </div>
      <div className="space-y-2 relative">
        <label className="block font-medium">8. Posiadam przygotowanie do wykonywania zakresu przedmiotowego zadań związanych z prowadzeniem działalności:</label>
        <div className="flex items-center gap-2">
          <button className={getButtonClass('tak', maszyny.przygotowanie)} type='button' onClick={() => handleChange('przygotowanie', 'tak')}>tak</button>
          <span className={separatorClassName}>/</span>
          <button className={getButtonClass('nie', maszyny.przygotowanie)} type='button' onClick={() => handleChange('przygotowanie', 'nie')}>Nie</button>
          <span className="text-red-600 text-lg ml-2">*</span>
        </div>
        {alertContent['przygotowanie']?.changed && <button className={alertButtonClass} type='button' onClick={() => toggleAlert('przygotowanie')}>!</button>}
      </div>
      <div className="space-y-2 relative">
        <label className="block font-medium">9. Odbyłem/am stosowane szkolenie z BHP dla pracodawców</label>
        <div className="flex items-center gap-2">
          <button className={getButtonClass('tak', maszyny.szkolenie)} type='button' onClick={() => handleChange('szkolenie', 'tak')}>tak</button>
          <span className={separatorClassName}>/</span>
          <button className={getButtonClass('nie', maszyny.szkolenie)} type='button' onClick={() => handleChange('szkolenie', 'nie')}>Nie</button>
          <span className="text-red-600 text-lg ml-2">*</span>
        </div>
        {alertContent['szkolenie']?.changed && <button className={alertButtonClass} type='button' onClick={() => toggleAlert('szkolenie')}>!</button>}
      </div>
      <div className="space-y-2 relative">
        <label className="block text-sm">- posiadam opracowaną ocenę ryzyka zawodowego:</label>
        <div className="flex items-center gap-2">
          <button className={getButtonClass('tak', maszyny.ocenaRyzyka)} type='button' onClick={() => handleChange('ocenaRyzyka', 'tak')}>tak</button>
          <span className={separatorClassName}>/</span>
          <button className={getButtonClass('nie', maszyny.ocenaRyzyka)} type='button' onClick={() => handleChange('ocenaRyzyka', 'nie')}>Nie</button>
          <span className="text-red-600 text-lg ml-2">*</span>
        </div>
        {alertContent['ocenaRyzyka']?.changed && <button className={alertButtonClass} type='button' onClick={() => toggleAlert('ocenaRyzyka')}>!</button>}
      </div>
      <div className="space-y-3 relative">
        <label className="block text-sm">- stosowane środki w celu zmniejszenia ryzyka:</label>
        <textarea className="w-full border border-gray-300 rounded p-2" placeholder='........' value={maszyny.srodkiZmniejszenia} onChange={(e) => handleChange('srodkiZmniejszenia', e.target.value)}></textarea>
        {alertContent['srodkiZmniejszenia']?.changed && <button className={alertButtonClass} type='button' onClick={() => toggleAlert('srodkiZmniejszenia')}>!</button>}
      </div>
      <div className="space-y-2 relative">
        <label className="block font-medium">10. W chwili wypadku</label>
        <div className="flex items-center gap-2 flex-wrap">
          <button className={getButtonClass('tak', maszyny.stanNietrzezwosci)} type='button' onClick={() => handleChange('stanNietrzezwosci', 'tak')}>byłem/am</button>
          <span className={separatorClassName}>/</span>
          <button className={getButtonClass('nie', maszyny.stanNietrzezwosci)} type='button' onClick={() => handleChange('stanNietrzezwosci', 'nie')}>nie byłem/am</button>
          <span className="text-red-600 text-lg">*</span><label>w stanie nietrzeźwości lub pod wpływem środków odurzających lub psychotropowych.</label>
        </div>
        {alertContent['stanNietrzezwosci']?.changed && <button className={alertButtonClass} type='button' onClick={() => toggleAlert('stanNietrzezwosci')}>!</button>}
      </div>
      <div className="space-y-2 relative">
        <label className="block font-medium">Stan trzeźwości w dacie wypadku:</label>
        <div className="flex items-center gap-2 flex-wrap">
          <button className={getButtonClass('policja', maszyny.badanieTrzezwosci)} type='button' onClick={() => handleChange('badanieTrzezwosci', 'policja')}>badany przez organ policji</button>
          <span className={separatorClassName}>/</span>
          <button className={getButtonClass('pomoc', maszyny.badanieTrzezwosci)} type='button' onClick={() => handleChange('badanieTrzezwosci', 'pomoc')}>badany w czasie udzielania pierwszej pomocy lekarskiej</button>
          <span className={separatorClassName}>/</span>
          <button className={getButtonClass('nie', maszyny.badanieTrzezwosci)} type='button' onClick={() => handleChange('badanieTrzezwosci', 'nie')}>nie był badany</button>
          <span className="text-red-600 text-lg ml-2">*</span>
        </div>
        {alertContent['badanieTrzezwosci']?.changed && <button className={alertButtonClass} type='button' onClick={() => toggleAlert('badanieTrzezwosci')}>!</button>}
      </div>
      <div className="space-y-2 relative">
        <label className="block font-medium">11. W sprawie</label>
        <div className="flex items-center gap-2">
          <button className={getButtonClass('tak', maszyny.czynnosciWyjasniajace)} type='button' onClick={() => handleChange('czynnosciWyjasniajace', 'tak')}>były</button>
          <span className={separatorClassName}>/</span>
          <button className={getButtonClass('nie', maszyny.czynnosciWyjasniajace)} type='button' onClick={() => handleChange('czynnosciWyjasniajace', 'nie')}>nie były</button>
          <span className="text-red-600 text-lg ml-2">*</span><label>podjęte czynności wyjaśniające przez organ kontroli państwowej - tj. policji, prokuratury, inspekcji pracy, dozoru technicznego, inspekcji sanitarnej, straży pożarnej (jeżeli tak, należy podać przez jakie - adres, nr sprawy / decyzji, stan sprawy - zakończony / w trakcie / umorzone itp.)</label>
        </div>
        <textarea className="w-full border border-gray-300 rounded p-2" placeholder='........' value={maszyny.opisCzynnosci} onChange={(e) => handleChange('opisCzynnosci', e.target.value)}></textarea>
        {alertContent['czynnosciWyjasniajace']?.changed && <button className={alertButtonClass} type='button' onClick={() => toggleAlert('czynnosciWyjasniajace')}>!</button>}
        {alertContent['opisCzynnosci']?.changed && <button className={alertButtonClass + ' top-32'} type='button' onClick={() => toggleAlert('opisCzynnosci')}>!</button>}
      </div>
      <div className='mt-8'>
        <label className='text-sm text-gray-600'><span className='text-lg text-red-600'>*</span> niepotrzebne skreślić</label>
      </div>
    </div>
  );
}