import React, { Component } from 'react';
import GoTop from '../../componets/Gotop/GoTop ';
import Footer from '../../componets/Footer/Footer';
import Services from '../../componets/Services/Services';
import Banner from '../../componets/PageBanner/Banner';
import Client from '../../componets/Client/Client';
import TopNavbar from "../../componets/Navbar/TopNavbar";

class ServicePage extends Component {
    render() {
        return (
            <div>
                <TopNavbar title="Service - We Offer Professional Digital Services"/>
                <Banner pagesTitle="Services"/>
                <Services/>
                <Client/>
                <GoTop/>
                <Footer/>
            </div>
        );
    }
}

export default ServicePage;