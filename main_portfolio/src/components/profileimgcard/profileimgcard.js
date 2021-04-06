import React from "react";
import { Container, Row, Col, ResponsiveEmbed } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";
import LinksBox from "../linksbox/linksbox";
import ResumeAndContactCard from "../resumeandcontact/resumeandcontact";
import mainImg from "./mainImg.JPG";
import "./style.css";

class profileimgcard extends React.Component {


    render() {
        return (<Card id="profileCard">
            <Row>
                <Col sm="12">
                    <img src={mainImg} id="mainImg" alt="Sean Kirkpatrick" />
                </Col>
                <Col sm="12">
                    <LinksBox />
                </Col>
                <Col sm="12">
                    <ResumeAndContactCard />
                </Col>
            </Row>
        </Card>
        );
    };
};

export default profileimgcard;