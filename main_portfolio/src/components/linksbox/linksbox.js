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
            imgUrl: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
        },
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/sean-kirkpatrick/",
            imgUrl: "https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
        },
        {
            name: "Instagram",
            link: "https://www.instagram.com/skirkp18/",
            imgUrl: "https://instagram-brand.com/wp-content/uploads/2016/11/Instagram_AppIcon_Aug2017.png?w=300"
        },
        {
            name: "Twitter",
            link: "https://twitter.com/Skirkp18",
            imgUrl: "https://cdn.cms-twdigitalassets.com/content/dam/about-twitter/en/brand-toolkit/brand-download-img-1.jpg.twimg.2560.jpg"
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
                            <Col sm="3">
                        <LinkBtn site={site} key={site.name} id={site.name} />
                        </Col>
                        );
                    })}
                    </Row>
                </Container>
            </Card>
        );
    };
};

export default linksbox;