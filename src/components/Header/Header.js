import React, { useContext } from 'react';
import { Container, Form, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import logo from '../../images/coding-language.png';
import './Header.css';
          
const Header = () => {

  const {user, logOut} = useContext(AuthContext);

  const handleLogout = ()=>{
    logOut()
    .then(()=>{})
    .catch(e=>console.error(e));
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
                    <></>
                  )}
                  <Nav className='d-flex align-items-center ms-4'>
                    <Form>
                      <Form.Check type="switch" id="custom-switch" label="" />
                    </Form>
                  </Nav>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    );
};

export default Header;