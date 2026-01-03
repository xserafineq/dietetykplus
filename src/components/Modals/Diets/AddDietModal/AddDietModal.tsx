import './AddDietModal.css';
import Modal from "react-bootstrap/Modal";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import dietIcons from "../../../../pages/partial/Diets/dietsIcons";

export default function AddDietModal({show, onHide}: { show: boolean, onHide: () => void }) {

    type Diet = {
        type: string;
        kcalDeficit: number;
        pdf: File | null;
    }

    async function addDiet(d: Diet) {
        try {
            const formData = new FormData();
            formData.append("type", d.type);
            formData.append("kcalDeficit", d.kcalDeficit.toString());

            if (d.pdf instanceof File) {
                formData.append("pdf", d.pdf);
            }

            const response = await fetch(`https://localhost:7081/api/Diets`, {
                method: 'POST',
                body: formData
            });

            return response.json();
        } catch (error) {
            throw error;
        }
    }

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
                        <Form.Control id={"kcal"} type="number" placeholder="kcal"/>
                        <Form.Select id={"type"} className={"select-input"} aria-label="Wybierz rodzaj diety">

                            {Array.from(dietIcons.keys()).map(dietName => (
                                <option key={dietName} value={dietName}>{dietName}</option>
                            ))}

                        </Form.Select>
                        <Form.Control id={"file"} type="file"/>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant={"secondary"} onClick={onHide}>Anuluj</Button>
                    <Button variant={"primary"} onClick={() => {
                        const fileInput = document.getElementById("file") as HTMLInputElement;
                        const diet: Diet = {
                            type: (document.getElementById("type") as HTMLInputElement).value,
                            kcalDeficit: Number((document.getElementById("kcal") as HTMLInputElement).value),
                            pdf: fileInput.files ? fileInput.files[0] : null
                        };

                        addDiet(diet).then(res => console.log(res)).catch(err => console.error(err));
                        onHide()
                    }}>Zapisz</Button>
                </Modal.Footer>
            </Modal></>
    )
}