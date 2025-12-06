import React, { useState } from "react";

export default function Strona2() {
  const [isWypadek, setIsWypadek] = useState(false);
  const [isNaruszenie, setIsNaruszenie] = useState(false);
  const [Badano, setBadano] = useState(false);
  const [Przeszkody, setPrzeszkody] = useState(false);
  const [brakSwiadkow, setBrakSwiadkow] = useState(false);
  const [attached, setAttached] = useState({
    zawiadomienie: false,
    wyjasnienia: false,
    oswiadczenie: false,
    faktura: false,
    ceidg: false,
    ortopedia: false,
    badanie: false,
  });

  return (
    <div className="bg-gray-50/60 w-full max-w-2xl p-4 rounded-xl flex flex-col space-y-4 mb-4">
      {/* 3. Świadkowie */}
      <div>
        <h1 className="font-semibold mb-2">
          I. DANE IDENTYFIKACYJNE PŁATNIKA SKŁADEK
        </h1>

        <label className="block text-sm font-medium text-gray-700">
          3. Świadkowie wypadku
        </label>

        <div className="flex items-center space-x-2 mt-1">
          <input
            type="checkbox"
            id="brakSwiadkow"
            onChange={(e) => setBrakSwiadkow(e.target.checked)}
          />
          <label htmlFor="brakSwiadkow">Brak świadków</label>
        </div>

        <input
          type="text"
          disabled={brakSwiadkow}
          className={`mt-2 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
            brakSwiadkow ? "bg-gray-200 " : ""
          }`}
          placeholder="Imię i nazwisko"
        />
        <input
          type="text"
          disabled={brakSwiadkow}
          className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
            brakSwiadkow ? "bg-gray-200 " : ""
          }`}
          placeholder="Miejsce zamieszkania"
        />
      </div>

      {/* 4. Wypadek jest / nie jest */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          4. Wypadek jest / nie jest wypadkiem przy pracy określonym w art. 3
          ust. 3 pkt 8 ustawy z dnia 30 października 2002r. o ubezpieczeniu
          społecznym z tytułu wypadków przy pracy i chorób zawodowych (Dz. U. z
          2019r. poz. 1205 z późn. zm.) (uzasadnić, jeżeli zdarzenia nie uznano
          za wypadek przy pracy )
        </label>

        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="wypadek"
              onChange={() => setIsWypadek(true)}
              checked={isWypadek === true}
            />
            <span className={isWypadek === false ? "line-through" : ""}>
              jest
            </span>
          </label>

          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="wypadek"
              onChange={() => setIsWypadek(false)}
              checked={isWypadek === false}
            />
            <span className={isWypadek === true ? "line-through" : ""}>
              nie jest
            </span>
          </label>
        </div>

        <input
          type="text"
          disabled={isWypadek === true}
          className={`mt-2 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
            isWypadek === true ? "bg-gray-200 " : ""
          }`}
          placeholder="Uzasadnienie"
        />
      </div>

      {/* 5. Naruszenie przepisów */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          5. Stwierdzono, że wyłączną przyczyną wypadku było udowodnione
          naruszenie przez poszkodowanego przepisów dotyczących ochrony życia i
          zdrowia, spowodowane przez niego umyślnie lub wskutek rażącego
          niedbalstwa
        </label>
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            name="wypadek"
            onChange={(e) => setIsNaruszenie(e.target.checked)}
          />
          <span>Nie stwierdzono</span>
        </label>

        <input
          type="text"
          disabled={isNaruszenie}
          className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
            isNaruszenie ? "bg-gray-200 " : ""
          }`}
          placeholder="podaj powody"
        />
      </div>

      {/* 6. Stan nietrzeźwości */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          6. Stwierdzono, że poszkodowany będąc w stanie nietrzeźwości lub pod
          wpływem środków odurzających lub substancji psychotropowych,
          przyczynił się w znacznym stopniu do spowodowania wypadku (podać
          dowody, a w przypadku odmowy przez poszkodowanego poddania się badaniu
          na zawartość tych substancji w organizmie - zamieść informację o tym
          fakcie)
        </label>

        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              name="wypadek"
              onChange={(e) => setBadano(e.target.checked)}
            />
            <span>Nie badano</span>
          </label>
        </div>

        <input
          type="text"
          disabled={Badano}
          className={`mt-2 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
            Badano ? "bg-gray-200 " : ""
          }`}
          placeholder="Uzasadnienie"
        />
      </div>

      <h1 className="font-semibold mb-2">IV. POZOSTAŁE INFORMACJE</h1>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          1. Poszkodowanego (członka rodziny) zapoznano z treścią karty wypadku
          i pouczano o prawie zgłaszania uwag i zastrzeżeń do ustaleń zawartych
          w karcie wypadku
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Imię i nazwisko poszkodowanego (członka rodziny)"
        />
        <input
          type="date"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="podpis"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          2. Kartę sporządzono w dniu
        </label>
        <input
          type="date"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
      </div>

      {/* 2a.  */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          2a. Zakład Ubezpieczeń Społecznych
        </label>
        <label className="block text-xs font-medium text-gray-700">
          nazwa podmiotu zobowiązaniego do sporządenia karty
        </label>

        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="pieczątka"
        />
      </div>

      {/* 2b */}
      <div>
        <label className="block text-xs font-medium text-gray-700">
          imię i nazwisko sporządzającego
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="podpis"
        />
      </div>

      {/* 3. Przeszkody */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          3. Przeszkody i trudności uniemożliwiające sporządzenie karty wypadku
          w wymaganym terminie 14 dni
        </label>
        <input
          type="checkbox"
          id="brakPrzeszkód"
          onChange={(e) => setPrzeszkody(e.target.checked)}
        />
        <label htmlFor="brak">Brak</label>

        <input
          type="text"
          disabled={Przeszkody}
          className={`mt-2 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
            Przeszkody ? "bg-gray-200 " : ""
          }`}
          placeholder="proszę podać"
        />
      </div>

      {/* 4. Kartę odebrano */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          4. Kartę odebrano w dniu
        </label>
        <input
          type="date"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="podpis uprawnionego"
        />
      </div>

      {/* Załączniki */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          5. Załączniki
        </label>

        <div className="flex items-center space-x-2 mt-1">
          <input
            type="checkbox"
            checked={attached.zawiadomienie}
            onChange={(e) =>
              setAttached({ ...attached, zawiadomienie: e.target.checked })
            }
          />
          <label htmlFor="brakSwiadkow">1. Zawiadomienie o wypadku</label>
        </div>

        <div className="flex items-center space-x-2 mt-1">
          <input
            type="checkbox"
            checked={attached.wyjasnienia}
            onChange={(e) =>
              setAttached({ ...attached, wyjasnienia: e.target.checked })
            }
          />
          <label htmlFor="brakSwiadkow">
            2. Zapis wyjaśnień poszkodowanego
          </label>
        </div>
        <div className="flex items-center space-x-2 mt-1">
          <input
            type="checkbox"
            checked={attached.oswiadczenie}
            onChange={(e) =>
              setAttached({ ...attached, oswiadczenie: e.target.checked })
            }
          />
          <label htmlFor="brakSwiadkow">3. Oświadczenie poszkodowanego</label>
        </div>
        <div className="flex items-center space-x-2 mt-1">
          <input
            type="checkbox"
            checked={attached.faktura}
            onChange={(e) =>
              setAttached({ ...attached, faktura: e.target.checked })
            }
          />
          <label htmlFor="brakSwiadkow">4. Faktura VAT</label>
        </div>
        <div className="flex items-center space-x-2 mt-1">
          <input
            type="checkbox"
            checked={attached.ceidg}
            onChange={(e) =>
              setAttached({ ...attached, ceidg: e.target.checked })
            }
          />
          <label htmlFor="brakSwiadkow">5. Wydrug z CEiDG</label>
        </div>
        <div className="flex items-center space-x-2 mt-1">
          <input
            type="checkbox"
            checked={attached.ortopedia}
            onChange={(e) =>
              setAttached({ ...attached, ortopedia: e.target.checked })
            }
          />
          <label htmlFor="brakSwiadkow">
            6. Odpis historii choroby z Poradni Ortopedycznej
          </label>
        </div>

        <div className="flex items-center space-x-2 mt-1">
          <input
            type="checkbox"
            checked={attached.badanie}
            onChange={(e) =>
              setAttached({ ...attached, badanie: e.target.checked })
            }
          />
          <label htmlFor="brakSwiadkow">7. Wynik badania</label>
        </div>
      </div>
    </div>
  );
}
