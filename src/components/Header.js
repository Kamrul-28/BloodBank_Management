import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    
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
        <div>
            <header id="header" className="fixed-top align-items-center">
                <Navbar dark expand="lg">
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>

                            <div className="container">
                                <div className="header-container d-flex align-items-center">
                                    <div className="logo mr-auto">
                                        <h1 className="text-light"><a href="/"><NavbarBrand className="mr-auto" href="/">BloodBank</NavbarBrand></a></h1>
                                    </div>

                                    <nav className="nav-menu d-none d-lg-block">
                                        <ul>
                                            <li className="active"><a href="#header">Home</a></li>
                                            <li><NavLink to="/addDonor">Become a donor</NavLink></li>
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

                                            <li className="get-started"><a href="#about">Get Started</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                    </Collapse>
                </Navbar>
            </header>

    </div>
    );
  }
}

export default Header;