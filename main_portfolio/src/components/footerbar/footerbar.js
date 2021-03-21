import React from "react";
import { Container, Navbar } from "react-bootstrap"
import "./style.css";

function footerbar() {
    return(
        <Navbar fixed="bottom" expand="lg" variant="dark" bg="dark">
            <Container id="footerTxtBox">
                <Navbar.Text id="footerTxt">© Sean Kirkpatrick 2021</Navbar.Text>
            </Container>
        </Navbar>
    );
};

export default footerbar;