export default function Strona1({ formData, setFormData }) {
  const handleInputChange = (path, value) => {
    setFormData((prev) => {
      const updated = JSON.parse(JSON.stringify(prev));
      const keys = path.split(".");
      let obj = updated;
      for (let i = 0; i < keys.length - 1; i++) {
        if (!obj[keys[i]]) obj[keys[i]] = {};
        obj = obj[keys[i]];
      }
      obj[keys[keys.length - 1]] = value;
      return updated;
    });
  };

  return (
    <div className="bg-gray-50/60 w-full max-w-2xl p-4 rounded-xl flex flex-col space-y-4 mb-4">
      <div>
        <div className="flex items-center space-x-2 mt-1">
          <input
            id="nazwa_adres_podmiotu"
            type="text"
            className="h-24 mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Nazwa i adres podmiotu"
            value={formData.podmiotPieczatka?.nazwaAdresPieczatka || ""}
            onChange={(e) =>
              handleInputChange(
                "podmiotPieczatka.nazwaAdresPieczatka",
                e.target.value
              )
            }
          />
          <label className="block text-xs font-medium text-gray-700">
            Nazwa i adres podmiotu sporządzającego kartę wypadku lub pieczątka
          </label>
        </div>
        <input
          id="adres_podmiotu"
          type="text"
          className="mt-2 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Adres"
          value={formData.podmiotPieczatka?.adres || ""}
          onChange={(e) =>
            handleInputChange("podmiotPieczatka.adres", e.target.value)
          }
        />
      </div>

      <div>
        <h1 className="font-semibold mb-2">
          I. DANE IDENTYFIKACYJNE PŁATNIKA SKŁADEK
        </h1>

        <label className="block text-sm font-medium text-gray-700">
          1. Imię i nazwisko lub nazwa
        </label>
        <input
          id="platnik_imie_nazwisko"
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
          id="platnik_adres_siedziby"
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
          id="platnik_nip"
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
          id="platnik_region"
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
          id="platnik_pesel"
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź PESEL"
          value={formData.platnik?.pesel || ""}
          onChange={(e) => handleInputChange("platnik.pesel", e.target.value)}
        />
      </div>

      <div className="flex-col">
        <label className="block text-sm font-medium text-gray-700">
          Dokument tożsamości (dowód osobisty lub paszport)
        </label>
        <input
          id="platnik_dokument_rodzaj"
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="rodzaj dokumentu"
          value={formData.platnik?.dokument?.rodzaj || ""}
          onChange={(e) =>
            handleInputChange("platnik.dokument.rodzaj", e.target.value)
          }
        />
        <input
          id="platnik_dokument_seria"
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="seria"
          value={formData.platnik?.dokument?.seria || ""}
          onChange={(e) =>
            handleInputChange("platnik.dokument.seria", e.target.value)
          }
        />
        <input
          id="platnik_dokument_numer"
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
          id="poszkodowany_imie_nazwisko"
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
          id="poszkodowany_pesel"
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
          id="poszkodowany_dokument_rodzaj"
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="rodzaj dokumentu"
          value={formData.poszkodowany?.dokument?.rodzaj || ""}
          onChange={(e) =>
            handleInputChange("poszkodowany.dokument.rodzaj", e.target.value)
          }
        />
        <input
          id="poszkodowany_dokument_seria"
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="seria"
          value={formData.poszkodowany?.dokument?.seria || ""}
          onChange={(e) =>
            handleInputChange("poszkodowany.dokument.seria", e.target.value)
          }
        />
        <input
          id="poszkodowany_dokument_numer"
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
          id="poszkodowany_data_miejsce_urodzenia"
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
          id="poszkodowany_adres_zamieszkania"
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
          5. Tytuł ubezpieczenia wypadkowego
        </label>
        <input
          id="poszkodowany_tytul_ubezpieczenia"
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź tytuł ubezpieczenia"
          value={formData.poszkodowany?.tytulUbezpieczenia || ""}
          onChange={(e) =>
            handleInputChange("poszkodowany.tytulUbezpieczenia", e.target.value)
          }
        />
      </div>

      <h1 className="font-semibold mb-2">III. INFORMACJE O WYPADKU</h1>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          1. Data zgłoszenia oraz imię i nazwisko osoby zgłaszającej wypadek
        </label>
        <input
          id="wypadek_data_zgloszenia"
          type="date"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={formData.wypadek?.dataZgloszenia || ""}
          onChange={(e) =>
            handleInputChange("wypadek.dataZgloszenia", e.target.value)
          }
        />
        <input
          id="wypadek_osoba_zglaszajaca"
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Imię i nazwisko osoby zgłaszającej"
          value={formData.wypadek?.osobaZglaszajaca || ""}
          onChange={(e) =>
            handleInputChange("wypadek.osobaZglaszajaca", e.target.value)
          }
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          2. Informacje dotyczące okoliczności, przyczyn, czasu i miejsca
          wypadku
        </label>
        <textarea
          id="wypadek_informacje"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 h-24"
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
