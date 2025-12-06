"use client";
import { useRouter } from "next/navigation";

export default function KlientWniosek() {
  const router = useRouter();

  return (
    <div className="KlientWniosek Wnioski">
      <div className="WniosekButtonsWrapper">
        <button className={"Wniosek3 WniosekButton"} onClick={() => router.push('/Wniosek3')}>Wniosek 3</button>
        <button className={"Wniosek4 WniosekButton"} onClick={() => router.push('/Wniosek4')}>Wniosek 4</button>
      </div>
    </div>
  );
}
