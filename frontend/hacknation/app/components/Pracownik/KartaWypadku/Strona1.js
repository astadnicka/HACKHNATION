export default function Strona1() {
  return (
    <div className="bg-gray-50/60 w-full max-w-2xl p-4 rounded-xl flex flex-col space-y-4 mb-4">
      <div>
        <h1 className="font-semibold mb-2">
          I. DANE IDENTYFIKACYJNE PŁATNIKA SKŁADEK
        </h1>
        <label className="block text-sm font-medium text-gray-700">
          1. Imię i nazwisko lub nazwa
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź imię i nazwisko lub nazwę"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          2. Adres siedziby
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź adres siedziby"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          3. NIP
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź NIP"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          REGION
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź REGION"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">PESEL</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź PESEL"
        />
      </div>
      <div className="flex-col">
        <label className="block text-sm font-medium text-gray-700 ">
          Dokument tożsamości (dowód osobisty lub paszport)
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="rodzaj dokumentu"
        />
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="seria"
        />
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="numer"
        />
      </div>
      <h1 className="font-semibold mb-2">
        II. DANE IDENTYFIKACYJNE POSZKODOWANEGO
      </h1>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          1. Imię i nazwisko poszkodowanego:
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź imię i nazwisko poszkodowanego"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          2. PESEL
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź PESEL poszkodowanego"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Dokument tożsamości (dowód osobisty lub paszport)
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="rodzaj dokumentu"
        />
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="seria"
        />
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="numer"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          3. Data i miejsce urodzenia
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź datę oraz miejsce urodzenia poszkodowanego"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          4. Adres zamieszkania
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź adres zamieszkania poszkodowanego"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          5. Tytuł ubezpieczenia wypadkowego (wymienić numer pozycji i pełny
          tytuł ubezpieczenia społecznego, zgodnie z art.3 ust. 3 ustawy z dnia
          30 października 2002r. o ubezpieczeniu społecznym z tytułu wypadków
          przy pracy i chorób zawodowych Dx. U. z 2019r., poz 1205) <br></br> Nr
          8 - wykonywanie zwykłych czynności związanych z prowadzeniem
          działalności pozarolniczej w rozumieniu przepisów o systemie
          ubeczpieczeń społecznych
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź adres zamieszkania poszkodowanego"
        />
      </div>
      <h1 className="font-semibold mb-2">III. INFORMACJE O WYPADKU </h1>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          1. Data zgłoszenia oraz imię i nazwisko osoby zgłaszającej wypadek
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź datę"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          2. Informacje dotyczące okoliczności, przyczyn, czasu i miejsca
          wypadku
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Wprowadź informacje"
        />
      </div>
    </div>
  );
}
