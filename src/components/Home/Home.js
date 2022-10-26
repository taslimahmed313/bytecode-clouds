import React from 'react';
import { Image } from 'react-bootstrap';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
      <div className="home">
        <div className="home-content">
          <div>
            <h1 className="intro-speech">
              Become an international software developer, from anywhere.
            </h1>
            <p className="description">
              Amazing Web Dev Trainers Are Waiting for You !!
            </p>
            <Link to="/course">
              <button className="btn-home">
                GO TO COURSES <FaAngleDoubleRight></FaAngleDoubleRight>
              </button>
            </Link>
          </div>
          <div>
            <Image
              style={{
                width: "100%",
                height: "350px",
                borderRadius: "10px",
                objectFit: "cover",
              }}
              src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?size=626&ext=jpg&ga=GA1.2.939492190.1661093851&semt=sph"
            ></Image>
          </div>
        </div>
      </div>
    );
};

export default Home;