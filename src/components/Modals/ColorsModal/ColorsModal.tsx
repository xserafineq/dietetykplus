import Modal from "react-bootstrap/Modal";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function ColorsModal({show, onHide} : {show: boolean, onHide: () => void}) {
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
                        <b>Wybierz motyw</b>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Kolor1<br/>
                    Kolor2<br/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant={"secondary"} onClick={onHide}>Anuluj</Button>
                    <Button variant={"primary"} onClick={onHide}>Zapisz</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}