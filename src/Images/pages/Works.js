import React from 'react'
import Img1 from '../Images/munamii.jpg'

import {Container, Row, Col, Button, label,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Works() {
  return (
    <container className="text-center my-5">
        <Row>
            <h3>My latest Projects</h3>
        </Row>
        <Row>
            <Col>
           <a href='https://karinastrand.github.io/munamii-react/' target='_blank'  >
                <img src={Img1} alt="munamii" style={{width:300}}/>
           </a>
           </Col>
           <Col>
           </Col>
        </Row>
    </container>
  );
}