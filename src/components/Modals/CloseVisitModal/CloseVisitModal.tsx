import Modal from "react-bootstrap/Modal";
import {Alert, Button} from "react-bootstrap";
import './CloseVisitModal.css';
import {useNavigate} from "react-router-dom";

export default function CloseVisitModal({show, setShow,  closeVisitId} : { show: boolean, setShow: (show: boolean) => void , closeVisitId: string | undefined }) {


    const closeVisit = async (visitId: string | undefined, option: string) => {
        const response = await fetch(`https://localhost:7081/api/Visits/${visitId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                status: option,
            })
        });

        if (!response.ok) {
            const error = await response.text();
            throw new Error(error);
        }

    };

    const navigate= useNavigate();

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
                    <Button onClickCapture={()=>{
                        closeVisit(closeVisitId,"noactive");
                        navigate("../visits");
                    }} variant="primary" onClick={() => setShow(false)}>
                        Zakończ
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}