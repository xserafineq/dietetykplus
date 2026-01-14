import Modal from "react-bootstrap/Modal";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import FieldModal from "../../FailedModal/FailedModal";
import {useState} from "react";
import axios from "axios";
export default function AddEmployee({show, onHide} : {show: boolean, onHide: () => void}) {
    const [fieldModal,setFieldModal] = useState(false);
    const [message,setMessage] = useState("");

    type Employee = {
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        isAdmin: boolean,
    }

    async function addEmployee(e: Employee) {
        try {
            const response = await axios.post("https://localhost:7081/api/Employees", e);
            return response.data;
        } catch (error: any) {
            if (error.response) {
                setMessage(error.response.data);
            } else {
                setMessage(error.message);
            }
            setFieldModal(true);
        }
    }


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
                        <b>Nowy Pracownik</b>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control id={"firstname"} type="text" placeholder="Imię"/>
                    <Form.Control id={"lastname"} type="text" placeholder="Nazwisko"/>
                    <Form.Control id={"email"} type="text" placeholder="Adres email"/>
                    <Form.Control id={"password"} type="text" placeholder="Hasło"/>
                    <Form.Select id={"isAdmin"}>
                        <option value="false">Czy ma posiadać uprawnienia admnistratora?</option>
                        <option value="true">Tak</option>
                        <option value="false">Nie</option>
                    </Form.Select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant={"secondary"} onClick={onHide}>Anuluj</Button>
                    <Button variant={"primary"} onClick={() => {
                        const employee: Employee = {
                            firstName: (document.getElementById("firstname") as HTMLInputElement).value,
                            lastName: (document.getElementById("lastname") as HTMLInputElement).value,
                            email: (document.getElementById("email") as HTMLInputElement).value,
                            password: (document.getElementById("password") as HTMLInputElement).value,
                            isAdmin: Boolean(document.getElementById("isAdmin") as HTMLInputElement),
                        };
                        addEmployee(employee);
                        onHide()
                    }}>Zapisz</Button>
                </Modal.Footer>
            </Modal>
            <FieldModal setShow={setFieldModal} show={fieldModal} message={message}/>
        </>
    )
}