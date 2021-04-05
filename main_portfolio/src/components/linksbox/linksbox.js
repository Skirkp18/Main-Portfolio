import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";
import LinkBtn from "../linkbtn/linkbtn";
import "./style.css";

class linksbox extends React.Component {

    linksList = [
        {
            name: "GitHub",
            link: "https://github.com/Skirkp18",
            img: "Put Img Here!"
        },
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/sean-kirkpatrick/",
            img: "Put Img Here!"
        },
        {
            name: "Instagram",
            link: "https://www.instagram.com/skirkp18/",
            img: "Put Img Here!"
        },
        {
            name: "Twitter",
            link: "https://twitter.com/Skirkp18",
            img: "Put Img Here!"
        }
    ];

    render() {
        return(
            <Card id="linksBoxCard">
                <Container id>
                    <Row>
                    {this.linksList.map((site) => {
                        console.log(site.name);
                        return(
                        <LinkBtn site={site} key={site.name} id={site.name} />
                        );
                    })}
                    </Row>
                </Container>
            </Card>
        );
    };
};

export default linksbox;