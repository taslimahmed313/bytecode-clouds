import React from 'react';
import { Form } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import './Login.css';


const Login = () => {
    return (
      <div>
        <div className="login">
          <form>
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
        <div className="w-25 mx-auto my-3 btn-text btn-text-google">
          <button className="w-100 rounded-pill d-flex  align-items-center">
            <FcGoogle className="icon"></FcGoogle>
            <span className="ms-4">Continue With Google</span>
          </button>
        </div>
        <div className="w-25 mx-auto my-3 btn-text btn-text-facebook">
          <button className="w-100 rounded-pill d-flex align-items-center">
            <FaGithub className="text-primary icon"></FaGithub>
            <span className="ms-4">Continue With Facebook</span>
          </button>
        </div>
      </div>
    );
};

export default Login;