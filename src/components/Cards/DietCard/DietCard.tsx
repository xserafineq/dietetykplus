import './DietCard.css';
import {ReactNode} from "react";
import { FaFire } from "react-icons/fa6";

const FireIcon = FaFire as React.ComponentType<any>;
export default function DietCard({icon, name, kcal} : {icon: ReactNode, name : string, kcal : number}) {
    return (
        <>
            <div className={"diet-box"}>
                <div className={"diet-icon"}>{icon}</div>
                <div className={"diet-name"}>{name}</div>
                <div className={"diet-kcal"}><FireIcon/> {kcal} kcal</div>
            </div>
        </>
    );
}