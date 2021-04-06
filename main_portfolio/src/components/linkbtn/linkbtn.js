import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";
import "./style.css";

class linkBtn extends React.Component {
    render(props) {
        // console.log(this.props.site);
        const linkName = this.props.site.name;
        const link = this.props.site.link;
        const imgUrl = this.props.site.imgUrl;
        return (
            <Button variant="light" className="linkbtn" href={link}>
                    <img className="linkimg" src={imgUrl} alt={linkName} />
                    </Button>
        )
    }
};

export default linkBtn