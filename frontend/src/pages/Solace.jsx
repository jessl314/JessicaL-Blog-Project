//https://devpost.com/software/solace-kysqua
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from "react-bootstrap";
import SolaceLogo from "../assets/solace-logo.png";
import SolaceScreen from "../assets/solace-example.png";
import "../styles/Solace.scss"

function Solace() {
    return (
        <Container className="mt-5">
            <Row className="align-items-start justify-content-start">
                <Col xs={4} md={4} className="d-flex justify-content-start mb-1 ms-n6">
                    <div>
                    <h1>Solace</h1>
                    <p> Check out <a href="https://devpost.com/software/solace-kysqua" target="_blank" rel="noopener noreferrer" className="styled-link">Solace</a> here!</p>
                    <div className="sollogo">
                    <img src={SolaceLogo} height="100%" width = "100%"/>
                    <p>the logo for our application</p>
                    </div>
                    </div>
                </Col>
                <Col xs={8} md={8} className="d-flex justify-content-start mb-4 ms-0">
                    <div>
                    <div className="learnText">
                    <h3>Premise and Contribution</h3>
                    <p>Solace is an application that uses AI to interact with a user as they journal about their thoughts. This project was created at UCI's Venushacks, a hackathon co-hosted by WICS and Hack@UCI. I contributed to the front-end development</p>

                    <h3>What I learned</h3>

                    <p>This was my first time ever using a framework such as React and using languages such as Typescript, CSS, and Javascript. Thus, predictably, I was not able to contribute as much. However, I did learn a lot about how to approach self-learning something new and also teamwork with another person! At the end of the hackathon, I think my interpersonal skills grew a lot as this was also a learning experience on setting realistic goals, working under pressure, and working as a team. </p>
                    <p>Since the inspiration for this project came from another team member, I also learned a lot about cognitive behavior, and emotions. In relation to AI, this allowed me to learn more about concepts like prompt engineering and emotion recognition.</p>

                    </div>
                    <div className="solentry">
                    <p>example entry</p>
                    <img src={SolaceScreen} height="100%" width="100%"/>
                    </div>
                    </div>
                    
 
                </Col>
            </Row>
        </Container>
    )
        
    
}

export default Solace;