import React, { Component } from 'react';
import Banner from '../../componets/PageBanner/Banner';
import GoTop from '../../componets/Gotop/GoTop ';
import Footer from '../../componets/Footer/Footer';
import CourseDetails from '../../componets/Courses/CourseDetails';
import TopNavbar from "../../componets/Navbar/TopNavbar";

class CoursePage extends Component {
    render() {
        return (
            <>
                <TopNavbar title="Course Details"/>
                <Banner pagesTitle="Software Development"/>
                <CourseDetails/>
                <GoTop/>
                <Footer/>
            </>
        );
    }
}

export default CoursePage;