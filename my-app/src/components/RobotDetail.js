import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import { useIntl } from "react-intl";

function RobotDetail({ robot, onClose }) {

    const intl = useIntl();
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
                        <strong>→ {intl.formatMessage({ id: "fabricationYear" })}:</strong> {robot.añoFabricacion} <br />
                        <strong>→ {intl.formatMessage({ id: "processingCapacity" })}:</strong> {robot.capacidadProcesamiento} <br />
                        <strong>→ {intl.formatMessage({ id: "additionalFeatures" })}:</strong> {robot.humor}
                    </Card.Text>
                    <Button variant="danger" onClick={onClose}>Cerrar</Button>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default RobotDetail;
