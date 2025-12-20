import ClientCard from "../../../components/Cards/ClientCard/ClientCard";
import './Clients.css'
import {Outlet, useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";
import {IoPersonAdd} from "react-icons/io5";
import AddClientModal from "../../../components/Modals/AddClientModal/AddClientModal";
import {useEffect, useState} from "react";

const AddPerson = IoPersonAdd as React.ComponentType<any>;

export default function Clients() {

    type Customer = {
        pesel: string;
        firstName: string;
        lastName: string;
        residentialAddress: string;
    }

    const [customers, setCustomers] = useState<Customer[]>([]);
    const [addClientModal,setShowClientModal] = useState(false);

    useEffect(() => {
        async function getCustomers() {
            const response = await fetch('https://localhost:7081/api/Customers');
            const json = await response.json();
            setCustomers(json);
        }
        getCustomers();
    }, []);

    const nagivate = useNavigate();

    const goToClientPanel = () => {
        nagivate("client-info")
    };

    return (
        <>
            <div className={"clients-list"}>
                <div className={"client-search"}>
                    <input type={"text"} placeholder={"wyszukaj klienta 🔎"}/>
                    <Button onClick={() => setShowClientModal(true)} className={"add-btn"} variant={"success"}>
                        <div><AddPerson/></div>
                    </Button>
                </div>
                {
                    customers.map(customer => {
                        return <ClientCard name={customer.firstName} lastname={customer.lastName}
                                    pesel={customer.pesel}/>
                    })
                }
            </div>
            <AddClientModal show={addClientModal} onHide={() => setShowClientModal(false)} />
        </>
    );
}