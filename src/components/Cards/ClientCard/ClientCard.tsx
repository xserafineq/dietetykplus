import './ClientCard.css'
import { FaInfoCircle } from "react-icons/fa";
const Infoicon = FaInfoCircle as React.ComponentType<any>;


export default function ClientCard({ name,lastname,pesel, city }: { name: string ,  lastname: string, pesel: string, city: string}) {
    return (
        <>
            <div className={"client-card"}>
                <div className={"client-name"}>
                    {name} {lastname} / {pesel} / {city}
                </div>
                <div className={"buttons"}>
                    <Infoicon className={"show-btn"}/>
                </div>
            </div>
        </>
    )
}