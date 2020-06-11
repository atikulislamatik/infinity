import React, { Component } from 'react';
import Banner from '../../componets/PageBanner/Banner';
import GoTop from '../../componets/Gotop/GoTop ';
import Footer from '../../componets/Footer/Footer';
import Courses from '../../componets/Courses/Courses';
import TopNavbar from "../../componets/Navbar/TopNavbar";

class CoursePage extends Component {
    render() {
        return (
            <>
                <TopNavbar title="Courses - We Offer Many Courses"/>
                <Banner pagesTitle="Courses"/>
                <Courses/>
                <GoTop/>
                <Footer/>
            </>
        );
    }
}

export default CoursePage;