import {Button, FloatingLabel, Form} from "react-bootstrap";
import './SignUp.css'

export default function SignUp() {
    return (
        <>
            <form className="signup-form">
                <div className="form-name">
                    <div className={"icon-apple"}></div>Dietetyk+
                </div>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email"
                    className="mb-3"
                >
                    <Form.Control className={"form-control"} type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Hasło">
                    <Form.Control className={"form-control"}   type="password" placeholder="Password" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Powtórz Hasło">
                    <Form.Control className={"form-control"}  type="password" placeholder="Password" />
                </FloatingLabel>
                <Button className="signup-button" variant={"success"} type={"submit"}>Zarejstruj się</Button>
            </form>
        </>
    );
}