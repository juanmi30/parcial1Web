import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Alert, Container } from "react-bootstrap";
import { useIntl } from "react-intl";

function Login() {
    const [login, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const intl = useIntl();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3001/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ login, password }),
            });

            if (response.ok) {
                navigate("/robots");
            } else {
                setError(true);
            }
        } catch (err) {
            console.error("Error en la autenticación", err);
            setError(true);
        }
    };

    return (
        <Container className="mt-5" style={{ maxWidth: "500px" }}>
            <h2 className="text-center">{intl.formatMessage({ id: "title" })}</h2>
            <img
                src="https://s3-alpha-sig.figma.com/img/6be0/8970/63bb2d1e43b5d380b6078a7b3a2d56a7?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RYLopK91hPUwcmFxC8Q-KTzwR38TKLVzYli2eQKy~u3zgHnr9etao~pIi~X2fWPrrBFl8B4RCzYAY1bl-LnO~ru7a8h--avtmJm0VYkmVjN1tj6NQXtVO1ISgotgxSF7CxtA2GWP7zLqbfeBntRxLR3HcJI83HXaXYDOm7jt7LMmkwTypCj1tuz98uWYYskOxbhNqMxFabvs53SRsas8Rlg3q-oDNRs5aLXE45cHaqH6~JGuA2ggtAvx29Z7KTjsHkTggvbCmEnu9XxtQQdr6LoL8y8-aUuTvPq-9NJY5MB~Zg3YrSM9Peowd6sMLf36RLgvReCUQHZPNFYg1DoTrw__"
                alt="Robot Lovers Banner"
                className="img-fluid mx-auto d-block my-3"
            />
            <Form onSubmit={handleLogin}>
                <Form.Group controlId="username">
                    <Form.Label>{intl.formatMessage({ id: "username" })}</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder={intl.formatMessage({ id: "usernamePlaceholder" })}
                        value={login}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="password" className="mt-3">
                    <Form.Label>{intl.formatMessage({ id: "password" })}</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder={intl.formatMessage({ id: "passwordPlaceholder" })}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                {error && <Alert variant="danger" className="mt-3">Error de autenticación. Revise sus credenciales.</Alert>}

                <div className="d-flex justify-content-between mt-3">
                    <Button variant="primary" type="submit">Ingresar</Button>
                    <Button variant="danger" type="reset" onClick={() => { setUsername(""); setPassword(""); setError(false); }}>
                        Cancelar
                    </Button>
                </div>
            </Form>
        </Container>
    );
}

export default Login;
