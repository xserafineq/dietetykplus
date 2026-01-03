import {FaAddressBook} from "react-icons/fa";
import './VisitCard.css';
import {FaClock} from "react-icons/fa6";
import {motion} from "framer-motion";

const VisitIcon = FaAddressBook as React.ComponentType<any>;
const ClockIcon = FaClock as React.ComponentType<any>;

export default function VisitCard({clientData, date, now, goTo}:
                                  { clientData: string[], date: string, now: boolean, goTo: () => void }) {
    return (
        <>
            <div  onClick={goTo}
                  className={now ? "visit-box visit-now" : "visit-box"}>
                <div className={"visit-icon"}><VisitIcon/></div>
                <div className={"visit-clientData"}>{clientData.map((x) => x + " ")}</div>
                <div className={"visit-date"}><ClockIcon/> {date}</div>
            </div>
        </>
    );
}