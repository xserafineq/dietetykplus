import './Home.css';
import Header from "../../components/layout/Header/Header";
import {Outlet, useNavigate} from "react-router-dom";
import Footer from "../../components/layout/Footer/Footer";
import {useEffect} from "react";

export function Home() {

    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/login", { replace: true });
        }
    }, []);
    return (
        <>
            <Header/>
            <div className="home">
            <Outlet/>
            </div>
            <Footer/>
        </>
    );
}