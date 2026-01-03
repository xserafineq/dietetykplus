import "./Header.css";
import {useNavigate} from "react-router-dom";
import {TbHome2, TbLogout2} from "react-icons/tb";
import { IoMdHome } from "react-icons/io";
const LogoutIcon = TbLogout2 as React.ComponentType<any>;
const HomeIcon = IoMdHome as React.ComponentType<any>;

export default function Header() {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/home');
    }

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/login", { replace: true });
    };

    return (
        <>
            <header>
                <div onClick={goToHome} id={"logo"}>
                    <div className={"icon-apple"}></div>
                    Dietetyk+
                </div>
                <div id={"logout"} onClick={goToHome}><HomeIcon/></div>
                <div id={"home"} onClick={logout}><LogoutIcon/></div>
            </header>
        </>
    );
}