"use client";
import { useState } from "react";

export default function SubmitButton({ formData, formType }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);

    const payload = {
      type: formType,
      timestamp: new Date().toISOString(),
      data: formData,
    };

    console.log("Wysyłany JSON:", JSON.stringify(payload, null, 2));


    setIsLoading(false);
  };

  return (
    <button
      onClick={handleSubmit}
      disabled={isLoading}
      className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:bg-gray-400 transition-colors"
    >
      {isLoading ? "Wysyłanie..." : "Wyślij wniosek"}
    </button>
  );
}
