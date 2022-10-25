import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    console.log(course);
    const { caption, details, outline, img } = course;
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
          <Button variant="primary">Get Premium Access</Button>
        </Card.Body>
      </Card>
    );
};

export default CourseDetails;