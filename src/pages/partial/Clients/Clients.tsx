import ClientCard from "../../../components/Cards/ClientCard/ClientCard";
import './Clients.css'
import {Outlet, useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";
import {IoPersonAdd} from "react-icons/io5";
import AddClientModal from "../../../components/Modals/AddClientModal/AddClientModal";
import {useState} from "react";

const AddPerson = IoPersonAdd as React.ComponentType<any>;

export default function Clients() {

    const [addClientModal,setShowClientModal] = useState(false);



    const nagivate = useNavigate();

    const goToClientPanel = () => {
        nagivate("client-info")
    };

    return (
        <>
            <div className={"clients-list"}>
                <div className={"client-search"}>
                    <input type={"text"} placeholder={"wyszukaj klienta 🔎"}/>
                    <Button className={"add-btn"} variant={"success"}>
                        <div onClick={() => setShowClientModal(true)}><AddPerson/></div>
                    </Button>
                </div>
                <ClientCard name={"Jan"} lastname={"Kowalski"} pesel={"04121207658"} city={"Tarnobrzeg"}/>
                <ClientCard name={"Adam"} lastname={"Duda"} pesel={"04121207658"} city={"Rzeszów"}/>
                <ClientCard name={"Maciej"} lastname={"Musiał"} pesel={"04121207658"} city={"Nowa Dęba"}/>
                <ClientCard name={"Mateusz"} lastname={"Serafin"} pesel={"04121207658"} city={"Wrocław"}/>
            </div>
            <AddClientModal show={addClientModal} onHide={() => setShowClientModal(false)} />
        </>
    );
}