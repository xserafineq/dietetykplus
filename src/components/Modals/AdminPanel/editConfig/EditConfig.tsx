import Modal from "react-bootstrap/Modal";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import FieldModal from "../../FailedModal/FailedModal";
import {useState} from "react";
import axios from "axios";
export default function EditConfig({show, onHide} : {show: boolean, onHide: () => void}) {
    const [fieldModal,setFieldModal] = useState(false);
    const [message,setMessage] = useState("");

    type Config = {
        visit_duration: number;
    }

    const updateConfig = async (c: Config) => {
        try {
            const configData = {
                visit_duration: c?.visit_duration
            };

            const response = await axios.put('https://localhost:7081/api/Config', configData);

            if (response.status === 204) {
                console.log('Zapisano pomyślnie!');
            }
        } catch (error : any) {
            setMessage(error?.response.data.message);
            setFieldModal(true);
        }
    };

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
                        <b>Ustawienia</b>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control id={"visitDuration"} type="number" placeholder="Czas trwania wizyty (w minutach)"/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant={"secondary"} onClick={onHide}>Anuluj</Button>
                    <Button variant={"primary"} onClick={() => {
                        updateConfig({
                            visit_duration: Number((document.getElementById("visitDuration") as HTMLInputElement).value),
                        });
                        onHide()
                    }}>Zapisz</Button>
                </Modal.Footer>
            </Modal>
            <FieldModal setShow={setFieldModal} show={fieldModal} message={message}/>
        </>
    )
}