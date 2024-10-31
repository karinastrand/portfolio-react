import React from 'react'
import {Container, Row, Col, Button, label,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Img1 from '../Images/ros.jpg';

import {Envelope} from 'react-bootstrap-icons';
export default function Contact() {
  return (
    <container className="text-center my-5">
    <Row >
    <Col style={{textAlign:"left"}}>
      <Row >
      
       <h4>Contact me </h4>
      </Row>
      <Row>
      <h4>Karin Åstrand </h4>
      </Row>
      <Row >
        <Col>
            <Envelope />
            <span> karinastrand@yahoo.se</span>
        </Col>
        </Row>
    </Col>
    <Col>
      <img src={Img1} alt="photo" style={{width: 500}}>

      </img>
    </Col>
    </Row>
  </container>
  )
}
