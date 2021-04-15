import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";
import "./style.css";

function project(props) {
    const name = props.project.name;
    return (
        <Card>
            <Row>
                <Col sm="12">
                <h1>{name}</h1>
                </Col>
            </Row>
        </Card>
    );
};

export default project;