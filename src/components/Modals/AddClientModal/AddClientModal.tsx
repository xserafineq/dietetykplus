import './AddClientModal.css';
import Modal from "react-bootstrap/Modal";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
export default function AddClientModal({show, onHide} : {show: boolean, onHide: () => void}) {
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
                    <Form.Control type="text" placeholder="Imię"/>
                    <Form.Control type="text" placeholder="Nazwisko"/>
                    <Form.Control type="text" placeholder="Pesel"/>
                    <Form.Control type="number" placeholder="Wiek"/>
                    <Form.Control type="text" placeholder="Adres email"/>
                    <Form.Control type="text" placeholder="Adres zamieszkania"/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant={"secondary"} onClick={onHide}>Anuluj</Button>
                    <Button variant={"primary"} onClick={onHide}>Zapisz</Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}