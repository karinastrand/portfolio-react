import React from 'react'
import Img1 from '../Images/munamii.jpg'
import Img2 from '../Images/aworldofbook.png'
import Img3 from '../Images/SiasGarden.jpg'
import Img4 from '../Images/SCS.png'
import Img5 from '../Images/nectar.png'
import {Container, Row, Col, Button, label,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Works() {
  return (
   
    <Container>
        <div className="mt-3 mb-4">
            <div>
              <h3>My latest Projects (click on the images)</h3>
            </div>
      
            <Row>
            <Col className="mt-5 mb-5">
            <p>This is were i used to work.</p>
                    <a href='https://nectar.se' target='_blank'  >
                          <img src={Img5} alt="Nectar" style={{width:400}}/>
                    </a>
                
                </Col>
              <Col className="mt-5 mb-5">
              <p>My examens project in Lexicon</p>
                    <a href='https://siasgarden.azurewebsites.net/' target='_blank'  >
                          <img src={Img3} alt="SiasGarden" style={{width:400}}/>
                    </a>
                
                </Col>
                <Col className="mt-5 mb-5">
               
                <p>React project (Lexicon)</p>
                    <a href='https://karinastrand.github.io/munamii-react/' target='_blank'  >
                          <img src={Img1} alt="munamii" style={{width:400}}/>
                    </a>
                </Col>
              </Row>
              <Row>
                
              <Col className="mt-5 mb-5">
              <p>Group project (Lexicon)</p>
                  <a href='https://karinastrand.github.io/aworldofbooks/' target='_blank'  >
                        <img src={Img2} alt="aworldofbooks" style={{width:400}}/>
                  </a>
              </Col>
              <Col className="mt-5 mb-5">
              <p>We are working on a bookingsite for Scandinavian Certification Services right now</p>
                  <a href='https://scsweb2.azurewebsites.net/' target='_blank'  >
                        <img src={Img4} alt="scs" style={{width:400}}/>
                  </a>
              </Col>
              <Col className="mt-5 mb-5">
                  <h3>Udemy</h3>
                  <ul>
                   
                    <li>
                    <a href='https://www.udemy.com/course/blazor-deep-dive-from-beginner-to-advanced'>
                    Blazor Deep Dive - From Beginner to Advanced in .NET 8
                    </a>
                    </li>
                    <li>
                    <a href='https://www.udemy.com/course/introduction-to-aspnet-core-x'>
                    Blazor - The Complete Guide [.NET 9] [2024] [E-commerce]

                    </a>
                    </li>
                    <li>
                    <a href='https://www.udemy.com/course/asp-net-core'>
                    Clean Architecture in .NET Core MVC[.NET 8] - Complete Guide
                    </a>
                    </li>
                    <li>
                    <a href='https://www.udemy.com/course/complete-aspnet-core-21-course'>
                    .NET Core MVC - The Complete Guide 2024 [E-commerce] [.NET8]

                    </a>
                    </li>
                    <li>
                    <a href='https://www.udemy.com/course/restful-api-with-asp-dot-net-core-web-api'>
                    RESTful Web API - The Complete Guide (.NET7 API) Part 1

                    </a>
                    </li>
                    <li>
                    <a href='https://www.udemy.com/course/net-core-microservices-the-complete-guide-net-6-mvc'>
                    .NET Core Microservices - The Complete Guide (.NET 8 MVC)
                    </a>
                    </li>
                    <li>
                    <a href='https://www.udemy.com/course/appsettings-and-secrets-in-aspnet-core'>
                    AppSettings and Secrets in ASP.NET Core

                    </a>
                    </li>
                    <li>
                      <p>Right now i am working on this course:</p>
                    <a href='https://www.udemy.com/course/learn-blazor-while-creating-an-inventory-management-system'>
                    Master Blazor: Build Inventory Management System in .NET 8
                    </a>
                    </li>
                  </ul>
              </Col>
              
           </Row>
           
           </div>  
    </Container>
  );
}