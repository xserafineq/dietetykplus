import { IoPerson } from "react-icons/io5";
import { FaCalendarAlt } from 'react-icons/fa';
import { MdFastfood } from 'react-icons/md';
import { FaNotesMedical } from 'react-icons/fa';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import './Menu.css';
import {jwtDecode} from "jwt-decode";
import { MdAdminPanelSettings } from "react-icons/md";
const Persons = IoPerson as React.ComponentType<any>;
const Calendar = FaCalendarAlt as React.ComponentType<any>;
const Diet = MdFastfood as React.ComponentType<any>;
const Visit = FaNotesMedical as React.ComponentType<any>;
const AdminPanel = MdAdminPanelSettings as React.ComponentType<any>;

export default function Menu() {
    type Employee = {
        id: number;
        firstName: string;
        lastName: string;
        isadmin: string;
    }
    const [employee, setEmployee] = useState<Employee | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decoded: any = jwtDecode(token);
            setEmployee({
                id: decoded.id,
                firstName: decoded.firstName,
                lastName: decoded.lastName,
                isadmin: decoded.isadmin,
            });
        }
    }, []);

    const [data, setData] = useState<string>(new Date().toLocaleDateString("pl-PL"));

    const navigate = useNavigate();

    const goToClients = () => {
        navigate('clients');
    }

    const goToCalendar = () => {
        navigate('calendar');
    }

    const goToDiets = () => {
        navigate('diets');
    }
    const goToVisits = () => {
        navigate('visits');
    }

    useEffect(() => {
        setData(new Date().toLocaleDateString("pl-PL"));
    }, [])

    return (
      <>
          <div className="time">

              Witaj {employee?.firstName}, {data}
          </div>
          <div className="activity-sections-container d-flex min-vh-100 justify-content-center align-items-start">
              <section className="d-flex flex-wrap justify-content-center gap-5 activity-sections">
                  <div onClick={goToClients} className="activity-button clients">
                      <Persons/>
                      <div className={"option-name"}>Klienci</div>
                  </div>
                  <div onClick={goToCalendar} className="activity-button calendar">
                      <Calendar/>
                      <div className={"option-name"}>Kalendarz</div>
                  </div>
                  <div onClick={goToDiets} className="activity-button diets">
                      <Diet/>
                      <div className={"option-name"}>Diety</div>
                  </div>
                  <div onClick={goToVisits} className="activity-button visits">
                      <Visit/>
                      <div className={"option-name"}>Wizyty</div>
                  </div>
                  {
                      employee?.isadmin === "1" ? (
                          <div onClick={goToClients} className="activity-button admin">
                              <AdminPanel/>
                              <div className={"option-name"}>AdminPanel</div>
                          </div>
                      ) : ""
                  }




              </section>
          </div>
      </>
    );
}