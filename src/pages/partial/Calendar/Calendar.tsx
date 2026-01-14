import React, { useEffect, useState, useMemo } from "react";
import { Calendar, dateFnsLocalizer, Views, View } from "react-big-calendar";
import { format, parse, startOfWeek, getDay, addMinutes } from "date-fns";
import { pl } from "date-fns/locale/pl";
import { jwtDecode } from "jwt-decode";
import "react-big-calendar/lib/css/react-big-calendar.css";
import './Calendar.css';
import EditVisit from '../../../components/Modals/Visits/EditVisit/EditVisit';
import {number} from "framer-motion";
const locales = {
    'pl': pl,
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

type Visit = {
    visitId: number;
    employeeId: number;
    customerPesel: string;
    date: string;
    status: string;
}

type Employee = {
    id: number;
    firstName: string;
    lastName: string;
}

type Customer = {
    pesel: string;
    firstName: string;
    lastName: string;
}

type Config = {
    id: number;
    visit_duration: number;
}

export default function MyCalendar() {
    const [employee, setEmployee] = useState<Employee | null>(null);
    const [customer,setCustomer] = useState<Customer[] | null>([]);
    const [visits, setVisits] = useState<Visit[]>([]);

    const [view, setView] = useState<View>(Views.MONTH);
    const [date, setDate] = useState(new Date());
    const [config,setConfig] = useState<Config>()
    const [show, setShow] = useState(false);
    const [visitId,setVisitId] = useState(0);
    const [singleCustomer, setSingleCustomer] = useState<Customer>();



    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const decoded: any = jwtDecode(token);
                setEmployee({
                    id: Number(decoded.id),
                    firstName: decoded.firstName,
                    lastName: decoded.lastName,
                });
            } catch (err) {
                console.error("Błąd dekodowania tokenu", err);
            }
        }
    }, []);

    useEffect(() => {
        async function getVisits() {

            if (!employee?.id) return;

            try {
                const response = await fetch(`https://localhost:7081/api/Visits/employeeId=${employee?.id}`);
                const data = await response.json();
                setVisits(data);
            } catch (err) {
                console.error("Błąd pobierania wizyt", err);
            }
        }
        getVisits();
    }, [employee?.id]);

    useEffect(() => {
        async function getCustomers() {
            try {
                const response = await fetch(`https://localhost:7081/api/Customers`);
                if(response.ok) {
                    setCustomer(await response.json());
                }
            }
            catch (err) {
                console.error(err);
            }
        }
        getCustomers();
    }, []);

    useEffect(() => {
        async function getConfig() {
            try {
                const response = await fetch(`https://localhost:7081/api/Config`);
                setConfig(await response.json());
            }catch (err : any) {
                console.error(err);
            }
        }
        getConfig();
    }, []);


    const events = useMemo(() => {
        return visits
            .filter(visit => employee ? Number(visit.employeeId) === employee.id : true)
            .map(visit => {
                const startDate = new Date(visit.date);
                let endDate = addMinutes(startDate, Number(config?.visit_duration));
                if (startDate.getDate() !== endDate.getDate()) {
                    endDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), 23, 59, 59);
                }

                const mycustomer = customer?.find(c => c.pesel == visit?.customerPesel);
                return {
                    id: visit.visitId,
                    customer: mycustomer,
                    title: mycustomer?.firstName + " " + mycustomer?.lastName,
                    start: startDate,
                    end: endDate,
                    allDay: false,
                    status: visit.status
                };
            });
    }, [visits, employee]);

    const calendarStep = useMemo(() => {
        if (!config?.visit_duration) return 30;
        return config.visit_duration % 15 === 0 ? 15 : config.visit_duration;
    }, [config]);

    const timeslots = 60 / calendarStep;

    return (
        <div style={{ height: '90vh', width: '90%', margin: 'auto', padding: '20px' }}>
            <Calendar
                localizer={localizer}
                events={events}
                allDayAccessor={() => false}
                startAccessor="start"
                endAccessor="end"
                timeslots={timeslots}
                step={calendarStep}

                eventPropGetter={(event) => {
                    let backgroundColor = '#3174ad';
                    let color = 'white';

                    if (event.status === 'active') backgroundColor = '#28a745';
                    if (event.status === 'closed') backgroundColor = '#ec5362';
                    if (event.status === 'postponed') backgroundColor = '#D452EB';
                    if (event.status === 'cancel') {
                        backgroundColor = '#ffa53f';
                        color = 'black';
                    }

                    return {
                        style: {
                            backgroundColor: backgroundColor,
                            color: color,
                            borderRadius: '4px',
                            border: 'none',
                            display: 'block'
                        }
                    };
                }}

                view={view}
                onView={(newView) => setView(newView)}
                date={date}
                onNavigate={(newDate) => setDate(newDate)}
                culture="pl"
                messages={{
                    next: "Następny",
                    previous: "Poprzedni",
                    today: "Dzisiaj",
                    month: "Miesiąc",
                    week: "Tydzień",
                    day: "Dzień",
                    agenda: "Agenda",
                    date: "Data",
                    time: "Czas",
                    event: "Wydarzenie",
                    noEventsInRange: "Brak wizyt w tym terminie"
                }}
                style={{ height: '100%', backgroundColor: 'white' }}
                onSelectEvent={(event) => {
                    setVisitId(event.id);
                    setSingleCustomer(event.customer)
                    setShow(true);
                }}
            />
            <EditVisit show={show} setShow={setShow} visitId={visitId} customer={singleCustomer} />
            <div className={"legenda"}>
                <b style={{color: 'var(--text)'}}>Legenda:</b>
                <b style={{color: '#28a745'}}>aktywna wizyta</b>
                <b style={{color: '#ec5362'}}>zakończona wizyta</b>
                <b style={{color: '#D452EB'}}>przeniesiony termin wizyty</b>
                <b style={{color: '#ffa53f'}}>anulowana wizyta</b>

            </div>
        </div>
    );
}