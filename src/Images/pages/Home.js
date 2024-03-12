import React from 'react'
import Img1 from '../Images/vintergäck.jpg';
import Img2 from '../Images/vitsippa.jpg';
import Img3 from '../Images/me.jpg';
import {Container, Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Envelope} from 'react-bootstrap-icons';

export default function Home() {
  return (
   
    <container className="text-center my-5">
     <Row>
        <Col>
            <Row>
                <h1>My name is <br/>Karin Åstrand</h1>
            </Row>
            <Row>
            <Col>
                    <h3>Programmer</h3>
            </Col>
            </Row>
            <Row>
                <Col>
                    <Envelope />
                    karinmastrand@gmail.com
                </Col>
            </Row>
        </Col>
        <Col >
           
            <Row>
                <img src={Img3} alt='me' style={{width:200, borderRadius:40}} />
            </Row>
            
            
        </Col>
     </Row>
     
     
    </container>
    
  )
}
