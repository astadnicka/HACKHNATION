'use client';

import { useState } from 'react';

export default function Strona2() {
  const simpleClassName = `px-2 py-1`
  const buttonClassName = `px-2 py-1 border border-gray-400 rounded hover:bg-gray-200 transition-colors`
  const separatorClassName = `mx-1 text-gray-600`

  return (
    <div className="bg-gray-50/60 w-full max-w-2xl p-4 rounded-xl flex flex-col space-y-4 mb-4">
      <div className="space-y-2">
        <label className="block font-medium">4. Wypadek powstał pod czas obsługi maszyn i/lub urządzenia:</label>
        <div className="flex items-center gap-2">
          <button className={buttonClassName}>tak</button>
          <span className={separatorClassName}>/</span>
          <button className={buttonClassName}>Nie</button>
          <span className="text-red-600 text-lg ml-2">*</span>
        </div>
      </div>
      <div className="space-y-3">
        <label className="block text-sm">- nazwa, typ urządzenia, data produkcji</label>
        <textarea className="w-full border border-gray-300 rounded p-2" placeholder='........'></textarea>
        <label className="block text-sm">- czy urządzenie było sprawne i użytkowane zgodnie z zasadami producenta (w jaki sposób)</label>
        <textarea className="w-full border border-gray-300 rounded p-2" placeholder='........'></textarea>
      </div>
      <div className="space-y-2">
        <label className="block font-medium">5. Czy były stosowane zabezpieczenia przed wypadkiem:</label>
        <div className="flex items-center gap-2 flex-wrap">
          <button className={buttonClassName}>tak</button>
          <span className={separatorClassName}>/</span>
          <button className={buttonClassName}>Nie</button>
          <span className={separatorClassName}>/</span>
          <button className={buttonClassName}>Nie dotyczy</button>
          <span className="text-red-600 text-lg ml-2">*</span>
        </div>
      </div>
      <div className="space-y-3">
        <label className="block text-sm">- rodzaj stosowanych środków (np. buty, kask, odzież ochronna)</label>
        <textarea className="w-full border border-gray-300 rounded p-2" placeholder='........'></textarea>
        <label className="block text-sm">- czy stosowane środki były właściwe i sprawne</label>
        <textarea className="w-full border border-gray-300 rounded p-2" placeholder='........'></textarea>
      </div>
      <div className="space-y-2">
        <label className="block font-medium">6. Czy była stosowana asekuracja podczas pracy:</label>
        <div className="flex items-center gap-2 flex-wrap">
          <button className={buttonClassName}>tak</button>
          <span className={separatorClassName}>/</span>
          <button className={buttonClassName}>Nie</button>
          <span className={separatorClassName}>/</span>
          <button className={buttonClassName}>Nie dotyczy</button>
          <span className="text-red-600 text-lg ml-2">*</span>
        </div>
      </div>
      <div className="space-y-3">
        <label className="block text-sm">- czy istniał obowiązek wykonywania pracy przez co najmniej 2 osoby</label>
        <textarea className="w-full border border-gray-300 rounded p-2" placeholder='........'></textarea>
      </div>
      <div className="space-y-2">
        <label className="block font-medium">7. W trakcie pracy przestrzegałem/am zasad BHP:</label>
        <div className="flex items-center gap-2">
          <button className={buttonClassName}>tak</button>
          <span className={separatorClassName}>/</span>
          <button className={buttonClassName}>Nie</button>
          <span className="text-red-600 text-lg ml-2">*</span>
        </div>
      </div>
      <div className="space-y-2">
        <label className="block font-medium">8. Posiadam przygotowanie do wykonywania zakresu przedmiotowego zadań związanych z prowadzeniem działalności:</label>
        <div className="flex items-center gap-2">
          <button className={buttonClassName}>tak</button>
          <span className={separatorClassName}>/</span>
          <button className={buttonClassName}>Nie</button>
          <span className="text-red-600 text-lg ml-2">*</span>
        </div>
      </div>
      <div className="space-y-2">
        <label className="block font-medium">9. Odbyłem/am stosowane szkolenie z BHP dla pracodawców</label>
        <div className="flex items-center gap-2">
          <button className={buttonClassName}>tak</button>
          <span className={separatorClassName}>/</span>
          <button className={buttonClassName}>Nie</button>
          <label className="text-red-600 ml-2">*</label>
        </div>
      </div>
      <div className="space-y-2">
        <label className="block text-sm">- posiadam opracowaną ocenę ryzyka zawodowego:</label>
        <div className="flex items-center gap-2">
          <button className={buttonClassName}>tak</button>
          <span className={separatorClassName}>/</span>
          <button className={buttonClassName}>Nie</button>
          <span className="text-red-600 text-lg ml-2">*</span>
        </div>
      </div>
      <div className="space-y-3">
        <label className="block text-sm">- stosowane środki w celu zmniejszenia ryzyka:</label>
        <textarea className="w-full border border-gray-300 rounded p-2" placeholder='........'></textarea>
      </div>
      <div className="space-y-2">
        <label className="block font-medium">10. W chwili wypadku</label>
        <div className="flex items-center gap-2 flex-wrap">
          <button className={buttonClassName}>byłem/am</button>
          <span className={separatorClassName}>/</span>
          <span className="px-2">nie byłem/am</span>
          <span className="text-red-600 text-lg">*</span><label className="text-red-600">w stanie nietrzeźwości lub pod wpływem środków odurzających lub psychotropowych.</label>
        </div>
      </div>
      <div className="space-y-2">
        <label className="block font-medium">Stan trzeźwości w dacie wypadku:</label>
        <div className="flex items-center gap-2 flex-wrap">
          <button className={buttonClassName}>badany przez organ policji</button>
          <span className={separatorClassName}>/</span>
          <button className={buttonClassName}>badany w czasie udzielania pierwszej pomocy lekarskiej</button>
          <span className={separatorClassName}>/</span>
          <button className={buttonClassName}>nie był badany</button>
          <span className="text-red-600 text-lg ml-2">*</span>
        </div>
      </div>
      <div className="space-y-2">
        <label className="block font-medium">11. W sprawie</label>
        <div className="flex items-center gap-2">
          <button className={buttonClassName}>były</button>
          <span className={separatorClassName}>/</span>
          <button className={buttonClassName}>nie były</button>
          <span className="text-red-600 text-lg ml-2">*</span><label className="text-red-600">podjęte czynności wyjaśniające przez organ kontroli państwowej - tj. policji, prokuratury, inspekcji pracy, dozoru technicznego, inspekcji sanitarnej, straży pożarnej (jeżeli tak, należy podać przez jakie - adres, nr sprawy / decyzji, stan sprawy - zakończony / w trakcie / umorzone itp.)</label>
        </div>
        <textarea className="w-full border border-gray-300 rounded p-2" placeholder='........'></textarea>
      </div>
    </div>
  );
}