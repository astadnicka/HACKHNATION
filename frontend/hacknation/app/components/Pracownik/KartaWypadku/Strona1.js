export default function Strona1({ formData, setFormData, errors }) {
  const handleInputChange = (path, value) => {
    setFormData((prev) => {
      const updated = JSON.parse(JSON.stringify(prev));
      const keys = path.split(".");
      let ref = updated;
      for (let i = 0; i < keys.length - 1; i++) {
        if (ref[keys[i]] === undefined || ref[keys[i]] === null) {
          ref[keys[i]] = {};
        }
        ref = ref[keys[i]];
      }
      ref[keys[keys.length - 1]] = value;
      return updated;
    });
  };

  return (
    <div className="bg-gray-50/60 w-full max-w-2xl p-4 rounded-xl flex flex-col space-y-4 mb-4">
      <div>
        <h1 className="font-semibold mb-2">
          I. DANE IDENTYFIKACYJNE PŁATNIKA SKŁADEK
        </h1>
        <label className="block text-sm font-medium text-gray-700">
          1. Imię i nazwisko lub nazwa
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź imię i nazwisko lub nazwę"
          value={formData.platnik?.imieNazwisko || ""}
          onChange={(e) =>
            handleInputChange("platnik.imieNazwisko", e.target.value)
          }
        />
        {errors.platnikImieNazwisko && (
          <p className="text-red-500 text-sm mt-1">
            {errors.platnikImieNazwisko}
          </p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          2. Adres siedziby
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź adres siedziby"
          value={formData.platnik?.adresSiedzby || ""}
          onChange={(e) =>
            handleInputChange("platnik.adresSiedzby", e.target.value)
          }
        />
        {errors.platnikAdresSiedzby && (
          <p className="text-red-500 text-sm mt-1">
            {errors.platnikAdresSiedzby}
          </p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          3. NIP
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź NIP"
          value={formData.platnik?.nip || ""}
          onChange={(e) => handleInputChange("platnik.nip", e.target.value)}
        />
        {errors.platnikNip && (
          <p className="text-red-500 text-sm mt-1">{errors.platnikNip}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          REGION
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź REGION"
          value={formData.platnik?.region || ""}
          onChange={(e) => handleInputChange("platnik.region", e.target.value)}
        />
        {errors.platnikRegion && (
          <p className="text-red-500 text-sm mt-1">{errors.platnikRegion}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">PESEL</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź PESEL"
          value={formData.platnik?.pesel || ""}
          onChange={(e) => handleInputChange("platnik.pesel", e.target.value)}
        />
        {errors.platnikPesel && (
          <p className="text-red-500 text-sm mt-1">{errors.platnikPesel}</p>
        )}
      </div>
      <div className="flex-col">
        <label className="block text-sm font-medium text-gray-700 ">
          Dokument tożsamości (dowód osobisty lub paszport)
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="rodzaj dokumentu"
          value={formData.platnik?.dokument?.rodzaj || ""}
          onChange={(e) =>
            handleInputChange("platnik.dokument.rodzaj", e.target.value)
          }
        />
        {errors.platnikDokumentRodzaj && (
          <p className="text-red-500 text-sm mt-1">
            {errors.platnikDokumentRodzaj}
          </p>
        )}
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="seria"
          value={formData.platnik?.dokument?.seria || ""}
          onChange={(e) =>
            handleInputChange("platnik.dokument.seria", e.target.value)
          }
        />
        {errors.platnikDokumentSeria && (
          <p className="text-red-500 text-sm mt-1">
            {errors.platnikDokumentSeria}
          </p>
        )}
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="numer"
          value={formData.platnik?.dokument?.numer || ""}
          onChange={(e) =>
            handleInputChange("platnik.dokument.numer", e.target.value)
          }
        />
        {errors.platnikDokumentNumer && (
          <p className="text-red-500 text-sm mt-1">
            {errors.platnikDokumentNumer}
          </p>
        )}
      </div>
      <h1 className="font-semibold mb-2">
        II. DANE IDENTYFIKACYJNE POSZKODOWANEGO
      </h1>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          1. Imię i nazwisko poszkodowanego:
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź imię i nazwisko poszkodowanego"
          value={formData.poszkodowany?.imieNazwisko || ""}
          onChange={(e) =>
            handleInputChange("poszkodowany.imieNazwisko", e.target.value)
          }
        />
        {errors.poszkodowanyImieNazwisko && (
          <p className="text-red-500 text-sm mt-1">
            {errors.poszkodowanyImieNazwisko}
          </p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          2. PESEL
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź PESEL poszkodowanego"
          value={formData.poszkodowany?.pesel || ""}
          onChange={(e) =>
            handleInputChange("poszkodowany.pesel", e.target.value)
          }
        />
        {errors.poszkodowanyPesel && (
          <p className="text-red-500 text-sm mt-1">
            {errors.poszkodowanyPesel}
          </p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Dokument tożsamości (dowód osobisty lub paszport)
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="rodzaj dokumentu"
          value={formData.poszkodowany?.dokument?.rodzaj || ""}
          onChange={(e) =>
            handleInputChange("poszkodowany.dokument.rodzaj", e.target.value)
          }
        />
        {errors.poszkodowanyDokumentRodzaj && (
          <p className="text-red-500 text-sm mt-1">
            {errors.poszkodowanyDokumentRodzaj}
          </p>
        )}
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="seria"
          value={formData.poszkodowany?.dokument?.seria || ""}
          onChange={(e) =>
            handleInputChange("poszkodowany.dokument.seria", e.target.value)
          }
        />
        {errors.poszkodowanyDokumentSeria && (
          <p className="text-red-500 text-sm mt-1">
            {errors.poszkodowanyDokumentSeria}
          </p>
        )}
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="numer"
          value={formData.poszkodowany?.dokument?.numer || ""}
          onChange={(e) =>
            handleInputChange("poszkodowany.dokument.numer", e.target.value)
          }
        />
        {errors.poszkodowanyDokumentNumer && (
          <p className="text-red-500 text-sm mt-1">
            {errors.poszkodowanyDokumentNumer}
          </p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          3. Data urodzenia
        </label>
        <input
          type="date"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={formData.poszkodowany?.dataUrodzenia || ""}
          onChange={(e) =>
            handleInputChange("poszkodowany.dataUrodzenia", e.target.value)
          }
        />
        {errors.poszkodowanyDataUrodzenia && (
          <p className="text-red-500 text-sm mt-1">
            {errors.poszkodowanyDataUrodzenia}
          </p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Miejsce urodzenia
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź miejsce urodzenia poszkodowanego"
          value={formData.poszkodowany?.miejsceUrodzenia || ""}
          onChange={(e) =>
            handleInputChange("poszkodowany.miejsceUrodzenia", e.target.value)
          }
        />
        {errors.poszkodowanyMiejsceUrodzenia && (
          <p className="text-red-500 text-sm mt-1">
            {errors.poszkodowanyMiejsceUrodzenia}
          </p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          4. Adres zamieszkania
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź adres zamieszkania poszkodowanego"
          value={formData.poszkodowany?.adresZamieszkania || ""}
          onChange={(e) =>
            handleInputChange("poszkodowany.adresZamieszkania", e.target.value)
          }
        />
        {errors.poszkodowanyAdresZamieszkania && (
          <p className="text-red-500 text-sm mt-1">
            {errors.poszkodowanyAdresZamieszkania}
          </p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          5. Tytuł ubezpieczenia wypadkowego (wymienić numer pozycji i pełny
          tytuł ubezpieczenia społecznego, zgodnie z art.3 ust. 3 ustawy z dnia
          30 października 2002r. o ubezpieczeniu społecznym z tytułu wypadków
          przy pracy i chorób zawodowych Dz. U. z 2019r., poz 1205) <br></br> Nr
          8 - wykonywanie zwykłych czynności związanych z prowadzeniem
          działalności pozarolniczej w rozumieniu przepisów o systemie
          ubeczpieczeń społecznych
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź tytuł ubezpieczenia"
          value={formData.poszkodowany?.tytulUbezpieczenia || ""}
          onChange={(e) =>
            handleInputChange("poszkodowany.tytulUbezpieczenia", e.target.value)
          }
        />
        {errors.poszkodowanyTytulUbezpieczenia && (
          <p className="text-red-500 text-sm mt-1">
            {errors.poszkodowanyTytulUbezpieczenia}
          </p>
        )}
      </div>
      <h1 className="font-semibold mb-2">III. INFORMACJE O WYPADKU </h1>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          1. Data zgłoszenia
        </label>
        <input
          type="date"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={formData.wypadek?.dataZgloszenia || ""}
          onChange={(e) =>
            handleInputChange("wypadek.dataZgloszenia", e.target.value)
          }
        />
        {errors.dataZgloszenia && (
          <p className="text-red-500 text-sm mt-1">{errors.dataZgloszenia}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Imię i nazwisko osoby zgłaszającej wypadek
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź imię i nazwisko osoby zgłaszającej"
          value={formData.wypadek?.osobaZglaszajaca || ""}
          onChange={(e) =>
            handleInputChange("wypadek.osobaZglaszajaca", e.target.value)
          }
        />
        {errors.osobaZglaszajaca && (
          <p className="text-red-500 text-sm mt-1">{errors.osobaZglaszajaca}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          2. Informacje dotyczące okoliczności, przyczyn, czasu i miejsca
          wypadku
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź informacje"
          value={formData.wypadek?.informacje || ""}
          onChange={(e) =>
            handleInputChange("wypadek.informacje", e.target.value)
          }
        />
        {errors.wypadekInformacje && (
          <p className="text-red-500 text-sm mt-1">
            {errors.wypadekInformacje}
          </p>
        )}
      </div>
    </div>
  );
}
