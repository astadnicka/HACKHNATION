'use client';

import Link from "next/link";

export default function Strona6() {
  return (
    <div className="relative bg-gray-50/60 w-full max-w-2xl p-4 pb-6 rounded-xl flex flex-col space-y-4 mb-4">
      <div className="grid grid-cols-5 gap-2">
        <input className="h-4 w-4 rounded border-gray-300 text-cyan-500 focus:ring-cyan-500" type="checkbox" />
        <label className="col-span-4">dokumenty potwierdzające prawo do wydania karty wypadku osobie innej niż poszkodowany (m.in. skrócony odpis aktu urodzenia, skrócony odpis aktu małżeństwa, pełnomocnictwo)</label>
      </div>
      <div className="grid grid-cols-5 gap-2">
        <input className="h-4 w-4 rounded border-gray-300 text-cyan-500 focus:ring-cyan-500" type="checkbox" />
        <label className="col-span-4">Inne dokumenty:</label>
      </div>
      <div>
        <textarea
          className="mt-1 block w-full min-h-20 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź inne dokumenty"
        />
        <label className="col-span-3 block text-xs font-medium text-gray-500 mb-1">Podaj jakie, np. dokumenty dotyczące udzielonej pomocy medycznej, umowa na wykonywaną usługę, faktura, rachunek, notatka z policji, ksero mandatu karnego itp.</label>
        <div className="flex items-center gap-2">
            <label>Do dnia</label>
            <input
              type="date"
              className="mt-1 block w-full max-w-xs p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
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
            />
          </div>
        ))}
      </div>
      <div>
        <h1 className="font-semibold mb-2">SPOSÓB ODBIORU ODPOWIEDZI</h1>
        <hr className="bg-gray-100 mb-2"></hr>
      </div>
      <div className="grid grid-cols-5 gap-2">
        <input className="h-4 w-4 rounded border-gray-300 text-cyan-500 focus:ring-cyan-500" type="checkbox" />
        <label className="col-span-4">w placówce ZUS (osobiście lub przez osobę upoważnioną)</label>
      </div>
      <div className="grid grid-cols-5 gap-2">
        <input className="h-4 w-4 rounded border-gray-300 text-cyan-500 focus:ring-cyan-500" type="checkbox" />
        <label className="col-span-4">pocztą na adres wskazany we wniosku</label>
      </div>
      <div className="grid grid-cols-5 gap-2">
        <input className="h-4 w-4 rounded border-gray-300 text-cyan-500 focus:ring-cyan-500" type="checkbox" />
        <label className="col-span-4">na moim koncie na Platformie Usług Elektronicznych (PUE ZUS)</label>
      </div>
      <label className="block text-sm font-medium text-gray-700">Oświadczam, że dane zawarte w zawiadomieniu podaję zgodnie z prawdą co potwierdzam złożonym podpisem</label>
      <div className="grid grid-cols-2 gap-2">  
        <div className="flex items-center gap-2">
            <label>Data</label>
            <input
              type="date"
              className="mt-1 block w-full max-w-xs p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
        </div>
        <textarea />
      </div>
      <div className="mt-4 text-xs leading-relaxed text-gray-600">
        Informacje, o których mowa w art. 13 ust. 1 i 2 Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektyw 95/46/WE (RODO), są dostępne w centrali lub terenowych jednostkach organizacyjnych ZUS oraz na stronie internetowej ZUS pod adresem: <Link className="hover:underline" href={"https://bip.zus.pl/rodo"}>https://bip.zus.pl/rodo</Link>
      </div>
    </div>
  );
}