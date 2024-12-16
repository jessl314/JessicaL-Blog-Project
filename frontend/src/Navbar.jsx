import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/*
Navbar:
    - large screen: full form
     - small screens: nav bar will collapse into toggable menu
*/ 
function NavBar() {
    return (
        <Navbar expand="lg" className = "bg-body-tertiary fixed top w-100" style={{ margin: 0, padding: 0 }}>
            {/*fluid container helps navbar to expand entire width*/}
            <Container fluid className="w-100">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-center w-100">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About Me</Nav.Link>
                        {/*Projects Dropdown Component, each element is a project that I want to showcase */}
                        <NavDropdown title="Projects" id = "basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/Speepy">Speepy</NavDropdown.Item>
                            <NavDropdown.Item href="#Grin">Grin</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;