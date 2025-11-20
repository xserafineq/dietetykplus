import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from "react-bootstrap";
import './MeasurementModal.css';
export default function MeasurementModal({show, onHide} : {show: boolean, onHide: () => void}) {
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
                        <b>Nowy Pomiar | {new Date().toLocaleDateString()} </b>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control type="number" placeholder="waga [kg]"/>
                    <Form.Control type="number" placeholder="wzrost [cm]"/>
                    <Form.Control type="number" placeholder="obwód talii [cm]"/>
                    <Form.Control type="number" placeholder="poziom tłuszczu [%]"/>
                    <Form.Control type="number" placeholder="cukier [mg/dl]"/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant={"primary"} onClick={onHide}>Zapisz</Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}