// src/routes/AppRoutes.tsx
import {BrowserRouter, Routes, Route, Navigate, useNavigate} from "react-router-dom";
import Login from "../pages/Login/Login";
import {Home} from "../pages/Home/Home";
import Menu from "../pages/partial/Menu/Menu";
import Clients from "../pages/partial/Clients/Clients";
import Calendar from "../pages/partial/Calendar/Calendar";
import SignUp from "../components/Forms/SignUp/SignUp";
import Diets from "../pages/partial/Diets/Diets";
import Visits from "../pages/partial/Visits/Visits";
import {Key} from "node:readline";


export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/home" element={<Home/>}>
                    <Route path="" element={<Menu name={"Mateusz"}/>}/>
                    <Route path="menu" element={<Menu name={"Mateusz"}/>}/>
                    <Route path="clients" element={<Clients/>}/>
                    <Route path="calendar" element={<Calendar/>}/>
                    <Route path="diets" element={<Diets/>}/>
                    <Route path="visits" element={<Visits/>}/>
                </Route>
                <Route path="*" element={<Navigate to="/" replace/>}/>
            </Routes>
        </BrowserRouter>
    );
};
