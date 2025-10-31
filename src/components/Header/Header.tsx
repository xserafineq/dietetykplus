import "./Header.css";
import {useNavigate} from "react-router-dom";




export default function Header() {

    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/home');
    }
    return (
        <>
            <header onClick={goToHome}>
                <div className={"icon-apple"}></div>
                Dietetyk+
            </header>
        </>
    );
}