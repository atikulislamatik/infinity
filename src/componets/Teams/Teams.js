import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import img1 from '../../assets/images/team/1.jpg'
import img2 from '../../assets/images/team/2.jpg'
import img3 from '../../assets/images/team/3.jpg'
import img4 from '../../assets/images/team/4.jpg'
import img5 from '../../assets/images/team/5.jpg'
import img6 from '../../assets/images/team/6.jpg'
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

class Teams extends Component {
    render() {
        return (
            <>
                <section className="team-area pt-75 pb-75">
                    <Container>
                        <div className="section-tittle text-center">
                            <h2>
                                 Team Members
                            </h2>
                        </div>
                        <Row>
                            <Col lg={4} md={6}>
                                <div className="single-team">
                                    <div className="team-img">
                                        <img src={img1} alt="team"/>
                                    </div>
                                    <div className="content">
                                        <h3>Nazmul Hosaain</h3>
                                        <span>CEO</span>
                                        <ul className="social-links">
                                        <li>
                                            <a href="#"><FaFacebookF/></a>
                                        </li>
                                        <li>
                                            <a href="#"><FaInstagram/></a>
                                        </li>
                                        <li>
                                            <a href="#"><FaTwitter/></a>
                                        </li>
                                        <li>
                                            <a href="#"><FaLinkedinIn/></a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6}>
                                <div className="single-team">
                                    <div className="team-img">
                                        <img src={img2} alt="team"/>
                                    </div>
                                    <div className="content">
                                        <h3>Mohammed Faisal</h3>
                                        <span>Managing Director</span>
                                        <ul className="social-links">
                                        <li>
                                            <a href="#"><FaFacebookF/></a>
                                        </li>
                                        <li>
                                            <a href="#"><FaInstagram/></a>
                                        </li>
                                        <li>
                                            <a href="#"><FaTwitter/></a>
                                        </li>
                                        <li>
                                            <a href="#"><FaLinkedinIn/></a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6}>
                                <div className="single-team">
                                    <div className="team-img">
                                        <img src={img3} alt="team"/>
                                    </div>
                                    <div className="content">
                                        <h3>Abdullah Nahian</h3>
                                        <span>CMO</span>
                                        <ul className="social-links">
                                        <li>
                                            <a href="#"><FaFacebookF/></a>
                                        </li>
                                        <li>
                                            <a href="#"><FaInstagram/></a>
                                        </li>
                                        <li>
                                            <a href="#"><FaTwitter/></a>
                                        </li>
                                        <li>
                                            <a href="#"><FaLinkedinIn/></a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6}>
                                <div className="single-team">
                                    <div className="team-img">
                                        <img src={img4} alt="team"/>
                                    </div>
                                    <div className="content">
                                        <h3>Arifull Basar Abir</h3>
                                        <span>HDM</span>
                                        <ul className="social-links">
                                        <li>
                                            <a href="#"><FaFacebookF/></a>
                                        </li>
                                        <li>
                                            <a href="#"><FaInstagram/></a>
                                        </li>
                                        <li>
                                            <a href="#"><FaTwitter/></a>
                                        </li>
                                        <li>
                                            <a href="#"><FaLinkedinIn/></a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6}>
                                <div className="single-team">
                                    <div className="team-img">
                                        <img src={img5} alt="team"/>
                                    </div>
                                    <div className="content">
                                        <h3>Amimul Ihsan Mahadi</h3>
                                        <span>App Developer</span>
                                        <ul className="social-links">
                                        <li>
                                            <a href="#"><FaFacebookF/></a>
                                        </li>
                                        <li>
                                            <a href="#"><FaInstagram/></a>
                                        </li>
                                        <li>
                                            <a href="#"><FaTwitter/></a>
                                        </li>
                                        <li>
                                            <a href="#"><FaLinkedinIn/></a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6}>
                                <div className="single-team">
                                    <div className="team-img">
                                        <img src={img6} alt="team"/>
                                    </div>
                                    <div className="content">
                                        <h3>Nayem Islam</h3>
                                        <span>Marketing Officer</span>
                                        <ul className="social-links">
                                        <li>
                                            <a href="#"><FaFacebookF/></a>
                                        </li>
                                        <li>
                                            <a href="#"><FaInstagram/></a>
                                        </li>
                                        <li>
                                            <a href="#"><FaTwitter/></a>
                                        </li>
                                        <li>
                                            <a href="#"><FaLinkedinIn/></a>
                                        </li>
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

export default Teams;