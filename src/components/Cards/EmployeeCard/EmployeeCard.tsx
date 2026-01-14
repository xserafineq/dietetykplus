import './EmployeeCard.css'
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


export default function EmployeeCard({name,lastname, employeeid, email}: { name: string , lastname: string, employeeid: number, email: string}) {



    return (
        <>
            <div className={"employee-card"}>
                <div key={employeeid} className={"employee-name"}>
                    {name} {lastname} {email}
                </div>
            </div>
        </>
    )
}