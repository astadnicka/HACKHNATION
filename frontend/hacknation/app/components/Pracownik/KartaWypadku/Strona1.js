export default function Strona1({ formData, setFormData }) {
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
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="seria"
          value={formData.platnik?.dokument?.seria || ""}
          onChange={(e) =>
            handleInputChange("platnik.dokument.seria", e.target.value)
          }
        />
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="numer"
          value={formData.platnik?.dokument?.numer || ""}
          onChange={(e) =>
            handleInputChange("platnik.dokument.numer", e.target.value)
          }
        />
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
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="seria"
          value={formData.poszkodowany?.dokument?.seria || ""}
          onChange={(e) =>
            handleInputChange("poszkodowany.dokument.seria", e.target.value)
          }
        />
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="numer"
          value={formData.poszkodowany?.dokument?.numer || ""}
          onChange={(e) =>
            handleInputChange("poszkodowany.dokument.numer", e.target.value)
          }
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          3. Data i miejsce urodzenia
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź datę oraz miejsce urodzenia poszkodowanego"
          value={formData.poszkodowany?.dataMiejsceUrodzenia || ""}
          onChange={(e) =>
            handleInputChange(
              "poszkodowany.dataMiejsceUrodzenia",
              e.target.value
            )
          }
        />
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
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          5. Tytuł ubezpieczenia wypadkowego (wymienić numer pozycji i pełny
          tytuł ubezpieczenia społecznego, zgodnie z art.3 ust. 3 ustawy z dnia
          30 października 2002r. o ubezpieczeniu społecznym z tytułu wypadków
          przy pracy i chorób zawodowych Dx. U. z 2019r., poz 1205) <br></br> Nr
          8 - wykonywanie zwykłych czynności związanych z prowadzeniem
          działalności pozarolniczej w rozumieniu przepisów o systemie
          ubeczpieczeń społecznych
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź adres zamieszkania poszkodowanego"
          value={formData.poszkodowany?.tytulUbezpieczenia || ""}
          onChange={(e) =>
            handleInputChange("poszkodowany.tytulUbezpieczenia", e.target.value)
          }
        />
      </div>
      <h1 className="font-semibold mb-2">III. INFORMACJE O WYPADKU </h1>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          1. Data zgłoszenia oraz imię i nazwisko osoby zgłaszającej wypadek
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź datę"
          value={formData.wypadek?.dataZgloszenia || ""}
          onChange={(e) =>
            handleInputChange("wypadek.dataZgloszenia", e.target.value)
          }
        />
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
      </div>
    </div>
  );
}
