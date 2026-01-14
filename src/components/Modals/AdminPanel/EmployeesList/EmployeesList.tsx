import Modal from "react-bootstrap/Modal";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import FieldModal from "../../FailedModal/FailedModal";
import {useEffect, useState} from "react";
import axios from "axios";
import EmployeeCard from "../../../Cards/EmployeeCard/EmployeeCard";
import './EmployeesList.css';
import EditEmployee from "../EditEmployee/EditEmployee";

export default function EmployeesList({show, onHide} : {show: boolean, onHide: () => void}) {

    type Employee = {
        employeeId: number;
        firstName: string;
        lastName: string;
        email: string;
    }

    const [fieldModal,setFieldModal] = useState(false);
    const [message,setMessage] = useState("");
    const [employees,setEmployees] = useState<Employee[]>([]);
    const [showEditEmployee, setShowEditEmployee] = useState(false);
    const [name,setName] = useState("");
    const [id, setId] = useState("");
    useEffect(() => {
        async function getEmployees() {
            try {
                const response = await axios.get("https://localhost:7081/api/Employees");
                setEmployees(response.data);
            }
            catch (err:any) {
                setMessage(err?.response.data.message);
            }
        }
        getEmployees();
    })


    return (
        <>
            <Modal contentClassName={"modal-container"}
                   show={show}
                   size="lg"
                   aria-labelledby="contained-modal-title-vcenter"
                   centered
            >
                <Modal.Header closeButton onClick={() => onHide()}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <b>Lista pracowników</b>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className={"employees-list"}>
                    {
                        employees.map(e => {
                            return <div onClick={()=>{
                                setName(e?.firstName)
                                setId(e?.employeeId.toString())
                                setShowEditEmployee(true)
                            }}>
                                <EmployeeCard email={e?.email} name={e?.firstName} lastname={e?.lastName} employeeid={e?.employeeId}/>
                            </div>
                        })
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant={"primary"} onClick={() => {
                        onHide()
                    }}>Zamknij</Button>
                </Modal.Footer>
            </Modal>
            <FieldModal setShow={setFieldModal} show={fieldModal} message={message}/>
            <EditEmployee show={showEditEmployee} onHide={() => setShowEditEmployee(false)} employeeName={name} employeeId={Number(id)}/>
        </>
    );
}