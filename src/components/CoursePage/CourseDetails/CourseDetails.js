import jsPDF from 'jspdf';
import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    const { caption, details, outline, img,_id } = course;

    const willLearn = outline.map(n=>n)
    /* Crate a PDF */
    const pdfGenerate = () => {
      let doc = new jsPDF("landscape", "px", "a4", "true");
      doc.addImage(img, "PNG",200, 20, 120, 150)
      doc.text(200, 170, caption);
      doc.text(200, 190, willLearn);
      doc.save("Codefix pdf");
    };

    return (
      <Card>
        <Card.Header><Button onClick={pdfGenerate}>Download PDF</Button></Card.Header>
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