import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import {Home} from "../pages/Home/Home";
import Menu from "../pages/partial/Menu/Menu";
import Clients from "../pages/partial/Clients/Clients";
import ClientInfoPanel from "../pages/partial/ClientInfoPanel/ClientInfoPanel";
import Calendar from "../pages/partial/Calendar/Calendar";
import Diets from "../pages/partial/Diets/Diets";
import Visits from "../pages/partial/Visits/Visits";
import CurrentVisit from "../pages/partial/CurrentVisit/CurrentVisit";
import AdminPanel from "../pages/partial/AdminPanel/AdminPanel";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="/home" element={<Home />}>
                        <Route index element={<Menu/>} />
                        <Route path="menu" element={<Menu />} />
                        <Route path="clients" element={<Clients />} />
                        <Route path="clients/:pesel" element={<ClientInfoPanel />} />
                        <Route path="calendar" element={<Calendar />} />
                        <Route path="diets" element={<Diets />} />
                        <Route path="visits" element={<Visits />} />
                        <Route path="visits/:pesel/:visit" element={<CurrentVisit />} />
                        <Route path={"admin"} element={<AdminPanel/>}></Route>
                    </Route>
                </Route>
                <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
        </BrowserRouter>
    );
};
