import './ClientCard.css'
import { FaInfoCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import {useNavigate} from "react-router-dom";

const Infoicon = FaInfoCircle as React.ComponentType<any>;
const DeleteIcon = MdDeleteForever as React.ComponentType<any>;


export default function ClientCard({ name,lastname,pesel}: { name: string , lastname: string, pesel: string}) {
    const navigate = useNavigate();

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
            <div className={"client-card"} onClick={() => navigate(`/../home/clients/${pesel}`)}>
                <div id={pesel} className={"client-name"}>
                    {name} {lastname}, {pesel}
                </div>
                <div className={"buttons"}>
                    <div onClick={() => navigate(`/../home/clients/${pesel}`)}>
                        <Infoicon key={pesel} className={"show-btn"}/>
                    </div>
                    <div onClick={()=>{deleteEmployee(pesel)}} className={"buttons delete-btn"}>
                        <DeleteIcon/>
                    </div>
                </div>
            </div>
        </>
    )
}