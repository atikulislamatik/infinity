import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FancyVideo from 'react-videojs-fancybox';



class WeDo extends Component {
    render() {
        return (
            <>
                <section className="do-area pb-75">
                    <Container>
                        <div className="section-tittle text-center">
                            <h2>
                                How We DO
                            </h2>
                        </div>
                        <Row>
                            <Col lg={6} md={6}>
                                <div className="single-do">
                                    <div className="content">
                                        <h3>
                                            Development Sector
                                        </h3>
                                        <p>
                                            First we analysis the requirement of project. According to the requirement we make a proper technical analysis, then we build a software architecture. According to the planning we start coding. Testing is also going on with coding and divided our team members their part. Final testing take place after finishing coding part. After successful implementation we provides 3 month free bug fixing service for corresponding project.
                                        </p>
                                    </div>
                                    <FancyVideo
                                        source="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
                                        id={"sintel"}
                                    />
                                </div>
                            </Col>
                            <Col lg={6} md={6}>
                                <div className="single-do">
                                    <div className="content">
                                        <h3>
                                            Academic Sector
                                        </h3>
                                        <p>
                                            We admitted maximum 8 students our every specific batch.they get life membership for their admitted courses.All students are must be join our facebook page facebook Group cause we share their daily class lecture in our academic facebook groups.We try to level best to guide our individual student.and we try to solve their practise problems.try to take classes with live project base and give ideas about professional level.
                                        </p>
                                    </div>
                                    <FancyVideo
                                        source="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
                                        id={"sintel"}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        );
    }
}

export default WeDo;