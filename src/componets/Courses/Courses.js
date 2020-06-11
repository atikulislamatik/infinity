import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import img1 from '../../assets/images/course/1.jpg'
import img2 from '../../assets/images/course/2.jpg'
import img3 from '../../assets/images/course/3.jpg'
class Courses extends Component {
    render() {
        return (
            <>
                <section className="course-area pt-75 pb-75">
                    <Container>
                        <div className="section-tittle text-center">
                            <h2>Our Courses</h2>
                        </div>
                        <Row>
                            <Col lg={4} md={6}>
                                <div className="single-course">
                                    <div className="course-img">
                                        <img src={img1} alt="course" />
                                    </div>
                                    <div className="content">
                                        <h2>Software Development</h2>
                                        <p>
                                            I build native and cross platfrom mobile app for your business app for your business
                                        </p>
                                        <a href="/coursedetails" className="border-btn">Read More</a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6}>
                                <div className="single-course">
                                    <div className="course-img">
                                        <img src={img2} alt="course" />
                                    </div>
                                    <div className="content">
                                        <h2>Web Development</h2>
                                        <p>
                                            I build native and cross platfrom mobile app for your business app for your business
                                        </p>
                                        <a href="/coursedetails" className="border-btn">Read More</a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6}>
                                <div className="single-course">
                                    <div className="course-img">
                                        <img src={img3} alt="course" />
                                    </div>
                                    <div className="content">
                                        <h2>Professional Networking</h2>
                                        <p>
                                            I build native and cross platfrom mobile app for your business app for your business
                                        </p>
                                        <a href="/coursedetails" className="border-btn">Read More</a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6}>
                                <div className="single-course">
                                    <div className="course-img">
                                        <img src={img3} alt="course" />
                                    </div>
                                    <div className="content">
                                        <h2>Mobile App development</h2>
                                        <p>
                                            I build native and cross platfrom mobile app for your business app for your business
                                        </p>
                                        <a href="/coursedetails" className="border-btn">Read More</a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6}>
                                <div className="single-course">
                                    <div className="course-img">
                                        <img src={img2} alt="course" />
                                    </div>
                                    <div className="content">
                                        <h2>UI/UX Design</h2>
                                        <p>
                                            I build native and cross platfrom mobile app for your business app for your business
                                        </p>
                                        <a href="/coursedetails" className="border-btn">Read More</a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6}>
                                <div className="single-course">
                                    <div className="course-img">
                                        <img src={img1} alt="course" />
                                    </div>
                                    <div className="content">
                                        <h2>Programing Course</h2>
                                        <p>
                                            I build native and cross platfrom mobile app for your business app for your business
                                        </p>
                                        <a href="/coursedetails" className="border-btn">Read More</a>
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

export default Courses;