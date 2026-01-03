import './ClientInfoPanel.css';
import {FaHistory} from "react-icons/fa";
import {IoMdHome} from "react-icons/io";
import {FaPenToSquare, FaPhone} from "react-icons/fa6";
import {IoIosMail} from "react-icons/io";
import {MdOutlineNumbers} from "react-icons/md";
import {GiWeight} from "react-icons/gi";
import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import ShowMeasurementModal from '../../../components/Modals/Measurements/ShowMeasurementModal/ShowMeasurementModal'

const HistoryIcon = FaHistory as React.ComponentType<any>;
const PeselIcon = MdOutlineNumbers as React.ComponentType<any>;
const HomeIcon = IoMdHome as React.ComponentType<any>;
const PhoneIcon = FaPhone as React.ComponentType<any>;
const MailIcon = IoIosMail as React.ComponentType<any>;
const WeightIcon = GiWeight as React.ComponentType<any>;
const PenIcon = FaPenToSquare as React.ComponentType<any>;

export default function ClientInfoPanel() {

    type Customer = {
        pesel: string;
        firstName: string;
        lastName: string;
        age: number;
        residentialAddress: string;
        email: string;
        phone: string;
        visits: Visit[];
    }

    type Employee = {
        employeeId: number;
        firstName: string;
    }

    type Visit = {
        visitId: number;
        date: string;
        employeeId: number;
        recomendation: Recomendation | null;
    }

    type Recomendation = {
        dietId: number;
        note: string;
        date: string;
    }

    type Result = {
        medicalResultId: number;
        weight: number;
        height: number;
        waistLine: number;
        bodyFat: number;
        sugarLevel: number;
        bmi: number;
        date: string;
    }

    type Diet = {
        dietId: number;
        type: string;
        kcalDeficit: string;
    }

    const {pesel} = useParams<{ pesel: string }>();
    const [customer, setCustomer] = useState<Customer>();
    const [result, setResult] = useState<Result[]>([]);
    const [diet, setDiet] = useState<Diet[]>([]);
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [showModalMeasurement, setShowModalMeasurement] = useState(false);
    const [selectedMeasurement, setSelectedMeasurement] = useState<number | null>(null);

    useEffect(() => {
        async function getCustomer() {
            const response = await fetch(`https://localhost:7081/api/Customers/${pesel}`);
            const json = await response.json();
            setCustomer(json);
        }

        getCustomer();

        async function getEmployee() {
            const response = await fetch(`https://localhost:7081/api/Employees`);
            const json = await response.json();
            setEmployees(json);
        }

        getEmployee();

        async function getResult() {
            const response = await fetch(`https://localhost:7081/api/MedicalResults`);
            const json = await response.json();
            setResult(json);
        }

        getResult();

        async function getDiet() {
            const response = await fetch(`https://localhost:7081/api/Diets`);
            const json = await response.json();
            setDiet(json);
        }

        getDiet();
    }, [pesel]);

    function checkResultsLength() {
        let counter = 0;
        customer?.visits?.forEach(visit => {
            const visitResult = result.find(r => r.medicalResultId === visit.visitId);
            if (visitResult) {
                counter++;
            }
        });
        return counter;
    }

    function getDietName(dietId: number): string {
        const foundDiet = diet.find(d => d.dietId === dietId);
        return foundDiet ? foundDiet.type + " " + foundDiet.kcalDeficit + " kcal" : "Nieznana dieta";
    }

    return (
        <>
            <div className={"panels-container"}>
                <div className={"panel-box"}>
                    <div className={"panel-data"}>
                        <div className={"panel-person-info"}>
                            <div className={"name"}>
                                <b>{customer?.firstName} {customer?.lastName}, {customer?.age} lat/a</b>
                            </div>
                            <div className={"item"}>
                                <PeselIcon/>{customer?.pesel} <HomeIcon/>{customer?.residentialAddress}
                            </div>
                            <div className={"item"}>
                                <PhoneIcon/>{customer?.phone} <MailIcon/>{customer?.email}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Historia Wizyt - proste sprawdzenie */}
                {customer && customer.visits && customer.visits.length > 0 ? (
                    <div className={"panel-box visits-history"}>
                        <div className={"panel-heading"}>
                            <HistoryIcon/>Historia Wizyt
                        </div>
                        <div className={"panel-data"}>
                            <table>
                                <tbody>
                                <tr>
                                    <th>Data</th>
                                    <th>Dietetyk</th>
                                </tr>
                                {customer.visits.map((visit: Visit) => (
                                    <tr key={visit.visitId}>
                                        <td>{visit.date.substring(0, 10)}</td>
                                        <td>
                                            {employees.find(e => e.employeeId === visit.employeeId)?.firstName || ""}
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : null}

                {/* Historia Pomiarów */}
                {checkResultsLength() > 0 ? (
                    <div className={"panel-box measurements-history"}>
                        <div className={"panel-heading"}>
                            <WeightIcon/>Historia Pomiarów
                        </div>
                        <div className={"panel-data"}>
                            <table>
                                <tbody>
                                <tr>
                                    <th>BMI</th>
                                    <th>Data</th>
                                    <th>Dietetyk</th>
                                </tr>
                                {customer?.visits?.map(visit => {
                                    const visitResult = result.find(r => r.medicalResultId === visit.visitId);
                                    if (!visitResult) return null;
                                    const employee = employees.find(e => e.employeeId === visit.employeeId);
                                    return (
                                        <tr onClick={() => {
                                            setShowModalMeasurement(true)
                                            setSelectedMeasurement(visit.visitId)
                                        }} key={visit.visitId}>
                                            <td>{visitResult.bmi}</td>
                                            <td>{visitResult.date.substring(0, 10)}</td>
                                            <td>{employee?.firstName || ""}</td>
                                        </tr>
                                    );
                                })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : null}

                {/* Zalecenia */}
                {customer?.visits?.some(visit => visit.recomendation) ? (
                    <div className={"panel-box measurements-history"}>
                        <div className={"panel-heading"}>
                            <PenIcon/>Zalecenia
                        </div>
                        <div className={"panel-data"}>
                            <table>
                                <tbody>
                                <tr>
                                    <th>Dieta</th>
                                    <th>Data</th>
                                </tr>
                                {customer.visits
                                    .filter(visit => visit.recomendation)
                                    .map((visit: Visit) => {
                                        const recommendation = visit.recomendation!;

                                        return (
                                            <tr key={visit.visitId}>
                                                <td>{getDietName(recommendation.dietId)}</td>
                                                <td>{recommendation.date?.substring(0, 10)}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : null}
            </div>
            <ShowMeasurementModal measurementId={selectedMeasurement} show={showModalMeasurement}
                                  onHide={() => setShowModalMeasurement(false)}/>
        </>
    )
}