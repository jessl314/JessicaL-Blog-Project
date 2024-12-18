import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col } from "react-bootstrap"
import Image from 'react-bootstrap/Image'
import JessicaImage from '../assets/JessicaHeadShot.jpg'
import SocialButtons from './AboutSocial';
import "./About.scss"

function About () {
    return (
    // using Bootstrap Grid system to align my picture card and about me in one row and my social media/github in another
    <Container className="mt-5">
      <Row className="align-items-start justify-content-center">
          <Col xs={12} md={6} className="d-flex justify-content-center mb-4">
           {/* card component, contains my picture and a link to my resume */}
           <Image roundedCircle fluid src={JessicaImage} alt="me" width="60%" height = "60%"/>
          </Col>
          {/* my elevator pitch/about me */}
          <Col xs={12} md={6}>
          <h2 className="mb-4">About Me</h2>
          <p>Hello World! My name is Jessica Liao and I am a current second-year Computer Science Major at UCI. I love to learn and have become proficient in Python, C++ and most recently React! Outside of classes, I have collaborated on a project in Video Game Development Club, I am a Logistics Organizer for Venushacks and so much more! </p>
          <p>For fun, I like to read, watch tv, crochet and try new foods (I also really like boba!) </p>
          </Col>
      </Row>
      <SocialButtons/>
    </Container>
    )
}

export default About