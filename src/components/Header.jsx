import React from "react";
import './styles_components/Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './styles_components/img/logo3.png'
function Header(){
    return(
<Navbar id="navbar" expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
       
        <Navbar.Brand href="#home"><img src={logo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about">A Propos de moi</Nav.Link>
            <Nav.Link href="#PartiePortfolio">Portfolio</Nav.Link>
            <Nav.Link href="#Service">Services</Nav.Link>
            <Nav.Link href="#partie-formation">Formation</Nav.Link>
            <Nav.Link href="#CV">CV</Nav.Link>
            <Nav.Link href="#formulaire-contact">Contact</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}
export default Header;