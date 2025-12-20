// src/routes/AppRoutes.tsx
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Login from "../pages/Login/Login";
import {Home} from "../pages/Home/Home";
import Menu from "../pages/partial/Menu/Menu";
import Clients from "../pages/partial/Clients/Clients";
import Calendar from "../pages/partial/Calendar/Calendar";
import SignUp from "../components/Forms/SignUp/SignUp";
import Diets from "../pages/partial/Diets/Diets";
import Visits from "../pages/partial/Visits/Visits";
import ClientInfoPanel from "../pages/partial/ClientInfoPanel/ClientInfoPanel";
import CurrentVisit from "../pages/partial/CurrentVisit/CurrentVisit";
import Measurements from "../pages/partial/Measurements/Measurements";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/*<Route path="/" element={<Intro/>}/>*/}
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/home" element={<Home/>}>
                        <Route path="" element={<Menu name={"Mateusz"}/>}/>
                        <Route path="menu" element={<Menu name={"Mateusz"}/>}/>
                        <Route path="clients" element={<Clients/>}/>
                        <Route path="clients/:pesel" element={<ClientInfoPanel/>}/>
                        <Route path="calendar" element={<Calendar/>}/>
                        <Route path="diets" element={<Diets/>}/>
                        <Route path="visits" element={<Visits/>}/>
                        <Route path="current-visit" element={<CurrentVisit/>}></Route>
                        <Route path="measurements" element={<Measurements/>}/>
                    </Route>
                <Route path="*" element={<Navigate to="login" replace/>}/>
            </Routes>
        </BrowserRouter>
    );
};
