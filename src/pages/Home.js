import React from 'react'
import Img3 from '../Images/me.png';
import {Container, Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Envelope} from 'react-bootstrap-icons';
import cert from '../Images/certificateOfProfession.pdf'
import Img2 from '../Images/vintergäck.jpg'; 
export default function Home() {
  return (
   
    <container className="text-center my-5">
     <Row>
        <Col>
            <Row>
                <h1>Portfolio for <br/>Karin Åstrand</h1>
            </Row>
            <Row>
            <Col>
                    <h3>Programmer</h3>
                    https://github.com/karinastrand
            </Col>
            </Row>
            <Row>
                <Col>
                    <Envelope />
                    karinastrand@yahoo.se
                </Col>
              
            </Row>
        </Col>
        <Col >
           
            <Row>
                <img src={Img3} alt='me' style={{width:200, borderRadius:40}} />
            </Row>
            
            
        </Col>
     </Row>
     <hr></hr>
     <div style={{textAlign:"left", margin:"20px"}}>

     
        <div >
        <p style={{textAlign:"left"}}>
              My name is Karin Åstrand and i live in south of Sweden. I have worked as a 
              developer all my life as an employee on a company working with systems for documentation, Nectar Systems AB, https://www.nectar.se/ for 24 years.
              I love all forms of programming and am always looking for new things to learn and test. I have spent the last year on learning as much as possible about web development, both backend and frontend even if backend always will be my favorite. Much of the time i have worked on learning asp.net core mvc but recently i discovered blazor which now is my favorit. My education i have got on Lexicon in Malmö and i am so grateful to my teacher Ömer Sözcü for all the inspirating lectures and all the good links for deeper studies.
              I do my APL now and we are a team working on developing a booking system for Scandinavian Certification Services AB.
        </p>
        </div>
        <Row >
          <Col >
          <div>
          <a href="https://karinastrand.github.io/cv_react/" target="_blank"  >
          <Button >Download CV</Button> 
          </a>
          </div>
         <br/>
          <a href={cert} target="_blank">
          <Button >Download Certificate of Profession</Button>
          </a>
          </Col>
          <div style={{textAlign:"right"}}>
        <img src={Img2} alt='flower' style={{width:"700px", borderRadius:40}} />
        </div>
        </Row>
        </div>
       
        
    </container>
    
  )
}
