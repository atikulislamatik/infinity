import React, {Component, Fragment} from 'react';
import About from '../../componets/About/About';
import Footer from '../../componets/Footer/Footer';
import GoTop from '../../componets/Gotop/GoTop ';
import Banner from '../../componets/PageBanner/Banner';
import TopNavbar from "../../componets/Navbar/TopNavbar";

class AboutPage extends Component {
    render() {
        return (
            <>
                <TopNavbar title="About - We Offer Professional Digital Services"/>
                <Banner pagesTitle="About Us"/>
                <About/>
                <GoTop/>
                <Footer/>
            </>
        );
    }
}

export default AboutPage;