import React, { Component } from 'react';
import Banner from '../../componets/PageBanner/Banner';
import GoTop from '../../componets/Gotop/GoTop ';
import Footer from '../../componets/Footer/Footer';
import Portfolio from '../../componets/Portfolio/Portfolio';
import Technology from '../../componets/Technology/Technology';
import Solution from '../../componets/Solutions/Solution';
import TopNavbar from "../../componets/Navbar/TopNavbar";

class PortfolioPage extends Component {
    render() {
        return (
            <div>
                  <TopNavbar title="Portfolio - We Offer Professional Digital Services"/>
                  <Banner pagesTitle="Portfolio"/>
                  <Portfolio/>
                  <Technology/>
                  <Solution/>
                  <GoTop/>
                  <Footer/>
            </div>
        );
    }
}

export default PortfolioPage;