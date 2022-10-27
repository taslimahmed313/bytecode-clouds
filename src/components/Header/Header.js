import React, { useContext, useState } from 'react';
import { Container, Form, Image, Nav, Navbar } from 'react-bootstrap';
import { FaMoon, FaSun, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import logo from '../../images/coding-language.png';
import './Header.css';

const Header = () => {

  const [darken, setDarken]  = useState(false);

  const {user, logOut} = useContext(AuthContext);

  const handleLogout = ()=>{
    logOut()
    .then(()=>{})
    .catch(e=>console.error(e));
  }

  const handleDarkTheme = (event) =>{
      setDarken(event.target.checked)
  }

    return (
      <div>
        <div className="header">
          <Navbar expand="lg">
            <Container>
              <Nav>
                <Link to="/">
                  <Image src={logo} style={{ width: "30px" }}></Image>
                </Link>
              </Nav>
              <Navbar.Brand>
                <Link to="/">Bytecode Clouds</Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="link-list">
                  <Nav>
                    <Link to="/course">Courses</Link>
                  </Nav>
                  <Nav>
                    <Link>FAQ</Link>
                  </Nav>
                  <Nav>
                    <Link to="/blog">Blog</Link>
                  </Nav>
                  {user?.uid ? (
                    <>
                      <Nav onClick={handleLogout}>
                        <Link>Logout</Link>
                      </Nav>
                    </>
                  ) : (
                    <>
                      <Nav>
                        <Link to="/login">Login</Link>
                      </Nav>
                      <Nav>
                        <Link to="/signup">Sign Up</Link>
                      </Nav>
                    </>
                  )}
                  <Nav className="d-flex align-items-center ms-4">
                    <Form>
                      <Form.Check
                        type="switch"
                        onClick={handleDarkTheme}
                        id="custom-switch"
                        label=""
                      />
                    </Form>
                    {darken ? (
                      <FaSun className='text-white me-3'></FaSun>
                    ) : (
                      <FaMoon className='text-white me-3'></FaMoon>
                    )}
                  </Nav>
                  {user?.photoURL ? (
                    <>
                      <span className="text-white">
                        <Image
                          src={user?.photoURL}
                          title={user?.displayName}
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                          }}
                        ></Image>
                      </span>
                    </>
                  ) : (
                    <>
                      <div className="d-flex align-items-center ">
                        <FaUser className="text-white"></FaUser>
                      </div>
                    </>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    );
};

export default Header;