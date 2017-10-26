import React, { Component } from 'react'

import { Link, NavLink } from 'react-router-dom'
import { Row, Col, Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap'
import { slide as Menu } from 'react-burger-menu'

import './Header.css'
import Logo from 'ymc_logo_text.svg'

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return(
      <Row noGutters className='header'>
        <Col>
          <Navbar light expand="lg" className="justify-content-between pt-0 pb-0">
            <NavbarBrand tag="span">
              <Link to="/"><img src={Logo} alt='Yakima Medical Clinic Logo' className="logo"/></Link>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar className="justify-content-end">
              <Nav navbar className="justify-content-end navbar-expand-lg">
                <NavItem>
                  <NavLink exact to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink exact to="/about">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink exact to="/services">Services</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink exact to="/education">Education</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink exact to="/information">New Patient Information</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink exact to="/contact">Contact</NavLink>
                </NavItem>
                <NavItem>
                  <a href='http://www.yourhealthfile.com'>YourHealthFile</a>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Col>
      </Row>
    )
  }
}

export default Header;
