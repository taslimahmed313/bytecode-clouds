import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/CoursePage/Sidebar/Sidebar';
import Header from '../components/Header/Header';

const CourseOutlet = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg='4'>
                        <Sidebar></Sidebar>
                    </Col>
                    <Col lg='8'>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CourseOutlet;