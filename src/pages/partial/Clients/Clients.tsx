import ClientCard from "../../../components/Cards/ClientCard/ClientCard";
import './Clients.css'
import {Button} from "react-bootstrap";
import {IoPersonAdd} from "react-icons/io5";
import AddClientModal from "../../../components/Modals/Clients/AddClientModal/AddClientModal";
import {useEffect, useState} from "react";

const AddPerson = IoPersonAdd as React.ComponentType<any>;

export default function Clients() {

    type Customer = {
        pesel: string;
        firstName: string;
        lastName: string;
        residentialAddress: string;
    }
    const [searchedValue, setSearcheddValue] = useState("");
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


    let searchedCustomers = customers.filter(customer =>
        customer.pesel?.includes(searchedValue) ||
        customer.firstName?.toLowerCase().includes(searchedValue.toLowerCase()) ||
        customer.lastName?.toLowerCase().includes(searchedValue.toLowerCase()) ||
        (customer.firstName?.toLowerCase() + " "
        + customer.lastName?.toLowerCase() === searchedValue.toLowerCase()) ||
        customer.residentialAddress?.toLowerCase().includes(searchedValue.toLowerCase())
    );

    return (
        <>
            <div className={"clients-list"}>
                <div className={"client-search"}>
                    <input type={"text"} onChange={(e)=>{setSearcheddValue(e.target.value.toString())}} placeholder={"wyszukaj klienta 🔎"}/>
                    <Button onClick={() => setShowClientModal(true)} className={"add-btn"} variant={"success"}>
                        <div><AddPerson/></div>
                    </Button>
                </div>
                {
                    searchedCustomers.map(customer => {
                        return <ClientCard name={customer.firstName} lastname={customer.lastName}
                                    pesel={customer.pesel}/>
                    })
                }
            </div>
            <AddClientModal show={addClientModal} onHide={() => setShowClientModal(false)} />
        </>
    );
}