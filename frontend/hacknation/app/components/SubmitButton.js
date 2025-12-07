"use client";
import { useState } from "react";

export default function SubmitButton({ formData, formType }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);

    let dataWithPieczatka = { ...formData };

    if (formType === "KartaWypadku") {
      dataWithPieczatka.czy_pieczatka =
        (formData.podmiotPieczatka?.nazwaAdresPieczatka &&
          String(formData.podmiotPieczatka.nazwaAdresPieczatka).trim().length >
            0) ||
        false;
    } else if (formType === "Opinia") {
      const hasPieczatkaOpracowania =
        formData.opinia?.dataPieczatkaOpisyPodpis &&
        String(formData.opinia.dataPieczatkaOpisyPodpis).trim().length > 0;
      const hasPieczatkaAproby =
        formData.zatwierdzenie?.dataPieczatkaAproby &&
        String(formData.zatwierdzenie.dataPieczatkaAproby).trim().length > 0;
      dataWithPieczatka.czy_pieczatka =
        (hasPieczatkaOpracowania && hasPieczatkaAproby) || false;
    }

    const payload = {
      type: formType,
      timestamp: new Date().toISOString(),
      data: dataWithPieczatka,
    };

    console.log("Wysyłany JSON:", JSON.stringify(payload, null, 2));

    setIsLoading(false);
  };

  return (
    <button
      onClick={handleSubmit}
      disabled={isLoading}
      className="px-4 py-2 bg-[#00923f] text-white rounded-md hover:bg-[#007a33] disabled:bg-gray-400 transition-colors"
    >
      {isLoading ? "Wysyłanie..." : "Wyślij wniosek"}
    </button>
  );
}
