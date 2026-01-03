import './Visits.css';
import VisitCard from "../../../components/Cards/VisitCard/VisitCard";
import {createElement, useEffect, useState} from "react";
import {jwtDecode} from "jwt-decode";
import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";

export default function Visits() {

    type Employee = {
        id: number;
        firstName: string;
        lastName: string;
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
            });
        }
    }, []);

    type Customer = {
        pesel: string;
        firstName: string;
        lastName: string;
        residentialAddress: string;
    }

    type Visit = {
        visitId: number;
        date: Date;
        employeeId: number;
        customerPesel: string;
        customer: Customer;
        status: string;
    }

    const [visits, setVisit] = useState<Visit[] | undefined>(undefined);

    useEffect(() => {
        if (!employee) return;

        async function getVisits(date: string, employeeId: number | undefined) {
            const response = await fetch(`https://localhost:7081/api/Visits/date=${date}/employeeId=${employeeId}`);
            const json = await response.json();

            if (!response.ok) {
                return;
            }

            setVisit(json);
        }

        getVisits(new Date().toISOString().split("T")[0], employee?.id);
    }, [employee]);



    let navigate = useNavigate();

    let [visitCount,setVisitCount] = useState(0);
    return (
        <>
            <div className={"visits-container"}>
                <div className={"visit-text"}>
                    Wizyty w dniu {new Date().toLocaleDateString()}
                </div>
                {
                    visits?.map(visit => {
                        if (visit?.status === "active") {
                            return<VisitCard goTo={()=>{navigate(`../visits/${visit.customer.pesel}/${visit.visitId}`)}}
                                             now={visitCount++ == 0 ? true : false}
                                               clientData={new Array<string>(visit.customer.firstName, visit.customer.lastName)}
                                               date={(new Date(visit.date).getUTCHours() + ":" + new Date(visit.date).getUTCMinutes()).toString()}/>

                    }
                    })
                }
            </div>
        </>
    )
}