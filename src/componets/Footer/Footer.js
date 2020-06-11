import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FaFacebookF } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { MdCall } from 'react-icons/md';
import { MdMail } from 'react-icons/md';
import { MdLocationOn } from 'react-icons/md';

class Footer extends Component {
    render() {
        return (
            <>
                <section className="footer-area pt-75">
                    <Container>
                        <Row>
                            <Col lg={5} sm={6}>
                                <div className="footer-content">
                                    <h2>
                                        <a href="/"> Infinity Flame Soft </a>
                                    </h2>
                                    <p>
                                        We Offer Professional Digital Services Including Design, Development, Management and Marketing for Web and Mobiles Apps!!!
                                </p>
                                    <ul className="social-link">
                                        <li>
                                            <a href="#" target="_blank"><FaFacebookF /></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><FaYoutube /></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><AiFillLinkedin /></a>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3} sm={6}>
                                <div className="footer-content">
                                    <h2>
                                        Legal
                                    </h2>
                                    <ul className="footer-list">
                                        <li>
                                            <a href="#">Refund Policy</a>
                                        </li>
                                        <li>
                                            <a href="#">Terms And Condition</a>
                                        </li>
                                        <li>
                                            <a href="#">Privacy Policy</a>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={4} sm={12}>
                                <div className="footer-content">
                                    <h2>
                                        Address
                                    </h2>
                                    <ul className="footer-list">
                                        <li>
                                            <a href="tel:+01710903032"><MdCall />+8801710903032</a>
                                        </li>
                                        <li>
                                            <a href="tel:+01675-870047"><MdCall />+8801675-870047</a>
                                        </li>
                                        <li>
                                            <a href="mailto:infinty@gmail.com"><MdMail />infinty@gmail.com</a>
                                        </li>
                                        <li>
                                            <MdLocationOn />417-420,3rdFloor,RongmoholTower,Sylhet
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                        <div className="copyright-area">
                            <p>Copyright ©Infinity Flame Soft 2016-2020 | All Rights Reserved </p>
                        </div>
                        <div className="lines"><div className="line"></div><div className="line"></div><div className="line"></div></div>
                    </Container>
                </section>
            </>
        );
    }
}

export default Footer;