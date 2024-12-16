import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import JessicaImage from '../assets/JessicaHeadShot.jpg'
import './About.css'

function About () {
    return (
    <div className="card-container">
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
    </div>
    )

}

export default About