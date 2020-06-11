import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import Particles from 'react-particles-js';
class Banner extends Component {
    render() {
        return (
            <>
                <section className="page-banner">
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
                            <Container fluid>
                                <Row>
                                    <Col lg={12} md={12} sm={12} className="text-center">
                                        <h2 className="pageTitle">{this.props.pagesTitle}</h2>
                                        <ul>
                                            <li>
                                                <a href="/">Home</a>
                                            </li>
                                            <li>
                                                <p className="pageTitle">{this.props.pagesTitle}</p>
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                                    <div className="lines"><div className="line"></div><div className="line"></div><div className="line"></div></div>
                            </Container>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Banner;