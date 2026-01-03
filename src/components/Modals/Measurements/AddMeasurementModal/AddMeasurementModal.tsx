import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from "react-bootstrap";
import './AddMeasurementModal.css';
import FieldModal from '../../FailedModal/FailedModal';
import {useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
export default function AddMeasurementModal({show, onHide} : {show: boolean, onHide: () => void}) {

    const [fieldModal,setFieldModal] = useState(false);
    const [message, setMessage] = useState("");

    const {visit} = useParams<{ visit: string }>();
    let MedicalResultId = visit;
    const [height, setHeight] = useState<number>();
    const [weight, setWeight] = useState<number>();
    const [waistLine, setWaistLine] = useState<number>();
    const [bodyFat, setBodyFat] = useState<number>();
    const [sugarLevel, setSugarLevel] = useState<number>();


    const postMedicalResult = async (e: any) => {
        e.preventDefault();

        try {
            const response = await axios.post("https://localhost:7081/api/MedicalResults", {
                MedicalResultId,
                height,
                weight,
                waistLine,
                bodyFat,
                sugarLevel,
            });
            onHide();

        } catch (err: any) {
            if(err.response.status === 409) {
                setMessage("Można dodać tylko jeden pomiar, podczas jednej wizyty")
            }
            else {
                setMessage("Spróbuj ponownie")
            }
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
                        <b>Nowy Pomiar | {new Date().toLocaleDateString()} </b>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control onChange={(e)=>{
                        setHeight(Number(e.target.value))
                    }} type="number" placeholder="wzrost [cm]"/>
                    <Form.Control onChange={(e)=>{
                        setWeight(Number(e.target.value))
                    }} type="number" placeholder="waga [kg]"/>
                    <Form.Control onChange={(e)=>{setWaistLine(Number(e.target.value))}} type="number" placeholder="obwód talii [cm]"/>
                    <Form.Control onChange={(e)=>{setBodyFat(Number(e.target.value))}} type="number" placeholder="poziom tłuszczu [%]"/>
                    <Form.Control onChange={(e)=>{setSugarLevel(Number(e.target.value))}} type="number" placeholder="cukier [mg/dl]"/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant={"secondary"} onClick={onHide}>Anuluj</Button>
                    <Button variant={"primary"} onClick={postMedicalResult}>Zapisz</Button>
                </Modal.Footer>
            </Modal>
            <FieldModal show={fieldModal} setShow={setFieldModal} message={message}/>
        </>
    )
}