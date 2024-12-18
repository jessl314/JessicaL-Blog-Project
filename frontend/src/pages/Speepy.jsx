import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap"
import "./Speepy.scss"

function Speepy () {
    return (
        <Container className="mt-5">
            <Row className="align-items-start justify-content-start">
                <Col xs={8} md={4} className="d-flex justify-content-start mb-4 ms-0">
                <h1 className="speepy-title">Speepy</h1>
                </Col>
            </Row>
            
        </Container>
    )  

}

export default Speepy