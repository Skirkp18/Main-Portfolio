import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";
import "./style.css";

function resumeAndContactCard() {

    function contactMe() {
        window.open('mailto:Skirkp18@gmail.com?subject=Subject&body=Body%20goes%20here')
    };
    
    function openResume() {
        window.open("https://drive.google.com/file/d/1p1myO5OfoN0CGvy7reQBM4dzcWoBR6kB/view")
    }

    return (
        <Card fluid id="resAndContactCard">
            <Row>
                <Col sm="6">
                    <Button onClick={contactMe} variant="info" className="resAndContactBtn">Contact Me!</Button>
                </Col>
                <Col sm="6">
                    <Button onClick={openResume} variant="info" className="resAndContactBtn">My Resume</Button>
                </Col>
            </Row>
        </Card>
    );
};

export default resumeAndContactCard;