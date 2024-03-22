import React from 'react'
import Img1 from '../Images/munamii.jpg'
import Img2 from '../Images/aworldofbook.png'
import {Container, Row, Col, Button, label,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Works() {
  return (
    <container className="text-center my-5">
        <Row>
            <h3>My latest Projects</h3>
        </Row>
        <Row>
            <Col >
            <div class="mb-2">
           <a href='https://karinastrand.github.io/munamii-react/' target='_blank'  >
                <img src={Img1} alt="munamii" style={{width:300}}/>
           </a>
           </div>
           <div>
           <a href='https://karinastrand.github.io/aworldofbooks/' target='_blank'  >
                <img src={Img2} alt="aworldofbooks" style={{width:300}}/>
           </a>
           </div>
           </Col>
           <Col>
           </Col>
        </Row>
    </container>
  );
}