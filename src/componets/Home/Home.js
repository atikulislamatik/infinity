import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import shape from '../../assets/images/shape1.png'
import shape1 from '../../assets/images/shape.png'
import Particles from 'react-particles-js';
import WOW from 'wowjs';
class Home extends Component {
    componentDidMount() {
        new WOW.WOW().init();
    }

    render() {

        return (
            <Fragment>
                <section className="banner-area">
                    <Particles
                        style={{ position: "absolute" }}
                        params={{
                            "particles": {
                                "number": {
                                    "value": 160,
                                    "density": {
                                        "enable": false
                                    }
                                },
                                "size": {
                                    "value": 3,
                                    "random": true,
                                    "anim": {
                                        "speed": 4,
                                        "size_min": 0.3
                                    }
                                },
                                "line_linked": {
                                    "enable": false
                                },
                                "move": {
                                    "random": true,
                                    "speed": 1,
                                    "direction": "top",
                                    "out_mode": "out"
                                }
                            },
                            "interactivity": {
                                "events": {
                                    "onhover": {
                                        "enable": true,
                                        "mode": "bubble"
                                    },
                                    "onclick": {
                                        "enable": true,
                                        "mode": "repulse"
                                    }
                                },
                                "modes": {
                                    "bubble": {
                                        "distance": 250,
                                        "duration": 2,
                                        "size": 0,
                                        "opacity": 0
                                    },
                                    "repulse": {
                                        "distance": 400,
                                        "duration": 4
                                    }
                                }
                            }
                        }}
                    />
                    <div className="d-table">
                        <div className="d-table-cell">
                            <Container fluid={true}>
                                <Row>
                                    <Col lg={6} md={12}>
                                        <div className="banner-content text-left">
                                            <h1 className="wow slideInLeft">
                                                Connecting DOTS
                                                <span>Creating Logics</span>
                                            </h1>
                                            <p>
                                                We Offer Professional Digital Services Including Design, Development, Management and Marketing for Web and Mobiles Apps!!!
                                             </p>

                                            <div className="banner-btn">
                                                <a href="/about"  className="box-btn"> About Us</a>
                                                <a href="/contact" className="border-btn">Contact Us</a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                    <div className="shape">
                        <img src={shape} />
                    </div>
                    <div className="shape1">
                        <img src={shape1} />
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Home;