'use client'

import Link from "next/link";
import Strona1 from "@/app/components/klient/wnioski/zapis_wyjasnien/strona1";
import Strona2 from "@/app/components/klient/wnioski/zapis_wyjasnien/strona2";
import Strona3 from "@/app/components/klient/wnioski/zapis_wyjasnien/strona3";

import { useState } from 'react';

export default function zapis_wyjasnien() {
  const [page, setPage] = useState(1);

  const renderPage = () => {
    switch (page) {
      case 1:
        return <Strona1 />;
      case 2:
        return <Strona2 />;
      case 3:
        return <Strona3 />;
      default:
        return <Strona1 />;
    }
  }

  return (
    <div className="flex flex-col items-center min-h-screen pt-16">    
      {/* GO BACK BUTTON */}
      <div className="absolute top-4 left-4">
        <Link href="/">
            <button className="px-2 py-1 bg-cyan-300 cursor-pointer rounded-md hover:bg-cyan-400 transition-colors">
              Fuck, Go Back
            </button>
        </Link>
      </div>
      {/* title */}
      <h1 className="text-4xl font-bold mb-4">Zapis Wyjaśnień</h1>
      {/* FORM */}
      <div className="w-full max-w-2xl">
        {renderPage()}
        { /* GO NEXT BUTTON */}
        <div className="flex justify-between">
        {page > 1 &&(
           <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
          >
            Cofnij
          </button>
        )}        
        {page < 3 &&(
           <button
            onClick={() => setPage((p) => Math.max(1, p + 1))}
            className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
          >
            Dalej
          </button>
        )}
        </div>
      </div>
    </div>
  );
}
