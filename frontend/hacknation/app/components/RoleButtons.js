"use client";
import { useRouter } from "next/navigation";

export default function Klient() {

    const router = useRouter();
    

    return (
        <div className="RoleButtons">
            <button className={"ClientButton DashboardButton"} onClick={() => router.push('/KlientWniosek')}>
                Klient
            </button>
            <button className={"WorkerButton DashboardButton"} onClick={() => router.push('/PracownikWniosek')}>
                Pracownik
            </button>
        
       
        </div>
    )
}
