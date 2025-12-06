"use client";

import React, { useEffect, useRef } from "react";

export default function Bounce({ labelRef: externalRef }) {
  const internalRef = useRef(null);
  const labelRef = externalRef || internalRef;
  const bodyRef = useRef(null);

  const velocityX = useRef(1);
  const velocityY = useRef(1);
  const pause = useRef(true);
  const width = useRef(0);
  const height = useRef(0);
  const intervalId = useRef(null);

  const FPS = 60;
  const color = "#26de81";

  const reset = () => {
    width.current = window.innerWidth;
    height.current = window.innerHeight;

    if (labelRef.current) {
      const rect = labelRef.current.getBoundingClientRect();
      pause.current =
        width.current <= rect.width || height.current <= rect.height;

      // Ustaw na pozycję startową (pośrodek ekranu)
      const startX = (width.current - rect.width) / 2;
      const startY = (height.current - rect.height) / 2;
      labelRef.current.style.left = startX + "px";
      labelRef.current.style.top = startY + "px";
      labelRef.current.style.stroke = color;
    }
  };

  useEffect(() => {
    reset();

    intervalId.current = setInterval(() => {
      if (pause.current || !labelRef.current) return;

      let rect = labelRef.current.getBoundingClientRect();
      let left = rect.x;
      let top = rect.y;

      if (left + rect.width >= width.current || left <= 0) {
        velocityX.current = -velocityX.current;

        if (bodyRef.current) {
          if (left + 150 <= width.current / 2) {
            bodyRef.current.style.boxShadow = `inset 4px 0px 0px 0px ${color}`;
          } else {
            bodyRef.current.style.boxShadow = `inset -4px 0px 0px 0px ${color}`;
          }
        }
      }

      if (top + rect.height >= height.current || top <= 0) {
        velocityY.current = -velocityY.current;

        if (bodyRef.current) {
          if (top + 28 <= height.current / 2) {
            bodyRef.current.style.boxShadow = `inset 0px 4px 0px 0px ${color}`;
          } else {
            bodyRef.current.style.boxShadow = `inset 0px -4px 0px 0px ${color}`;
          }
        }
      }

      labelRef.current.style.left = rect.x + velocityX.current + "px";
      labelRef.current.style.top = rect.y + velocityY.current + "px";
    }, 1000 / FPS);

    window.addEventListener("resize", reset, true);

    return () => {
      if (intervalId.current) clearInterval(intervalId.current);
      window.removeEventListener("resize", reset, true);
    };
  }, [labelRef]);

  return (
    <div
      ref={bodyRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
}
