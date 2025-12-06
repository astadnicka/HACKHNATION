'use client';

import { useState } from 'react';

export default function Strona2() {
  const [wypadekMaszyna, setWypadekMaszyna] = useState('');
  const [nazwaMaszyny, setNazwaMaszyny] = useState('');
  const [sprawnosc, setSprawnosc] = useState('');
  const [zabezpieczenia, setZabezpieczenia] = useState('');
  const [rodzajSrodkow, setRodzajSrodkow] = useState('');
  const [sprawnoscSrodkow, setSprawnoscSrodkow] = useState('');
  const [asekuracja, setAsekuracja] = useState('');
  const [obowiazekDwochOsob, setObowiazekDwochOsob] = useState('');
  const [bhp, setBhp] = useState('');
  const [przygotowanie, setPrzygotowanie] = useState('');
  const [szkolenie, setSzkolenie] = useState('');
  const [ocenaRyzyka, setOcenaRyzyka] = useState('');
  const [srodkiZmniejszenia, setSrodkiZmniejszenia] = useState('');
  const [stanNietrzezwosci, setStanNietrzezwosci] = useState('');
  const [badanieTrzezwosci, setBadanieTrzezwosci] = useState('');
  const [czynnosciWyjasniajace, setCzynnosciWyjasniajace] = useState('');
  const [opisCzynnosci, setOpisCzynnosci] = useState('');

  const buttonClassName = `px-2 py-1 border border-gray-400 rounded hover:bg-gray-200 transition-colors`
  const separatorClassName = `mx-1 text-gray-600`
  
  const getButtonClass = (value, selected) => {
    const isNotSelected = value && value !== selected;
    return `${buttonClassName} ${selected === value ? 'bg-cyan-100' : ''} ${isNotSelected ? 'line-through text-gray-500' : ''}`;
  }

  return (
    <div className="bg-gray-50/60 w-full max-w-2xl p-4 rounded-xl flex flex-col space-y-4 mb-4">
      <div className="space-y-2">
        <label className="block font-medium">4. Wypadek powstał pod czas obsługi maszyn i/lub urządzenia:</label>
        <div className="flex items-center gap-2">
          <button className={getButtonClass('tak', wypadekMaszyna)} type='button' onClick={() => setWypadekMaszyna('tak')}>tak</button>
          <span className={separatorClassName}>/</span>
          <button className={getButtonClass('nie', wypadekMaszyna)} type='button' onClick={() => setWypadekMaszyna('nie')}>Nie</button>
          <span className="text-red-600 text-lg ml-2">*</span>
        </div>
      </div>
      <div className="space-y-3">
        <label className="block text-sm">- nazwa, typ urządzenia, data produkcji</label>
        <textarea className="w-full border border-gray-300 rounded p-2" placeholder='........' value={nazwaMaszyny} onChange={(e) => setNazwaMaszyny(e.target.value)}></textarea>
        <label className="block text-sm">- czy urządzenie było sprawne i użytkowane zgodnie z zasadami producenta (w jaki sposób)</label>
        <textarea className="w-full border border-gray-300 rounded p-2" placeholder='........' value={sprawnosc} onChange={(e) => setSprawnosc(e.target.value)}></textarea>
      </div>
      <div className="space-y-2">
        <label className="block font-medium">5. Czy były stosowane zabezpieczenia przed wypadkiem:</label>
        <div className="flex items-center gap-2 flex-wrap">
          <button className={getButtonClass('tak', zabezpieczenia)} type='button' onClick={() => setZabezpieczenia('tak')}>tak</button>
          <span className={separatorClassName}>/</span>
          <button className={getButtonClass('nie', zabezpieczenia)} type='button' onClick={() => setZabezpieczenia('nie')}>Nie</button>
          <span className={separatorClassName}>/</span>
          <button className={getButtonClass('nie dotyczy', zabezpieczenia)} type='button' onClick={() => setZabezpieczenia('nie dotyczy')}>Nie dotyczy</button>
          <span className="text-red-600 text-lg ml-2">*</span>
        </div>
      </div>
      <div className="space-y-3">
        <label className="block text-sm">- rodzaj stosowanych środków (np. buty, kask, odzież ochronna)</label>
        <textarea className="w-full border border-gray-300 rounded p-2" placeholder='........' value={rodzajSrodkow} onChange={(e) => setRodzajSrodkow(e.target.value)}></textarea>
        <label className="block text-sm">- czy stosowane środki były właściwe i sprawne</label>
        <textarea className="w-full border border-gray-300 rounded p-2" placeholder='........' value={sprawnoscSrodkow} onChange={(e) => setSprawnoscSrodkow(e.target.value)}></textarea>
      </div>
      <div className="space-y-2">
        <label className="block font-medium">6. Czy była stosowana asekuracja podczas pracy:</label>
        <div className="flex items-center gap-2 flex-wrap">
          <button className={getButtonClass('tak', asekuracja)} type='button' onClick={() => setAsekuracja('tak')}>tak</button>
          <span className={separatorClassName}>/</span>
          <button className={getButtonClass('nie', asekuracja)} type='button' onClick={() => setAsekuracja('nie')}>Nie</button>
          <span className={separatorClassName}>/</span>
          <button className={getButtonClass('nie dotyczy', asekuracja)} type='button' onClick={() => setAsekuracja('nie dotyczy')}>Nie dotyczy</button>
          <span className="text-red-600 text-lg ml-2">*</span>
        </div>
      </div>
      <div className="space-y-3">
        <label className="block text-sm">- czy istniał obowiązek wykonywania pracy przez co najmniej 2 osoby</label>
        <textarea className="w-full border border-gray-300 rounded p-2" placeholder='........' value={obowiazekDwochOsob} onChange={(e) => setObowiazekDwochOsob(e.target.value)}></textarea>
      </div>
      <div className="space-y-2">
        <label className="block font-medium">7. W trakcie pracy przestrzegałem/am zasad BHP:</label>
        <div className="flex items-center gap-2">
          <button className={getButtonClass('tak', bhp)} type='button' onClick={() => setBhp('tak')}>tak</button>
          <span className={separatorClassName}>/</span>
          <button className={getButtonClass('nie', bhp)} type='button' onClick={() => setBhp('nie')}>Nie</button>
          <span className="text-red-600 text-lg ml-2">*</span>
        </div>
      </div>
      <div className="space-y-2">
        <label className="block font-medium">8. Posiadam przygotowanie do wykonywania zakresu przedmiotowego zadań związanych z prowadzeniem działalności:</label>
        <div className="flex items-center gap-2">
          <button className={getButtonClass('tak', przygotowanie)} type='button' onClick={() => setPrzygotowanie('tak')}>tak</button>
          <span className={separatorClassName}>/</span>
          <button className={getButtonClass('nie', przygotowanie)} type='button' onClick={() => setPrzygotowanie('nie')}>Nie</button>
          <span className="text-red-600 text-lg ml-2">*</span>
        </div>
      </div>
      <div className="space-y-2">
        <label className="block font-medium">9. Odbyłem/am stosowane szkolenie z BHP dla pracodawców</label>
        <div className="flex items-center gap-2">
          <button className={getButtonClass('tak', szkolenie)} type='button' onClick={() => setSzkolenie('tak')}>tak</button>
          <span className={separatorClassName}>/</span>
          <button className={getButtonClass('nie', szkolenie)} type='button' onClick={() => setSzkolenie('nie')}>Nie</button>
          <span className="text-red-600 text-lg ml-2">*</span>
        </div>
      </div>
      <div className="space-y-2">
        <label className="block text-sm">- posiadam opracowaną ocenę ryzyka zawodowego:</label>
        <div className="flex items-center gap-2">
          <button className={getButtonClass('tak', ocenaRyzyka)} type='button' onClick={() => setOcenaRyzyka('tak')}>tak</button>
          <span className={separatorClassName}>/</span>
          <button className={getButtonClass('nie', ocenaRyzyka)} type='button' onClick={() => setOcenaRyzyka('nie')}>Nie</button>
          <span className="text-red-600 text-lg ml-2">*</span>
        </div>
      </div>
      <div className="space-y-3">
        <label className="block text-sm">- stosowane środki w celu zmniejszenia ryzyka:</label>
        <textarea className="w-full border border-gray-300 rounded p-2" placeholder='........' value={srodkiZmniejszenia} onChange={(e) => setSrodkiZmniejszenia(e.target.value)}></textarea>
      </div>
      <div className="space-y-2">
        <label className="block font-medium">10. W chwili wypadku</label>
        <div className="flex items-center gap-2 flex-wrap">
          <button className={getButtonClass('tak', stanNietrzezwosci)} type='button' onClick={() => setStanNietrzezwosci('tak')}>byłem/am</button>
          <span className={separatorClassName}>/</span>
          <button className={getButtonClass('nie', stanNietrzezwosci)} type='button' onClick={() => setStanNietrzezwosci('nie')}>nie byłem/am</button>
          <span className="text-red-600 text-lg">*</span><label>w stanie nietrzeźwości lub pod wpływem środków odurzających lub psychotropowych.</label>
        </div>
      </div>
      <div className="space-y-2">
        <label className="block font-medium">Stan trzeźwości w dacie wypadku:</label>
        <div className="flex items-center gap-2 flex-wrap">
          <button className={getButtonClass('policja', badanieTrzezwosci)} type='button' onClick={() => setBadanieTrzezwosci('policja')}>badany przez organ policji</button>
          <span className={separatorClassName}>/</span>
          <button className={getButtonClass('pomoc', badanieTrzezwosci)} type='button' onClick={() => setBadanieTrzezwosci('pomoc')}>badany w czasie udzielania pierwszej pomocy lekarskiej</button>
          <span className={separatorClassName}>/</span>
          <button className={getButtonClass('nie', badanieTrzezwosci)} type='button' onClick={() => setBadanieTrzezwosci('nie')}>nie był badany</button>
          <span className="text-red-600 text-lg ml-2">*</span>
        </div>
      </div>
      <div className="space-y-2">
        <label className="block font-medium">11. W sprawie</label>
        <div className="flex items-center gap-2">
          <button className={getButtonClass('tak', czynnosciWyjasniajace)} type='button' onClick={() => setCzynnosciWyjasniajace('tak')}>były</button>
          <span className={separatorClassName}>/</span>
          <button className={getButtonClass('nie', czynnosciWyjasniajace)} type='button' onClick={() => setCzynnosciWyjasniajace('nie')}>nie były</button>
          <span className="text-red-600 text-lg ml-2">*</span><label>podjęte czynności wyjaśniające przez organ kontroli państwowej - tj. policji, prokuratury, inspekcji pracy, dozoru technicznego, inspekcji sanitarnej, straży pożarnej (jeżeli tak, należy podać przez jakie - adres, nr sprawy / decyzji, stan sprawy - zakończony / w trakcie / umorzone itp.)</label>
        </div>
        <textarea className="w-full border border-gray-300 rounded p-2" placeholder='........' value={opisCzynnosci} onChange={(e) => setOpisCzynnosci(e.target.value)}></textarea>
      </div>
      <div className='mt-8'>
        <label className='text-sm text-gray-600'><span className='text-lg text-red-600'>*</span> niepotrzebne skreślić</label>
      </div>
    </div>
  );
}