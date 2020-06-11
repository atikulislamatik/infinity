import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import img1 from '../../assets/images/course/4.png'

class CourseDetails extends Component {
    render() {
        return (
            <>
                <section className="course-details pt-75 pb-75">
                    <Container>
                        <Row className="align-items-center">
                            <Col lg={6} md={12}>
                                <div className="cd-img">
                                    <img src={img1} alt="course" />
                                </div>
                            </Col>
                            <Col lg={6} md={12}>
                                <div className="cd-content">
                                    <h2>What We Learn</h2>
                                    <div className="single-course">
                                        <h4>Front End</h4>
                                        <ul>
                                            <li>HTML5</li>
                                            <li>CSS3</li>
                                            <li>PSD TO HTML</li>
                                            <li>RESPONSIVE DESIGN</li>
                                            <li>PhotoShop</li>
                                        </ul>
                                    </div>
                                    <div className="single-course">
                                        <h4>Back End</h4>
                                        <ul>
                                            <li>PHP</li>
                                            <li>JS</li>
                                            <li>MYSQL</li>
                                            <li>LIVE PROJECT WITH OOP</li>
                                            <li>WORDPRESS</li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        );
    }
}

export default CourseDetails;