  'use client';

  import { useState } from 'react';

  export default function Strona1() {
    const [imie1, setImie1] = useState('');
    const [imie2, setImie2] = useState('');
    const [dataUrodzenia, setDataUrodzenia] = useState('');
    const [miejsceUrodzenia, setMiesceUrodzenia] = useState('');
    const [miejsceZamieszkania, setMiesceZamieszkania] = useState('');
    const [ulica, setUlica] = useState('');
    const [zatrudnionyW, setZatrudnionyW] = useState('');
    const [dataWypadku, setDataWypadku] = useState('');
    const [dataWypadkuSzczegoly, setDataWypadkuSzczegoly] = useState('');
    const [miejsceWypadku, setMiejsceWypadku] = useState('');
    const [godzinaWypadku, setGodzinaWypadku] = useState('');
    const [godzinaRozpoczecia, setGodzinaRozpoczecia] = useState('');
    const [godzinaZakonczenia, setGodzinaZakonczenia] = useState('');
    const [rodzajCzynnosci, setRodzajCzynnosci] = useState('');
    const [opisOkolicznosci, setOpisOkolicznosci] = useState('');

    const simpleClassName = `px-2 py-1 border border-gray-300 rounded`
    const inputSmallClassName = `text-sm ${simpleClassName}`

    return (
      <div className="bg-gray-50/60 w-full max-w-2xl p-4 rounded-xl flex flex-col space-y-4 mb-4">
        <div className='font-semibold space-y-1'>
          <div className='inline-flex items-center gap-1 flex-wrap'>
            <label>Pan/i...</label>
            <input className={inputSmallClassName} placeholder='........' value={imie1} onChange={(e) => setImie1(e.target.value)}></input>
            <input className={inputSmallClassName} placeholder='........' value={imie2} onChange={(e) => setImie2(e.target.value)}></input>
          </div>
          <div className='inline-flex items-center gap-1 flex-wrap'>
            <label>urodzony/a...</label>
            <input className={inputSmallClassName} type='date' value={dataUrodzenia} onChange={(e) => setDataUrodzenia(e.target.value)}></input>
            <label>w...</label>
            <input className={inputSmallClassName} placeholder='........' value={miejsceUrodzenia} onChange={(e) => setMiesceUrodzenia(e.target.value)}></input>
          </div>
          <div className='inline-flex items-center gap-1 flex-wrap'>
            <label>zamieszkały w...</label>
            <input className={inputSmallClassName} placeholder='........' value={miejsceZamieszkania} onChange={(e) => setMiesceZamieszkania(e.target.value)}></input>
            <label>ul.</label>
            <input className={inputSmallClassName} placeholder='........' value={ulica} onChange={(e) => setUlica(e.target.value)}></input>
          </div>
          <div className='inline-flex items-center gap-1 flex-wrap'>
            <label>zatrudniony/a w...</label>
            <input className={inputSmallClassName} placeholder='........' value={zatrudnionyW} onChange={(e) => setZatrudnionyW(e.target.value)}></input>
          </div>
        </div>
        <div className='space-y-2'>
          <div className='space-y-1'>
            <label className='block'>W związku z wypadkiem jakiemu uległem/am w dniu</label>
            <input className={simpleClassName} type='date' value={dataWypadku} onChange={(e) => setDataWypadku(e.target.value)}></input>
          </div>
          <label className='block text-sm'>uprzedzony/a o odpowiedzialności karnej za składanie fałszywych zeznać oświadczam, co następuje:</label>
          <div className='space-y-2 mt-3'>
            <label className='block font-medium'>1. Data, miejsce i godzina wypadku...</label>
            <div className='flex gap-2 flex-wrap'>
              <input className={simpleClassName} type='date' value={dataWypadkuSzczegoly} onChange={(e) => setDataWypadkuSzczegoly(e.target.value)}></input>
              <input className={simpleClassName} placeholder='........' value={miejsceWypadku} onChange={(e) => setMiejsceWypadku(e.target.value)}></input>
              <input className={simpleClassName} placeholder='........' value={godzinaWypadku} onChange={(e) => setGodzinaWypadku(e.target.value)}></input>
            </div>
          </div>
          <div className='space-y-1'>
            <label className='block text-sm'>2. Planowana godzina rozpoczęcia pracy w dniu wypadku</label>
            <input className={simpleClassName} placeholder='........' value={godzinaRozpoczecia} onChange={(e) => setGodzinaRozpoczecia(e.target.value)}></input>
          </div>
          <div className='space-y-1'>
            <label className='block text-sm'>Planowana godzina zakończenia pracy w dniu wypadku</label>
            <input className={simpleClassName} placeholder='........' value={godzinaZakonczenia} onChange={(e) => setGodzinaZakonczenia(e.target.value)}></input>
          </div>
          <div className='space-y-1'>
            <label className='block text-sm'>Rodzaj czynności wykonywanych do momentu wypadku (zwykle czynności związane z charakterem prowadzonej działalności gospodarczej)</label>
            <input className={simpleClassName} placeholder='........' value={rodzajCzynnosci} onChange={(e) => setRodzajCzynnosci(e.target.value)}></input>
          </div>
          <div className='space-y-2'>
            <label className='block font-medium'>3. Podanie okoliczności i przyczyn wypadku (opis. przyczyny techniczne, ludzkie, organizacyjne) - należy uzupełnić, jeżeli w zawiadomieniu o wypadku nie zostały szczegółowo opisane okoliczności i przyczyny wypadku:</label>
            <textarea className="w-full border border-gray-300 rounded p-2" placeholder='........' value={opisOkolicznosci} onChange={(e) => setOpisOkolicznosci(e.target.value)}></textarea>
          </div>
        </div>
        <div className='mt-8'>
          <label className='text-sm text-gray-600'><span className='text-lg text-red-600'>*</span> niepotrzebne skreślić</label>
        </div>
      </div>
    );
  }