import './ClientCard.css'
import {Button} from "react-bootstrap";
import { IoEnter } from "react-icons/io5";
import { IoPersonCircleSharp } from "react-icons/io5";


const IOEnter = IoEnter as React.ComponentType<any>;
const PersonIcon = IoPersonCircleSharp as React.ComponentType<any>;


export default function ClientCard({ name,lastname,pesel }: { name: string ,  lastname: string, pesel: string}) {
    return (
        <>
            <div className={"client-card"}>
                <div className={"client-name"}>
                    <PersonIcon/> {name} {lastname}, {pesel}
                </div>
                <div className={"buttons"}>
                    <Button variant="light"><IOEnter className={"show-btn"}/></Button>
                </div>
            </div>
        </>
    )
}