import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import WOW from 'wowjs';
import s1 from '../../assets/images/service/s1.png'
import s2 from '../../assets/images/service/s2.png'
import s3 from '../../assets/images/service/s3.png'
import s4 from '../../assets/images/service/s4.png'
import s5 from '../../assets/images/service/s5.png'
import s6 from '../../assets/images/service/s6.png'
class Services extends Component {
    render() {
        return (
            <Fragment>
                <section className="service-area pt-75 pb-75">
                    <Container>
                        <div className="section-tittle text-center">
                            <h2>Our Services</h2>
                        </div>
                        <Row>
                            <Col  lg={4} md={6}>
                                <div className="single-service">
                                    <div className="service-icon">
                                        <img src={s1} alt="service"/>
                                    </div>
                                    <div className="service-content wow slideInLeft">
                                        <h3 className="wow slideInLeft">Software Development</h3>
                                        <p>
                                            Today companies need to be constantly reevaluating their business and systems looking for enhancements and cost benefts.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col  lg={4} md={6}>
                                <div className="single-service">
                                    <div className="service-icon">
                                        <img src={s2} alt="service"/>
                                    </div>
                                    <div className="service-content">
                                        <h3>Web Development</h3>
                                        <p>
                                            Websites have been a specialty of our team for over 5 years. We have developed over many sites since we have been offering these services.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col  lg={4} md={6}>
                                <div className="single-service">
                                    <div className="service-icon">
                                        <img src={s3} alt="service"/>
                                    </div>
                                    <div className="service-content">
                                        <h3>App Development</h3>
                                        <p>
                                            We build native and cross platfrom mobile app for your business and instiution and also personal use as per as your requirements.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col  lg={4} md={6}>
                                <div className="single-service">
                                    <div className="service-icon">
                                        <img src={s4} alt="service"/>
                                    </div>
                                    <div className="service-content">
                                        <h3>Branding</h3>
                                        <p>
                                            Branding is important because not only is it what makes a memorable impression on consumers but it allows your customers.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col  lg={4} md={6}>
                                <div className="single-service">
                                    <div className="service-icon">
                                        <img src={s5} alt="service"/>
                                    </div>
                                    <div className="service-content">
                                        <h3>Online Marketing</h3>
                                        <p>
                                            Now a days, most popular marketing method is Online marketing. It is extremely impactful for marketing your product within your budget.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col  lg={4} md={6}>
                                <div className="single-service">
                                    <div className="service-icon">
                                        <img src={s6} alt="service"/>
                                    </div>
                                    <div className="service-content">
                                        <h3>Web Hosting</h3>
                                        <p>
                                            We provide most secure and smooth hosting service for professionals. also provide web hosting support to our clients to keep them happy.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Fragment>
        );
    }
}

export default Services;