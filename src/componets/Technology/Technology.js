import React, { PureComponent, Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ComposedChart, Line, Bar, XAxis, Tooltip, } from 'recharts';
import react1 from '../../assets/images/tech/react-js.png'
import react2 from '../../assets/images/tech/React-icon-1-1.png'
import node1 from '../../assets/images/tech/express.png'
import node2 from '../../assets/images/tech/expressjslogo.png'
import word1 from '../../assets/images/tech/wordpress-logo.png'
import word2 from '../../assets/images/tech/word-press.png'
import kot1 from '../../assets/images/tech/kotlin-logo.png'
import kot2 from '../../assets/images/tech/kotlin-logo-2.png'
import ele1 from '../../assets/images/tech/electron-logo.png'
import ele2 from '../../assets/images/tech/electronlogo-1-1.png'
import jq1 from '../../assets/images/tech/jquery-logo.png'
import jq2 from '../../assets/images/tech/jquery-logo-2.png'
import angu1 from '../../assets/images/tech/angular-js.png'
import angu2 from '../../assets/images/tech/angular-1-1.png'
import boot1 from '../../assets/images/tech/bootstrap-logo.png'
import boot2 from '../../assets/images/tech/bootstrap-logo-2.png'
import vue1 from '../../assets/images/tech/vue-js-logo.png'
import vue2 from '../../assets/images/tech/vue-js-logo-2.png'
import lara1 from '../../assets/images/tech/laravel.png'
import lara2 from '../../assets/images/tech/laravel-logo.png'
import flat1 from '../../assets/images/tech/flutter-logo.png'
import flat2 from '../../assets/images/tech/flutter-1.png'
import next1 from '../../assets/images/tech/next.jslogo-1-1.png'

const data = [
  {
    name: 'Java', Projects: 70,
  },
  {
    name: 'Kotlin', Projects: 50,
  },
  {
    name: 'Sql', Projects: 90,
  },
  {
    name: 'Html', Projects: 99,
  },
  {
    name: 'Laravel', Projects: 80,
  },
  {
    name: 'React', Projects: 99,
  },
  {
    name: 'Angular', Projects: 60,
  },
  {
    name: 'Vue', Projects: 80,
  },
  {
    name: 'Wp', Projects: 90,
  },
  {
    name: 'Node', Projects: 70,
  },
];

class Technology extends Component {

  render() {
    return (
      <section className="tech-area pb-75">
        <Container>
          <div className="section-tittle text-center">
            <h2>Technology Used</h2>
          </div>
          <Row className="align-items-center">
            <Col lg={6} md={12} sm={12}>
              <div className="barchart">
                <ComposedChart
                  width={480}
                  height={400}
                  data={data}>
                  <XAxis dataKey="name" />
                  <Tooltip />
                  <Bar dataKey="Projects" barSize={30} fill="#293a5c" />
                  <Line type="monotone" dataKey="Projects" stroke="#ff7300" />
                </ComposedChart>
              </div>
            </Col>
            <Col lg={6} md={12}>
              <div className="content">
                <p>
                  To build native android apps we use Java as well as kotline and java mainly. React JS is used for cross platform mobile application. We use MySQL database for relational database system. To build NoSQL application i use MongoDB. Firebase database system is used where it is necessary to provide realtime data flow facilities. we always build dynamic application. Admin panel is the heart of such kinds of application. We always try to provide sufficient features in admin panel to dominate application. According to client demand we use PHP OOP, Laravel to build admin panel section.We also use Wordpress for website build Application security is a big deal for commercial application. We always ensure security portion of my application, moreover We build a security alert system, to notify admin when his system at risk.
                  </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col lg={2} md={4}>
              <div className="single-tech">
                  <img src={react1} alt="tech"/>
                  <img src={react2} alt="tech"/>
              </div>
            </Col>
            <Col lg={2} md={4}>
              <div className="single-tech">
                  <img src={node1} alt="tech"/>
                  <img src={node2} alt="tech"/>
              </div>
            </Col>
            <Col lg={2} md={4}>
              <div className="single-tech">
                  <img src={word1} alt="tech"/>
                  <img src={word2} alt="tech"/>
              </div>
            </Col>
            <Col lg={2} md={4}>
              <div className="single-tech">
                  <img src={kot1} alt="tech"/>
                  <img src={kot2} alt="tech"/>
              </div>
            </Col>
            <Col lg={2} md={4}>
              <div className="single-tech">
                  <img src={ele1} alt="tech"/>
                  <img src={ele2} alt="tech"/>
              </div>
            </Col>
            <Col lg={2} md={4}>
              <div className="single-tech">
                  <img src={jq1} alt="tech"/>
                  <img src={jq2} alt="tech"/>
              </div>
            </Col>
            <Col lg={2} md={4}>
              <div className="single-tech">
                  <img src={angu1} alt="tech"/>
                  <img src={angu2} alt="tech"/>
              </div>
            </Col>
            <Col lg={2} md={4}>
              <div className="single-tech">
                  <img src={boot1} alt="tech"/>
                  <img src={boot2} alt="tech"/>
              </div>
            </Col>
            <Col lg={2} md={4}>
              <div className="single-tech">
                  <img src={vue1} alt="tech"/>
                  <img src={vue2} alt="tech"/>
              </div>
            </Col>
            <Col lg={2} md={4}>
              <div className="single-tech">
                  <img src={lara2} alt="tech"/>
                  <img src={lara1} alt="tech"/>
              </div>
            </Col>
            <Col lg={2} md={4}>
              <div className="single-tech">
                  <img src={flat1} alt="tech"/>
                  <img src={flat2} alt="tech"/>
              </div>
            </Col>
            <Col lg={2} md={4}>
              <div className="single-tech">
                  <img src={next1} alt="tech"/>
                  <img src={next1} alt="tech"/>
              </div>
            </Col>
          </Row>        
        </Container>
      </section>
    );
  }
}

export default Technology;
