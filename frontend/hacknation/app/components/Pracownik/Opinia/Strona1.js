import React from "react";

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
          OPINIA W SPRAWIE PRAWNEJ KWALIFIKACJI WYPADKU
        </h1>
        <label className="block text-sm font-medium text-gray-700">
          Nazwisko i imię poszkodowanego:
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź nazwisko i imię poszkodowanego"
          value={getNested("podstawowe.imieNazwiskoPoszkodowanego")}
          onChange={(e) =>
            handleInputChange(
              "podstawowe.imieNazwiskoPoszkodowanego",
              e.target.value
            )
          }
        />
        {errors.imieNazwiskoPoszkodowanego && (
          <p className="text-red-500 text-sm mt-1">
            {errors.imieNazwiskoPoszkodowanego}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Kwestia do rozstrzygnięcia:
        </label>
        <textarea
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 min-h-[60px] resize-y"
          placeholder="Opisz kwestię do rozstrzygnięcia"
          value={getNested("podstawowe.kwestiaDoRozstrzygniecza")}
          onChange={(e) =>
            handleInputChange(
              "podstawowe.kwestiaDoRozstrzygniecza",
              e.target.value
            )
          }
          rows={3}
        />
        {errors.kwestiaDoRozstrzygniecza && (
          <p className="text-red-500 text-sm mt-1">
            {errors.kwestiaDoRozstrzygniecza}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Czy uznać zdarzenie z dnia
        </label>
        <input
          type="date"
          className="mt-1 block w-60 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={getNested("zdarzenie.dataZdarzenia")}
          onChange={(e) =>
            handleInputChange("zdarzenie.dataZdarzenia", e.target.value)
          }
        />
        {errors.dataZdarzenia && (
          <p className="text-red-500 text-sm mt-1">{errors.dataZdarzenia}</p>
        )}
        <p className="text-sm text-gray-600 mt-2">za wypadek podczas:</p>

        <div className="flex items-center space-x-2 mt-1">
          <input
            type="checkbox"
            id="typ_czynnosci"
            checked={getBoolean("zdarzenie.typyZdarzen.czywiklychCzynnosci")}
            onChange={(e) =>
              handleInputChange(
                "zdarzenie.typyZdarzen.czywiklychCzynnosci",
                e.target.checked
              )
            }
          />
          <label htmlFor="typ_czynnosci">
            - wykonywania zwykłych czynności związanych z prowadzeniem
            pozarolniczej działalności
          </label>
        </div>

        <div className="flex items-center space-x-2 mt-1">
          <input
            type="checkbox"
            id="typ_wspolpraca"
            checked={getBoolean("zdarzenie.typyZdarzen.czyWspolpraca")}
            onChange={(e) =>
              handleInputChange(
                "zdarzenie.typyZdarzen.czyWspolpraca",
                e.target.checked
              )
            }
          />
          <label htmlFor="typ_wspolpraca">
            - wykonywania zwykłych czynności związanych ze współpracą przy
            prowadzeniu pozarolniczej działalności
          </label>
        </div>

        <div className="flex items-center space-x-2 mt-1">
          <input
            type="checkbox"
            id="typ_umowa"
            checked={getBoolean("zdarzenie.typyZdarzen.czyUmowaAktywizujaca")}
            onChange={(e) =>
              handleInputChange(
                "zdarzenie.typyZdarzen.czyUmowaAktywizujaca",
                e.target.checked
              )
            }
          />
          <label htmlFor="typ_umowa">
            - wykonywania pracy na podstawie umowy uaktywniającej, o której mowa
            w ustawie z dnia 4.02.2012 r. o opiece nad dziećmi w wieku do lat 3
          </label>
        </div>

        <p className="text-sm text-gray-600 mt-3">
          lub w drodze do lub z miejsca:
        </p>

        <div className="flex items-center space-x-2 mt-1">
          <input
            type="checkbox"
            id="typ_w_drodze"
            checked={getBoolean("zdarzenie.typyZdarzen.czyWDrodze")}
            onChange={(e) =>
              handleInputChange(
                "zdarzenie.typyZdarzen.czyWDrodze",
                e.target.checked
              )
            }
          />
          <label htmlFor="typ_w_drodze">
            - wykonywania pozarolniczej działalności
          </label>
        </div>

        <div className="flex items-center space-x-2 mt-1">
          <input
            type="checkbox"
            id="typ_w_drodze_wspolpraca"
            checked={getBoolean("zdarzenie.typyZdarzen.czyWDrozeWspolpraca")}
            onChange={(e) =>
              handleInputChange(
                "zdarzenie.typyZdarzen.czyWDrozeWspolpraca",
                e.target.checked
              )
            }
          />
          <label htmlFor="typ_w_drodze_wspolpraca">
            - współpracy przy prowadzeniu pozarolniczej działalności
          </label>
        </div>

        <div className="flex items-center space-x-2 mt-1">
          <input
            type="checkbox"
            id="typ_w_drodze_umowa"
            checked={getBoolean(
              "zdarzenie.typyZdarzen.czyWDrozeUmowaAktywizujaca"
            )}
            onChange={(e) =>
              handleInputChange(
                "zdarzenie.typyZdarzen.czyWDrozeUmowaAktywizujaca",
                e.target.checked
              )
            }
          />
          <label htmlFor="typ_w_drodze_umowa">
            - wykonywania pracy na podstawie umowy uaktywniającej, o której mowa
            w ustawie o opiece nad dziećmi w wieku do lat 3
          </label>
        </div>
        {errors.typyZdarzen && (
          <p className="text-red-500 text-sm mt-1">{errors.typyZdarzen}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Opinia o uznaniu
        </label>
        <textarea
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 min-h-[60px] resize-y"
          placeholder="Wprowadź opinię"
          value={getNested("opinia.opiniaOUznaniu")}
          onChange={(e) =>
            handleInputChange("opinia.opiniaOUznaniu", e.target.value)
          }
          rows={3}
        />
        {errors.opiniaOUznaniu && (
          <p className="text-red-500 text-sm mt-1">{errors.opiniaOUznaniu}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Uzasadnienie:
        </label>
        <textarea
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 min-h-[100px] resize-y"
          placeholder="Wprowadź uzasadnienie"
          value={getNested("opinia.uzasadnienie")}
          onChange={(e) =>
            handleInputChange("opinia.uzasadnienie", e.target.value)
          }
          rows={5}
        />
        {errors.uzasadnienie && (
          <p className="text-red-500 text-sm mt-1">{errors.uzasadnienie}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Data opracowania
        </label>
        <input
          type="date"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={getNested("opinia.dataOpracowania")}
          onChange={(e) =>
            handleInputChange("opinia.dataOpracowania", e.target.value)
          }
        />
        {errors.dataOpracowania && (
          <p className="text-red-500 text-sm mt-1">{errors.dataOpracowania}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Pieczątka osoby opracowującej
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Pieczątka"
          value={getNested("opinia.pieczatkaOpracowania")}
          onChange={(e) =>
            handleInputChange("opinia.pieczatkaOpracowania", e.target.value)
          }
        />
        {errors.pieczatkaOpracowania && (
          <p className="text-red-500 text-sm mt-1">
            {errors.pieczatkaOpracowania}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Podpis osoby opracowującej
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Podpis"
          value={getNested("opinia.podpisOpracowania")}
          onChange={(e) =>
            handleInputChange("opinia.podpisOpracowania", e.target.value)
          }
        />
        {errors.podpisOpracowania && (
          <p className="text-red-500 text-sm mt-1">
            {errors.podpisOpracowania}
          </p>
        )}
      </div>
    </div>
  );
}
