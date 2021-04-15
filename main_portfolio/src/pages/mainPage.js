import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import AboutMe from "../components/aboutme/aboutme";


function MainPage() {
    return(
        <Container fluid id="mainBackground">
            <Row>
                <Col lg="auto">
                <AboutMe />
                </Col>
            </Row>
        </Container>
    );
};

export default MainPage;