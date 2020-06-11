import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import img1 from '../../assets/images/client/3.jpg'
import img2 from '../../assets/images/client/2.jpg'
import img3 from '../../assets/images/client/1.jpg'
class Client extends Component {
    state = {
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 1,
            },
            576: {
                items: 1,
            },
            768: {
                items: 1,
            },
            992: {
                items: 1,
            },
            1200: {
                items: 1,
            }
        },
    }
    render() {
        return (

            <>
                <section className="client-area pb-75">

                    <Container>
                        <div className="section-tittle text-center">
                            <h2>
                                Client Testimonials
                            </h2>
                        </div>
                        <OwlCarousel className="owl-theme" 
                            autoPlay loop onDragged={true} responsive={this.state.responsive}>

                            <div className="single-client">
                                <div className="client-img">
                                    <img src={img1} alt="client" />
                                </div>
                                <div className="content">
                                    <h2>Shafi Mohammed Nahiyan</h2>
                                    <span className="clientTitle">Director Noorjahan Group</span>
                                    <p >
                                        "Our group is working with this team for more than 2 years now. They are undoubtedly talented and we are more than happy to work with them."
                                    </p>
                                </div>
                            </div>
                            <div className="single-client">
                                <div className="client-img">
                                    <img src={img2} alt="client" />
                                </div>
                                <div className="content">
                                    <h2>Md. Asaduzzaman Khan</h2>
                                    <span className="clientTitle">Assistant Professor & Head CSE, Leading University</span>
                                    <p>
                                        "Infinity Flame Software compnay knows what they are doing and they proved to us several times."
                                    </p>
                                </div>
                            </div>

                            <div className="single-client">
                                <div className="client-img">
                                    <img src={img3} alt="client" />
                                </div>
                                <div className="content">
                                    <h2>Abu Naser Salauddin</h2>
                                    <span className="clientTitle">General Manager – Crown
                                                Cotton Ltd (Crown Group)</span>
                                    <p>
                                        "They are humble, generous, passionate, dedicated, creative and talented."
                                    </p>
                                </div>
                            </div>
                        </OwlCarousel>
                    </Container>
                </section>
            </>
        );
    }
}

export default Client;