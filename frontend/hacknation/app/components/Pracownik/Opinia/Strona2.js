import React from "react";

export default function Strona2({ formData, setFormData, errors }) {
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
        <textarea
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 min-h-[60px] resize-y"
          placeholder="Wprowadź opinię"
          value={getNested("zatwierdzenie.opiniaUprawnionegoDoAproby")}
          onChange={(e) =>
            handleInputChange(
              "zatwierdzenie.opiniaUprawnionegoDoAproby",
              e.target.value
            )
          }
          rows={3}
        />
        {errors.opiniaUprawnionegoDoAproby && (
          <p className="text-red-500 text-sm mt-1">
            {errors.opiniaUprawnionegoDoAproby}
          </p>
        )}
        <label className="block text-sm font-medium text-gray-700 mt-2">
          Data
        </label>
        <input
          type="date"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={getNested("zatwierdzenie.dataAproby")}
          onChange={(e) =>
            handleInputChange("zatwierdzenie.dataAproby", e.target.value)
          }
        />
        {errors.dataAproby && (
          <p className="text-red-500 text-sm mt-1">{errors.dataAproby}</p>
        )}
        <label className="block text-sm font-medium text-gray-700 mt-2">
          Pieczątka
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Pieczątka"
          value={getNested("zatwierdzenie.pieczatkaAproby")}
          onChange={(e) =>
            handleInputChange("zatwierdzenie.pieczatkaAproby", e.target.value)
          }
        />
        {errors.pieczatkaAproby && (
          <p className="text-red-500 text-sm mt-1">{errors.pieczatkaAproby}</p>
        )}
        <label className="block text-sm font-medium text-gray-700 mt-2">
          Podpis
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Podpis"
          value={getNested("zatwierdzenie.podpisAproby")}
          onChange={(e) =>
            handleInputChange("zatwierdzenie.podpisAproby", e.target.value)
          }
        />
        {errors.podpisAproby && (
          <p className="text-red-500 text-sm mt-1">{errors.podpisAproby}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Uzasadnienie
        </label>
        <textarea
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 min-h-[100px] resize-y"
          placeholder="Wprowadź uzasadnienie"
          value={getNested("zatwierdzenie.uzasadnienieAproby")}
          onChange={(e) =>
            handleInputChange(
              "zatwierdzenie.uzasadnienieAproby",
              e.target.value
            )
          }
          rows={5}
        />
        {errors.uzasadnienieAproby && (
          <p className="text-red-500 text-sm mt-1">
            {errors.uzasadnienieAproby}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Opinia osoby uprawnionej do superaprobaty
        </label>
        <textarea
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 min-h-[60px] resize-y"
          value={getNested("zatwierdzenie.opiniaSuperaproby")}
          onChange={(e) =>
            handleInputChange("zatwierdzenie.opiniaSuperaproby", e.target.value)
          }
          rows={3}
        />
        <label className="block text-sm font-medium text-gray-700 mt-2">
          Data
        </label>
        <input
          type="date"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={getNested("zatwierdzenie.dataSuperaproby")}
          onChange={(e) =>
            handleInputChange("zatwierdzenie.dataSuperaproby", e.target.value)
          }
        />
        <label className="block text-sm font-medium text-gray-700 mt-2">
          Pieczątka
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Pieczątka"
          value={getNested("zatwierdzenie.pieczatkaSuperaproby")}
          onChange={(e) =>
            handleInputChange(
              "zatwierdzenie.pieczatkaSuperaproby",
              e.target.value
            )
          }
        />
        <label className="block text-sm font-medium text-gray-700 mt-2">
          Podpis
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Podpis"
          value={getNested("zatwierdzenie.podpisSuperaproby")}
          onChange={(e) =>
            handleInputChange("zatwierdzenie.podpisSuperaproby", e.target.value)
          }
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Opinia Konsultanta
        </label>
        <textarea
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 min-h-[60px] resize-y"
          value={getNested("zatwierdzenie.opiniaKonsultanta")}
          onChange={(e) =>
            handleInputChange("zatwierdzenie.opiniaKonsultanta", e.target.value)
          }
          rows={3}
        />
        <label className="block text-sm font-medium text-gray-700 mt-2">
          Data
        </label>
        <input
          type="date"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={getNested("zatwierdzenie.dataKonsultanta")}
          onChange={(e) =>
            handleInputChange("zatwierdzenie.dataKonsultanta", e.target.value)
          }
        />
        <label className="block text-sm font-medium text-gray-700 mt-2">
          Pieczątka
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Pieczątka"
          value={getNested("zatwierdzenie.pieczatkaKonsultanta")}
          onChange={(e) =>
            handleInputChange(
              "zatwierdzenie.pieczatkaKonsultanta",
              e.target.value
            )
          }
        />
        <label className="block text-sm font-medium text-gray-700 mt-2">
          Podpis
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Podpis"
          value={getNested("zatwierdzenie.podpisKonsultanta")}
          onChange={(e) =>
            handleInputChange("zatwierdzenie.podpisKonsultanta", e.target.value)
          }
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Opinia Z-cy Dyrektora ds. Świadczeń
        </label>
        <textarea
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 min-h-[60px] resize-y"
          value={getNested("zatwierdzenie.opiniaZcyDyrektora")}
          onChange={(e) =>
            handleInputChange(
              "zatwierdzenie.opiniaZcyDyrektora",
              e.target.value
            )
          }
          rows={3}
        />
        <label className="block text-sm font-medium text-gray-700 mt-2">
          Data
        </label>
        <input
          type="date"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={getNested("zatwierdzenie.dataZcyDyrektora")}
          onChange={(e) =>
            handleInputChange("zatwierdzenie.dataZcyDyrektora", e.target.value)
          }
        />
        <label className="block text-sm font-medium text-gray-700 mt-2">
          Pieczątka
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Pieczątka"
          value={getNested("zatwierdzenie.pieczatkaZcyDyrektora")}
          onChange={(e) =>
            handleInputChange(
              "zatwierdzenie.pieczatkaZcyDyrektora",
              e.target.value
            )
          }
        />
        <label className="block text-sm font-medium text-gray-700 mt-2">
          Podpis
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Podpis"
          value={getNested("zatwierdzenie.podpisZcyDyrektora")}
          onChange={(e) =>
            handleInputChange(
              "zatwierdzenie.podpisZcyDyrektora",
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
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 min-h-[60px] resize-y"
          value={getNested("zatwierdzenie.decyzjaSuperaproby")}
          onChange={(e) =>
            handleInputChange(
              "zatwierdzenie.decyzjaSuperaproby",
              e.target.value
            )
          }
          rows={3}
        />
        <label className="block text-sm font-medium text-gray-700 mt-2">
          Data
        </label>
        <input
          type="date"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={getNested("zatwierdzenie.dataDecyzja")}
          onChange={(e) =>
            handleInputChange("zatwierdzenie.dataDecyzja", e.target.value)
          }
        />
        <label className="block text-sm font-medium text-gray-700 mt-2">
          Pieczątka
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Pieczątka"
          value={getNested("zatwierdzenie.pieczatkaDecyzja")}
          onChange={(e) =>
            handleInputChange("zatwierdzenie.pieczatkaDecyzja", e.target.value)
          }
        />
        <label className="block text-sm font-medium text-gray-700 mt-2">
          Podpis
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Podpis"
          value={getNested("zatwierdzenie.podpisDecyzja")}
          onChange={(e) =>
            handleInputChange("zatwierdzenie.podpisDecyzja", e.target.value)
          }
        />
      </div>
    </div>
  );
}
