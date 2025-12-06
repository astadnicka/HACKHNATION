"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function KlientWniosek() {
  const router = useRouter();
  const [crumpled, setCrumpled] = useState({ w3: false, w4: false });
  const [hovered, setHovered] = useState({ w3: false, w4: false });
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
    <div className="KlientWniosek Wnioski">
      <div className="WniosekButtonsWrapper">
        <button
          type="button"
          className="PaperWrapper"
          onClick={() => handleClick("w3", "/Wniosek3")}
          onMouseEnter={() => !crumpled.w3 && handleMouseEnter("w3")}
          onMouseLeave={() => !crumpled.w3 && handleMouseLeave("w3")}
          aria-label="Przejdź do Wniosku 3"
          disabled={crumpled.w3}
        >
          <img
            className="paper"
            src={crumpled.w3 || hovered.w3 ? "/crampled.png" : "/paper.png"}
            alt="papier"
          />
          <span className="PaperButtonOverlay">Wniosek 3</span>
        </button>

        <button
          type="button"
          className="PaperWrapper"
          onClick={() => handleClick("w4", "/Wniosek4")}
          onMouseEnter={() => !crumpled.w4 && handleMouseEnter("w4")}
          onMouseLeave={() => !crumpled.w4 && handleMouseLeave("w4")}
          aria-label="Przejdź do Wniosku 4"
          disabled={crumpled.w4}
        >
          <img
            className="paper"
            src={crumpled.w4 || hovered.w4 ? "/crampled.png" : "/paper.png"}
            alt="papier"
          />
          <span className="PaperButtonOverlay">Wniosek 4</span>
        </button>
      </div>
    </div>
  );
}
