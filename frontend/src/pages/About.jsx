import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import JessicaImage from '../assets/JessicaHeadShot.jpg'
import Resume from '../assets/Liao,Jessica_Resume.pdf'

function About () {
    return (
        // <img src={JessicaImage} alt="A headshot of Jessica wearing a red jacket and a yellow shirt." className="img-fluid thumbnail"/>
        <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={JessicaImage} />
            <Card.Body>
                <Card.Title>Jessica Liao</Card.Title>
                <Card.Text>
                    Click below to view my current resume and learn more about my professional journey!
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Link href={Resume} target="_blank" rel="noopener noreferrer">View Resume</Card.Link>
            </Card.Body>
        </Card>
    )

}

export default About