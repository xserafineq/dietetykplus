import './Login.css';
import SignIn from "../../components/Forms/SignIn/SignIn";
import {useNavigate} from "react-router-dom";


export default function Login() {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center vh-100">
                <SignIn />
            </div>
        </>
    );
}
