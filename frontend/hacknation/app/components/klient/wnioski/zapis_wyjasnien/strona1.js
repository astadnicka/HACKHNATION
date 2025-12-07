  'use client';

  export default function Strona1({ formData, setFormData }) {
    const handleChange = (section, field, value) => {
      setFormData(prev => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value
        }
      }));
    };

    const osoba = formData.osoba;
    const wypadek = formData.wypadek;

    const simpleClassName = `px-2 py-1 border border-gray-300 rounded`
    const inputSmallClassName = `text-sm ${simpleClassName}`

    return (
      <div className="bg-gray-50/60 w-full max-w-2xl p-4 rounded-xl flex flex-col space-y-4 mb-4">
        <div className='font-semibold space-y-1'>
          <div className='inline-flex items-center gap-1 flex-wrap'>
            <label>Pan/i...</label>
            <input className={inputSmallClassName} placeholder='........' value={osoba.imie1} onChange={(e) => handleChange('osoba', 'imie1', e.target.value)}></input>
            <input className={inputSmallClassName} placeholder='........' value={osoba.imie2} onChange={(e) => handleChange('osoba', 'imie2', e.target.value)}></input>
          </div>
          <div className='inline-flex items-center gap-1 flex-wrap'>
            <label>urodzony/a...</label>
            <input className={inputSmallClassName} type='date' value={osoba.dataUrodzenia} onChange={(e) => handleChange('osoba', 'dataUrodzenia', e.target.value)}></input>
            <label>w...</label>
            <input className={inputSmallClassName} placeholder='........' value={osoba.miejsceUrodzenia} onChange={(e) => handleChange('osoba', 'miejsceUrodzenia', e.target.value)}></input>
          </div>
          <div className='inline-flex items-center gap-1 flex-wrap'>
            <label>zamieszkały w...</label>
            <input className={inputSmallClassName} placeholder='........' value={osoba.miejsceZamieszkania} onChange={(e) => handleChange('osoba', 'miejsceZamieszkania', e.target.value)}></input>
            <label>ul.</label>
            <input className={inputSmallClassName} placeholder='........' value={osoba.ulica} onChange={(e) => handleChange('osoba', 'ulica', e.target.value)}></input>
          </div>
          <div className='inline-flex items-center gap-1 flex-wrap'>
            <label>zatrudniony/a w...</label>
            <input className={inputSmallClassName} placeholder='........' value={osoba.zatrudnionyW} onChange={(e) => handleChange('osoba', 'zatrudnionyW', e.target.value)}></input>
          </div>
        </div>
        <div className='space-y-2'>
          <div className='space-y-1'>
            <label className='block'>W związku z wypadkiem jakiemu uległem/am w dniu</label>
            <input className={simpleClassName} type='date' value={wypadek.dataWypadku} onChange={(e) => handleChange('wypadek', 'dataWypadku', e.target.value)}></input>
          </div>
          <label className='block text-sm'>uprzedzony/a o odpowiedzialności karnej za składanie fałszywych zeznać oświadczam, co następuje:</label>
          <div className='space-y-2 mt-3'>
            <label className='block font-medium'>1. Data, miejsce i godzina wypadku...</label>
            <div className='flex gap-2 flex-wrap'>
              <input className={simpleClassName} type='date' value={wypadek.dataWypadkuSzczegoly} onChange={(e) => handleChange('wypadek', 'dataWypadkuSzczegoly', e.target.value)}></input>
              <input className={simpleClassName} placeholder='........' value={wypadek.miejsceWypadku} onChange={(e) => handleChange('wypadek', 'miejsceWypadku', e.target.value)}></input>
              <input className={simpleClassName} placeholder='........' value={wypadek.godzinaWypadku} onChange={(e) => handleChange('wypadek', 'godzinaWypadku', e.target.value)}></input>
            </div>
          </div>
          <div className='space-y-1'>
            <label className='block text-sm'>2. Planowana godzina rozpoczęcia pracy w dniu wypadku</label>
            <input className={simpleClassName} placeholder='........' value={wypadek.godzinaRozpoczecia} onChange={(e) => handleChange('wypadek', 'godzinaRozpoczecia', e.target.value)}></input>
          </div>
          <div className='space-y-1'>
            <label className='block text-sm'>Planowana godzina zakończenia pracy w dniu wypadku</label>
            <input className={simpleClassName} placeholder='........' value={wypadek.godzinaZakonczenia} onChange={(e) => handleChange('wypadek', 'godzinaZakonczenia', e.target.value)}></input>
          </div>
          <div className='space-y-1'>
            <label className='block text-sm'>Rodzaj czynności wykonywanych do momentu wypadku (zwykle czynności związane z charakterem prowadzonej działalności gospodarczej)</label>
            <input className={simpleClassName} placeholder='........' value={wypadek.rodzajCzynnosci} onChange={(e) => handleChange('wypadek', 'rodzajCzynnosci', e.target.value)}></input>
          </div>
          <div className='space-y-2'>
            <label className='block font-medium'>3. Podanie okoliczności i przyczyn wypadku (opis. przyczyny techniczne, ludzkie, organizacyjne) - należy uzupełnić, jeżeli w zawiadomieniu o wypadku nie zostały szczegółowo opisane okoliczności i przyczyny wypadku:</label>
            <textarea className="w-full border border-gray-300 rounded p-2" placeholder='........' value={wypadek.opisOkolicznosci} onChange={(e) => handleChange('wypadek', 'opisOkolicznosci', e.target.value)}></textarea>
          </div>
        </div>
        <div className='mt-8'>
          <label className='text-sm text-gray-600'><span className='text-lg text-red-600'>*</span> niepotrzebne skreślić</label>
        </div>
      </div>
    );
  }