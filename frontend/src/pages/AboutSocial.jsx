import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button } from 'react-bootstrap';
import { FaInstagram, FaGithub, FaLinkedin} from "react-icons/fa";
import './About.scss'

const SocialButtons = () => {
    return (
        <>
            <a href ="https://www.instagram.com/chamomiletea314/" target="_blank" rel="noopener noreferrer" title="Instagram">
                <Button variant="light" className="rounded-circle social-button">
                <FaInstagram size={64} color="black"/>
                </Button>
            </a>
            <a href ="https://www.linkedin.com/in/jessica-liao-089359244" target="_blank" rel="noopener noreferrer" title="Linkedin">
                <Button variant="light" className="rounded-circle social-button">
                <FaLinkedin size={64} color="black"/>
                </Button>
            </a>
            <a href ="https://github.com/jessl314" target="_blank" rel="noopener noreferrer" title="Github">
                <Button variant="light" className="rounded-circle social-button">
                <FaGithub size={64} color="black"/>
                </Button>
            </a>
        </>
    );
};
export default SocialButtons




// <FaInstagram />
// <FaGithub />
// <FaLinkedin />
// https://github.com/jessl314
// https://www.linkedin.com/in/jessica-liao-089359244
// https://www.instagram.com/chamomiletea314/ 


