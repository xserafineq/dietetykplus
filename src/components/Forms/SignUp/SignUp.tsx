import {Button, FloatingLabel, Form} from "react-bootstrap";
import 'SignUp.css';
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function SignUp() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const handleRegister = async (e:any) => {
        e.preventDefault();
            const res = await axios.post("https://localhost:7081/api/auth/register", {
                firstName,
                lastName,
                email,
                password
            });
        if (res.data.token) {
            localStorage.setItem("token", res.data.token);
            goToLogin();
        }
    };

    const navigate = useNavigate();
    const goToLogin = () => {
        navigate('/login');
    }

    return (
        <>
            <form onSubmit={handleRegister} className="signup-form">
                <div className="form-name">
                    <div className={"icon-apple"}></div>Dietetyk+
                </div>
                <FloatingLabel controlId="floatingPassword" label="Imię">
                    <Form.Control onChange={(e)=>{setFirstName(e.target.value)}} className={"form-control"}   type="text" placeholder="Imię" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Nazwisko">
                    <Form.Control onChange={(e)=>{setLastName(e.target.value)}} className={"form-control"}   type="text" placeholder="Nazwisko" />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email"
                    className="mb-3"
                >
                    <Form.Control onChange={(e)=>{setEmail(e.target.value)}} className={"form-control"} type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Hasło">
                    <Form.Control onChange={(e)=>{setPassword(e.target.value)}} className={"form-control"}   type="password" placeholder="Password" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Powtórz Hasło">
                    <Form.Control onChange={(e)=>{setPassword2(e.target.value)}} className={"form-control"}  type="password" placeholder="Password" />
                </FloatingLabel>
                <Button className="signup-button" variant={"success"} type={"submit"}>Zarejestruj się</Button>
            </form>
        </>
    );
}