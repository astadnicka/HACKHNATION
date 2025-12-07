"use client";
import { useRouter } from "next/navigation";

export default function PracownikWniosek() {
  const router = useRouter();
  const handleClick = (route) => {
    router.push(route);
  };

  return (
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
  );
}
