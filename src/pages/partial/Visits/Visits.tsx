import './Visits.css';
import VisitCard from "../../../components/VisitCard/VisitCard";
import {Navigate,useNavigate} from "react-router-dom";

export default function Visits() {

    const navigate = useNavigate();

    const goToCurrentVisit = ( ) => {
        navigate( "../current-visit" );
    }


    return (
        <>
            <div className={"visits-container"}>
                <div className={"visit-text"}>
                    Nachodzące wizyty
                </div>
                <VisitCard goTo={goToCurrentVisit} now={true} clientData={new Array<string>("Mateusz", "Serafin")} date={"2022-01-05"}/>
                <VisitCard goTo={goToCurrentVisit} now={false} clientData={new Array<string>("Jan", "Dąbrowski")} date={"2026-12-02"}/>
                <VisitCard goTo={goToCurrentVisit} now={false} clientData={new Array<string>("Maciej", "Duda")} date={"2026-12-02"}/>
                <VisitCard goTo={goToCurrentVisit} now={false} clientData={new Array<string>("Jerzy", "Krawczyk")} date={"2026-12-02"}/>
                <VisitCard goTo={goToCurrentVisit} now={false} clientData={new Array<string>("Krzysztof", "Ibisz")} date={"2026-12-02"}/>
            </div>
        </>
    )
}