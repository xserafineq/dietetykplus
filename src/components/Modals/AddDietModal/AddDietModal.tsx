import './AddDietModal.css';
import Modal from "react-bootstrap/Modal";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function AddDietModal({show, onHide} : {show: boolean, onHide: () => void}) {
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
                        <b>Dodaj Nową dietę</b>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Control type="number" placeholder="kcal"/>
                        <Form.Select className={"select-input"} aria-label="Wybierz rodzaj diety">
                            <option>Wybierz rodzaj diety</option>
                            <option value="1">Wegetariańska</option>
                            <option value="2">Wegańska</option>
                            <option value="3">Rybna</option>
                            <option value="3">Keto</option>
                        </Form.Select>
                        <Form.Control type="file" />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant={"secondary"} onClick={onHide}>Anuluj</Button>
                    <Button variant={"primary"} onClick={onHide}>Zapisz</Button>
                </Modal.Footer>
            </Modal></>
    )
}