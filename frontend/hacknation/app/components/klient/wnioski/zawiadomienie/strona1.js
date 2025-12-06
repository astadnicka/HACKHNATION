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

  const poszkodowany = formData.poszkodowany;

  return (
    <div className="bg-gray-50/60 w-full max-w-2xl p-4 rounded-xl flex flex-col space-y-4 mb-4">
      <div>
        <h1 className="font-semibold mb-2">DANE OSOBY POSZKODOWANEJ</h1>
        <hr className="bg-gray-100 mb-2"></hr>
        <label className="block text-sm font-medium text-gray-700">PESEL</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź PESEL"
          value={poszkodowany.pesel}
          onChange={(e) => handleChange('poszkodowany', 'pesel', e.target.value)}
        />
      </div>    
      <div className="grid grid-cols-3 gap-2">
        <label className="col-span-3 block text-sm font-medium text-gray-700">Dokument Potwierdzający Tożsamość</label>
        <label className="col-span-3 block text-xs font-medium text-gray-500">Jeśli nie ma numeru PESEL, podaj serię i numer innego dokumentu</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Rodzaj"
          value={poszkodowany.dokument.rodzaj}
          onChange={(e) => handleNestedChange('poszkodowany', 'dokument', 'rodzaj', e.target.value)}
        />
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Seria"
          value={poszkodowany.dokument.seria}
          onChange={(e) => handleNestedChange('poszkodowany', 'dokument', 'seria', e.target.value)}
        />      
        <input
          type="number"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Numer"
          value={poszkodowany.dokument.numer}
          onChange={(e) => handleNestedChange('poszkodowany', 'dokument', 'numer', e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-2 block text-sm font-medium text-gray-700">Imię i nazwisko:</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź imię"
          value={poszkodowany.imie}
          onChange={(e) => handleChange('poszkodowany', 'imie', e.target.value)}
        /> 
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź nazwisko"
          value={poszkodowany.nazwisko}
          onChange={(e) => handleChange('poszkodowany', 'nazwisko', e.target.value)}
        />
      </div>
      <div className="grid grid-cols-3 gap-2">
        <label className="col-span-3 block text-sm font-medium text-gray-700">Data urodzenia</label>
        <input
          type="date"
          className="col-span-3 mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={poszkodowany.dataUrodzenia}
          onChange={(e) => handleChange('poszkodowany', 'dataUrodzenia', e.target.value)}
        />
      </div>
        <div className="grid grid-cols-2 gap-2">
          <label className="col-span-2 block text-sm font-medium text-gray-700">Płeć</label>
        <div className="flex items-center">
          <input
            type="radio"
            id="mezczyzna"
            name="plec"
            value="mezczyzna"
            checked={poszkodowany.plec === 'mezczyzna'}
            onChange={(e) => handleChange('poszkodowany', 'plec', e.target.value)}
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
            checked={poszkodowany.plec === 'kobieta'}
            onChange={(e) => handleChange('poszkodowany', 'plec', e.target.value)}
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
          value={poszkodowany.adresZamieszkania.ulica}
          onChange={(e) => handleNestedChange('poszkodowany', 'adresZamieszkania', 'ulica', e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-2 block text-sm font-medium text-gray-700">Numer domu i lokalu</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź numer domu"
          value={poszkodowany.adresZamieszkania.numerDomu}
          onChange={(e) => handleNestedChange('poszkodowany', 'adresZamieszkania', 'numerDomu', e.target.value)}
        /> 
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź numer lokalu"
          value={poszkodowany.adresZamieszkania.numerLokalu}
          onChange={(e) => handleNestedChange('poszkodowany', 'adresZamieszkania', 'numerLokalu', e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-2 block text-sm font-medium text-gray-700">Kod pocztowy i miejscowość</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź kod pocztowy"
          value={poszkodowany.adresZamieszkania.kodPocztowy}
          onChange={(e) => handleNestedChange('poszkodowany', 'adresZamieszkania', 'kodPocztowy', e.target.value)}
        /> 
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź miejscowość"
          value={poszkodowany.adresZamieszkania.miejscowosc}
          onChange={(e) => handleNestedChange('poszkodowany', 'adresZamieszkania', 'miejscowosc', e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Gmina/dzielnica:</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź nazwę gminy lub dzielnicy"
          value={poszkodowany.adresZamieszkania.gmina}
          onChange={(e) => handleNestedChange('poszkodowany', 'adresZamieszkania', 'gmina', e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Państwo:</label>
        <label className="col-span-3 block text-xs font-medium text-gray-500 mb-1">Podaj, jeśli adres inny niż polski</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź państwo"
          value={poszkodowany.adresZamieszkania.panstwo}
          onChange={(e) => handleNestedChange('poszkodowany', 'adresZamieszkania', 'panstwo', e.target.value)}
        />
      </div>
      <div>
        <h1 className="font-semibold mb-2">ADRES DO KORESPONDENCJI</h1>
        <hr className="bg-gray-100 mb-2"></hr>
        <label className="col-span-3 block text-xs font-medium text-gray-500 mb-1">Podaj, jeśli adres do korespondencji jest inny niż adres zamieszkania</label>
        <label className="block text-sm font-medium text-gray-700">Ulica:</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź nazwę ulicy"
          value={poszkodowany.adresKorespondencji.ulica}
          onChange={(e) => handleNestedChange('poszkodowany', 'adresKorespondencji', 'ulica', e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-2 block text-sm font-medium text-gray-700">Numer domu i lokalu</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź numer domu"
          value={poszkodowany.adresKorespondencji.numerDomu}
          onChange={(e) => handleNestedChange('poszkodowany', 'adresKorespondencji', 'numerDomu', e.target.value)}
        /> 
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź numer lokalu"
          value={poszkodowany.adresKorespondencji.numerLokalu}
          onChange={(e) => handleNestedChange('poszkodowany', 'adresKorespondencji', 'numerLokalu', e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="col-span-2 block text-sm font-medium text-gray-700">Kod pocztowy i miejscowość</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź kod pocztowy"
          value={poszkodowany.adresKorespondencji.kodPocztowy}
          onChange={(e) => handleNestedChange('poszkodowany', 'adresKorespondencji', 'kodPocztowy', e.target.value)}
        /> 
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź miejscowość"
          value={poszkodowany.adresKorespondencji.miejscowosc}
          onChange={(e) => handleNestedChange('poszkodowany', 'adresKorespondencji', 'miejscowosc', e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Gmina/dzielnica:</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź nazwę gminy lub dzielnicy"
          value={poszkodowany.adresKorespondencji.gmina}
          onChange={(e) => handleNestedChange('poszkodowany', 'adresKorespondencji', 'gmina', e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Państwo:</label>
        <label className="col-span-3 block text-xs font-medium text-gray-500 mb-1">Podaj, jeśli adres inny niż polski</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź państwo"
          value={poszkodowany.adresKorespondencji.panstwo}
          onChange={(e) => handleNestedChange('poszkodowany', 'adresKorespondencji', 'panstwo', e.target.value)}
        />
      </div>   
    </div>
  );
}