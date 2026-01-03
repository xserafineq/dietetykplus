import {Button, FloatingLabel, Form} from "react-bootstrap";
import './SignIn.css'
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import {useState} from "react";
import FailedModal from "../../Modals/FailedModal/FailedModal";
export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [failedModal,setFailedModal] = useState(false);
    const [message, setMessage] = useState("");

    const handleLogin = async (e: any) => {
        e.preventDefault();

        try {
            const res = await axios.post("https://localhost:7081/api/Auth/login", {
                email,
                password,
            });

            if (res.data.token) {
                localStorage.setItem("token", res.data.token);
                goToHome();
            }
        } catch (error: any) {
            if (error.response?.status === 401) {
                setFailedModal(true);
                setMessage("Niepoprawne dane logowania, spróbuj ponownie.");
            }
        }
    };



    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/home');
    }
    return (
        <>
            <form onSubmit={handleLogin} className="signin-form">
                <div className="form-name">
                    <div className={"icon-apple"}></div>
                    Dietetyk+
                </div>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email"
                    className="mb-3"
                >
                    <Form.Control value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="name@example.com"/>
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Hasło">
                    <Form.Control value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Password"/>
                </FloatingLabel>
                <Button className="signin-button" variant={"success"} type={"submit"}>Zaloguj się</Button>
            </form>
            <FailedModal show={failedModal} setShow={setFailedModal} message={message}/>
        </>
    );
}