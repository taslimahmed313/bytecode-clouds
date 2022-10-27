import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import './Signup.css';

const Signup = () => {

  const { signUp, userProfileUpdate } = useContext(AuthContext);

  const handleSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.fullName.value;
    const photoUrl = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoUrl, email, password);

    signUp(email, password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      handleProfileUpdate(name, photoUrl);
      toast.success("Welcome! You Successfully Register Your Identity!");
      form.reset();
    })
    .catch(e=>console.error(e));
  }

  const handleProfileUpdate = (name, photoUrl) =>{
    const profile = {displayName: name, photoURL : photoUrl};
    userProfileUpdate(profile);
  }

    return (
      <div className='signUp-body'>
        <div className="register">
          <form onSubmit={handleSubmit}>
            <h4 className="mb-0 log-sign">Create an account</h4>
            <div className="input">
              <input type="text" name="fullName" placeholder="Full Name"/>
            </div>
            <div className="input">
              <input type="text" name="photoURL" placeholder="Photo URL"/>
            </div>
            <div className="input">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"   required
              />
            </div>
            <div className="input">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password" required
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
              <button type="submit">Sign Up</button>
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