import { FaAddressBook } from "react-icons/fa";
import './VisitCard.css';

const VisitIcon = FaAddressBook as React.ComponentType<any>;

export default function VisitCard({clientData,date,now,goTo} :
{clientData: string[], date: string, now: boolean,goTo: () => void}) {
    return (
        <>
            <div onClick={goTo} className={now ? "visit-box visit-now" : "visit-box"}>
                <div className={"visit-icon"}><VisitIcon/></div>
                <div className={"visit-clientData"}>{clientData.map((x) => x + " ")}</div>
                <div className={"visit-date"}>{date}</div>
            </div>
        </>
    );
}