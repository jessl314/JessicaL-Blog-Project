import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button } from 'react-bootstrap';
import { FaInstagram, FaGithub, FaLinkedin} from "react-icons/fa";
import '../styles/About.scss';

// buttons component for the about me page, specifically, when each button is clicked, the corresponding social media/github page should open in a new tab

const SocialButtons = () => {
    return (
        <>
        {/* when hovering over the button, the website name should show up */}
        {/* Instagram button */}
            <a href ="https://www.instagram.com/chamomiletea314/" target="_blank" rel="noopener noreferrer" title="Instagram">
                <Button className="rounded-circle social-button custom-second-color">
                <FaInstagram size={64} color="black"/>
                </Button>
            </a>
        {/* Linkedin button */}
            <a href ="https://www.linkedin.com/in/jessica-liao-089359244" target="_blank" rel="noopener noreferrer" title="Linkedin">
                <Button variant="light" className="rounded-circle social-button custom-second-color">
                <FaLinkedin size={64} color="black"/>
                </Button>
            </a>
        {/* Github button */}
            <a href ="https://github.com/jessl314" target="_blank" rel="noopener noreferrer" title="Github">
                <Button variant="light" className="rounded-circle social-button custom-second-color">
                <FaGithub size={64} color="black"/>
                </Button>
            </a>
        </>
    );
};
export default SocialButtons;




// <FaInstagram />
// <FaGithub />
// <FaLinkedin />
// https://github.com/jessl314
// https://www.linkedin.com/in/jessica-liao-089359244
// https://www.instagram.com/chamomiletea314/ 


