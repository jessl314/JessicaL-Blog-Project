import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button } from 'react-bootstrap';
import { FaInstagram, FaGithub, FaLinkedin} from "react-icons/fa";

const SocialButtons = () => {
    return (
        <Row className="justify-content-center mt-4">
            <Col xs={4} md={2} className="d-flex justify-content-center mb-2">
                <a href ="https://www.instagram.com/chamomiletea314/" target="_blank" rel="noopener noreferrer">
                    <Button variant="light" className="rounded-circle">
                    <FaInstagram size={24} color="black"/>
                    </Button>
                </a>
            </Col>
            <Col xs={4} md={2} className="d-flex justify-content-center mb-2">
                <a href ="https://www.linkedin.com/in/jessica-liao-089359244" target="_blank" rel="noopener noreferrer">
                    <Button variant="light" className="rounded-circle">
                    <FaLinkedin size={24} color="black"/>
                    </Button>
                </a>
            </Col>
            <Col xs={4} md={2} className="d-flex justify-content-center mb-2">
                <a href ="https://github.com/jessl314" target="_blank" rel="noopener noreferrer">
                    <Button variant="light" className="rounded-circle">
                    <FaGithub size={24} color="black"/>
                    </Button>
                </a>
            </Col>
        </Row>
        
    );
};
export default SocialButtons




// <FaInstagram />
// <FaGithub />
// <FaLinkedin />
// https://github.com/jessl314
// https://www.linkedin.com/in/jessica-liao-089359244
// https://www.instagram.com/chamomiletea314/ 

