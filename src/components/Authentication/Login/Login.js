import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import './Login.css';


const Login = () => {

  const [error, setError] = useState();
  const { logIn, googleSignIn } = useContext(AuthContext);

  const handleSubmit = event =>{
    event.preventDefault();
    setError('')
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    
    logIn(email, password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      toast.success("You Successfully Login, Thank You!");
      form.reset();
    })
    .catch(e=>{
      console.error(e);
      setError(e.message);
      // toast.error(error ? error : " Error (auth/wrong-password)");
    });
  }
  

  const handleGoogle = () =>{
    googleSignIn()
    .then(result =>{
      const user = result.user;
      console.log(user);
      toast.success("Your Google Login is Successful!");
    })
    .catch(e=>console.error(e))
  }

    return (
      <div>
        <div className="login">
          <form onSubmit={handleSubmit}>
            <h4 className="mb-0 log-sign">Login</h4>
            <div className="input">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="User Name or Email"
              />
            </div>
            <div className="input">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="d-flex align-items-center justify-content-between mt-3">
              <div className="checkbox">
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    className="mt-2"
                    type="checkbox"
                    label="Remember me"
                  />
                </Form.Group>
              </div>
              <div className="forgot">
                <Link>Forgot Password?</Link>
              </div>
            </div>
            <p className='mb-0 text-start text-danger mt-2'>{error}</p>
            <div className="btn-login">
              <button type="submit">Login</button>
            </div>
            <p className="info">
              Don't have an account? <Link to="/signup">Create an account</Link>
            </p>
          </form>
        </div>
        <div className="text-center">Or</div>
        <hr className="w-25 mx-auto my-0" />
        <div className="w-25 mx-auto my-3 rounded-pill btn-google">
          <div
            onClick={handleGoogle}
            className="w-100 d-flex align-items-center"
          >
            <FcGoogle className="icon"></FcGoogle>
            <span className="ms-4 icon-text">Continue With Google</span>
          </div>
        </div>
        <Button
          variant="outline-dark"
          className="w-25 mx-auto my-3 rounded-pill"
        >
          <div className="w-100 d-flex align-items-center">
            <FaGithub className="icon"></FaGithub>
            <span className="ms-4 icon-text">Continue With Github</span>
          </div>
        </Button>
      </div>
    );
};

export default Login;