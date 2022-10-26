import React, { useContext } from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import logo from '../../images/coding-language.png';
import './Header.css';
          
const Header = () => {

  const {user, logOut} = useContext(AuthContext);
  console.log(user);

  const handleLogout = ()=>{
    logOut()
    .then(()=>{})
    .catch(e=>console.error(e));
  }

    return (
      <div>
        <div className="header">
          <Navbar bg="dark" expand="lg">
            <Container>
              <Nav>
                <Image src={logo} style={{ width: "30px" }}></Image>
              </Nav>
              <Navbar.Brand href="#home">Bytecode Clouds</Navbar.Brand>
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
                    <Link>Blog</Link>
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
                  <Link>Dark</Link>
                  <Link>Light</Link>
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
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    );
};

export default Header;