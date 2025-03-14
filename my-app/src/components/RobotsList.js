import React, { useEffect, useState } from "react";
import { Table, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ROBOTS_URL = "https://gist.githubusercontent.com/josejbocanegra/6ff056a6fbf4fd9cbf9475ae8de26f17/raw/38f13f7ccedbd3bc6d08c031cf49f3bd4f5c09a1/robots.json";

function RobotsList() {
    const [robots, setRobots] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(ROBOTS_URL)
            .then(response => response.json())
            .then(data => setRobots(data))
            .catch(error => console.error("Error al obtener los robots", error));
    }, []);

    return (
        <Container className="mt-5">
            <h2 className="text-center">Adopta un Robot con Robot Lovers!</h2>
            <div className="d-flex justify-content-center">
                <img
                    src="https://s3-alpha-sig.figma.com/img/6be0/8970/63bb2d1e43b5d380b6078a7b3a2d56a7?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RYLopK91hPUwcmFxC8Q-KTzwR38TKLVzYli2eQKy~u3zgHnr9etao~pIi~X2fWPrrBFl8B4RCzYAY1bl-LnO~ru7a8h--avtmJm0VYkmVjN1tj6NQXtVO1ISgotgxSF7CxtA2GWP7zLqbfeBntRxLR3HcJI83HXaXYDOm7jt7LMmkwTypCj1tuz98uWYYskOxbhNqMxFabvs53SRsas8Rlg3q-oDNRs5aLXE45cHaqH6~JGuA2ggtAvx29Z7KTjsHkTggvbCmEnu9XxtQQdr6LoL8y8-aUuTvPq-9NJY5MB~Zg3YrSM9Peowd6sMLf36RLgvReCUQHZPNFYg1DoTrw__"
                    alt="Robot Lovers Banner"
                    className="img-fluid my-3"
                    style={{ width: "60%", maxWidth: "600px" }}
                />
            </div>

            <div className="d-flex justify-content-start">
                <Table striped bordered hover className="mt-3" style={{ width: "75%" }}>
                    <thead className="table-dark">
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Modelo</th>
                            <th>Empresa Fabricante</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {robots.map((robot, index) => (
                            <tr key={robot.id}>
                                <td>{index + 1}</td>
                                <td>{robot.name}</td>
                                <td>{robot.model}</td>
                                <td>{robot.manufacturer}</td>
                                <td>
                                    <Button
                                        variant="info"
                                        onClick={() => navigate(`/robots/${robot.id}`, { state: { robot } })}
                                    >
                                        Ver Detalles
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </Container>
    );
}

export default RobotsList;
