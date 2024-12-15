import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

/*
Navbar:
    - large screen: full form
     - small screens: nav bar will collapse into toggable menu
*/ 
function NavBar() {
    return (
        <Navbar expand="lg" className = "bg-body-tertiary w-100">
            {/*fluid container helps navbar to expand entire width*/}
            <Container fluid>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-center w-100">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About Me</Nav.Link>
                        {/*Projects Dropdown Component, each element is a project that I want to showcase */}
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

export default NavBar;