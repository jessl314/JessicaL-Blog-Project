import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from "react-bootstrap"
import SpeepyTitle from "../assets/speepy-title-screen.png"
import SpeepyBedroom from "../assets/background1.png"
import "./Speepy.scss"

function Speepy () {
    return (
        <Container className="mt-5">
            <Row className="align-items-start justify-content-start">
                <Col xs={8} md={4} className="d-flex justify-content-start mb-4 ms-0">
                    <h1 className="speepy-title">Speepy</h1>
                    <p> Check out <a href="https://itch.io/jam/vgdc-at-uci-fall-2024-games/rate/3151721" target="_blank" rel="noopener noreferrer" className="styled-link">Speepy</a>here!</p>
                    {/* slide component + a little caption */}
                </Col>
                <Col xs={8} md={4} className="d-flex justify-content-start mb-4 ms-0">
                   <h3>Premise and Contribution</h3>
                   <p>Speepy is a rhythm game that was created as part of UCI's Video Game Development Club Fall Quarter Pitch Projects. I was one of six programmers and contributed the most to the health system and connecting that to the beats.</p>
                   <h3>What I Learned</h3>
                   <p>Technical: </p>
                    <p> - Github! This was my first time ever working with merging and branches (thus it was also my first time using fetch/pull.). I learned a lot about what it means to work on my own branch and also how that interconnects with what ends up on the finished product. This process had a lot of ups and downs involving frustrating merge conflicts and also excitement at seeing a feature that works correctly and our team's joint work coming to life. Overall, I'm really glad that I got this experience as Github is such an integral part of software engineering.</p>
                    <p>- I also learned about Unity and a little bit of C#. This software that was entirely new to me and using it improved my self-learning, problem-solving, and trouble-shooting skills as each new feature that I wanted to add, no matter how small required me to go search online or ask for help. It was also really fun to see how changing a couple settings on Unity can affect what we see on screen during gameplay</p>
                    <p>Non-technical</p>
                    <p>- teamwork: this was my first time ever contributing to a project that has lasted more than a two weeks (previously I've only ever participated in high school social studies group projects). This along with the fact that I would get to work with non-technical people such as artists, designers, audio people etc. was actually a major part of why I wanted to join such an experience in the first place. I learned a lot about how to communicate what I have been doing in a way so that others can understand as well as how to integrate what others have created such as the background and sprites (moving components such as the character that flips in the bed). While I know that this is what could be called a "short" project it definitely gave me insight into what it's like to work towards a common goal in a group setting.
                    </p>

                </Col>
            </Row>
            <Row className="align-items-start justify-content-start">
            <img src={SpeepyTitle}/>
            <p>title screen of speepy</p>
            </Row>
            <Row className="align-items-start justify-content-start">
            <img src={SpeepyBedroom}/>
            <p>main game screen</p>
            </Row>
            
            
        </Container>
    )  

}

export default Speepy

// "https://itch.io/jam/vgdc-at-uci-fall-2024-games/rate/3151721"