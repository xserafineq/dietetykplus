import ClientCard from "../../../components/ClientCard/ClientCard";
import './Clients.css'
export default function Clients() {
    return (
        <>
            <div className={"clients-list"}>
                <div className={"client-search"}>
                    <input type={"text"} placeholder={"wyszukaj klienta 🔎"}/>
                </div>
                <ClientCard name={"Jan"} lastname={"Kowalski"} pesel={"04121207658"} city={"Tarnobrzeg"}/>
                <ClientCard name={"Adam"} lastname={"Duda"} pesel={"04121207658"} city={"Rzeszów"}/>
                <ClientCard name={"Maciej"} lastname={"Musiał"} pesel={"04121207658"} city={"Nowa Dęba"}/>
                <ClientCard name={"Mateusz"} lastname={"Serafin"} pesel={"04121207658"} city={"Wrocław"}/>
            </div>
        </>
    );
}