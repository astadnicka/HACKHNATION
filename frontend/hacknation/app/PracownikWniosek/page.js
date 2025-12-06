"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function PracownikWniosek() {
  const router = useRouter();
  const [crumpled, setCrumpled] = useState({ karta: false, opinia: false });
  const [hovered, setHovered] = useState({ karta: false, opinia: false });
  const timeoutsRef = useRef([]);

  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach((timeoutId) => clearTimeout(timeoutId));
      timeoutsRef.current = [];
    };
  }, []);

  const handleClick = (key, route) => {
    setCrumpled((prev) => ({ ...prev, [key]: true }));
    const timeoutId = setTimeout(() => {
      router.push(route);
    }, 200);
    timeoutsRef.current.push(timeoutId);
  };

  const handleMouseEnter = (key) => {
    setHovered((prev) => ({ ...prev, [key]: true }));
  };

  const handleMouseLeave = (key) => {
    setHovered((prev) => ({ ...prev, [key]: false }));
  };

  return (
    <div className="PracownikWniosek Wnioski">
      <div className="WniosekButtonsWrapper">
        <button
          type="button"
          className="PaperWrapper"
          onClick={() => handleClick("karta", "/KartaWypadku")}
          onMouseEnter={() => !crumpled.karta && handleMouseEnter("karta")}
          onMouseLeave={() => !crumpled.karta && handleMouseLeave("karta")}
          aria-label="Przejdź do Karty Wypadku"
          disabled={crumpled.karta}
        >
          <img
            className="paper"
            src={
              crumpled.karta || hovered.karta ? "/crampled.png" : "/paper.png"
            }
            alt="papier"
          />
          <span className="PaperButtonOverlay">Karta Wypadku</span>
        </button>
        <button
          type="button"
          className="PaperWrapper"
          onClick={() => handleClick("opinia", "/Opinia")}
          onMouseEnter={() => !crumpled.opinia && handleMouseEnter("opinia")}
          onMouseLeave={() => !crumpled.opinia && handleMouseLeave("opinia")}
          aria-label="Przejdź do Opinii"
          disabled={crumpled.opinia}
        >
          <img
            className="paper"
            src={
              crumpled.opinia || hovered.opinia ? "/crampled.png" : "/paper.png"
            }
            alt="papier"
          />
          <span className="PaperButtonOverlay">Opinia</span>
        </button>
      </div>
    </div>
  );
}
