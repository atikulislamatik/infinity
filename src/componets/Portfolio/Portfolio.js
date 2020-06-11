import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import img1 from '../../assets/images/portfolio/1.png'
import img2 from '../../assets/images/portfolio/2.png'
import img3 from '../../assets/images/portfolio/3.png'

class Portfolio extends Component {
    state= {
        responsive:{
            0: {
                items: 1,
            },
            450: {
                items: 2,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
    }
    render() {
        return (
            <>
                <section className="project-area pt-75 pb-75">
                    <Container className="port">
                        <div className="section-tittle text-center">
                            <h2>Our Few Projects</h2>
                        </div>
                        <OwlCarousel className="owl-theme" items="3" margin={20} 
                        autoPlay loop onDragged  responsive={this.state.responsive}>
                            <div className="single-portfolio">
                                <div className="port-img">
                                    <img src={img1} alt="portfolio" />
                                </div>
                                <div className="content">
                                    <a href="https://www.noorjahangrand.com/"><h4>Noorjahan Group: Hotel Noorjahan Grand</h4></a>
                                    <a href="https://www.noorjahangrand.com/" className="box-btn">Visit</a>
                                </div>
                            </div>
                            <div className="single-portfolio">
                                <div className="port-img">
                                    <img src={img2} alt="portfolio" />
                                </div>
                                <div className="content">
                                    <a href="https://www.genevamission.mofa.gov.bd/"><h4>Permanent Mission of Bangladesh Geneva</h4></a>
                                    <a href="https://www.genevamission.mofa.gov.bd/" className="box-btn">Visit</a>
                                </div>
                            </div>
                            <div className="single-portfolio">
                                <div className="port-img">
                                    <img src={img3} alt="portfolio" />
                                </div>
                                <div className="content">
                                <a href="https://www.lus.ac.bd/"><h4>Leading UniversitySylhet. Bangladesh</h4></a>
                                <a href="https://www.lus.ac.bd/" className="box-btn">Visit</a>
                                </div>
                            </div>
                            <div className="single-portfolio">
                                <div className="port-img">
                                    <img src={img2} alt="portfolio" />
                                </div>
                                <div className="content">
                                    <a href="https://www.genevamission.mofa.gov.bd/"><h4>Permanent Mission of Bangladesh Geneva</h4></a>
                                    <a href="https://www.genevamission.mofa.gov.bd/" className="box-btn">Visit</a>
                                </div>
                            </div>
                        </OwlCarousel>
                    </Container>
                </section>
            </>
        );
    }
}

export default Portfolio;