import './ClientCard.css'
import {Button} from "react-bootstrap";
import { IoEnter } from "react-icons/io5";

const IOEnter = IoEnter as React.ComponentType<any>;

export default function ClientCard({ name,lastname }: { name: string ,  lastname: string }) {
    return (
        <>
            <div className={"client-card"}>
                <div className={"client-name"}>
                    {name} {lastname}
                </div>
                <div className={"buttons"}>
                    <Button variant="light"><IOEnter className={"show-btn"}/></Button>
                </div>
            </div>
        </>
    )
}