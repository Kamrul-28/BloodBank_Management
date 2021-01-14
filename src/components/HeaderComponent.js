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
        <Jumbotron>
            <div className="container">
                <div className="row row-header">
                    <div className="col-12">
                        <h1>BloodBank Management system</h1>
                        <p> Donate Blood | Make a Difference | Save life </p>

                    </div>
                </div>
            </div>
        </Jumbotron>
    </div>
    );
  }
}

export default Header;