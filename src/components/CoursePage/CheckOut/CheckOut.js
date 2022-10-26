import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const course = useLoaderData();
    console.log(course)
    return (
      <div>
        <h2>This is CheckOUt page</h2>
        <p>{course.caption}</p>
      </div>
    );
};

export default CheckOut;