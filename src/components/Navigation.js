import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Img from '../Images/logo.jpg'

export default function Navigation() {
  return (
    <Navbar bg="primary-subtle"  expand="lg" classname="bg-body-tertiary text-bg-white">
        <Container>
            <Navbar.Brand href="#home">
              <img src={Img} alt='logo' style={{width:40}} class="rounded-pill"></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='me-auto'>
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/about">About me</Nav.Link>
                    <Nav.Link as={NavLink} to="/works">Works</Nav.Link>
                    <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}
