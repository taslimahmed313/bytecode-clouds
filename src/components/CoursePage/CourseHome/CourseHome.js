import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
import './CourseHome.css';

const CourseHome = () => {

    const courses = useLoaderData();
    console.log(courses);

    return (
        <div>
            <h1>This area is Courses Homes.</h1>
            <div className='course-container'>
                {
                    courses.map(course=><CourseCard key={course.id} course={course}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default CourseHome;