import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "./style.css";

class skillscard extends React.Component {
    render() {
        return(
            <Card id="skillsCard">
                <Row>
                    <Col lg="4">
                        <Card style={{border: "0px", margin: "10px"}}>
                            <h3>Education:</h3>
                            <ul>
                                <li>Marist College</li>
                                <li>Columbia School of Engineering</li>
                            </ul>
                            <h3>Degrees and Certifications:</h3>
                            <ul>
                                <li>B.S. In Business Administration With A Marketing Emphasis</li>
                                <li>Full Stack Web Develoupment Certification</li>
                            </ul>
                        </Card>
                    </Col>
                    <Col lg="4">
                    <Card style={{border: "0px", margin: "10px"}}>
                            <h3>Skills:</h3>
                            <ul>
                                <li>Leadership</li>
                                <li>React</li>
                                <li>JSX</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                                <li>BootStrap by Twitter</li>
                                <li>JQuery</li>
                                <li>Customer Service</li>
                                <li>Presenting</li>
                                <li>Consumer Technology Sales</li>
                                <li>Retal Sales</li>
                            </ul>
                        </Card>
                    </Col>
                    <Col lg="4">
                    <Card style={{border: "0px", margin: "10px"}}>
                        <h3>Expirence:</h3>
                            <ul>
                                <li>Specalist - Apple Inc. (Current)</li>
                                <li>Mobile Supervisor - Best Buy (2018 - 2019)</li>
                                <li>Verzion Mobile Specalist - Best Buy (2016 - 2019)</li>
                                <li>Apple Master - Best Buy (2015 - 2016)</li>
                            </ul>
                            <h3>Achievements:</h3>
                            <ul>
                                <li>Best Buy Achievers Contest 2018</li>
                                <li>Dean's List</li>
                            </ul>
                        </Card>
                    </Col>
                </Row>
            </Card>
        );
    }
};

export default skillscard;