import React, { Component, Fragment } from 'react';
import { Pagination, Button, Col, Container, Row } from 'react-bootstrap';
import FancyVideo from 'react-videojs-fancybox';

class SolutionDetails extends Component {
    render() {
        return (
            <>
                <>
                    <section className="course-details pt-75 pb-75">
                        <Container>
                            <Row>
                                <Col lg={6} md={12}>
                                    <div className="cd-content">
                                        <h2>Our Software Function</h2>
                                        <div className="single-course">
                                            <h4>Front End</h4>
                                            <ul>
                                                <li>HTML5</li>
                                                <li>CSS3</li>
                                                <li>PSD TO HTML</li>
                                                <li>RESPONSIVE DESIGN</li>
                                                <li>PhotoShop</li>
                                            </ul>
                                        </div>
                                        <div className="single-course">
                                            <h4>Back End</h4>
                                            <ul>
                                                <li>PHP</li>
                                                <li>JS</li>
                                                <li>MYSQL</li>
                                                <li>LIVE PROJECT WITH OOP</li>
                                                <li>WORDPRESS</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6} md={12}>
                                    <div className="cd-content">
                                        <h2>You Can Learn From Following Video</h2>
                                        <FancyVideo
                                            source="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
                                            poster="https://raw.githubusercontent.com/waskito/react-modal-videojs/master/example/public/preview.png"
                                            id={"sintel"}
                                        />
                                        <Pagination>
                                            <Pagination.First />
                                            <Pagination.Prev />
                                            <Pagination.Item>{1}</Pagination.Item>
                                            <Pagination.Ellipsis />

                                            <Pagination.Item>{10}</Pagination.Item>
                                            <Pagination.Item>{11}</Pagination.Item>
                                            <Pagination.Item active>{12}</Pagination.Item>
                                            <Pagination.Item>{13}</Pagination.Item>
                                            <Pagination.Item disabled>{14}</Pagination.Item>

                                            <Pagination.Ellipsis />
                                            <Pagination.Item>{20}</Pagination.Item>
                                            <Pagination.Next />
                                            <Pagination.Last />
                                        </Pagination>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </>
            </>
        );
    }
}

export default SolutionDetails;