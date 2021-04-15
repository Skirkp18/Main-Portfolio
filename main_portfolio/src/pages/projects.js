import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import ProjectsCard from "../components/projectscard/projectscard";

function projects() {
    return(
        <Container fluid id="mainBackground">
        <Row>
            <Col lg="auto">
            <ProjectsCard />
            </Col>
        </Row>
    </Container>
    );
};

export default projects;