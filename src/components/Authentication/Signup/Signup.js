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
                name="fullName"
                placeholder="Full Name"
              />
            </div>
            <div className="input">
              <input
                type="text"
                name="photoURL"
                placeholder="Photo URL"
              />
            </div>
            <div className="input">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
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
            <div className="checkbox mt-3">
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  className="text-start"
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
      </div>
    );
};

export default Signup;