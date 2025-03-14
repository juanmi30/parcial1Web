import React from "react";
import { Card, Button } from "react-bootstrap";

function RobotDetail({ robot, onClose }) {
    if (!robot) return null;

    return (
        <Card className="mt-3">
            <Card.Img variant="top" src={robot.imagen} alt={robot.nombre} />
            <Card.Body>
                <Card.Title>{robot.nombre}</Card.Title>
                <Card.Text>
                    <strong>Año de Fabricación:</strong> {robot.añoFabricacion} <br />
                    <strong>Capacidad de Procesamiento:</strong> {robot.capacidadProcesamiento} <br />
                    <strong>Humor:</strong> {robot.humor}
                </Card.Text>
                <Button variant="danger" onClick={onClose}>Cerrar</Button>
            </Card.Body>
        </Card>
    );
}

export default RobotDetail;
