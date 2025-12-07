'use client';

export default function Strona2({ formData, setFormData }) {
  const handleChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleNestedChange = (section, subsection, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [subsection]: {
          ...prev[section][subsection],
          [field]: value
        }
      }
    }));
  };

  const miejscaDzialalnosci = formData.miejscaDzialalnosci;
  const opieka = formData.opieka;
  const zawiadamiajacy = formData.zawiadamiajacy;

  return (
    <div className="bg-gray-50/60 w-full max-w-2xl p-4 rounded-xl flex flex-col space-y-4 mb-4">
      <div>
        <h1 className="font-semibold mb-2">ADRES MIEJSCA PROWADZENIA POZAROLNICZEJ DZIAŁALNOŚCI</h1>
        <hr className="bg-gray-100 mb-2"></hr>
        <label className="col-span-3 block text-xs font-medium text-gray-500 mb-1">Podaj, jeśli poszkodowany prowadzi albo współpracuje przy prowadzeniu pozarolniczej działalności</label>
        <label className="block text-sm font-medium text-gray-700">Ulica:</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź nazwę ulicy"
          value={miejscaDzialalnosci.ulica}
          onChange={(e) => handleChange('miejscaDzialalnosci', 'ulica', e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-2 block text-sm font-medium text-gray-700">Numer domu i lokalu</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź numer domu"
          value={miejscaDzialalnosci.numerDomu}
          onChange={(e) => handleChange('miejscaDzialalnosci', 'numerDomu', e.target.value)}
        /> 
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź numer lokalu"
          value={miejscaDzialalnosci.numerLokalu}
          onChange={(e) => handleChange('miejscaDzialalnosci', 'numerLokalu', e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-2 block text-sm font-medium text-gray-700">Kod pocztowy i miejscowość</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź kod pocztowy"
          value={miejscaDzialalnosci.kodPocztowy}
          onChange={(e) => handleChange('miejscaDzialalnosci', 'kodPocztowy', e.target.value)}
        /> 
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź miejscowość"
          value={miejscaDzialalnosci.miejscowosc}
          onChange={(e) => handleChange('miejscaDzialalnosci', 'miejscowosc', e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Gmina/dzielnica:</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź nazwę gminy lub dzielnicy"
          value={miejscaDzialalnosci.gmina}
          onChange={(e) => handleChange('miejscaDzialalnosci', 'gmina', e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Numer telefonu:</label>
        <label className="col-span-3 block text-xs font-medium text-gray-500 mb-1">Podaj numer telefonu - to ułatwi nam kontakt w tej sprawie</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź numer telefonu"
          value={miejscaDzialalnosci.numerTelefonu}
          onChange={(e) => handleChange('miejscaDzialalnosci', 'numerTelefonu', e.target.value)}
        />
      </div>
            <div>
        <h1 className="font-semibold mb-2">ADRES SPRAWOWANIA OPIEKI NAD DZIECKIEM W WIEKU DO LAT 3</h1>
        <hr className="bg-gray-100 mb-2"></hr>
        <label className="col-span-3 block text-xs font-medium text-gray-500 mb-1">Podaj, jeśli poszkodowany wykonuje pracę na podstawie umowy uaktywniającej (jako niania)</label>
        <label className="block text-sm font-medium text-gray-700">Ulica:</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź nazwę ulicy"
          value={opieka.ulica}
          onChange={(e) => handleChange('opieka', 'ulica', e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-2 block text-sm font-medium text-gray-700">Numer domu i lokalu</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź numer domu"
          value={opieka.numerDomu}
          onChange={(e) => handleChange('opieka', 'numerDomu', e.target.value)}
        /> 
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź numer lokalu"
          value={opieka.numerLokalu}
          onChange={(e) => handleChange('opieka', 'numerLokalu', e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-2 block text-sm font-medium text-gray-700">Kod pocztowy i miejscowość</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź kod pocztowy"
          value={opieka.kodPocztowy}
          onChange={(e) => handleChange('opieka', 'kodPocztowy', e.target.value)}
        /> 
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź miejscowość"
          value={opieka.miejscowosc}
          onChange={(e) => handleChange('opieka', 'miejscowosc', e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Gmina/dzielnica:</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź nazwę gminy lub dzielnicy"
        />
      </div>
            <div>
        <h1 className="font-semibold mb-2">DANE OSOBY, KTÓRA ZAWIADAMIA O WYPADKU</h1>
        <hr className="bg-gray-100 mb-2"></hr>
        <label className="block text-sm font-medium text-gray-700">PESEL</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź PESEL"
          value={zawiadamiajacy.pesel}
          onChange={(e) => handleChange('zawiadamiajacy', 'pesel', e.target.value)}
        />
      </div>    
      <div className="grid grid-cols-3 gap-2">
        <label className="col-span-3 block text-sm font-medium text-gray-700">Dokument Potwierdzający Tożsamość</label>
        <label className="col-span-3 block text-xs font-medium text-gray-500">Jeśli nie ma numeru PESEL, podaj serię i numer innego dokumentu</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Rodzaj"
          value={zawiadamiajacy.dokument.rodzaj}
          onChange={(e) => handleNestedChange('zawiadamiajacy', 'dokument', 'rodzaj', e.target.value)}
        />
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Seria"
          value={zawiadamiajacy.dokument.seria}
          onChange={(e) => handleNestedChange('zawiadamiajacy', 'dokument', 'seria', e.target.value)}
        />      
        <input
          type="number"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Numer"
          value={zawiadamiajacy.dokument.numer}
          onChange={(e) => handleNestedChange('zawiadamiajacy', 'dokument', 'numer', e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-2 block text-sm font-medium text-gray-700">Imię i Nazwisko:</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź imię"
          value={zawiadamiajacy.imie}
          onChange={(e) => handleChange('zawiadamiajacy', 'imie', e.target.value)}
        /> 
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź nazwisko"
          value={zawiadamiajacy.nazwisko}
          onChange={(e) => handleChange('zawiadamiajacy', 'nazwisko', e.target.value)}
        />
      </div>
        <div className="grid grid-cols-3 gap-2">
        <label className="col-span-3 block text-sm font-medium text-gray-700">Data Urodzenia</label>
        <input
          type="number"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Dzień"
          value={zawiadamiajacy.dzienUrodzenia}
          onChange={(e) => handleChange('zawiadamiajacy', 'dzienUrodzenia', e.target.value)}
        />
        <input
          type="number"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Miesiąc"
          value={zawiadamiajacy.miesiacUrodzenia}
          onChange={(e) => handleChange('zawiadamiajacy', 'miesiacUrodzenia', e.target.value)}
        />      
        <input
          type="number"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Rok"
          value={zawiadamiajacy.rokUrodzenia}
          onChange={(e) => handleChange('zawiadamiajacy', 'rokUrodzenia', e.target.value)}
        />
      </div>
        <div className="grid grid-cols-2 gap-2">
        <label className="col-span-3 block text-sm font-medium text-gray-700">Płeć</label>
        <div className="flex items-center">
          <input
            type="radio"
            id="mezczyzna"
            name="plec"
            value="mezczyzna"
            checked={zawiadamiajacy.plec === 'mezczyzna'}
            onChange={(e) => handleChange('zawiadamiajacy', 'plec', e.target.value)}
            className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 cursor-pointer"
          />
          <label htmlFor="mezczyzna" className="ml-2 text-sm text-gray-700 cursor-pointer">
            Mężczyzna
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="kobieta"
            name="plec"
            value="kobieta"
            checked={zawiadamiajacy.plec === 'kobieta'}
            onChange={(e) => handleChange('zawiadamiajacy', 'plec', e.target.value)}
            className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 cursor-pointer"
          />
          <label htmlFor="kobieta" className="ml-2 text-sm text-gray-700 cursor-pointer">
            Kobieta
          </label>
        </div>
      </div>
      <div>
        <h1 className="font-semibold mb-2">ADRES ZAMIESZKANIA</h1>
        <hr className="bg-gray-100 mb-2"></hr>
        <label className="block text-sm font-medium text-gray-700">Ulica:</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź nazwę ulicy"
          value={zawiadamiajacy.adresZamieszkania.ulica}
          onChange={(e) => handleNestedChange('zawiadamiajacy', 'adresZamieszkania', 'ulica', e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-2 block text-sm font-medium text-gray-700">Numer domu i Lokalu</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź domu"
          value={zawiadamiajacy.adresZamieszkania.numerDomu}
          onChange={(e) => handleNestedChange('zawiadamiajacy', 'adresZamieszkania', 'numerDomu', e.target.value)}
        /> 
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź lokalu"
          value={zawiadamiajacy.adresZamieszkania.numerLokalu}
          onChange={(e) => handleNestedChange('zawiadamiajacy', 'adresZamieszkania', 'numerLokalu', e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-2 block text-sm font-medium text-gray-700">Kod Pocztowy i Miejscowość</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź kod pocztowy"
          value={zawiadamiajacy.adresZamieszkania.kodPocztowy}
          onChange={(e) => handleNestedChange('zawiadamiajacy', 'adresZamieszkania', 'kodPocztowy', e.target.value)}
        /> 
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź miejscowość"
          value={zawiadamiajacy.adresZamieszkania.miejscowosc}
          onChange={(e) => handleNestedChange('zawiadamiajacy', 'adresZamieszkania', 'miejscowosc', e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Gmina/Dzielnica:</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź nazwę ulicy"
          value={zawiadamiajacy.adresZamieszkania.gmina}
          onChange={(e) => handleNestedChange('zawiadamiajacy', 'adresZamieszkania', 'gmina', e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Państwo:</label>
        <label className="col-span-3 block text-xs font-medium text-gray-500 mb-1">Podaj, jeśli adres inny niż polski</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź państwo"
          value={zawiadamiajacy.adresZamieszkania.panstwo}
          onChange={(e) => handleNestedChange('zawiadamiajacy', 'adresZamieszkania', 'panstwo', e.target.value)}
        />
      </div>   
    </div>
  );
}
