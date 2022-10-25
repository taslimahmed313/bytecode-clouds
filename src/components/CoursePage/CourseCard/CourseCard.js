import React from 'react';
import { Image } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './CourseCard.css';

const CourseCard = ({course}) => {
    const { caption, img, description, category_id, outline } = course;
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
        {outline.map((learn) => (
          <div className='text-start'>
            <FaCheckCircle></FaCheckCircle>
            <span>{learn}</span>
          </div>
        ))}
      </div>
    );
};

export default CourseCard;