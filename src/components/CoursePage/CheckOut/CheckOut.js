import jsPDF from 'jspdf';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import './CheckOut.css';

const CheckOut = () => {
    const course = useLoaderData();
    console.log(course)

    const pdfGenerate = ()=>{
      var doc = new jsPDF('landscape', 'px', 'a4', 'false');
      // doc.addImage(codeFix, "PNG", 65, 20, 500, 400);
      doc.text(60,60,'This is our hose')
      doc.save('Codefix pdf')
    }

    return (
      <div className="checkout">
        <h1>Welcome You !!</h1>
        <Link className="text-white" to={`/course/${course.category_id}`}>
          <h2>{course.caption} Course</h2>
        </Link>



      <div>
        <Button onClick={pdfGenerate}>Pdf Download</Button>
      </div>


      </div>
    );
};

export default CheckOut;
