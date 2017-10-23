import React, { Component } from 'react'

import { Link, NavLink } from 'react-router-dom'
import { Row, Col, Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap'

import './Header.css'
import Logo from 'ymc_logo_text.svg'

class Header extends Component {
  render() {
    return(
      <Row noGutters className='header'>
        <Col>
          <Navbar expand="lg" className="justify-content-between pt-0 pb-0">
            <NavbarBrand tag="span">
              <Link to="/"><img src={Logo} alt='Yakima Medical Clinic Logo' className="logo"/></Link>
            </NavbarBrand>
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
          </Navbar>
        </Col>
      </Row>
    )
  }
}

export default Header;
