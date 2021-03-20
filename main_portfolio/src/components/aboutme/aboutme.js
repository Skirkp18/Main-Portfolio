import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import "./style.css";


class aboutme extends React.Component {
    render() {
        return (<Container>
            <Row>
                <Col lg="12">
                    <div>
                        <h1>About Me!</h1>
                    </div>
                </Col>
            </Row>
        </Container>);
    }
};

export default aboutme;