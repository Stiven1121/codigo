import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../logo.svg';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter as Router, Route, Link, Routes } 
from 'react-router-dom';

import '../hojas_de_estilos/Menu.css';





function Menu() {
  return (
    <>
      
    
      <Navbar bg="primary" data-bs-theme="dark" expand="lg">
        <Container >
          <Link className="navbar-brand" to="/"><img className="logo" width="50px" src={logo} /></Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
            <Link className="nav-link navbar-brand " to="/login">Login</Link>
            <Link className="nav-link navbar-brand " to="/quienes-somos">Quienes Somos</Link>
            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
      
    </>
  );
}

export default Menu;