  'use client';

  export default function Strona1() {
    const simpleClassName = `px-2 py-1 border border-gray-300 rounded`
    const inputSmallClassName = `text-sm ${simpleClassName}`

    return (
      <div className="bg-gray-50/60 w-full max-w-2xl p-4 rounded-xl flex flex-col space-y-4 mb-4">
        <div className='font-semibold space-y-1'>
          <div className='inline-flex items-center gap-1 flex-wrap'>
            <label>Pan/i...</label>
            <input className={inputSmallClassName} placeholder='........'></input>
            <input className={inputSmallClassName} placeholder='........'></input>
          </div>
          <div className='inline-flex items-center gap-1 flex-wrap'>
            <label>urodzony/a...</label>
            <input className={inputSmallClassName} type='date'></input>
            <label>w...</label>
            <input className={inputSmallClassName} placeholder='........'></input>
          </div>
          <div className='inline-flex items-center gap-1 flex-wrap'>
            <label>zamieszkały w...</label>
            <input className={inputSmallClassName} placeholder='........'></input>
            <label>ul.</label>
            <input className={inputSmallClassName} placeholder='........'></input>
          </div>
          <div className='inline-flex items-center gap-1 flex-wrap'>
            <label>,zatrudniony/a w...</label>
            <input className={inputSmallClassName} placeholder='........'></input>
          </div>
        </div>
        <div className='space-y-2'>
          <div className='space-y-1'>
            <label className='block'>W związku z wypadkiem jakiemu uległem/am w dniu</label>
            <input className={simpleClassName} type='date'></input>
          </div>
          <label className='block text-sm'>uprzedzony/a o odpowiedzialności karnej za składanie fałszywych zeznać oświadczam, co następuje:</label>
          <div className='space-y-2 mt-3'>
            <label className='block font-medium'>1. Data, miejsce i godzina wypadku...</label>
            <div className='flex gap-2 flex-wrap'>
              <input className={simpleClassName} type='date'></input>
              <input className={simpleClassName} placeholder='........'></input>
              <input className={simpleClassName} placeholder='........'></input>
            </div>
          </div>
          <div className='space-y-1'>
            <label className='block text-sm'>2. Planowana godzina rozpoczęcia pracy w dniu wypadku</label>
            <input className={simpleClassName} placeholder='........'></input>
          </div>
          <div className='space-y-1'>
            <label className='block text-sm'>Planowana godzina zakończenia pracy w dniu wypadku</label>
            <input className={simpleClassName} placeholder='........'></input>
          </div>
          <div className='space-y-1'>
            <label className='block text-sm'>Rodzaj czynności wykonywanych do momentu wypadku (zwykle czynności związane z charakterem prowadzonej działalności gospodarczej)</label>
            <input className={simpleClassName} placeholder='........'></input>
          </div>
          <div className='space-y-2'>
            <label className='block font-medium'>3. Podanie okoliczności i przyczyn wypadku (opis. przyczyny techniczne, ludzkie, organizacyjne) - należy uzupełnić, jeżeli w zawiadomieniu o wypadku nie zostały szczegółowo opisane okoliczności i przyczyny wypadku:</label>
            <textarea className="w-full border border-gray-300 rounded p-2" placeholder='........'></textarea>
          </div>
        </div>
      </div>
    );
  }