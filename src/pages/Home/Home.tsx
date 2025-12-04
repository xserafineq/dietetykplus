import './Home.css';
import Header from "../../components/layout/Header/Header";
import {Outlet} from "react-router-dom";
import Footer from "../../components/layout/Footer/Footer";

export function Home() {

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