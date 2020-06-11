import React, { Component } from 'react';
import Contact from '../../componets/Contact/Contact';
import Footer from '../../componets/Footer/Footer';
import Banner from '../../componets/PageBanner/Banner';
import TopNavbar from "../../componets/Navbar/TopNavbar";

class ContactPage extends Component {
    render() {
        return (
            <div>
                <TopNavbar title="Contact - We Offer Professional Digital Services"/>
                <Banner pagesTitle="Contact Us"/>
                <Contact/>
                <Footer/>
            </div>
        );
    }
}

export default ContactPage;