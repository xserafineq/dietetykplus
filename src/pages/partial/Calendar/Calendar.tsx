import React, { useEffect, useState, useMemo } from "react";
import { Calendar, dateFnsLocalizer, Views, View } from "react-big-calendar";
import { format, parse, startOfWeek, getDay, addMinutes } from "date-fns";
import { pl } from "date-fns/locale/pl";
import { jwtDecode } from "jwt-decode";
import "react-big-calendar/lib/css/react-big-calendar.css";
import './Calendar.css';

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
    date: string;
    status: string;
}

type Employee = {
    id: number;
    firstName: string;
    lastName: string;
}

export default function MyCalendar() {
    const [employee, setEmployee] = useState<Employee | null>(null);
    const [visits, setVisits] = useState<Visit[]>([]);

    const [view, setView] = useState<View>(Views.MONTH);
    const [date, setDate] = useState(new Date());

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
            try {
                const response = await fetch("https://localhost:7081/api/Visits");
                const data = await response.json();
                setVisits(data);
            } catch (err) {
                console.error("Błąd pobierania wizyt", err);
            }
        }
        getVisits();
    }, []);

    const events = useMemo(() => {
        return visits
            .filter(visit => employee ? Number(visit.employeeId) === employee.id : true)
            .map(visit => {
                const startDate = new Date(visit.date);
                let endDate = addMinutes(startDate, 30);
                if (startDate.getDate() !== endDate.getDate()) {
                    endDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), 23, 59, 59);
                }

                return {
                    id: visit.visitId,
                    title: 'Wizyta',
                    start: startDate,
                    end: endDate,
                    allDay: false,
                    status: visit.status
                };
            });
    }, [visits, employee]);

    return (
        <div style={{ height: '90vh', width: '90%', margin: 'auto', padding: '20px' }}>
            <h2 style={{ marginBottom: '10px' }}>
                Terminarz: {employee?.firstName} {employee?.lastName}
            </h2>
            <Calendar
                localizer={localizer}
                events={events}
                allDayAccessor={() => false}
                startAccessor="start"
                endAccessor="end"

                eventPropGetter={(event) => {
                    let backgroundColor = '#3174ad';
                    let color = 'white';

                    if (event.status === 'active') backgroundColor = '#28a745';
                    if (event.status === 'closed') backgroundColor = '#ec5362';
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
                    alert(`Wybrałeś wizytę ID: ${event.id}`);
                }}
            />
        </div>
    );
}