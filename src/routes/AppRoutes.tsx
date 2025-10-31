// src/routes/AppRoutes.tsx
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Login from "../pages/Login/Login";
import {Home} from "../pages/Home/Home";
import Menu from "../components/Menu/Menu";
import Clients from "../pages/Clients/Clients";
import Calendar from "../pages/Calendar/Calendar";
import SignUp from "../components/Forms/SignUp/SignUp";
import {Diets} from "../pages/Diets/Diets";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/home" element={<Home/>}>
                    <Route path="" element={<Menu/>}/>
                    <Route path="menu" element={<Menu/>}/>
                    <Route path="clients" element={<Clients/>}/>
                    <Route path="calendar" element={<Calendar/>}/>
                    <Route path="diets" element={<Diets/>}/>
                </Route>
                <Route path="*" element={<Navigate to="/" replace/>}/>
            </Routes>
        </BrowserRouter>
    );
};
