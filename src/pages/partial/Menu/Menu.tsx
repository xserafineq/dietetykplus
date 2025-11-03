import { BsPersonFill } from 'react-icons/bs';
import { FaCalendarAlt } from 'react-icons/fa';
import { MdFastfood } from 'react-icons/md';
import { FaNotesMedical } from 'react-icons/fa';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import './Menu.css';

const Persons = BsPersonFill as React.ComponentType<any>;
const Calendar = FaCalendarAlt as React.ComponentType<any>;
const Diet = MdFastfood as React.ComponentType<any>;
const Visit = FaNotesMedical as React.ComponentType<any>;

export default function Menu({name} : { name: string }) {
    const [data, setData] = useState<string>(new Date().toLocaleDateString("pl-PL") + " " + new Date().toLocaleTimeString("pl-PL"));

    const navigate = useNavigate();

    const goToPersons = () => {
        navigate('/login');
    }

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
        const timeInterval = setInterval(() => setData(new Date().toLocaleDateString("pl-PL") + " " + new Date().toLocaleTimeString("pl-PL"))
            ,1000);
        return () => {clearInterval(timeInterval);};
    }, [])

    return (
      <>
          <div className="time">
              Witaj {name}, {data}
          </div>
          <div className="activity-sections-container d-flex min-vh-100 justify-content-center align-items-start">
              <section className="d-flex flex-wrap justify-content-center gap-5 activity-sections">
                  <div onClick={goToClients} className="activity-button">
                      <Persons className={"option-icon"}/>
                      <div className={"option-name"}>Klienci</div>
                  </div>
                  <div onClick={goToCalendar} className="activity-button">
                      <Calendar className={"option-icon"}/>
                      <div className={"option-name"}>Kalendarz</div>
                  </div>
                  <div onClick={goToDiets} className="activity-button">
                      <Diet className={"option-icon"}/>
                      <div className={"option-name"}>Diety</div>
                  </div>
                  <div onClick={goToVisits} className="activity-button">
                      <Visit className={"option-icon"}/>
                      <div className={"option-name"}>Wizyty</div>
                  </div>
              </section>
          </div>
      </>
    );
}