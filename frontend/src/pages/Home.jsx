import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Home.scss";
import {Link} from "react-router-dom";
import {Row, Col, Container} from "react-bootstrap";

// displays my website title and two sections. the first being links to my project pages and the second being links to my other pages
function Home () {
    return (
        <Container className="mt-5">
             <Row className="justify-content-center">
                <Col xs={8} md={8} className="d-flex justify-content-center mb-4 ms-0">
                <div>
                    <h1 className="text-center">Welcome to Jessica's Portfolio Site!</h1>
                    <h4 className="text-center">Here are some quick access links!</h4>
                    <h5 className="text-center">Projects!</h5>
                    <ul className="p-3 rounded intro-block mx-auto">
                        <li><Link to="/Speepy">Speepy</Link></li>
                        <li><Link to="/Solace">Solace</Link></li>
                    </ul>
                <div>
                    <h5 className="text-center">Other Pages!</h5>
                </div>
                    <ul className="p-3 rounded intro-block mx-auto">
                        <li><Link to="/about">About Me</Link></li>
                        {/* <li><Link to="/DisplayImage">Cat!</Link></li> */}
                    </ul>
                </div>
                </Col>
             </Row>
        </Container> 
    )
}

export default Home;