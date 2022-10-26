import React from 'react';
import { Image } from 'react-bootstrap';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './CourseCard.css';

const CourseCard = ({course}) => {
    const { caption, img, category_id, instructor,rating, rater, price, discountPrice } = course;
    return (
      <div className="course-card">
        <Link to={`/course/${category_id}`}>
          <Image
            style={{ width: "100%", height: "150px", borderRadius: "8px" }}
            src={img}
          ></Image>

          <div className="text-start">
            <h6 className="m-0">{caption}</h6>
            <p className=" my-1 instructor">{instructor}</p>
          </div>
          <div className="d-flex align-items-center gap-2">
            <div className="rating text-warning">{rating}</div>
            <div className="text-warning">
              <FaStar className="star"></FaStar>
              <FaStar className="star"></FaStar>
              <FaStar className="star"></FaStar>
              <FaStar className="star"></FaStar>
              <FaStarHalfAlt className="star"></FaStarHalfAlt>
            </div>
            <div className="rater">({rater})</div>
          </div>
          <div className="d-flex align-items-center">
            <div className="me-2 price">${price}</div>
            <div className="discount">${discountPrice}</div>
          </div>
        </Link>
      </div>
    );
};

export default CourseCard;