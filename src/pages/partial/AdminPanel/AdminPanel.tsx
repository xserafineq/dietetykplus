import './AdminPanel.css';

import { BsPersonFillAdd } from "react-icons/bs";
import { CgOptions } from "react-icons/cg";
import {useEffect, useState} from "react";
import AddEmployee from "../../../components/Modals/AdminPanel/AddEmployee/AddEmployee";
import { FaListAlt } from "react-icons/fa";
import {jwtDecode} from "jwt-decode";
import {useNavigate} from "react-router-dom";
import EditConfig from "../../../components/Modals/AdminPanel/editConfig/EditConfig";
import EmployeesList from "../../../components/Modals/AdminPanel/EmployeesList/EmployeesList";
const Admin = BsPersonFillAdd as React.ComponentType<any>;
const Config = CgOptions as React.ComponentType<any>;
const EmployeeListIcon = FaListAlt as React.ComponentType<any>;
export default function AdminPanel() {
    const [showAddClient,setShowAddClient] = useState(false);
    const [showConfig,setShowConfig] = useState(false);
    const [showEmployeeList,setshowEmployeeList] = useState(false);

    type Employee = {
        id: number;
        firstName: string;
        lastName: string;
        isadmin: string;
    }

    const [employee, setEmployee] = useState<Employee | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decoded: any = jwtDecode(token);
            setEmployee({
                id: decoded.id,
                firstName: decoded.firstName,
                lastName: decoded.lastName,
                isadmin: decoded.isadmin,
            });
        }

    }, []);

    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/home");
    }


    return (
        <>
            { employee?.isadmin === "1" ?
                <div>
                    <div className="admin-panel-header">
                        Panel Administratora
                    </div>
                    <div className="admin-panel">
                        <div onClick={()=>(setShowAddClient(true))} className="activity-button add-employee">
                            <Admin/>
                            <div className={"option-name"}>Dodaj Pracownika</div>
                        </div>
                        <div onClick={()=>{setShowConfig(true)}} className="activity-button edit-config">
                            <Config/>
                            <div className={"option-name"}>Edytuj Ustawienia</div>
                        </div>
                        <div onClick={()=>{setshowEmployeeList(true)}} className="activity-button employees">
                            <EmployeeListIcon/>
                            <div className={"option-name"}>Lista Pracowników</div>
                        </div>
                    </div>
                </div>
        :  goToHome()}
            <AddEmployee show={showAddClient} onHide={()=>setShowAddClient(false)} />
            <EditConfig show={showConfig} onHide={()=>setShowConfig(false)} />
            <EmployeesList show={showEmployeeList} onHide={()=>setshowEmployeeList(false)} />
        </>
    )
}