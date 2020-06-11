import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import Particles from 'react-particles-js';
import aboutImg from '../../assets/images/about.png'
import {FaRegSmileBeam} from 'react-icons/fa'
import {TiTickOutline} from 'react-icons/ti'
import {GiTrophyCup} from 'react-icons/gi'
import {DiYeoman} from 'react-icons/di'


class About extends Component {
    render() {
        return (
            <>
                <section className="about-area about-area-two pt-75 pb-75">
                <Particles
                        style={{ position: "absolute", top:"0" }}
                        params={{
                            "particles": {
                                "number": {
                                  "value": 100,
                                  "density": {
                                    "enable": true,
                                    "value_area": 1000
                                  }
                                },
                                "color": {
                                  "value": ["#BD10E0","#B8E986","#50E3C2","#FFD300","#E86363"]
                                },
                                "shape": {
                                  "type": "circle",
                                  "stroke": {
                                    "width": 0,
                                    "color": "#b6b2b2"
                                  }
                                },
                                "opacity": {
                                  "value": 0.4,
                                  "random": false,
                                  "anim": {
                                    "enable": true,
                                    "speed": 1,
                                    "opacity_min": 0.1,
                                    "sync": false
                                  }
                                },
                                "size": {
                                  "value": 5,
                                  "random": true,
                                  "anim": {
                                    "enable": true,
                                    "speed": 8,
                                    "size_min": 0.1,
                                    "sync": true
                                  }
                                },
                                "line_linked": {
                                  "enable": true,
                                  "distance": 150,
                                  "color": "#c8c8c8",
                                  "opacity": 0.4,
                                  "width": 1
                                },
                                "move": {
                                  "enable": true,
                                  "speed": 1,
                                  "direction": "none",
                                  "random": false,
                                  "straight": false,
                                  "out_mode": "bounce",
                                  "bounce": false,
                                  "attract": {
                                    "enable": false,
                                    "rotateX": 600,
                                    "rotateY": 1200
                                  }
                                }
                              },
                              "interactivity": {
                                "detect_on": "canvas",
                                "events": {
                                  "onhover": {
                                    "enable": false,
                                    "mode": "repulse"
                                  },
                                  "onclick": {
                                    "enable": false,
                                    "mode": "push"
                                  },
                                  "resize": true
                                },
                                "modes": {
                                  "grab": {
                                    "distance": 300,
                                    "line_linked": {
                                      "opacity": 1
                                    }
                                  },
                                  "bubble": {
                                    "distance": 400,
                                    "size": 40,
                                    "duration": 2,
                                    "opacity": 8,
                                    "speed": 3
                                  },
                                  "repulse": {
                                    "distance": 200,
                                    "duration": 0.4
                                  },
                                  "push": {
                                    "particles_nb": 4
                                  },
                                  "remove": {
                                    "particles_nb": 2
                                  }
                                }
                              },
                              "retina_detect": true
                        }}
                    />
                    <Container>
                        <Row className="align-items-center">
                            <Col lg={6} md={12}>
                                <div className="about-content">
                                    <h2>About Us</h2>
                                    <p>

                                        Founded in January 2015 and headquartered in Sylhet City, in order to help companies with their IT solutions. Our initial focus was providing complete information technology solutions for companies. In response to customer needs and in order to fully cover the range of IT services. Today, we deliver the most comprehensive suite of managed IT services to small and medium-sized businesses across Bangladesh and the World. Our proven service portfolio meets the varying needs of customers with implementation services or complete outsourced and Hosted IT solutions. Our known Quality Service allows us to provide all our customers with an effcient, seamless and worry-free “Remote IT department.
                                    </p>
                                </div>
                            </Col>
                            <Col lg={6} md={12}>
                                <div className="about-img">
                                    <img src={aboutImg} alt="about"/>
                                </div>
                            </Col>
                        </Row>
                        <Row className="counter">
                          <Col lg={3} md={6}>
                              <div className="single-counter">
                                  <div className="icon">
                                      <FaRegSmileBeam/>
                                  </div>
                                  <div className="content">
                                      <CountUp end={100} duration={5} />
                                      <p>Completed Projects</p>
                                  </div>
                              </div>
                          </Col>
                          <Col lg={3} md={6}>
                              <div className="single-counter">
                                  <div className="icon">
                                      <TiTickOutline/>
                                  </div>
                                  <div className="content">
                                      <CountUp end={240} duration={5} />
                                      <p>Total Clients</p>
                                  </div>
                              </div>
                          </Col>
                          <Col lg={3} md={6}>
                              <div className="single-counter">
                                  <div className="icon">
                                      <GiTrophyCup/>
                                  </div>
                                  <div className="content">
                                      <CountUp end={2} duration={2} />
                                      <p>Winning Awards</p>
                                  </div>
                              </div>
                          </Col>
                          <Col lg={3} md={6}>
                              <div className="single-counter">
                                  <div className="icon">
                                      <DiYeoman/>
                                  </div>
                                  <div className="content">
                                      <CountUp end={502} duration={4} />
                                      <p>Total Students</p>
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

export default About;