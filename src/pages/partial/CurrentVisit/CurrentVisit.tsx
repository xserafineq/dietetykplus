import ClientInfoPanel from "../ClientInfoPanel/ClientInfoPanel";
import './CurrentVisit.css';
import '../ClientInfoPanel/ClientInfoPanel.css';
import { GiWeight } from "react-icons/gi";
import { FaPenToSquare } from "react-icons/fa6";
import { RiCloseCircleLine } from "react-icons/ri";
import MeasurementModal from "../../../components/Modals/Measurements/AddMeasurementModal/AddMeasurementModal";
import React from "react";
import NoteModal from "../../../components/Modals/NoteModal/NoteModal";
import CloseVisitModal from "../../../components/Modals/Visits/CloseVisitModal/CloseVisitModal";
import {useNavigate, useParams} from "react-router-dom";
const PenIcon = FaPenToSquare as React.ComponentType<any>;
const WeightIcon = GiWeight as React.ComponentType<any>;
const CloseIcon = RiCloseCircleLine as React.ComponentType<any>;

export default function CurrentVisit() {

    const {visit} = useParams<{ visit: string }>();

    const [modalShow, setModalShow] = React.useState(false);
    const [show, setShow] = React.useState(false);
    const [noteShow, noteSetShow] = React.useState(false);
    const [closeShow, closeSetShow] = React.useState(false);

    return (
        <>
            <ClientInfoPanel/>
            <section className="d-flex flex-wrap justify-content-center align-items-center text-center gap-5 container">
                <div onClick={() => setModalShow(true)} className="activity-button addMeasurement">
                    <WeightIcon/>
                    <div className={"option-name"}>Dodaj Pomiar</div>
                </div>
                <div onClick={() => noteSetShow(true)} className="activity-button addNote">
                    <PenIcon/>
                    <div className={"option-name"}>Zalecenie</div>
                </div>
                <div onClick={() => {
                    closeSetShow(true)}
                } className="activity-button closeVisit">
                    <CloseIcon/>
                    <div className={"option-name"}>Zakończ wizytę</div>
                </div>
            </section>
            <MeasurementModal show={modalShow}
                              onHide={() => setModalShow(false)}/>
            <NoteModal show={noteShow} onHide={() => noteSetShow(false)}/>
            <CloseVisitModal closeVisitId={visit} show={closeShow} setShow={closeSetShow}/>
        </>
    )
}