import React from 'react'
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }


    render() {
      return(
         <header id="header" className="fixed-top d-flex align-items-center">
                <div className="container">
                    <div className="header-container d-flex align-items-center">
                    <div className="logo mr-auto">
                        <h1 className="text-light"><a href="index.html"><span>BloodBank</span></a></h1>    
                    </div>

                    <nav className="nav-menu d-none d-lg-block">
                        <ul>
                        <li className="active"><a href="#header">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#team">Team</a></li>
                        <li className="drop-down"><a href="">Drop Down</a>
                            <ul>
                            <li><a href="#">Drop Down 1</a></li>
                            <li className="drop-down"><a href="#">Drop Down 2</a>
                                <ul>
                                <li><a href="#">Deep Drop Down 1</a></li>
                                <li><a href="#">Deep Drop Down 2</a></li>
                                <li><a href="#">Deep Drop Down 3</a></li>
                                <li><a href="#">Deep Drop Down 4</a></li>
                                <li><a href="#">Deep Drop Down 5</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Drop Down 3</a></li>
                            <li><a href="#">Drop Down 4</a></li>
                            <li><a href="#">Drop Down 5</a></li>
                            </ul>
                        </li>
                        <li><a href="#contact">Contact</a></li>

                        <li className="get-started"><a href="#about">Manage Blood</a></li>
                        </ul>
                    </nav>
                    </div>
                </div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/img-6.jpg' height="30" width="41" alt='BloodBank' className="navBrand"/></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg pr-1"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg pr-1"></span>Become a Donor</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg pr-1"></span>Donors</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg pr-1"></span>Contact Us</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </header>
      );
    }
  }


export default Header;