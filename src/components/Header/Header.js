import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/coding-language.png';
import './Header.css';
          
const Header = () => {
    return (
      <div>
        <div className="header">
          <Navbar bg="dark" expand="lg">
            <Container>
              <Image src={logo} style={{width:'30px', marginRight:'20px'}}></Image>
              <Navbar.Brand href="#home">Bytecode Clouds</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Courses</Nav.Link>
                  <Nav.Link href="#link">FAQ</Nav.Link>
                  <Nav.Link href="#link">Blog</Nav.Link>
                  <Nav.Link href="#link">Dark</Nav.Link>
                  <Nav.Link href="#link">Light</Nav.Link>
                  <Nav.Link href="#link">Login</Nav.Link>
                  <Nav.Link href="#link">Sign Up</Nav.Link>
                  <Nav.Link href="#link">Logout</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    );
};

export default Header;