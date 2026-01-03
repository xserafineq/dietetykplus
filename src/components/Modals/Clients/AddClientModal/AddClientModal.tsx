import './AddClientModal.css';
import Modal from "react-bootstrap/Modal";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import FieldModal from "../../FailedModal/FailedModal";
import {useState} from "react";
import axios from "axios";
export default function AddClientModal({show, onHide} : {show: boolean, onHide: () => void}) {
    const [fieldModal,setFieldModal] = useState(false);
    const [message,setMessage] = useState("");

    type Customer = {
        pesel: string;
        firstName: string;
        lastName: string;
        age: number;
        email: string;
        residentialAddress: string;
        phone: string;
    }

    async function addCustomer(c: Customer) {
        try {
            const response = await axios.post("https://localhost:7081/api/Customers", c);
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
                        <b>Dodaj Nowego Klienta</b>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control id={"firstname"} type="text" placeholder="Imię"/>
                    <Form.Control id={"lastname"} type="text" placeholder="Nazwisko"/>
                    <Form.Control id={"pesel"} type="text" placeholder="Pesel"/>
                    <Form.Control id={"age"} type="number" placeholder="Wiek"/>
                    <Form.Control id={"email"} type="text" placeholder="Adres email"/>
                    <Form.Control id={"phone"} type="text" placeholder="Numer telefonu (np. +48 111 111 11)"/>
                    <Form.Control id={"address"} type="text" placeholder="Adres zamieszkania"/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant={"secondary"} onClick={onHide}>Anuluj</Button>
                    <Button variant={"primary"} onClick={() => {
                        const customer: Customer = {
                            pesel: (document.getElementById("pesel") as HTMLInputElement).value,
                            firstName: (document.getElementById("firstname") as HTMLInputElement).value,
                            lastName: (document.getElementById("lastname") as HTMLInputElement).value,
                            age: (document.getElementById("age") as HTMLInputElement).value as unknown as number,
                            email: (document.getElementById("email") as HTMLInputElement).value,
                            residentialAddress: (document.getElementById("address") as HTMLInputElement).value,
                            phone: (document.getElementById("phone") as HTMLInputElement).value.replace(/ /g, '')
                        };
                        addCustomer(customer);
                        onHide()
                    }}>Zapisz</Button>
                </Modal.Footer>
            </Modal>
            <FieldModal setShow={setFieldModal} show={fieldModal} message={message}/>
        </>
    )
}