import jsPDF from 'jspdf';
import React from 'react';
import { Image } from 'react-bootstrap';
import { FaCheckCircle, FaCrown } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import './CourseDetails.css';

const CourseDetails = () => {
    const course = useLoaderData();
    const { caption, details, outline, img,_id } = course;

    const willLearn = outline.map(n=>n)
    /* Crate a PDF */
    const pdfGenerate = () => {
      let doc = new jsPDF("landscape", "px", "a4", "true");
      // doc.addImage(img, "PNG",200, 20, 120, 150)
      doc.text(200, 170, caption);
      doc.text(200, 190, willLearn);
      doc.save("Bytecode Clouds pdf file");
    };

    return (
      <div>
        <div className="course-details">
          <div>
            <button className="btn-pdf" onClick={pdfGenerate}>
              Download PDF
            </button>
            <hr />
          </div>
          <Image
            src={img}
            style={{ width: "100%", padding: "0px 13px" }}
          ></Image>
          <h4 className="mt-2">{caption}</h4>
          <p>
            <small>{details}</small>
          </p>
          {outline.map((learn) => (
            <div>
              <FaCheckCircle></FaCheckCircle>
              <span>{learn}</span>
            </div>
          ))}
          <Link to={`/course/checkout/${_id}`}>
            <button className="btn-premium"><FaCrown className='text-warning'></FaCrown> Get Premium Access</button>
          </Link>
        </div>
      </div>
    );
};

export default CourseDetails;