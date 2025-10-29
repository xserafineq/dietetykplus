import './Home.css';
import Header from "../../components/Header/Header";
import {Outlet} from "react-router-dom";

export function Home() {

    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
}