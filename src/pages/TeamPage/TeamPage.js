import React, { Component } from 'react';
import Footer from '../../componets/Footer/Footer';
import GoTop from '../../componets/Gotop/GoTop ';
import Banner from '../../componets/PageBanner/Banner';
import Teams from '../../componets/Teams/Teams';
import TopNavbar from "../../componets/Navbar/TopNavbar";

class TeamPage extends Component {
    render() {
        return (
            <div>
                  <TopNavbar title="Team - We Offer Professional Digital Services" />
                  <Banner pagesTitle="Leadership Team"/>
                  <Teams/>
                  <GoTop/>
                  <Footer/>
            </div>
        );
    }
}

export default TeamPage;