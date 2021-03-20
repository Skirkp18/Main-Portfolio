import React from "react";
import { Container, Navbar } from "react-bootstrap"
import "./style.css";

function navBar() {
    return (
        <Navbar expand="lg" variant="dark" bg="dark">
            <Container>
                <Navbar.Brand href="#" id="navbarTxt">Sean Kirkpatrick</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text id="navbarTxt"><a href="/projects">Projects</a></Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};


export default navBar;