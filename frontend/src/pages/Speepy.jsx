import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from "react-bootstrap"
import "./Speepy.scss"

function Speepy () {
    return (
        <Container className="mt-5">
            <Row className="align-items-start justify-content-start">
                <Col xs={8} md={4} className="d-flex justify-content-start mb-4 ms-0">
                    <h1 className="speepy-title">Speepy</h1>
                    <p> Check out <a href="https://itch.io/jam/vgdc-at-uci-fall-2024-games/rate/3151721" target="_blank" rel="noopener noreferrer" className="styled-link">hackathon submission</a> for XYZ Hackathon.
</p>
                   
                    
                </Col>
            </Row>
            
        </Container>
    )  

}

export default Speepy

// "https://itch.io/jam/vgdc-at-uci-fall-2024-games/rate/3151721"