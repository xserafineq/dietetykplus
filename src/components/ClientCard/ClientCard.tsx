import './ClientCard.css'
import {Button} from "react-bootstrap";
import { IoEnter } from "react-icons/io5";
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdModeEdit } from "react-icons/md";
const IOEnter = IoEnter as React.ComponentType<any>;
const EditIcon = MdModeEdit as React.ComponentType<any>;
const PersonIcon = IoPersonCircleSharp as React.ComponentType<any>;


export default function ClientCard({ name,lastname,pesel, city }: { name: string ,  lastname: string, pesel: string, city: string}) {
    return (
        <>
            <div className={"client-card"}>
                <div className={"client-name"}>
                    <PersonIcon/> {name} {lastname} / {pesel} / {city}
                </div>
                <div className={"buttons"}>
                    <IOEnter className={"show-btn"}/>
                    <EditIcon className={"edit-btn"}/>
                </div>
            </div>
        </>
    )
}