"use client";
import { useRouter } from "next/navigation";

export default function KlientWniosek() {
  const router = useRouter();
  const handleClick = (route) => {
    router.push(route);
  };

  return (
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
  );
}
