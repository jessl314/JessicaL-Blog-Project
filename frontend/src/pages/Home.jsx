import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Home.scss";
import {Link} from "react-router-dom";
import {Row, Col, Container} from "react-bootstrap";

function Home () {
    return (
        <Container>
             <Row className="justify-content-center">
                <Col xs={8} md={8} className="d-flex justify-content-center mb-4 ms-0">
                <div>
                {/* get rid of Hello World on my about me page */}
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
                <li><Link to="/DisplayImage">Cat!</Link></li>
                 </ul>

        {/* fun facts?? a most recent achievement box?? */}

            </div>
                </Col>


             </Row>
        

        </Container>
      
    )

}

export default Home

// keep the title but instead to a list in a box with my page links 