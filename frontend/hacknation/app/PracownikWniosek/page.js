"use client";
import { useRouter } from "next/navigation";


export default function PracownikWniosek() {
    const router = useRouter();
    
  return (
    <div className="PracownikWniosek Wnioski">
        <div className="WniosekButtonsWrapper">
            <button className={"Wniosek1 WniosekButton"} onClick={() => router.push('/KartaWypadku')}> Karta Wypadku</button>
            <button className={"Wniosek2 WniosekButton"} onClick={() => router.push('/Opinia')}>Opinia</button>
        </div>
    </div>
  );
}
