import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Button, Card } from "react-bootstrap";

function RobotDetail() {
    const location = useLocation();
    const navigate = useNavigate();
    const robot = location.state?.robot;

    if (!robot) {
        return <h2 className="text-center">No se encontró información del robot</h2>;
    }

    return (
        <Container className="mt-5">
            <h2 className="text-center">Adopta un Robot con Robot Lovers!</h2>

            <div className="d-flex justify-content-center my-3">
                <Card style={{ width: "50%" }}>
                    <Card.Img variant="top" src={robot.image} alt={robot.name} />
                    <Card.Body>
                        <Card.Title className="text-center">{robot.name}</Card.Title>
                        <Card.Text>
                            <strong>Modelo:</strong> {robot.model} <br />
                            <strong>Empresa Fabricante:</strong> {robot.manufacturer} <br />
                            <strong>Año de Fabricación:</strong> {robot.year} <br />
                            <strong>Capacidad de Procesamiento:</strong> {robot.processor} <br />
                            <strong>Características Adicionales:</strong> {robot.features}
                        </Card.Text>
                        <div className="d-flex justify-content-center">
                            <Button variant="primary" onClick={() => navigate(-1)}>Regresar</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    );
}

export default RobotDetail;
