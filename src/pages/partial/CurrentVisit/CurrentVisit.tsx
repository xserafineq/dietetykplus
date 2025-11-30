import ClientInfoPanel from "../ClientInfoPanel/ClientInfoPanel";
import './CurrentVisit.css';
import '../ClientInfoPanel/ClientInfoPanel.css';
import { GiWeight } from "react-icons/gi";
import {MdFastfood} from "react-icons/md";
import { FaPenToSquare } from "react-icons/fa6";
import { RiCloseCircleLine } from "react-icons/ri";
import {Navigate, useNavigate} from 'react-router-dom';
import MeasurementModal from "../../../components/Modals/MeasurementModal/MeasurementModal";
import React from "react";
import DietsModal from "../../../components/Modals/DietsModal/DietsModal";
import NoteModal from "../../../components/Modals/NoteModal/NoteModal";
import CloseVisitModal from "../../../components/Modals/CloseVisitModal/CloseVisitModal";

const Diet = MdFastfood as React.ComponentType<any>;
const PenIcon = FaPenToSquare as React.ComponentType<any>;
const WeightIcon = GiWeight as React.ComponentType<any>;
const CloseIcon = RiCloseCircleLine as React.ComponentType<any>;

export default function CurrentVisit() {
    const [modalShow, setModalShow] = React.useState(false);
    const [show, setShow] = React.useState(false);
    const [noteShow, noteSetShow] = React.useState(false);
    const [closeShow, closeSetShow] = React.useState(false);

    const navigate = useNavigate();

    const goToVisits = () => {
        navigate("../visits");
    }

    return (
        <>
            <ClientInfoPanel/>
            <section className="d-flex flex-wrap justify-content-center align-items-center text-center gap-5 container">
                <div onClick={() => setModalShow(true)} className="activity-button addMeasurement">
                    <WeightIcon/>
                    <div className={"option-name"}>Dodaj Pomiar</div>
                </div>
                <div onClick={() => setShow(true)} className="activity-button setDiet">
                    <Diet/>
                    <div className={"option-name"}>Przypisz Dietę</div>
                </div>
                <div onClick={() => noteSetShow(true)} className="activity-button addNote">
                    <PenIcon/>
                    <div className={"option-name"}>Notatka</div>
                </div>
                <div onClick={() => closeSetShow(true)} className="activity-button closeVisit">
                    <CloseIcon/>
                    <div className={"option-name"}>Zakończ wizytę</div>
                </div>
            </section>
            <MeasurementModal show={modalShow}
                              onHide={() => setModalShow(false)}/>
            <DietsModal show={show} setShow={setShow}/>
            <NoteModal show={noteShow} onHide={() => noteSetShow(false)}/>
            <CloseVisitModal goTo={goToVisits} show={closeShow} setShow={closeSetShow}/>
        </>
    )
}