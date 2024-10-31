import React from "react";
import {Container, Row, Col, Button, label,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Img1 from '../Images/vintergäck.jpg';
import Img3 from '../Images/me.png';
import cert from '../Images/certificateOfProfession.pdf'
import Img2 from '../Images/vintergäck.jpg'; 

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
              developer all my life as an employee on a company working with systems for documentation, Nectar Systems AB, https://www.nectar.se/ for 24 years.
              I love all forms of programming and am always looking for new things to learn and test. I have spent the last year on learning as much as possible about web development, both backend and frontend even if backend always will be my favorite. Much of the time i have worked on learning asp.net core mvc but recently i discovered blazor which now is my favorit. My education i have got on Lexicon in Malmö and i am so grateful to my teacher Ömer Sözcü for all the inspirating lectures and all the good links for deeper studies.
              I do my APL now and we are a team working on developing a booking system for Scandinavian Certification Services AB.
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
