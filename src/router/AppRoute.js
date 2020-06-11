import React, {Component, Fragment} from 'react';
import {Route,Switch} from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import AboutPage from '../pages/AboutPage/AboutPage';
import ServicePage from '../pages/ServicePage/ServicePage';
import TeamPage from '../pages/TeamPage/TeamPage';
import PortfolioPage from '../pages/PortfolioPage/PortfolioPage';
import CoursePage from '../pages/CoursePage/CoursePage';
import CourseDetails from '../pages/CoursePage/CourseDetails';
import ContactPage from '../pages/ContactPage/ContactPage';
import SolutionPage from '../pages/SolutionPage/SolutionPage'

class AppRoute extends Component {
    render() {
        return (
            <>
            <Fragment>
                <Switch>
                <Route exact path="/" component={HomePage} />
                   <Route exact path="/about" component={AboutPage} />
                   <Route exact path="/services" component={ServicePage} />
                   <Route exact path="/teams" component={TeamPage} />
                   <Route exact path="/portfolio" component={PortfolioPage} />
                   <Route exact path="/course" component={CoursePage} />
                   <Route exact path="/contact" component={ContactPage} />
                   <Route exact path="/coursedetails" component={CourseDetails} />
                   <Route exact path="/solutiondetails" component={SolutionPage} />
                </Switch>
            </Fragment>
            </>
        );
    }
}

export default AppRoute;