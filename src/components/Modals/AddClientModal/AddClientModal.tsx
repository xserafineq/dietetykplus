import './AddClientModal.css';
import Modal from "react-bootstrap/Modal";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
export default function AddClientModal({show, onHide} : {show: boolean, onHide: () => void}) {
    type Customer = {
        pesel: string;
        firstName: string;
        lastName: string;
        age: number;
        email: string;
        residentialAddress: string;
    }

    async function addEmployee(c: Customer) {
        try {
            const response = await fetch(`https://localhost:7081/api/Customers`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(c)
            });
            return response.json();
        } catch (error) {
            console.error('Błąd dodawania klienta:', error);
            throw error;
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
                            residentialAddress: (document.getElementById("address") as HTMLInputElement).value
                        };
                        addEmployee(customer);
                        onHide()
                    }}>Zapisz</Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}