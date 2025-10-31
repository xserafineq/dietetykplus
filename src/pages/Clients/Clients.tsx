import ClientCard from "../../components/ClientCard/ClientCard";
import './Clients.css'
export default function Clients() {
    return (
        <>
            <div className={"clients-list"}>
                <div className={"client-search"}>
                    <input type={"text"} placeholder={"wyszukaj klienta"}/>
                </div>
                <ClientCard name={"Jan"} lastname={"Kowalski"} pesel={"04121207658"}/>
                <ClientCard name={"Jan"} lastname={"Kowalski"} pesel={"04121207658"}/>
                <ClientCard name={"Jan"} lastname={"Kowalski"} pesel={"04121207658"}/>
                <ClientCard name={"Jan"} lastname={"Kowalski"} pesel={"04121207658"}/>
                <ClientCard name={"Jan"} lastname={"Kowalski"} pesel={"04121207658"}/>
                <ClientCard name={"Jan"} lastname={"Kowalski"} pesel={"04121207658"}/>
                <ClientCard name={"Jan"} lastname={"Kowalski"} pesel={"04121207658"}/>
                <ClientCard name={"Jan"} lastname={"Kowalski"} pesel={"04121207658"}/>
                <ClientCard name={"Jan"} lastname={"Kowalski"} pesel={"04121207658"}/>
            </div>
        </>
    );
}