import ClientCard from "../../components/ClientCard/ClientCard";
import './Clients.css'
export default function Clients() {
    return (
        <>
            <div className={"clients-list"}>
                <div className={"client-search"}>
                    <input type={"text"} placeholder={"wyszukaj klienta"}/>
                </div>
                <ClientCard name={"Jan"} lastname={"Kowalski"}/>
                <ClientCard name={"Marek"} lastname={"Kowalski"}/>
                <ClientCard name={"Wojtek"} lastname={"Kowalski"}/>
                <ClientCard name={"Mateusz"} lastname={"Kowalski"}/>
                <ClientCard name={"Zygmunt"} lastname={"Kowalski"}/>
            </div>
        </>
    );
}