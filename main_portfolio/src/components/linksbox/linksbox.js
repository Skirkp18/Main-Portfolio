import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";
import "./style.css";

class linksbox extends React.Component {
    render() {
        return(
            <Card id="linksBoxCard">
                <Container id>
                    <Row>
                        <Col lg="4">
                        <Button id="linksBtn"><img id="linkImg" src="https://pngimg.com/uploads/github/github_PNG15.png" alt="GitHub"></img></Button>
                        </Col>
                        <Col lg="4">
                        <Button id="linksBtn"><img id="linkImg" src="https://pngimg.com/uploads/github/github_PNG15.png" alt="GitHub"></img></Button>
                        </Col>
                        <Col lg="4">
                        <Button id="linksBtn"><img id="linkImg" src="https://pngimg.com/uploads/github/github_PNG15.png" alt="GitHub"></img></Button>
                        </Col>
                    </Row>
                </Container>
            </Card>
        );
    };
};

export default linksbox;