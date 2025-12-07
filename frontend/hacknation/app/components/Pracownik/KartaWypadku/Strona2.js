import React from "react";

export default function Strona2({ formData, setFormData }) {
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
        <h1 className="font-semibold mb-2">III. ŚWIADKOWIE WYPADKU</h1>

        <label className="block text-sm font-medium text-gray-700">
          3. Świadkowie wypadku
        </label>

        <div className="flex items-center space-x-2 mt-1">
          <input
            id="swiadkowie_brak"
            type="checkbox"
            checked={formData.swiadkowie?.brak || false}
            onChange={(e) =>
              handleInputChange("swiadkowie.brak", e.target.checked)
            }
          />
          <label htmlFor="swiadkowie_brak">Brak świadków</label>
        </div>

        <input
          id="swiadkowie_imie_nazwisko"
          type="text"
          disabled={formData.swiadkowie?.brak}
          className={`mt-2 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
            formData.swiadkowie?.brak ? "bg-gray-200" : ""
          }`}
          placeholder="Imię i nazwisko"
          value={formData.swiadkowie?.imieNazwisko || ""}
          onChange={(e) =>
            handleInputChange("swiadkowie.imieNazwisko", e.target.value)
          }
        />
        <input
          id="swiadkowie_miejsce_zamieszkania"
          type="text"
          disabled={formData.swiadkowie?.brak}
          className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
            formData.swiadkowie?.brak ? "bg-gray-200" : ""
          }`}
          placeholder="Miejsce zamieszkania"
          value={formData.swiadkowie?.miejsceZamieszkania || ""}
          onChange={(e) =>
            handleInputChange("swiadkowie.miejsceZamieszkania", e.target.value)
          }
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          4. Wypadek jest / nie jest wypadkiem przy pracy
        </label>

        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              id="status_czy_wypadek_tak"
              type="radio"
              name="czyWypadek"
              value="true"
              checked={formData.status?.czyWypadek === true}
              onChange={() => handleInputChange("status.czyWypadek", true)}
            />
            <span
              className={
                formData.status?.czyWypadek === false ? "line-through" : ""
              }
            >
              jest
            </span>
          </label>

          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              id="status_czy_wypadek_nie"
              type="radio"
              name="czyWypadek"
              value="false"
              checked={formData.status?.czyWypadek === false}
              onChange={() => handleInputChange("status.czyWypadek", false)}
            />
            <span
              className={
                formData.status?.czyWypadek === true ? "line-through" : ""
              }
            >
              nie jest
            </span>
          </label>
        </div>

        <textarea
          id="status_uzasadnienie"
          type="text"
          disabled={formData.status?.czyWypadek === true}
          className={`mt-2 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 h-20 ${
            formData.status?.czyWypadek === true ? "bg-gray-200" : ""
          }`}
          placeholder="Uzasadnienie"
          value={formData.status?.uzasadnienie || ""}
          onChange={(e) =>
            handleInputChange("status.uzasadnienie", e.target.value)
          }
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          5. Naruszenie przepisów ochrony życia i zdrowia
        </label>
        <label className="flex items-center space-x-2 cursor-pointer mt-2">
          <input
            id="status_naruszenie"
            type="checkbox"
            checked={formData.status?.naruszenie || false}
            onChange={(e) =>
              handleInputChange("status.naruszenie", e.target.checked)
            }
          />
          <span>Nie stwierdzono naruszenia</span>
        </label>

        <textarea
          id="status_powody_naruszenia"
          type="text"
          disabled={formData.status?.naruszenie}
          className={`mt-2 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 h-20 ${
            formData.status?.naruszenie ? "bg-gray-200" : ""
          }`}
          placeholder="podaj powody"
          value={formData.status?.powodyNaruszenia || ""}
          onChange={(e) =>
            handleInputChange("status.powodyNaruszenia", e.target.value)
          }
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          6. Stan nietrzeźwości lub substancji psychotropowych
        </label>

        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              id="status_badano_nie"
              type="checkbox"
              checked={formData.status?.badanoNietrz || false}
              onChange={(e) =>
                handleInputChange("status.badanoNietrz", e.target.checked)
              }
            />
            <span>Nie badano</span>
          </label>
        </div>

        <textarea
          id="status_uzasadnienie_badania"
          type="text"
          disabled={formData.status?.badanoNietrz}
          className={`mt-2 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 h-20 ${
            formData.status?.badanoNietrz ? "bg-gray-200" : ""
          }`}
          placeholder="Uzasadnienie"
          value={formData.status?.uzasadnienieBadania || ""}
          onChange={(e) =>
            handleInputChange("status.uzasadnienieBadania", e.target.value)
          }
        />
      </div>

      <h1 className="font-semibold mb-2">IV. POZOSTAŁE INFORMACJE</h1>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          1. Poszkodowanego zapoznano z treścią karty wypadku
        </label>
        <input
          id="pozostale_zapoznano_imie_nazwisko"
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Imię i nazwisko poszkodowanego"
          value={formData.pozostale?.zapoznanoImieNazwisko || ""}
          onChange={(e) =>
            handleInputChange("pozostale.zapoznanoImieNazwisko", e.target.value)
          }
        />
        <input
          id="pozostale_zapoznano_data"
          type="date"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={formData.pozostale?.zapoznanoData || ""}
          onChange={(e) =>
            handleInputChange("pozostale.zapoznanoData", e.target.value)
          }
        />
        <input
          id="pozostale_zapoznano_podpis"
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="podpis"
          value={formData.pozostale?.zapoznanoPodpis || ""}
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
          id="pozostale_karta_sporządzona"
          type="date"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={formData.pozostale?.kartaSporządzona || ""}
          onChange={(e) =>
            handleInputChange("pozostale.kartaSporządzona", e.target.value)
          }
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          2a. Zakład Ubezpieczeń Społecznych
        </label>
        <input
          id="pozostale_zus"
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="nazwa ZUS / pieczątka"
          value={formData.pozostale?.zus || ""}
          onChange={(e) => handleInputChange("pozostale.zus", e.target.value)}
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-700">
          2b. Imię i nazwisko sporządzającego
        </label>
        <input
          id="pozostale_sporadzajacy"
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="podpis"
          value={formData.pozostale?.sporadzajacy || ""}
          onChange={(e) =>
            handleInputChange("pozostale.sporadzajacy", e.target.value)
          }
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          3. Przeszkody uniemożliwiające sporządzenie karty w terminie
        </label>
        <label className="flex items-center space-x-2 cursor-pointer mt-2">
          <input
            id="pozostale_przeszkody"
            type="checkbox"
            checked={formData.pozostale?.przeszkody || false}
            onChange={(e) =>
              handleInputChange("pozostale.przeszkody", e.target.checked)
            }
          />
          <span>Brak przeszkód</span>
        </label>

        <textarea
          id="pozostale_opis_przeszkod"
          type="text"
          disabled={formData.pozostale?.przeszkody}
          className={`mt-2 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 h-20 ${
            formData.pozostale?.przeszkody ? "bg-gray-200" : ""
          }`}
          placeholder="proszę podać"
          value={formData.pozostale?.opisPrzeszkod || ""}
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
          id="pozostale_karta_odebrana"
          type="date"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={formData.pozostale?.kartaOdebrana || ""}
          onChange={(e) =>
            handleInputChange("pozostale.kartaOdebrana", e.target.value)
          }
        />
        <input
          id="pozostale_podpis_przyjmujacego"
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="podpis uprawnionego"
          value={formData.pozostale?.podpisPrzyjmujacego || ""}
          onChange={(e) =>
            handleInputChange("pozostale.podpisPrzyjmujacego", e.target.value)
          }
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          5. Załączniki
        </label>

        <div className="flex items-center space-x-2 mt-2">
          <input
            id="zalaczniki_zawiadomienie"
            type="checkbox"
            checked={formData.pozostale?.zalaczniki?.zawiadomienie || false}
            onChange={(e) =>
              handleInputChange(
                "pozostale.zalaczniki.zawiadomienie",
                e.target.checked
              )
            }
          />
          <label htmlFor="zalaczniki_zawiadomienie">
            1. Zawiadomienie o wypadku
          </label>
        </div>

        <div className="flex items-center space-x-2 mt-1">
          <input
            id="zalaczniki_wyjasnienia"
            type="checkbox"
            checked={formData.pozostale?.zalaczniki?.wyjasnienia || false}
            onChange={(e) =>
              handleInputChange(
                "pozostale.zalaczniki.wyjasnienia",
                e.target.checked
              )
            }
          />
          <label htmlFor="zalaczniki_wyjasnienia">
            2. Zapis wyjaśnień poszkodowanego
          </label>
        </div>

        <div className="flex items-center space-x-2 mt-1">
          <input
            id="zalaczniki_oswiadczenie"
            type="checkbox"
            checked={formData.pozostale?.zalaczniki?.oswiadczenie || false}
            onChange={(e) =>
              handleInputChange(
                "pozostale.zalaczniki.oswiadczenie",
                e.target.checked
              )
            }
          />
          <label htmlFor="zalaczniki_oswiadczenie">
            3. Oświadczenie poszkodowanego
          </label>
        </div>

        <div className="flex items-center space-x-2 mt-1">
          <input
            id="zalaczniki_faktura"
            type="checkbox"
            checked={formData.pozostale?.zalaczniki?.faktura || false}
            onChange={(e) =>
              handleInputChange("pozostale.zalaczniki.faktura", e.target.checked)
            }
          />
          <label htmlFor="zalaczniki_faktura">4. Faktura VAT</label>
        </div>

        <div className="flex items-center space-x-2 mt-1">
          <input
            id="zalaczniki_ceidg"
            type="checkbox"
            checked={formData.pozostale?.zalaczniki?.ceidg || false}
            onChange={(e) =>
              handleInputChange("pozostale.zalaczniki.ceidg", e.target.checked)
            }
          />
          <label htmlFor="zalaczniki_ceidg">5. Wydrug z CEiDG</label>
        </div>

        <div className="flex items-center space-x-2 mt-1">
          <input
            id="zalaczniki_ortopedia"
            type="checkbox"
            checked={formData.pozostale?.zalaczniki?.ortopedia || false}
            onChange={(e) =>
              handleInputChange(
                "pozostale.zalaczniki.ortopedia",
                e.target.checked
              )
            }
          />
          <label htmlFor="zalaczniki_ortopedia">
            6. Odpis historii choroby z Poradni Ortopedycznej
          </label>
        </div>

        <div className="flex items-center space-x-2 mt-1">
          <input
            id="zalaczniki_badanie"
            type="checkbox"
            checked={formData.pozostale?.zalaczniki?.badanie || false}
            onChange={(e) =>
              handleInputChange(
                "pozostale.zalaczniki.badanie",
                e.target.checked
              )
            }
          />
          <label htmlFor="zalaczniki_badanie">7. Wynik badania</label>
        </div>
      </div>
    </div>
  );
}
