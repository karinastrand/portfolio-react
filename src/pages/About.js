import React from "react";
import {Container, Row, Col, Button, label,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Img1 from '../Images/vintergäck.jpg';
import Img3 from '../Images/me.jpg';
import cert from '../Images/certificateOfProfession.pdf'

export default function About() {
  return ( 
    <container className="text-center my-5">
      <Row >
      <Col style={{textAlign:"left"}}>
        <Row >
          <Form.Text style={{fontWeight:"bold"}} >Nice to meet you</Form.Text>
         <h4>Welcome!</h4>
       
          
        </Row>
        <Row >
          <img src={Img3} alt="me" style={{borderRadius: 50, width:200}}/>
        </Row>
        <Row>
          <p>
              My name is Karin Åstrand and i live in south of Sweden. I have worked as a 
              developer all my life as an employee on a company working with systems for documenting.
              I love all forms of programming and am always looking for new things to learn and test.

          </p>
        </Row>
        <Row xl={3}>
          <Col>
          <a href="https://karinastrand.github.io/cv_react/" target="_blank">
          <Button >Download CV</Button>
          </a>
          </Col>
          <Col>
          <a href={cert} target="_blank">
          <Button >Download Certificate of Profession</Button>
          </a>
          </Col>
        </Row>
      </Col>
      <Col>
        <img src={Img1} alt="photo" style={{width: 500}}>

        </img>
      </Col>
      </Row>
    </container>
  );
}
