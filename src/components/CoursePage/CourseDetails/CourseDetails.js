import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    console.log(course);
    const { caption, details, outline, img,_id } = course;
    return (
      <Card>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Image src={img} style={{ width: "100%" }}></Image>
          <Card.Title>{caption}</Card.Title>
          <Card.Text>{details}</Card.Text>
          {outline.map((learn) => (
            <div>
              <FaCheckCircle></FaCheckCircle>
              <span>{learn}</span>
            </div>
          ))}
          <Link to={`/checkout/${_id}`}>
            <Button variant="primary">Get Premium Access</Button>
          </Link>
        </Card.Body>
      </Card>
    );
};

export default CourseDetails;