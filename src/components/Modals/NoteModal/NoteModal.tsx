import '../Measurements/AddMeasurementModal/AddMeasurementModal.css';
import './NoteModal.css';
import Modal from "react-bootstrap/Modal";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React, {useEffect, useState} from "react";
import DietCard from "../../Cards/DietCard/DietCard";
import dietIcons from "../../../pages/partial/Diets/dietsIcons";
import {useParams} from "react-router-dom";
import axios from "axios";
import FieldModal from "../FailedModal/FailedModal";


export default function NoteModal({show, onHide} : {show: boolean, onHide: () => void}) {
    const [fieldModal,setFieldModal] = useState(false);
    const [message, setMessage] = useState("");


    type Diet = {
        dietId: number;
        type: string;
        kcalDeficit: number;
    }
    const [diets, setDiets] = useState<Diet[]>([]);
    const [searchValue, setSearchValue] = useState("");

    const {visit} = useParams<{ visit: string }>();

    const MedicalRecomendationsId = visit;
    const [recommendations, setRecommendations] = useState("");
    const [pickedDiet, setPickedDiet] = useState<number>();


    const saveRecommendation = async () => {
        if (!pickedDiet || !recommendations.trim()) {
            alert("Wybierz dietę i wpisz notatkę");
            return;
        }

        try {
            const response = await axios.post("https://localhost:7081/api/MedicalRecommendations", {
                MedicalRecomendationsId: Number(MedicalRecomendationsId),
                dietId: pickedDiet,
                note: recommendations
            });

            onHide();

        } catch (err: any) {
            const status = err.response?.status;

            if (status === 409) {
                setMessage("Podczas jednej wizyty można przypisać tylko jedno zalecenie dla klienta")
            } else {
                setMessage("Spróbuj ponownie")
            }
            setFieldModal(true)
        }
    };




    useEffect(() => {
        async function getDiets() {
            const response = await fetch('https://localhost:7081/api/Diets');
            const json = await response.json();
            setDiets(json);
        }
        getDiets();
    }, []);

    const searchedDiets = diets.filter(diet =>
        diet.type.toLowerCase().includes(searchValue.toLowerCase()) ||
        diet.kcalDeficit
            .toString()
            .includes(searchValue.toLowerCase())
    );



    return (
        <>
            <Modal contentClassName={"modal-container"}
                   show={show}
                   size="lg"
                   aria-labelledby="contained-modal-title-vcenter"
                   centered
            >
                <Modal.Header onClick={() => onHide()}>
                    <Modal.Title>
                        <b>Zalecenie | {new Date().toLocaleDateString()} </b>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control onChange={(e)=>{setRecommendations(e.target.value)}} className={"note-input"} as={"textarea"} placeholder="Opis zalecenia"/>
                    <Form.Control onChange={(e)=>{setSearchValue(e.target.value)}} className={"search"} placeholder={"Wyszukaj dietę"}></Form.Control>

                    <div className={"items-diet-container"}>
                        {
                            searchedDiets.map(diet =>{
                                const Icon = dietIcons.get(diet.type);
                                return (<div className={"item-diet"} onClick={()=>{setPickedDiet(diet?.dietId)}} key={diet?.dietId}>
                                    <DietCard icon={Icon ? <Icon/> : null} name={diet.type} kcal={diet.kcalDeficit}/>
                                </div>)
                            })
                        }
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant={"secondary"} onClick={onHide}>Anuluj</Button>
                    <Button variant={"primary"} onClick={()=>{saveRecommendation()}}>Zapisz</Button>
                </Modal.Footer>
            </Modal>
            <FieldModal show={fieldModal} setShow={setFieldModal} message={message}/>
        </>
    )
}