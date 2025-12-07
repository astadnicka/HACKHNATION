'use client';

import { useState } from 'react';
import Link from "next/link";

export default function Strona6({ formData, setFormData, alertContent = {} }) {
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
  const handleArrayChange = (section, field, index, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: prev[section][field].map((item, i) => i === index ? value : item)
      }
    }));
  };
  // Destructure needed data from formData
  const zalaczniki = formData.zalaczniki;
  // ...existing code...
  return (
    <div className="relative bg-gray-50/60 w-full max-w-2xl p-4 pb-6 rounded-xl flex flex-col space-y-4 mb-4">
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
      <div className="flex items-center justify-center gap-3">
        <input className="h-4 w-4 rounded border-gray-300 text-cyan-500 focus:ring-cyan-500 shrink-0" checked={zalaczniki.kartaInformacyjna} type="checkbox" onChange={(e) => handleChange('zalaczniki', 'kartaInformacyjna', e.target.checked)} />
        <label className="text-sm">dokumenty potwierdzające prawo do wydania karty wypadku osobie innej niż poszkodowany (m.in. skrócony odpis aktu urodzenia, skrócony odpis aktu małżeństwa, pełnomocnictwo)</label>
      </div>
      <div className="flex items-center justify-center gap-3">
        <input className="h-4 w-4 rounded border-gray-300 text-cyan-500 focus:ring-cyan-500 shrink-0" type="checkbox" checked={zalaczniki.inne} onChange={(e) => handleChange('zalaczniki', 'inne', e.target.checked)} />
        <label className="text-sm">Inne dokumenty:</label>
      </div>
      <div>
        <textarea
          className="mt-1 block w-full min-h-20 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź inne dokumenty"
          value={zalaczniki.inne}
          onChange={(e) => handleChange('zalaczniki', 'inne', e.target.value)}
        />
        <label className="col-span-3 block text-xs font-medium text-gray-500 mb-1">Podaj jakie, np. dokumenty dotyczące udzielonej pomocy medycznej, umowa na wykonywaną usługę, faktura, rachunek, notatka z policji, ksero mandatu karnego itp.</label>
        <div className="flex items-center gap-2">
            <label>Do dnia</label>
            <input
              type="date"
              className="mt-1 block w-full max-w-xs p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              value={formData.zalaczniki.dataDostarczenia}
              onChange={(e) => handleChange('zalaczniki', 'dataDostarczenia', e.target.value)}
            />
        </div>
        <label className="col-span-6">Zobowiązuję się dostarczyć następujące dokumenty:</label>
      </div>
      <div>
        {[...Array(8)].map((_, index) => (
          <div key={index} className="mb-4 flex items-center gap-2">
            <label className="block text-sm font-medium text-gray-700">{index + 1}.</label>
            <input
            className="mt-1 block w-full min-h-10 max-h-10 border  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={zalaczniki.dokumenty[index]}
            onChange={(e) => {
              const newDokumenty = [...zalaczniki.dokumenty];
              newDokumenty[index] = e.target.value;
              handleChange('zalaczniki', 'dokumenty', newDokumenty);
            }}
            />
          </div>
        ))}
      </div>
      <div>
        <h1 className="font-semibold mb-2">SPOSÓB ODBIORU ODPOWIEDZI</h1>
        <hr className="bg-gray-100 mb-2"></hr>
        {alertContent['sposObOdbioru']?.changed && <button className={alertButtonClass} type='button' onClick={() => toggleAlert('sposObOdbioru')}>!</button>}
      </div>
      <div className="flex items-center justify-center gap-3">
        <input className="h-4 w-4 rounded border-gray-300 text-cyan-500 focus:ring-cyan-500 shrink-0" type="checkbox" checked={zalaczniki.odbiorPlacowka} onChange={(e) => handleChange('zalaczniki', 'odbiorPlacowka', e.target.checked)} />
        <label className="text-sm">w placówce ZUS (osobiście lub przez osobę upoważnioną)</label>
      </div>
      <div className="flex items-center justify-center gap-3">
        <input className="h-4 w-4 rounded border-gray-300 text-cyan-500 focus:ring-cyan-500 shrink-0" type="checkbox" checked={zalaczniki.odbiorPoczta} onChange={(e) => handleChange('zalaczniki', 'odbiorPoczta', e.target.checked)} />
        <label className="text-sm">pocztą na adres wskazany we wniosku</label>
      </div>
      <div className="flex items-center justify-center gap-3">
        <input className="h-4 w-4 rounded border-gray-300 text-cyan-500 focus:ring-cyan-500 shrink-0" type="checkbox" checked={zalaczniki.odbiorPUE} onChange={(e) => handleChange('zalaczniki', 'odbiorPUE', e.target.checked)} />
        <label className="text-sm">na moim koncie na Platformie Usług Elektronicznych (PUE ZUS)</label>
      </div>
      <label className="block text-sm font-medium text-gray-700">Oświadczam, że dane zawarte w zawiadomieniu podaję zgodnie z prawdą co potwierdzam złożonym podpisem</label>
      <div className="grid grid-cols-2 gap-2">  
        <div className="flex items-center gap-2">
            <label>Data</label>
            <input
              type="date"
              className="mt-1 block w-full max-w-xs p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              value={zalaczniki.dataPodpisu}
              onChange={(e) => handleChange('zalaczniki', 'dataPodpisu', e.target.value)}
            />
        </div>
        <textarea className="mt-1 block w-full max-w-xs p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500" value={zalaczniki.podpis} placeholder='Podpis' onChange={(e) => handleChange('zalaczniki', 'podpis', e.target.value)} />
      </div>
      <div className="mt-4 text-xs leading-relaxed text-gray-600">
        Informacje, o których mowa w art. 13 ust. 1 i 2 Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektyw 95/46/WE (RODO), są dostępne w centrali lub terenowych jednostkach organizacyjnych ZUS oraz na stronie internetowej ZUS pod adresem: <Link className="hover:underline" href={"https://bip.zus.pl/rodo"}>https://bip.zus.pl/rodo</Link>
      </div>
    </div>
  );
}