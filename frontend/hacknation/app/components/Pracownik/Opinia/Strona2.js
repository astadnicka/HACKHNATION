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
        <label className="block text-sm font-medium text-gray-700">
          Opinia osoby uprawnionej do aprobaty
        </label>
        <textarea
          id="zatwierdzenie_aprotata_opinia"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 h-20"
          placeholder="Wprowadź opinię"
          value={formData.zatwierdzenie?.opiniaUprawnionegoDoAproby || ""}
          onChange={(e) =>
            handleInputChange(
              "zatwierdzenie.opiniaUprawnionegoDoAproby",
              e.target.value
            )
          }
        />
        <textarea
          id="zatwierdzenie_aprotata_podpis"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 h-20"
          placeholder="Data, pieczątka i podpis osoby opracowującej"
          value={formData.zatwierdzenie?.dataPieczatkaAproby || ""}
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
        <textarea
          id="zatwierdzenie_aprotata_uzasadnienie"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 h-20"
          placeholder="Wprowadź uzasadnienie"
          value={formData.zatwierdzenie?.uzasadnienieAproby || ""}
          onChange={(e) =>
            handleInputChange(
              "zatwierdzenie.uzasadnienieAproby",
              e.target.value
            )
          }
        />
      </div>

      <div>
        <textarea
          id="zatwierdzenie_superaprotata_podpis"
          className="h-20 mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Data, pieczątka i podpis osoby aprobującej"
          value={formData.zatwierdzenie?.dataPieczatkaSuperaproby || ""}
          onChange={(e) =>
            handleInputChange(
              "zatwierdzenie.dataPieczatkaSuperaproby",
              e.target.value
            )
          }
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Opinia osoby uprawnionej do superaprobaty
        </label>
        <textarea
          id="zatwierdzenie_superaprotata_opinia"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 h-20"
          placeholder="Wprowadź opinię"
          value={formData.zatwierdzenie?.opiniaSuperaproby || ""}
          onChange={(e) =>
            handleInputChange("zatwierdzenie.opiniaSuperaproby", e.target.value)
          }
        />
        <textarea
          id="zatwierdzenie_superaprotata_osoba_podpis"
          className="h-20 mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Data, pieczątka i podpis osoby uprawnionej do superaprobaty"
          value={formData.zatwierdzenie?.dataPieczatkaSuperaprobyOsoba || ""}
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
        <textarea
          id="zatwierdzenie_konsultanta_opinia"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 h-20"
          placeholder="Wprowadź opinię"
          value={formData.zatwierdzenie?.opiniaKonsultanta || ""}
          onChange={(e) =>
            handleInputChange("zatwierdzenie.opiniaKonsultanta", e.target.value)
          }
        />
        <textarea
          id="zatwierdzenie_konsultanta_podpis"
          className="h-20 mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Data, pieczątka i podpis konsultanta"
          value={formData.zatwierdzenie?.dataPieczatkaKonsultanta || ""}
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
        <textarea
          id="zatwierdzenie_dyrektor_opinia"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 h-20"
          placeholder="Wprowadź opinię"
          value={formData.zatwierdzenie?.opiniaZcyDyrektora || ""}
          onChange={(e) =>
            handleInputChange(
              "zatwierdzenie.opiniaZcyDyrektora",
              e.target.value
            )
          }
        />
        <textarea
          id="zatwierdzenie_dyrektor_podpis"
          className="h-20 mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Data, pieczątka i podpis Z-cy Dyrektora ds. Świadczeń"
          value={formData.zatwierdzenie?.dataPieczatkaZcyDyrektora || ""}
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
        <textarea
          id="zatwierdzenie_decyzja_opinia"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 h-20"
          placeholder="Wprowadź decyzję"
          value={formData.zatwierdzenie?.decyzjaSuperaproby || ""}
          onChange={(e) =>
            handleInputChange(
              "zatwierdzenie.decyzjaSuperaproby",
              e.target.value
            )
          }
        />
        <textarea
          id="zatwierdzenie_decyzja_podpis"
          className="h-20 mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Data, pieczątka i podpis osoby uprawnionej do superaprobaty"
          value={formData.zatwierdzenie?.dataPieczatkaDecyzja || ""}
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
