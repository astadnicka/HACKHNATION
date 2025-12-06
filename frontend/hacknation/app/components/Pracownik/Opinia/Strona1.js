import React, { useState } from "react";

export default function Strona1({ formData, setFormData }) {
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
        <label className="block text-xs font-medium text-gray-700">
          Znak sprawy
        </label>
        <input
          id="znak_sprawy"
          type="text"
          className="h-20 mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wpisz znak sprawy"
          value={formData.podstawowe?.znakSrawy || ""}
          onChange={(e) =>
            handleInputChange("podstawowe.znakSrawy", e.target.value)
          }
        />
      </div>

      <div>
        <h1 className="font-semibold mb-2">
          OPINIA W SPRAWIE PRAWNEJ KWALIFIKACJI WYPADKU
        </h1>

        <label className="block text-sm font-medium text-gray-700">
          Nazwisko i imię poszkodowanego
        </label>
        <input
          id="poszkodowany_imie_nazwisko"
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź nazwisko i imię poszkodowanego"
          value={formData.podstawowe?.imieNazwiskoPoszkodowanego || ""}
          onChange={(e) =>
            handleInputChange(
              "podstawowe.imieNazwiskoPoszkodowanego",
              e.target.value
            )
          }
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Kwestia do rozstrzygnięcia
        </label>
        <textarea
          id="kwestia_do_rozstrzygniecza"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 h-20"
          placeholder="Opisz kwestię do rozstrzygnięcia"
          value={formData.podstawowe?.kwestiaDoRozstrzygniecza || ""}
          onChange={(e) =>
            handleInputChange(
              "podstawowe.kwestiaDoRozstrzygniecza",
              e.target.value
            )
          }
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Czy uznać zdarzenie z dnia
          <input
            id="data_zdarzenia"
            type="date"
            className="ml-2 inline p-1 border border-gray-300 rounded-md"
            value={formData.zdarzenie?.dataZdarzenia || ""}
            onChange={(e) =>
              handleInputChange("zdarzenie.dataZdarzenia", e.target.value)
            }
          />
          za wypadek podczas:
        </label>

        <div className="space-y-2 ml-4">
          <div className="flex items-center space-x-2">
            <input
              id="typ_zwykle_czynnosci"
              type="checkbox"
              checked={
                formData.zdarzenie?.typyZdarzen?.czywiklychCzynnosci || false
              }
              onChange={(e) =>
                handleInputChange(
                  "zdarzenie.typyZdarzen.czywiklychCzynnosci",
                  e.target.checked
                )
              }
            />
            <label htmlFor="typ_zwykle_czynnosci" className="text-sm">
              wykonywania zwykłych czynności związanych z prowadzeniem
              pozarolniczej działalności
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              id="typ_wspolpraca"
              type="checkbox"
              checked={formData.zdarzenie?.typyZdarzen?.czyWspolpraca || false}
              onChange={(e) =>
                handleInputChange(
                  "zdarzenie.typyZdarzen.czyWspolpraca",
                  e.target.checked
                )
              }
            />
            <label htmlFor="typ_wspolpraca" className="text-sm">
              wykonywania zwykłych czynności związanych ze współpracą przy
              prowadzeniu pozarolniczej działalności
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              id="typ_umowa_aktywizujaca"
              type="checkbox"
              checked={
                formData.zdarzenie?.typyZdarzen?.czyUmowaAktywizujaca || false
              }
              onChange={(e) =>
                handleInputChange(
                  "zdarzenie.typyZdarzen.czyUmowaAktywizujaca",
                  e.target.checked
                )
              }
            />
            <label htmlFor="typ_umowa_aktywizujaca" className="text-sm">
              wykonywania pracy na podstawie umowy uaktywniającej (ustawa z
              4.02.2012r. o opiece nad dziećmi do lat 3)
            </label>
          </div>

          <div className="border-t pt-2 mt-2">
            <p className="text-sm font-medium mb-2">
              lub w drodze do lub z miejsca:
            </p>

            <div className="flex items-center space-x-2">
              <input
                id="typ_droga_pozarolnicza"
                type="checkbox"
                checked={
                  formData.zdarzenie?.typyZdarzen?.czyWDrozePozarolnicza ||
                  false
                }
                onChange={(e) =>
                  handleInputChange(
                    "zdarzenie.typyZdarzen.czyWDrozePozarolnicza",
                    e.target.checked
                  )
                }
              />
              <label htmlFor="typ_droga_pozarolnicza" className="text-sm">
                wykonywania pozarolniczej działalności
              </label>
            </div>

            <div className="flex items-center space-x-2 mt-1">
              <input
                id="typ_droga_wspolpraca"
                type="checkbox"
                checked={
                  formData.zdarzenie?.typyZdarzen?.czyWDrozeWspolpraca || false
                }
                onChange={(e) =>
                  handleInputChange(
                    "zdarzenie.typyZdarzen.czyWDrozeWspolpraca",
                    e.target.checked
                  )
                }
              />
              <label htmlFor="typ_droga_wspolpraca" className="text-sm">
                współpracy przy prowadzeniu pozarolniczej działalności
              </label>
            </div>

            <div className="flex items-center space-x-2 mt-1">
              <input
                id="typ_droga_umowa"
                type="checkbox"
                checked={
                  formData.zdarzenie?.typyZdarzen?.czyWDrozeUmowaAktywizujaca ||
                  false
                }
                onChange={(e) =>
                  handleInputChange(
                    "zdarzenie.typyZdarzen.czyWDrozeUmowaAktywizujaca",
                    e.target.checked
                  )
                }
              />
              <label htmlFor="typ_droga_umowa" className="text-sm">
                wykonywania pracy na podstawie umowy uaktywniającej (ustawa o
                opiece nad dziećmi do lat 3)
              </label>
            </div>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Opinia o uznaniu
        </label>
        <textarea
          id="opinia_uznanie"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 h-20"
          placeholder="Wprowadź opinię"
          value={formData.opinia?.opiniaOUznaniu || ""}
          onChange={(e) =>
            handleInputChange("opinia.opiniaOUznaniu", e.target.value)
          }
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Uzasadnienie
        </label>
        <textarea
          id="opinia_uzasadnienie"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 h-24"
          placeholder="Wprowadź uzasadnienie"
          value={formData.opinia?.uzasadnienie || ""}
          onChange={(e) =>
            handleInputChange("opinia.uzasadnienie", e.target.value)
          }
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">
          Data, pieczątka i podpis osoby przygotowującej opinię
        </label>
        <textarea
          id="opinia_podpis"
          className="h-20 mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="(Data, pieczątka i podpis osoby przygotowującej)"
          value={formData.opinia?.dataPieczatkaOpisyPodpis || ""}
          onChange={(e) =>
            handleInputChange("opinia.dataPieczatkaOpisyPodpis", e.target.value)
          }
        />
      </div>
    </div>
  );
}
