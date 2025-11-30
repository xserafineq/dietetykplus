import './Footer.css';
import {VscColorMode} from "react-icons/vsc";
import {FaApple} from "react-icons/fa";

const ColorModeIcon = VscColorMode as React.ComponentType<any>;
const AppleIcon = FaApple as React.ComponentType<any>;
export default function Footer() {
    return (
        <>
            <footer>
                <div className={"copyright"}>
                    <div><AppleIcon/>Dietetyk+</div>
                    <div className={"text"}>CopyRight {new Date().getFullYear()}</div>
                    <div className={"text"}>
                        <a href={"https://github.com/xserafineq"}>
                            Mateusz Serafin
                        </a>
                        </div>
                </div>
                <div className={"theme-mode-container"}>
                    <ColorModeIcon/>
                </div>
            </footer>
        </>
    )
}