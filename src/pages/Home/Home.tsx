import './Home.css';
import Header from "../../components/Header/Header";
import {Outlet} from "react-router-dom";
import Footer from "../../components/Footer/Footer";

export function Home() {

    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}