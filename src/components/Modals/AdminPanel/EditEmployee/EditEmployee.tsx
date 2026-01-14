import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap"; // Poprawny import
import FieldModal from "../../FailedModal/FailedModal";
import { useState } from "react";
import axios from "axios";

export default function EditEmployee({ show, onHide, employeeName, employeeId }:
                                     { show: boolean, onHide: () => void, employeeName: string, employeeId: number }) {

    const [fieldModal, setFieldModal] = useState(false);
    const [message, setMessage] = useState("");
    const [password, setPassword] = useState("");
    const [isAdmin, setIsAdmin] = useState<boolean>(false);

    const updateEmployee = async (id : number, isAdmin : boolean, password : string) => {
        try {
            await axios.put(`https://localhost:7081/api/Employees/${id}`, {
                employeeId: id,
                isadmin: isAdmin,
                password: password || ""
            });
            onHide();
        } catch (err : any) {
            setMessage(err?.response?.data?.message);
            setFieldModal(true);
        }
        onHide();
    };


    return (
        <>
            <Modal
                contentClassName={"modal-container"}
                show={show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton onClick={onHide}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <b>Pracownik</b> {employeeName}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className={"employees-list"}>
                    <Form.Group className="mb-3">
                        <Form.Label>Nowe hasło</Form.Label>
                        <Form.Control
                            id={"password"}
                            type="password"
                            placeholder="Wpisz nowe hasło"
                            onChange={(e)=>{setPassword(e.target.value)}}
                        />
                        <Form.Select id={"isAdmin"} onChange={(e) => setIsAdmin(e.target.value === "true")}>
                            <option value="false">Czy ma posiadać uprawnienia admnistratora?</option>
                            <option value="true">Tak</option>
                            <option value="false">Nie</option>
                        </Form.Select>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant={"secondary"} onClick={onHide}>Anuluj</Button>
                    <Button variant={"primary"} onClick={
                        ()=>{
                            updateEmployee(employeeId,isAdmin,password);
                        }
                        }>Zapisz</Button>
                </Modal.Footer>
            </Modal>
            <FieldModal setShow={setFieldModal} show={fieldModal} message={message}/>
        </>
    )
}