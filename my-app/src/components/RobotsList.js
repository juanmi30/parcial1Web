import React, { useEffect, useState } from "react";
import { Table, Container, Row, Col } from "react-bootstrap";
import RobotDetail from "./RobotDetail";
import { useIntl } from "react-intl";

function RobotsList() {
    const [robots, setRobots] = useState([]);
    const [selectedRobot, setSelectedRobot] = useState(null);
    const intl = useIntl();

    useEffect(() => {
        fetch("http://localhost:3001/robots")
            .then((response) => response.json())
            .then((data) => {
                setRobots(data);
            })
            .catch((err) => {
                console.error("Error al obtener los robots", err);
            });
    }, []);

    const handleSelectRobot = (robotId) => {
        fetch(`http://localhost:3001/robots/${robotId}`)
            .then((response) => response.json())
            .then((data) => {
                setSelectedRobot(data);
            })
            .catch((err) => {
                console.error("Error al obtener detalles del robot", err);
            });
    };

    return (
        <Container className="mt-5">
            <h2 className="text-center">{intl.formatMessage({ id: "title" })}</h2>

            <img
                src="https://s3-alpha-sig.figma.com/img/6be0/8970/63bb2d1e43b5d380b6078a7b3a2d56a7?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RYLopK91hPUwcmFxC8Q-KTzwR38TKLVzYli2eQKy~u3zgHnr9etao~pIi~X2fWPrrBFl8B4RCzYAY1bl-LnO~ru7a8h--avtmJm0VYkmVjN1tj6NQXtVO1ISgotgxSF7CxtA2GWP7zLqbfeBntRxLR3HcJI83HXaXYDOm7jt7LMmkwTypCj1tuz98uWYYskOxbhNqMxFabvs53SRsas8Rlg3q-oDNRs5aLXE45cHaqH6~JGuA2ggtAvx29Z7KTjsHkTggvbCmEnu9XxtQQdr6LoL8y8-aUuTvPq-9NJY5MB~Zg3YrSM9Peowd6sMLf36RLgvReCUQHZPNFYg1DoTrw__"
                alt="Robot Lovers Banner"
                className="img-fluid mx-auto d-block my-3"
                style={{ maxWidth: "80%" }}
            />

            <Row>
                <Col md={selectedRobot ? 8 : 12}>
                    <Table striped bordered hover className="mt-3">
                        <thead className="table-dark">
                            <tr>
                                <th>#</th>
                                <th>{intl.formatMessage({ id: "name" })}</th>
                                <th>{intl.formatMessage({ id: "model" })}</th>
                                <th>{intl.formatMessage({ id: "manufacturerCompany" })}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {robots.map((robot, index) => (
                                <tr key={robot.id} onClick={() => handleSelectRobot(robot.id)} style={{ cursor: "pointer" }}>
                                    <td>{index + 1}</td>
                                    <td>{robot.nombre}</td>
                                    <td>{robot.modelo}</td>
                                    <td>{robot.empresaFabricante}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>

                {selectedRobot && (
                    <Col md={4}>
                        <RobotDetail robot={selectedRobot} onClose={() => setSelectedRobot(null)} />
                    </Col>
                )}
            </Row>
        </Container>
    );
}

export default RobotsList;
