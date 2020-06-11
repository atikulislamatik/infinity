import React, { Component, Fragment } from 'react';
import { Form, Button, Col, Container, Row } from 'react-bootstrap';
import { BsClock } from 'react-icons/bs'
import { MdLocationOn } from 'react-icons/md'
import { MdCall } from 'react-icons/md'
import img1 from '../../assets/images/contact.png'
import Iframe from 'react-iframe'
class Contact extends Component {
    render() {
        return (
            <>
                <section className="contact-area pt-75 pb-75">
                    <Container>
                        <Row>
                            <Col lg={4} sm={6}>
                                <div className="single-contact">
                                    <div className="icon">
                                        <BsClock />
                                    </div>
                                    <div className="content">
                                        <h3>Opening Hours</h3>
                                        <p>Sun - Thu : 10:00 AM - 06:00 PM</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} sm={6}>
                                <div className="single-contact">
                                    <div className="icon">
                                        <MdLocationOn />
                                    </div>
                                    <div className="content">
                                        <h3>Phone</h3>
                                        <p>+8801675-870047</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} sm={12}>
                                <div className="single-contact">
                                    <div className="icon">
                                        <MdCall />
                                    </div>
                                    <div className="content">
                                        <h3>Location</h3>
                                        <p>417-420,3rdFloor,RongmoholTower,Sylhet</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col lg={6}>
                                <div className="tittle">
                                    <h2>Contact Us</h2>
                                </div>
                                <Form>
                                    <Form.Group controlId="formBasicName">
                                        <Form.Control type="text" placeholder="Name" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Email" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPhone">
                                        <Form.Control type="text" placeholder="Phone" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Control as="textarea" rows="3" placeholder="Message" />
                                    </Form.Group>
                                    <a className="box-btn" href="">
                                        Submit
                                </a>
                                </Form>
                            </Col>
                            <Col lg={6} md={12}>
                                <div className="contact-img">
                                    <img src={img1} alt="contact" />
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24348.241139783073!2d91.87869121297409!3d24.884753834682172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3751ab2b25be8105%3A0x4e97a32cf9300bf4!2sInfinity%20Flame%20Soft!5e0!3m2!1sen!2sbd!4v1591261325531!5m2!1sen!2sbd"
                        className="map"
                        display="initial"
                        position="relative" />
                </section>
            </>
        );
    }
}

export default Contact;