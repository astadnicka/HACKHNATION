"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function PracownikWniosek() {
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
    <div className="PracownikWniosek Wnioski">
        <h2 className="WniosekHeading">Który wniosek chcesz złożyć?</h2>

      <div className="WniosekButtonsWrapper">
        <button
          type="button"
          className="WniosekButton"
          onClick={() => handleClick("/KartaWypadku")}
        >
          Karta Wypadku
        </button>
        <button
          type="button"
          className="WniosekButton"
          onClick={() => handleClick("/Opinia")}
        >
          Opinia
        </button>
      </div>
    </div>
    </main>
  );
}
