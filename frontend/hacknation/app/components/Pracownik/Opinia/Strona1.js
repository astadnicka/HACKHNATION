import React, { useState } from "react";

export default function Strona1() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="bg-gray-50/60 w-full max-w-2xl p-4 rounded-xl flex flex-col space-y-4 mb-4">
      {/* 3. Świadkowie */}
      <div>
        <h1 className="font-semibold mb-2">
          OPINIA W SPRAWIE PRAWNEJ KWALIFIKACJI WYPADKU
        </h1>
        <label className="block text-sm font-medium text-gray-700">
          Nazwisko i imię poszkodowanego:{" "}
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź nazwisko i imię poszkodowanego"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Kwestia do rozstrzygnięzia:{" "}
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Opisz kwestię do rozstrzygnięcia"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Czy uznać zdarzenie z dnia <input type="date"></input> za wypadek
          podczas
        </label>
        <div className="flex items-center space-x-2 mt-1">
          <input
            type="checkbox"
            id="isChecked"
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <label>
            {" "}
            - wykonywania zwykłych czynnośći zwiążanych z prowadzeniem
            pozarolniczej działalności;
          </label>
        </div>
        <div className="flex items-center space-x-2 mt-1">
          <input
            type="checkbox"
            id="isChecked"
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <label>
            {" "}
            - wykonywania zwykłych czynnośći zwiążanych z prowadzeniem
            pozarolniczej działalności;
          </label>
        </div>
        <div className="flex items-center space-x-2 mt-1">
          <input
            type="checkbox"
            id="isChecked"
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <label>
            {" "}
            - wykonywania zwykłych czynności związanych ze współpracą przy
            prowadzeniu pozarolniczej działalności
          </label>
        </div>
        <div className="flex items-center space-x-2 mt-1">
          <input
            type="checkbox"
            id="isChecked"
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <label>
            - wykonywania pracy na podstawie umowy uaktywniającej, o której mowa
            w ustawie z dnia 4.02.2012r. o opiece nad dziećmi w wieku do lat 3
          </label>
        </div>
        <div className="flex items-center space-x-2 mt-1">
          <label className="block text-sm font-medium text-gray-700">
            lub w drodze do lub z miejsca:{" "}
          </label>
        </div>
        <div className="flex items-center space-x-2 mt-1">
          <input
            type="checkbox"
            id="isChecked"
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <label> - wykonywania pozarolniczej działalności;</label>
        </div>
        <div className="flex items-center space-x-2 mt-1">
          <input
            type="checkbox"
            id="isChecked"
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <label>
            {" "}
            - współpracy przy prowadzeniu pozarolniczej działalności;i
          </label>
        </div>
        <div className="flex items-center space-x-2 mt-1">
          <input
            type="checkbox"
            id="isChecked"
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <label>
            - wykonywania pracy na podstawie umowy uaktywniającej, o której mowa
            w ustawie o opiece nad dziećmi w wieku do lat 3
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Opinia o uznaniu
          </label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Wprowadź opinię"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Uzasadnienie:{" "}
          </label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Wprowadź uzasadnienie"
          />
        </div>
        <br></br>
        <div className="flex items-center space-x-2 mt-1">
          <input
            type="text"
            className="h-24 mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <label className="block text-xs font-medium text-gray-700">
            (Data, pieczątka i podpis osoby pracowywującej)
          </label>
        </div>
      </div>
    </div>
  );
}
