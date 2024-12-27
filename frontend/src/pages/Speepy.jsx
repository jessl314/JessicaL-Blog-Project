import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import SpeepySlides from './SpeepySlides';
import { Container, Row, Col, Button } from "react-bootstrap"
import SpeepyTitle from "../assets/speepy-title-screen.png"
import SpeepyBedroom from "../assets/background1.png"
import "./Speepy.scss"

function Speepy () {
    return (
        <Container className="mt-5 speepy-container">
            <Row className="align-items-start justify-content-start">
                <Col xs={8} md={4} className="d-flex justify-content-start mb-4 ms-0">
                   <div className="under-title">
                    <h1 className="speepy-title">Speepy</h1>
                    <p> Check out <a href="https://itch.io/jam/vgdc-at-uci-fall-2024-games/rate/3151721" target="_blank" rel="noopener noreferrer" className="styled-link">Speepy</a> here!</p>
                   <img src={SpeepyTitle}/>
                   <p>title screen of speepy</p>
                   <img src={SpeepyBedroom}/>
                   <p>main game screen</p>
                    </div>
                </Col>
                <Col xs={8} md={8} className="d-flex mb-4 ms-0">
                   <div className="premise-contribute"> 
                   <h4>Premise and Contribution</h4>
                   <p>  Speepy is a rhythm game that was created as part of UCI's Video Game Development Club Fall Quarter Pitch Projects. I was one of six programmers and contributed the most to the health system and connecting that to the beats.</p>
                   <h4>What I Learned</h4>
                    <p> The main skills that I took away from this expierence were Github and teamwork. For Github, This was my first time ever working with merging and branches and I learned a lot about what it means to work on my own branch along with how that interconnects with the finished product. This process had a lot of ups and downs involving frustrating merge conflicts and also excitement at seeing our team's joint work coming to life. </p>
                    <p> This was also my first time ever contributing to a project that has lasted more than a two weeks (previously I've only ever participated in high school social studies group projects and a hackathon). This along with the fact that I would get to work with non-technical people such as artists, designers, audio people etc. was actually a major part of why I wanted to join such an experience in the first place. I learned a lot about how to communicate what I have been doing in a way so that others can understand, how to self learn, and also to integrate multiple types of work together.
                    </p>
                    <SpeepySlides/>
                    <p>Slides from VGDC's showcase night!</p>
                    </div>
                </Col>

            </Row>
            {/* <Row className="align-items-start justify-content-start">
                
            </Row> */}
            
        </Container>
    )  

}

export default Speepy

// "https://itch.io/jam/vgdc-at-uci-fall-2024-games/rate/3151721"