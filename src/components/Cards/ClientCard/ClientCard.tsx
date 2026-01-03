import './ClientCard.css'
import { FaInfoCircle } from "react-icons/fa";
import { IoKey } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import RegisterClientToVisit from '../../../components/Modals/Clients/RegisterClientToVisit/RegisterClientToVisit';
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {jwtDecode} from "jwt-decode";

const Infoicon = FaInfoCircle as React.ComponentType<any>;
const Registericon = IoKey as React.ComponentType<any>;
const DeleteIcon = MdDeleteForever as React.ComponentType<any>;


export default function ClientCard({ name,lastname,pesel}: { name: string , lastname: string, pesel: string}) {

    const navigate = useNavigate();
    const [registerClientVisitModal,setRegisterClientVisitModal] = useState(false);


    async function deleteEmployee(pesel: string) {
        try {
            const response = await fetch(`https://localhost:7081/api/Customers/${pesel}`, {
                method: 'DELETE'
            });
            return response.ok;
        } catch {
            return false;
        }
    }
    return (
        <>
            <div className={"client-card"}>
                <div onClick={()=>{navigate(`/../home/clients/${pesel}`)}} id={pesel} className={"client-name"}>
                    {name} {lastname}, #{pesel}
                </div>
                <div className={"buttons"}>
                    <div onClick={() => navigate(`/../home/clients/${pesel}`)}>
                        <Infoicon key={pesel} className={"show-btn"}/>
                    </div>
                    <div onClick={()=>{setRegisterClientVisitModal(true)}} className={"buttons register-btn"}>
                        <Registericon/>
                    </div>
                    <div onClick={()=>{
                        deleteEmployee(pesel)
                        window.location.reload();
                    }} className={"buttons delete-btn"}>
                        <DeleteIcon/>
                    </div>
                </div>
            </div>
            <RegisterClientToVisit client={new Array(name,lastname,pesel)} show={registerClientVisitModal} setShow={() => setRegisterClientVisitModal(false)}/>
        </>
    )
}