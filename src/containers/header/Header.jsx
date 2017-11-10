import React, { Component } from 'react'

import { Link, NavLink } from 'react-router-dom'
import { Row, Col, Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap'
import { slide as Menu } from 'react-burger-menu'
import DesktopNav from 'DesktopNav'
import MobileNav from 'MobileNav'

import './Header.css'
import LogoText from 'ymc_logo_text_2.svg'
import Logo from 'logo_2_icon.png'

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
          <Navbar light expand="lg" className="py-0 flex-nowrap justify-content-between">
            <NavbarBrand tag="span">
              <Link to="/"><img src={Logo} style={{"width": "64px"}} className="d-none d-sm-inline-block"/><img src={LogoText} alt='Yakima Medical Clinic Logo' className="logo"/></Link>
            </NavbarBrand>
            <DesktopNav className="d-none d-lg-flex" />
            <MobileNav className="d-block d-lg-none"/>
          </Navbar>
        </Col>
      </Row>
    )
  }
}

export default Header;
