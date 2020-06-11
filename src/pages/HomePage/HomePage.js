import React, { Component } from 'react';
import Home from '../../componets/Home/Home';
import Services from '../../componets/Services/Services';
import Technology from '../../componets/Technology/Technology';
import Client from '../../componets/Client/Client';
import About from '../../componets/About/About';
import GoTop from '../../componets/Gotop/GoTop ';
import Portfolio from '../../componets/Portfolio/Portfolio';
import Solution from '../../componets/Solutions/Solution';
import WeDo from '../../componets/Do/WeDo';
import Footer from '../../componets/Footer/Footer';
import TopNavbar from "../../componets/Navbar/TopNavbar";
class HomePage extends Component {
    render() {
        return (
            <>
               <TopNavbar title="Home - We Offer Professional Digital Services"/>
               <Home/>
               <Services/>
               <Technology/>
               <About/>
               <GoTop/>
               <Portfolio/>
               <Solution/>
               <WeDo/>
               <Client/>
               <Footer/>
            </>
        );
    }
}

export default HomePage;