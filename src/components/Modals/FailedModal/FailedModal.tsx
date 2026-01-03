import Modal from "react-bootstrap/Modal";
import {Alert, Button} from "react-bootstrap";
import './FailedModal.css';

export default function FailedModal({show, setShow, message} : { show: boolean, setShow: (show: boolean) => void , message: string }) {


    return (
        <>
            <Modal contentClassName={"modal-container"} show={show} onHide={() => setShow(false)} animation={false}>
                <Modal.Header>
                    <Modal.Title><b>Błąd</b></Modal.Title>
                </Modal.Header>
                <Modal.Body className={"modal-body"}><b><Alert variant={"danger"}>{message}</Alert></b></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}