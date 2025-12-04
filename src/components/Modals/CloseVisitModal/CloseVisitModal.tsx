import Modal from "react-bootstrap/Modal";
import {Alert, Button} from "react-bootstrap";
import './CloseVisitModal.css';

export default function CloseVisitModal({show, setShow, goTo} : { show: boolean, setShow: (show: boolean) => void , goTo: () => void}) {
    return (
        <>
            <Modal contentClassName={"modal-container"} show={show} onHide={() => setShow(false)} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title><b>Zakończ wizytę</b></Modal.Title>
                </Modal.Header>
                <Modal.Body className={"modal-body"}><b><Alert variant={"danger"}>Po zakończeniu wizyty nie będzie można do niej powrócić !</Alert></b></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Anuluj
                    </Button>
                    <Button onClickCapture={goTo} variant="primary" onClick={() => setShow(false)}>
                        Zakończ
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}