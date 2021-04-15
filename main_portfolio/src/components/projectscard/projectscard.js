import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";
import Project from "../project/project";
import "./style.css";

function projectsCard() {

    const projects = [
        {
            name: "test",
            img: "test",
            link: "test",
            repo: "test"
        },
        {
            name: "test",
            img: "test",
            link: "test",
            repo: "test"
        },
        {
            name: "test",
            img: "test",
            link: "test",
            repo: "test"
        },
        {
            name: "test",
            img: "test",
            link: "test",
            repo: "test"
        },
        {
            name: "test",
            img: "test",
            link: "test",
            repo: "test"
        },
        {
            name: "test",
            img: "test",
            link: "test",
            repo: "test"
        }
    ]
    return (<Card id="projectsBox">
            <Container fluid>
                <Row>
                    <Col sm="12">
                        <Card id="projectsTitleBox">
                            <p id="projectsTitleTxt">My Projects</p>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    {projects.map((project) => {
                        return (
                            <Col sm="4">
                                <Project project={project} />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </Card>
    );
};

export default projectsCard;