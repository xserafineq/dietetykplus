import {CCalendar} from "@coreui/react-pro";
import '@coreui/coreui-pro/dist/css/coreui.min.css';
import './Calendar.css';

export default function Calendar() {
    return (
        <>
        <div className={"calendar-container"}>
            <CCalendar locale={"pl-PL"} className={"calendar"}/>
        </div>
        </>
    )
}