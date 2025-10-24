import {Button, FloatingLabel, Form} from "react-bootstrap";
import './SignIn.css'

export default function SignIn() {
    return (
        <>
            <form className="signin-form">
                <div className="form-name">
                    <div className={"icon-heart-empty"}></div>Dietetyk+
                </div>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email"
                    className="mb-3"
                >
                    <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Hasło">
                    <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
                <Button className="signin-button" variant={"primary"} type={"submit"}>Zaloguj sie</Button>
            </form>
        </>
    );
}