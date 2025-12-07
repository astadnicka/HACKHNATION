import React from "react";

export default function Strona2({ formData, setFormData }) {
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

  const getNested = (path, fallback = "") => {
    const keys = path.split(".");
    let ref = formData;
    for (const key of keys) {
      if (ref == null || typeof ref !== "object") {
        return fallback;
      }
      ref = ref[key];
    }
    return ref ?? fallback;
  };

  const getBoolean = (path) => Boolean(getNested(path, false));

  return (
    <div className="bg-gray-50/60 w-full max-w-2xl p-4 rounded-xl flex flex-col space-y-4 mb-4">
      <div>
        <h1 className="font-semibold mb-2">
          I. DANE IDENTYFIKACYJNE PŁATNIKA SKŁADEK
        </h1>

        <label className="block text-sm font-medium text-gray-700">
          3. Świadkowie wypadku
        </label>

        <div className="flex items-center space-x-2 mt-1">
          <input
            type="checkbox"
            id="brakSwiadkow"
            checked={getBoolean("swiadkowie.brak")}
            onChange={(e) =>
              handleInputChange("swiadkowie.brak", e.target.checked)
            }
          />
          <label htmlFor="brakSwiadkow">Brak świadków</label>
        </div>

        <input
          type="text"
          disabled={getBoolean("swiadkowie.brak")}
          className={`mt-2 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
            getBoolean("swiadkowie.brak") ? "bg-gray-200" : ""
          }`}
          placeholder="Imię i nazwisko"
          value={getNested("swiadkowie.imieNazwisko")}
          onChange={(e) =>
            handleInputChange("swiadkowie.imieNazwisko", e.target.value)
          }
        />
        <input
          type="text"
          disabled={getBoolean("swiadkowie.brak")}
          className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
            getBoolean("swiadkowie.brak") ? "bg-gray-200" : ""
          }`}
          placeholder="Miejsce zamieszkania"
          value={getNested("swiadkowie.miejsceZamieszkania")}
          onChange={(e) =>
            handleInputChange("swiadkowie.miejsceZamieszkania", e.target.value)
          }
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          4. Wypadek jest / nie jest wypadkiem przy pracy określonym w art. 3
          ust. 3 pkt 8 ustawy z dnia 30 października 2002r. o ubezpieczeniu
          społecznym z tytułu wypadków przy pracy i chorób zawodowych (Dz. U. z
          2019r. poz. 1205 z późn. zm.) (uzasadnić, jeżeli zdarzenia nie uznano
          za wypadek przy pracy)
        </label>

        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="status_czy_wypadek"
              checked={getNested("status.czyWypadek") === true}
              onChange={() => handleInputChange("status.czyWypadek", true)}
            />
            <span
              className={
                getNested("status.czyWypadek") === false ? "line-through" : ""
              }
            >
              jest
            </span>
          </label>

          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="status_czy_wypadek"
              checked={getNested("status.czyWypadek") === false}
              onChange={() => handleInputChange("status.czyWypadek", false)}
            />
            <span
              className={
                getNested("status.czyWypadek") === true ? "line-through" : ""
              }
            >
              nie jest
            </span>
          </label>
        </div>

        <input
          type="text"
          disabled={getNested("status.czyWypadek") === true}
          className={`mt-2 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
            getNested("status.czyWypadek") === true ? "bg-gray-200" : ""
          }`}
          placeholder="Uzasadnienie"
          value={getNested("status.uzasadnienie")}
          onChange={(e) =>
            handleInputChange("status.uzasadnienie", e.target.value)
          }
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          5. Stwierdzono, że wyłączną przyczyną wypadku było udowodnione
          naruszenie przez poszkodowanego przepisów dotyczących ochrony życia i
          zdrowia, spowodowane przez niego umyślnie lub wskutek rażącego
          niedbalstwa
        </label>
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={getBoolean("status.naruszenie")}
            onChange={(e) =>
              handleInputChange("status.naruszenie", e.target.checked)
            }
          />
          <span>Nie stwierdzono</span>
        </label>

        <input
          type="text"
          disabled={getBoolean("status.naruszenie")}
          className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
            getBoolean("status.naruszenie") ? "bg-gray-200" : ""
          }`}
          placeholder="podaj powody"
          value={getNested("status.powodyNaruszenia")}
          onChange={(e) =>
            handleInputChange("status.powodyNaruszenia", e.target.value)
          }
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          6. Stwierdzono, że poszkodowany będąc w stanie nietrzeźwości lub pod
          wpływem środków odurzających lub substancji psychotropowych,
          przyczynił się w znacznym stopniu do spowodowania wypadku
        </label>

        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={getBoolean("status.badanoNietrz")}
              onChange={(e) =>
                handleInputChange("status.badanoNietrz", e.target.checked)
              }
            />
            <span>Nie badano</span>
          </label>
        </div>

        <input
          type="text"
          disabled={getBoolean("status.badanoNietrz")}
          className={`mt-2 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
            getBoolean("status.badanoNietrz") ? "bg-gray-200" : ""
          }`}
          placeholder="Uzasadnienie"
          value={getNested("status.uzasadnienieBadania")}
          onChange={(e) =>
            handleInputChange("status.uzasadnienieBadania", e.target.value)
          }
        />
      </div>

      <h1 className="font-semibold mb-2">IV. POZOSTAŁE INFORMACJE</h1>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          1. Poszkodowanego (członka rodziny) zapoznano z treścią karty wypadku
          i pouczono o prawie zgłaszania uwag i zastrzeżeń do ustaleń zawartych
          w karcie wypadku
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Imię i nazwisko poszkodowanego (członka rodziny)"
          value={getNested("pozostale.zapoznanoImieNazwisko")}
          onChange={(e) =>
            handleInputChange("pozostale.zapoznanoImieNazwisko", e.target.value)
          }
        />
        <input
          type="date"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={getNested("pozostale.zapoznanoData")}
          onChange={(e) =>
            handleInputChange("pozostale.zapoznanoData", e.target.value)
          }
        />
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="podpis"
          value={getNested("pozostale.zapoznanoPodpis")}
          onChange={(e) =>
            handleInputChange("pozostale.zapoznanoPodpis", e.target.value)
          }
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          2. Kartę sporządzono w dniu
        </label>
        <input
          type="date"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={getNested("pozostale.kartaSporządzona")}
          onChange={(e) =>
            handleInputChange("pozostale.kartaSporządzona", e.target.value)
          }
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          2a. Zakład Ubezpieczeń Społecznych
        </label>
        <label className="block text-xs font-medium text-gray-700">
          nazwa podmiotu zobowiązanego do sporządzenia karty
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="pieczątka"
          value={getNested("pozostale.zus")}
          onChange={(e) => handleInputChange("pozostale.zus", e.target.value)}
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-700">
          imię i nazwisko sporządzającego
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="podpis"
          value={getNested("pozostale.sporadzajacy")}
          onChange={(e) =>
            handleInputChange("pozostale.sporadzajacy", e.target.value)
          }
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          3. Przeszkody i trudności uniemożliwiające sporządzenie karty wypadku
          w wymaganym terminie 14 dni
        </label>
        <div className="flex items-center space-x-2 mt-1">
          <input
            type="checkbox"
            id="przeszkody_brak"
            checked={getBoolean("pozostale.przeszkody")}
            onChange={(e) =>
              handleInputChange("pozostale.przeszkody", e.target.checked)
            }
          />
          <label htmlFor="przeszkody_brak">Brak</label>
        </div>
        <input
          type="text"
          disabled={getBoolean("pozostale.przeszkody")}
          className={`mt-2 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
            getBoolean("pozostale.przeszkody") ? "bg-gray-200" : ""
          }`}
          placeholder="proszę podać"
          value={getNested("pozostale.opisPrzeszkod")}
          onChange={(e) =>
            handleInputChange("pozostale.opisPrzeszkod", e.target.value)
          }
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          4. Kartę odebrano w dniu
        </label>
        <input
          type="date"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={getNested("pozostale.kartaOdebrana")}
          onChange={(e) =>
            handleInputChange("pozostale.kartaOdebrana", e.target.value)
          }
        />
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="podpis uprawnionego"
          value={getNested("pozostale.podpisPrzyjmujacego")}
          onChange={(e) =>
            handleInputChange("pozostale.podpisPrzyjmujacego", e.target.value)
          }
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          5. Załączniki
        </label>

        <div className="flex items-center space-x-2 mt-1">
          <input
            type="checkbox"
            checked={getBoolean("pozostale.zalaczniki.zawiadomienie")}
            onChange={(e) =>
              handleInputChange(
                "pozostale.zalaczniki.zawiadomienie",
                e.target.checked
              )
            }
          />
          <label>1. Zawiadomienie o wypadku</label>
        </div>

        <div className="flex items-center space-x-2 mt-1">
          <input
            type="checkbox"
            checked={getBoolean("pozostale.zalaczniki.wyjasnienia")}
            onChange={(e) =>
              handleInputChange(
                "pozostale.zalaczniki.wyjasnienia",
                e.target.checked
              )
            }
          />
          <label>2. Zapis wyjaśnień poszkodowanego</label>
        </div>

        <div className="flex items-center space-x-2 mt-1">
          <input
            type="checkbox"
            checked={getBoolean("pozostale.zalaczniki.oswiadczenie")}
            onChange={(e) =>
              handleInputChange(
                "pozostale.zalaczniki.oswiadczenie",
                e.target.checked
              )
            }
          />
          <label>3. Oświadczenie poszkodowanego</label>
        </div>

        <div className="flex items-center space-x-2 mt-1">
          <input
            type="checkbox"
            checked={getBoolean("pozostale.zalaczniki.faktura")}
            onChange={(e) =>
              handleInputChange(
                "pozostale.zalaczniki.faktura",
                e.target.checked
              )
            }
          />
          <label>4. Faktura VAT</label>
        </div>

        <div className="flex items-center space-x-2 mt-1">
          <input
            type="checkbox"
            checked={getBoolean("pozostale.zalaczniki.ceidg")}
            onChange={(e) =>
              handleInputChange("pozostale.zalaczniki.ceidg", e.target.checked)
            }
          />
          <label>5. Wydruk z CEIDG</label>
        </div>

        <div className="flex items-center space-x-2 mt-1">
          <input
            type="checkbox"
            checked={getBoolean("pozostale.zalaczniki.ortopedia")}
            onChange={(e) =>
              handleInputChange(
                "pozostale.zalaczniki.ortopedia",
                e.target.checked
              )
            }
          />
          <label>6. Odpis historii choroby z Poradni Ortopedycznej</label>
        </div>

        <div className="flex items-center space-x-2 mt-1">
          <input
            type="checkbox"
            checked={getBoolean("pozostale.zalaczniki.badanie")}
            onChange={(e) =>
              handleInputChange(
                "pozostale.zalaczniki.badanie",
                e.target.checked
              )
            }
          />
          <label>7. Wynik badania</label>
        </div>
      </div>
    </div>
  );
}
