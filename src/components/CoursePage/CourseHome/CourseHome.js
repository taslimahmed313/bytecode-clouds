import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
import './CourseHome.css';

const CourseHome = () => {

    const courses = useLoaderData();
    console.log(courses);

    return (
        <div>
            <h2 className='my-4 text-white'>Explore Our All Master Courses</h2>
            <div className='course-container'>
                {
                    courses.map(course=><CourseCard key={course._id} course={course}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default CourseHome;