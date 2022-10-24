import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    return (
      <div>
        <div className="register">
          <form >
            <h4 className="mb-0 log-sign">Create an account</h4>
            <div className="input">
              <input
                type="text"
                name="firstName"
                id="first-name"
                placeholder="First Name"
              />
            </div>
            <div className="input">
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
              />
            </div>
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
            <div className="input">
              <input
                type="password"
                name="confirmPassword"
                id="confirm-password"
                placeholder="Confirm Password"
              />
            </div>
            <div className="checkbox mt-3">
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  className="mt-2"
                  type="checkbox"
                  
                  label={
                    <>
                      Accept our <Link to="/terms">Terms and Conditions</Link>
                    </>
                  }
                />
              </Form.Group>
            </div>
            <div className="btn-login">
              <button  type="submit">
                Sign Up
              </button>
            </div>
            <p className="info">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
        <div className="text-center">Or</div>
        <hr className="w-25 mx-auto my-0" />
        <div className="w-25 mx-auto my-3 btn-text btn-text-facebook">
          <button className="w-100 rounded-pill d-flex align-items-center">
            {/* <FaFacebook className="text-primary icon"></FaFacebook> */}
            <span className="ms-4">Continue With Facebook</span>
          </button>
        </div>
        <div className="w-25 mx-auto my-3 btn-text btn-text-google">
          <button className="w-100 rounded-pill d-flex  align-items-center">
            {/* <FcGoogle className="icon"></FcGoogle> */}
            <span className="ms-4">Continue With Google</span>
          </button>
        </div>
      </div>
    );
};

export default Signup;