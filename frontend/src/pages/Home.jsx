import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Home.scss";
import {Link} from "react-router-dom";
import {Row, Col, Container} from "react-bootstrap";

function Home () {
    return (
        <Container>
        <div>
        {/* get rid of Hello World on my about me page */}
        <h1>Welcome to Jessica's Corner!</h1>
        <h5>Here are some quick access links!</h5>
        <ul className="p-3 rounded intro-block">
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/DisplayImage">Cat!</Link></li>
        </ul>
        <div>
        <h6>Projects!</h6>
        </div>
        <ul className="p-3 rounded intro-block">
        <li><Link to="/Speepy">Speepy</Link></li>
        <li><Link to="/Solace">Solace</Link></li>
        </ul>

        {/* fun facts?? a most recent achievement box?? */}

       </div>

        </Container>
      
    )

}

export default Home

// keep the title but instead to a list in a box with my page links 