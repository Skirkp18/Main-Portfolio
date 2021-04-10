import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import ProfileImgCard from "../profileimgcard/profileimgcard";
import SkillsCard from "../skillscard/skillscard";
import "./style.css";


class aboutme extends React.Component {
    render() {
        return (<Card id="aboutmeBox">
            <Container fluid>
            <Row>
                <Col sm="12">
                    <Card id="aboutmeTitleBox">
                        <p id="aboutmeTitleTxt">Who Am I?</p>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col sm="3">
                    <ProfileImgCard />
                </Col>
                <Col sm="9">
                    <Card id="aboutmeTxtBox">
                        <p id="aboutmeInfoTxt">My name is Sean Kirkpatrick. I currently work for Apple and am training to be 
                        a full stack web developer. I graduated from Marist College with a B.S. in Business Administration with an Emphasis 
                        in Marketing in 2015. Since then, I have worked as both a consumer electronic sales associate as well as a supervisor. 
                        I have over five plus years of expirence using and troubleshooting mobile devices such as cell phones and computers. I am proficent 
                        with many different operating systems such as Android, iOS, MacOS, and Windows, since I use them daily.</p>
                       <br />
                        <p id="aboutmeInfoTxt">During my free time I enjoy watching movies and traveling to new places. I am also an avid snowboarder
                         and take many trips to different mountains in the winter. My girlfriend and I love to cook different
                          kinds of foods and we post a lot of the photos to our Instagram page @CookinCouples. I also enjoy keeping up with the 
                          latest tech as well as the companies that make them and the current market conditions.</p>
                    </Card>
                <SkillsCard />
                </Col>
            </Row>
            </Container>
        </Card>);
    }
};

export default aboutme;