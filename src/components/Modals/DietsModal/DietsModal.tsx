import Diets from "../../../pages/partial/Diets/Diets";
import Modal from "react-bootstrap/Modal";
import './DietsModal.css';


export default function DietsModal({show, setShow}: { show: boolean, setShow: (show: boolean) => void }) {
    return (
        <>
            <Modal contentClassName={"modal-container"}
                   show={show}
                   onHide={() => setShow(false)}
                   dialogClassName="modal-90w"
                   aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <b>Wybierz dietę, którą chcesz przypisać</b>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className={"diets-modal-body"}>
                        <div className={"diets-box"}>
                            <Diets></Diets>
                        </div>
                </Modal.Body>
            </Modal>
        </>
    )
}