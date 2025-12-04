import './ClientInfoPanel.css';
import {FaHistory} from "react-icons/fa";
import {IoMdHome} from "react-icons/io";
import {FaPenToSquare, FaPhone} from "react-icons/fa6";
import {IoIosMail} from "react-icons/io";
import {MdOutlineNumbers} from "react-icons/md";
import {FaBirthdayCake} from "react-icons/fa";
import {GiWeight} from "react-icons/gi";
import React from "react";
import {Home} from "../../Home/Home";


const AgeIcon = FaBirthdayCake as React.ComponentType<any>;
const HistoryIcon = FaHistory as React.ComponentType<any>;
const PeselIcon = MdOutlineNumbers as React.ComponentType<any>;
const HomeIcon = IoMdHome as React.ComponentType<any>;
const PhoneIcon = FaPhone as React.ComponentType<any>;
const MailIcon = IoIosMail as React.ComponentType<any>;
const WeightIcon = GiWeight as React.ComponentType<any>;
const PenIcon = FaPenToSquare as React.ComponentType<any>;


export default function ClientInfoPanel() {
    return (
        <>
            <div className={"panels-container"}>
                <div className={"panel-box"}>
                    <div className={"panel-data"}>
                        <div className={"panel-person-info"}>
                            <div className={"name"}>
                                <b>Mateusz Serafin, 19 lat</b>
                            </div>
                            <div className={"item"}>
                                <PeselIcon/>0424241111  <HomeIcon/>39-400 Tarnobrzeg Ul. Orląt Lwowskich 5
                            </div>
                            <div className={"item"}>
                                <PhoneIcon/>519 739 297  <MailIcon/>serafin24@gmail.com
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"panel-box visits-history"}>
                    <div className={"panel-heading"}>
                        <HistoryIcon/>Historia Wizyt
                    </div>
                    <div className={"panel-data"}>
                        <table>
                            <tr>
                                <th>Nr</th>
                                <th>Data</th>
                                <th>Dietetyk</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>22.05.2010</td>
                                <td>Mateusz</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>22.05.2010</td>
                                <td>Mateusz</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>22.05.2010</td>
                                <td>Mateusz</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>22.05.2010</td>
                                <td>Mateusz</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>22.05.2010</td>
                                <td>Mateusz</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className={"panel-box measurements-history"}>
                    <div className={"panel-heading"}>
                        <WeightIcon/>Historia Pomiarów
                    </div>
                    <div className={"panel-data"}>
                        <table>
                            <tr>
                                <th>BMI</th>
                                <th>Data</th>
                                <th>Dietetyk</th>
                            </tr>
                            <tr>
                                <td>19,9</td>
                                <td>22.05.2010</td>
                                <td>Mateusz</td>
                            </tr>
                            <tr>
                                <td>19,8</td>
                                <td>22.05.2010</td>
                                <td>Mateusz</td>
                            </tr>
                            <tr>
                                <td>25,5</td>
                                <td>22.05.2010</td>
                                <td>Mateusz</td>
                            </tr>
                            <tr>
                                <td>30</td>
                                <td>22.05.2010</td>
                                <td>Mateusz</td>
                            </tr>
                            <tr>
                                <td>18</td>
                                <td>22.05.2010</td>
                                <td>Mateusz</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className={"panel-box measurements-history"}>
                    <div className={"panel-heading"}>
                        <PenIcon/>Notatki
                    </div>
                    <div className={"panel-data"}>
                        <table>
                            <tr>
                                <th>Nazwa</th>
                                <th>Data</th>
                            </tr>
                            <tr>
                                <td>Zalecenia</td>
                                <td>22.09.2015</td>
                            </tr>
                            <tr>
                                <td>Zalecenia</td>
                                <td>22.09.2015</td>
                            </tr>
                            <tr>
                                <td>Zalecenia</td>
                                <td>22.09.2015</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}