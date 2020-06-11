import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from '../../assets/images/solutions/1.svg'
import img2 from '../../assets/images/solutions/2.svg'
import img3 from '../../assets/images/solutions/3.svg'
import img4 from '../../assets/images/solutions/4.svg'
import img5 from '../../assets/images/solutions/5.svg'
import img6 from '../../assets/images/solutions/6.svg'
import img7 from '../../assets/images/solutions/7.svg'
class Solution extends Component {
    state = {
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 2,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        },
    }
    render() {
        return (
            <>
                <section className="solution-area pb-75">
                    <Container fluid>
                        <div className="section-tittle text-center">
                            <h2>Software Solutions</h2>
                            <p>
                                We provide state of the art IT solutions for several types of business, industry and corporate facilities. Few of these out of more than 20 software solutions;
                            </p>
                        </div>
                        <OwlCarousel className="owl-theme" items="4" margin={20}
                            autoplay={true} autoplayHoverPause={true}
                            autoplayTimeout={3000} loop onDragged dots
                            responsive={this.state.responsive} >
                                
                            <div className="single-solutions">
                                <div className="solutions-img">
                                    <a href="/solutiondetails">
                                        <img src={img1} alt="solutions" />
                                    </a>
                                    <a href="/solutiondetails" className="box-btn">View Details</a>
                                </div>
                            </div>
                            <div className="single-solutions">
                                <div className="solutions-img">
                                    <a href="/solutiondetails">
                                        <img src={img2} alt="solutions" />
                                    </a>
                                    <a href="/solutiondetails" className="box-btn">View Details</a>
                                </div>
                            </div>
                            <div className="single-solutions">
                                <div className="solutions-img">
                                    <a href="/solutiondetails">
                                        <img src={img3} alt="solutions" />
                                    </a>
                                    <a href="/solutiondetails" className="box-btn">View Details</a>
                                </div>
                            </div>
                            <div className="single-solutions">
                                <div className="solutions-img">
                                    <a href="/solutiondetails">
                                        <img src={img4} alt="solutions" />
                                    </a>
                                    <a href="/solutiondetails" className="box-btn">View Details</a>
                                </div>
                            </div>
                            <div className="single-solutions">
                                <div className="solutions-img">
                                    <a href="/solutiondetails">
                                        <img src={img5} alt="solutions" />
                                    </a>
                                    <a href="/solutiondetails" className="box-btn">View Details</a>
                                </div>
                            </div>
                            <div className="single-solutions">
                                <div className="solutions-img">
                                    <a href="/solutiondetails">
                                        <img src={img6} alt="solutions" />
                                    </a>
                                    <a href="/solutiondetails" className="box-btn">View Details</a>
                                </div>
                            </div>
                            <div className="single-solutions">
                                <div className="solutions-img">
                                    <a href="/solutiondetails">
                                        <img src={img7} alt="solutions" />
                                    </a>
                                    <a href="/solutiondetails" className="box-btn">View Details</a>
                                </div>
                            </div>
                        </OwlCarousel>
                    </Container>
                </section>
            </>
        );
    }
}

export default Solution;