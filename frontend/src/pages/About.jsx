import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import JessicaImage from '../assets/JessicaHeadShot.jpg';
import SocialButtons from './AboutSocial';
import "../styles/About.scss";

// displays the about me page
function About () {
    return (
    // uses Bootstrip Grid system
      <Container className="mt-5">
        <Row className="align-items-start justify-content-center">
          {/* this column is for my picture which is in a oval shaped image. It will be left of the center in web-view */}
          <Col xs={12} md={6} className="d-flex justify-content-center mb-4">
            {/* my picture */}
            <Image roundedCircle fluid src={JessicaImage} alt="A headshot of Jessica wearing a yellow shirt and red jacket" width="60%" height = "60%"/>
          </Col>
          {/* my elevator pitch/about me. it will be right of center in web-view and stacked under my picture in mobile view*/}
          <Col xs={12} md={6}>
            <h2 className="mb-4">About Me</h2>
            <p>Hello World! My name is Jessica Liao and I am a current second-year Computer Science Major at UCI. I love to learn and have become proficient in Python, C++ and most recently React! Outside of classes, I have collaborated on a project in Video Game Development Club, I am a Logistics Organizer for Venushacks and so much more! </p>
            <p>For fun, I like to read, watch tv, crochet and try new foods (I also really like boba!) </p>
            <SocialButtons/>
           {/* this component (from ./AboutSocial) will be under my elevator pitch/about me. all three buttons will be horizontally next to each other and as a unit will be stacked under my elevator pitch in mobile-view */}
          </Col>
        </Row>
      </Container>
    )
}

export default About;