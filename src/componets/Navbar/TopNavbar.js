import React, { Component, Fragment } from 'react';
import { Nav, Navbar, Container, Form, FormControl,Button} from "react-bootstrap";
import { NavLink,Link } from "react-router-dom";
import logo from '../../assets/images/logo1.png'

class TopNavbar extends Component {
    constructor(props){
        super();
        this.state={
            pageTitle:props.title
        }
    }
    componentDidMount(){
        window.addEventListener('scroll',()=>{
            const isTop=window.scrollY > 10;
            const nav=document.getElementById('nav');
            if(isTop){
                nav.classList.add('is-sticky');
            }else{
                nav.classList.remove('is-sticky');
            }
        });
    }
    render() {
        return (
            <Fragment>
                <title>{this.state.pageTitle}</title>
                <div className="navbar-area">
                    <Navbar collapseOnSelect expand="lg" className="main-nav" id="nav">
                        <Container>
                            <Navbar.Brand href="/"><img src={logo} alt="logo" /></Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="ml-auto">
                                    <Nav.Link className="nav-item" as={NavLink} exact to="/">Home</Nav.Link>
                                    <Nav.Link className="nav-item"  as={NavLink} exact to="/about">About</Nav.Link>
                                    <Nav.Link className="nav-item" as={NavLink} exact to="/services">Services</Nav.Link>
                                    <Nav.Link className="nav-item" as={NavLink} exact to="/teams">Team</Nav.Link>
                                    <Nav.Link className="nav-item" as={NavLink} exact to="/portfolio">Portfolio</Nav.Link>
                                    <Nav.Link className="nav-item" as={NavLink} exact to="/course">Course</Nav.Link>
                                    <Nav.Link className="nav-item" as={NavLink} exact to="/contact">Contact</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </Fragment>
        );
    }
}

export default TopNavbar;