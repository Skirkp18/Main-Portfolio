import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import mainImg from "./mainImg.JPG";
import "./style.css";

class profileimgcard extends React.Component {

    render() {
        return (<Card id="profileCard">
            <Row>
                <Col lg="12">
                    <img src={mainImg} id="mainImg" alt="Sean Kirkpatrick" />
                </Col>
            </Row>
        </Card>
        );
    };
};

export default profileimgcard;