import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/coding-language.png';
import './Header.css';
          
const Header = () => {
    return (
      <div>
        <div className="header">
          <Navbar bg="dark" expand="lg">
            <Container>
              <Nav>
                <Image
                  src={logo}
                  style={{ width: "30px" }}
                ></Image>
              </Nav>
              <Navbar.Brand href="#home">Bytecode Clouds</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='link-list'>
                  <Nav>
                    <Link>Courses</Link>
                  </Nav>
                  <Nav>
                    <Link>FAQ</Link>
                  </Nav>
                  <Nav>
                    <Link>Blog</Link>
                  </Nav>
                  <Nav>
                    <Link to="/login">Login</Link>
                  </Nav>
                  <Nav>
                    <Link to="/signup">Sign Up</Link>
                  </Nav>
                  <Nav>
                    <Link>Logout</Link>
                  </Nav>
                  <Link>Dark</Link>
                  <Link>Light</Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    );
};

export default Header;