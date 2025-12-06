import React, { useState } from "react";

export default function Strona1() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="bg-gray-50/60 w-full max-w-2xl p-4 rounded-xl flex flex-col space-y-4 mb-4">
      {/* 3. Świadkowie */}
      <div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Opinia osoby uprawnionej do aprobaty
          </label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Wprowadź opinię"
          />
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <br></br>
          <label className="block text-xs font-medium text-gray-700">
            (Data, piecząta i podpis osoby opracowywującej)
          </label>
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
        <div className="flex items-center space-x-2 mt-1">
          <input
            type="text"
            className=" h-24 mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <label className="block text-xs font-medium text-gray-700">
            (Data, pieczątka i podpis osoby )
          </label>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Opinia osoby uprawnionej do superaprobaty
          </label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder=""
          />
          <div className="flex items-center space-x-2 mt-1">
            <input
              type="text"
              className=" h-24 mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <label className="block text-xs font-medium text-gray-700">
              (Data, pieczątka i podpis osoby uprawionej do superaprobaty)
            </label>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Opinia Konsultanta
          </label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder=""
          />
          <div className="flex items-center space-x-2 mt-1">
            <input
              type="text"
              className=" h-24 mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <label className="block text-xs font-medium text-gray-700">
              (Data, pieczątka i podpis konsultanta)
            </label>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Opinia Z-cy Dyrektora ds. Świadczeń
          </label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder=""
          />
          <div className="flex items-center space-x-2 mt-1">
            <input
              type="text"
              className=" h-24 mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <label className="block text-xs font-medium text-gray-700">
              (Data, pieczątka i podpis Z-cy Dyrektora ds. Świadczeń)
            </label>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Decyzja osoby uprawnionej do superaprobaty
          </label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder=""
          />
          <div className="flex items-center space-x-2 mt-1">
            <input
              type="text"
              className=" h-24 mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <label className="block text-xs font-medium text-gray-700">
              (Data, pieczątka i podpis osoby uprawnionej do superaprobaty)
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
