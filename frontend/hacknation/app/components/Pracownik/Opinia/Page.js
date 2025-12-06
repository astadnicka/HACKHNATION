import Link from "next/link";
import Strona1 from "./Strona1";
import Strona2 from "./Strona2";

import { useState } from "react";

export default function Opinia() {
  const [page, setPage] = useState(1);

  const renderPage = () => {
    switch (page) {
      case 1:
        return <Strona1 />;
      case 2:
        return <Strona2 />;
      default:
        return <Strona1 />;
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen pt-16">

      {renderPage()}

      <div className="absolute top-4 left-4">
        <Link href="/">
          <button className="px-2 py-1 bg-cyan-300 cursor-pointer rounded-md hover:bg-cyan-400 transition-colors">
            Fuck, Go Back
          </button>
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-4">Karta Wypadku</h1>

      <div className="w-full max-w-2xl">
        <div className="flex justify-between mt-4">
        {page === 2 &&(
           <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
          >
            Cofnij
          </button>
        )}
         
      <div className="flex justify-end w-full">
        {page === 1 && (
          <button
            onClick={() => setPage((p) => Math.min(2, p + 1))}
            className="px-2 py-1 bg-cyan-300 rounded-md hover:bg-cyan-400"
          >
            Następna
          </button>
        )}
      </div>

        

        </div>
      </div>

    </div>
  );
}
