import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col } from "react-bootstrap"
import JessicaImage from '../assets/JessicaHeadShot.jpg'
import './About.css'

function About () {
    return (
    <Container className="my-section">
      <Row className="justify-content-center">
        <div className="card-container">
          <Col xs={12} md={6}>
            <Card className="card">
              <Card.Img variant="top" src={JessicaImage} />
              <Card.Body>
                <Card.Title>Jessica Liao</Card.Title>
                <Card.Text>
                    Click below to view my current resume and learn more about my professional journey!
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href="/Liao,Jessica_Resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </div>
       
        <div className="about-me">
          <Col xs={12} md={6}>
          <h2 className="about-me-title">About Me</h2>
          <p>Hello World! My name is Jessica Liao and I am a current second-year Computer Science Major at UCI. I love to learn and have become proficient in Python, C++ and most recently React! Outside of classes, I have collaborated on a project in Video Game Development Club, I am a Logistics Organizer for Venushacks and so much more! </p>
          <p>For fun, I like to read, watch tv, crochet and try new foods (I also really like boba!) </p>
          </Col>
        </div>
      </Row>
    </Container>
    )

}

export default About