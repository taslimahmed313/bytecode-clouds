import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CourseCard.css';

const CourseCard = ({course}) => {
    const {caption, img, description, category_id} = course;
    return (
          <div className="course-card">
            <Link to={`/course/${category_id}`}>
              <Image
                style={{ width: "100%", height: "200px", borderRadius: "8px" }}
                src={img}
              ></Image>
            </Link>
            <h5>{caption}</h5>
            <p>
              <small>{description}</small>
            </p>
          </div>
    );
};

export default CourseCard;