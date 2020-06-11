import React, { Component } from 'react';
import Banner from '../../componets/PageBanner/Banner';
import Footer from '../../componets/Footer/Footer';
import SolutionDetails from '../../componets/Solutions/SolutionDetails';
import TopNavbar from "../../componets/Navbar/TopNavbar";

class SolutionPage extends Component {
    render() {
        return (
            <>
                <TopNavbar title="Solution Details"/>
                <Banner pagesTitle="HRM System"/>
                <SolutionDetails/>
                <Footer/>
            </>
        );
    }
}

export default SolutionPage;