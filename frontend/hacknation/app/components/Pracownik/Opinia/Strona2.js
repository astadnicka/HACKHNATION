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

  return (
    <div className="bg-gray-50/60 w-full max-w-2xl p-4 rounded-xl flex flex-col space-y-4 mb-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Opinia osoby uprawnionej do aprobaty
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź opinię"
          value={getNested("zatwierdzenie.opiniaUprawnionegoDoAproby")}
          onChange={(e) =>
            handleInputChange(
              "zatwierdzenie.opiniaUprawnionegoDoAproby",
              e.target.value
            )
          }
        />
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Data, pieczątka i podpis osoby opracowującej"
          value={getNested("zatwierdzenie.dataPieczatkaAproby")}
          onChange={(e) =>
            handleInputChange(
              "zatwierdzenie.dataPieczatkaAproby",
              e.target.value
            )
          }
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Uzasadnienie
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź uzasadnienie"
          value={getNested("zatwierdzenie.uzasadnienieAproby")}
          onChange={(e) =>
            handleInputChange(
              "zatwierdzenie.uzasadnienieAproby",
              e.target.value
            )
          }
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Opinia osoby uprawnionej do superaprobaty
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={getNested("zatwierdzenie.opiniaSuperaproby")}
          onChange={(e) =>
            handleInputChange("zatwierdzenie.opiniaSuperaproby", e.target.value)
          }
        />
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Data, pieczątka i podpis osoby uprawnionej do superaprobaty"
          value={getNested("zatwierdzenie.dataPieczatkaSuperaprobyOsoba")}
          onChange={(e) =>
            handleInputChange(
              "zatwierdzenie.dataPieczatkaSuperaprobyOsoba",
              e.target.value
            )
          }
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Opinia Konsultanta
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={getNested("zatwierdzenie.opiniaKonsultanta")}
          onChange={(e) =>
            handleInputChange("zatwierdzenie.opiniaKonsultanta", e.target.value)
          }
        />
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Data, pieczątka i podpis konsultanta"
          value={getNested("zatwierdzenie.dataPieczatkaKonsultanta")}
          onChange={(e) =>
            handleInputChange(
              "zatwierdzenie.dataPieczatkaKonsultanta",
              e.target.value
            )
          }
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Opinia Z-cy Dyrektora ds. Świadczeń
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={getNested("zatwierdzenie.opiniaZcyDyrektora")}
          onChange={(e) =>
            handleInputChange(
              "zatwierdzenie.opiniaZcyDyrektora",
              e.target.value
            )
          }
        />
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Data, pieczątka i podpis Z-cy Dyrektora ds. Świadczeń"
          value={getNested("zatwierdzenie.dataPieczatkaZcyDyrektora")}
          onChange={(e) =>
            handleInputChange(
              "zatwierdzenie.dataPieczatkaZcyDyrektora",
              e.target.value
            )
          }
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Decyzja osoby uprawnionej do superaprobaty
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={getNested("zatwierdzenie.decyzjaSuperaproby")}
          onChange={(e) =>
            handleInputChange(
              "zatwierdzenie.decyzjaSuperaproby",
              e.target.value
            )
          }
        />
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Data, pieczątka i podpis osoby uprawnionej do superaprobaty"
          value={getNested("zatwierdzenie.dataPieczatkaDecyzja")}
          onChange={(e) =>
            handleInputChange(
              "zatwierdzenie.dataPieczatkaDecyzja",
              e.target.value
            )
          }
        />
      </div>
    </div>
  );
}
