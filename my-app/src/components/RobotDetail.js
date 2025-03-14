import React from "react";
import { Card, Button, Container } from "react-bootstrap";

function RobotDetail({ robot, onClose }) {
    if (!robot) return null;

    return (

        <Container className="mt-3">
            <Card className="robot-detail-card" style={{ width: "15rem" }}>
                <Card.Body>
                    <Card.Img
                        variant="top"
                        src={robot.imagen}
                        alt={robot.nombre}
                        className="robot-img"
                    />
                    <Card.Title className="text-center">{robot.nombre}</Card.Title>
                    <Card.Text>
                        <strong>→ Año de Fabricación:</strong> {robot.añoFabricacion} <br />
                        <strong>→ Capacidad de Procesamiento:</strong> {robot.capacidadProcesamiento} <br />
                        <strong>→ Humor:</strong> {robot.humor}
                    </Card.Text>
                    <Button variant="danger" onClick={onClose}>Cerrar</Button>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default RobotDetail;
