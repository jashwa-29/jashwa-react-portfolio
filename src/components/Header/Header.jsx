import React from 'react'
import './Header.css';
import { Link } from 'react-scroll';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <div className='header'>
      {/* <div className='container'>
        <div className='head-flex'>
        <div className='header-logo'>
       <h4>JASHWA</h4>
      </div>
      <div className='header-nav'>
        <Link to="hero" smooth={true} duration={100}><p>HOME</p></Link>
        <Link to="about" smooth={true} duration={100}><p>ABOUT</p></Link>
        <Link to="project" smooth={true} duration={100}><p>PROJECTS</p></Link>
        <Link to="contact" smooth={true} duration={100}><p>CONTACT</p></Link>
        
      </div>
        </div>
      
      </div> */}
      <Navbar expand="lg" className="header" fixed="top" >
      <Container>
        <Navbar.Brand className='header-logo'>JASHWA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-5">
          <Link to="hero" smooth={true} offset={-165} duration={100} className='header-nav'><p>HOME</p></Link>
        <Link to="about" smooth={true}  offset={-60} duration={100} className='header-nav'><p>ABOUT</p></Link>
        <Link to="project" smooth={true} offset={-10} duration={100} className='header-nav'><p>PROJECTS</p></Link>
        <Link to="contact" smooth={true} offset={-10} duration={100} className='header-nav'><p>CONTACT</p></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <br />

      <br />
   
    </div>
  )
}

export default Header

