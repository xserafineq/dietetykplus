import {Button, FloatingLabel, Form} from "react-bootstrap";
import './SignIn.css'
import {useNavigate} from "react-router-dom";

export default function SignIn() {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/home');
    }
    return (
        <>
            <form className="signin-form">
                <div className="form-name">
                    <div className={"icon-apple"}></div>
                    Dietetyk+
                </div>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email"
                    className="mb-3"
                >
                    <Form.Control type="email" placeholder="name@example.com"/>
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Hasło">
                    <Form.Control type="password" placeholder="Password"/>
                </FloatingLabel>
                <Button onClick={goToHome} className="signin-button" variant={"success"} type={"submit"}>Zaloguj się</Button>
            </form>
        </>
    );
}