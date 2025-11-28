import '../MeasurementModal/MeasurementModal.css';
import './NoteModal.css';
import Modal from "react-bootstrap/Modal";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function NoteModal({show, onHide} : {show: boolean, onHide: () => void}) {
    return (
        <>
            <Modal contentClassName={"modal-container"}
                   show={show}
                   size="lg"
                   aria-labelledby="contained-modal-title-vcenter"
                   centered
            >
                <Modal.Header closeButton onClick={() => onHide()}>
                    <Modal.Title>
                        <b>Notatka | {new Date().toLocaleDateString()} </b>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control className={"note-input"} as={"textarea"} placeholder="Zawartość notatki"/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant={"secondary"} onClick={onHide}>Anuluj</Button>
                    <Button variant={"primary"} onClick={onHide}>Zapisz</Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}