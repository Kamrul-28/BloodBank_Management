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
                                    <div className="logo">
                                        <h1 className="text-light"><a href="/"><NavbarBrand className="mr-auto" href="/">BloodBank</NavbarBrand></a></h1>
                                    </div>

                                    <nav className="nav-menu d-none d-lg-block" >
                                        <ul>
                                            <li><NavLink to="/home">Home</NavLink></li>
                                            <li><NavLink to="/addDonor">Become a donor</NavLink></li>
                                            <li><NavLink to="/donors">Donors List</NavLink></li>
                                            <li><NavLink to="/bloodRequest">Send Blood Request</NavLink></li>
                                            <li><NavLink to="/search">Search Blood</NavLink></li>
                                            <li><NavLink to="/contact">Contact</NavLink></li>
                                            <li><NavLink to="/team">Team</NavLink></li>
                                            <li  className="get-started"><NavLink to="/login">Login</NavLink></li>
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