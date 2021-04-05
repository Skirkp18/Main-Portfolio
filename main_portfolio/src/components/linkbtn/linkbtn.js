import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";
import "./style.css";

class linkBtn extends React.Component {
    render(props) {
        // console.log(this.props.site);
        const linkName = this.props.site.name;
        const link = this.props.site.link;
        return (
            <Col lg="4">
                <Button href={link}>{linkName}</Button>
            </Col>
        )
    }
};

export default linkBtn