import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

/*
Navbar:
    - large screen: full form
     - small screens: nav bar will collapse into toggable menu
*/ 
function NavBar() {
    return (
        <Navbar expand="lg" className = "bg-body-tertiary">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-center">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About Me</Nav.Link>
                        <NavDropdown title="Projects" id = "basic-nav-dropdown">
                            <NavDropdown.Item href="/Speepy"></NavDropdown.Item>
                            <NavDropdown.Item href="/Grin"></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default NavBar