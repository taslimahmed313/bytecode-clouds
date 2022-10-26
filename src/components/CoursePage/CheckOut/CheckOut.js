import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './CheckOut.css';

const CheckOut = () => {
    const course = useLoaderData();
    console.log(course)

    return (
      <div className="checkout">
        <h1>Welcome You !!</h1>
        <Link to={`/course/${course.category_id}`}>
          <h2>{course.caption} Course</h2>
        </Link>
      </div>
    );
};

export default CheckOut;
