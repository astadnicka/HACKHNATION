'use client';

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function KlientWniosek() {
  const router = useRouter();
  const handleClick = (route) => {
    router.push(route);
  };

  return (
        <main className="m-4">

     <Link href="/">
          <button className="px-2 py-1 bg-[#00923f] cursor-pointer rounded-md hover:bg-[#007a33] transition-colors text-white">
            Wróć
          </button>
       </Link>
    <div className="KlientWniosek Wnioski">
              <h2 className="WniosekHeading">Który wniosek chcesz złożyć?</h2>

      <div className="WniosekButtonsWrapper">
        <button
          type="button"
          className="WniosekButton"
          onClick={() => handleClick("/pages/klient/wnioski/zapis_wyjasnien")}
        >
          Zapis Wyjaśnień
        </button>
        <button
          type="button"
          className="WniosekButton"
          onClick={() => handleClick("/pages/klient/wnioski/zawiadomienie")}
        >
          Zawiadomienie
        </button>
      </div>
    </div>
    </main>
  );
}