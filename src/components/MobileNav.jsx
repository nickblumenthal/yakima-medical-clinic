import React, { Component } from 'react'

import { Link, NavLink } from 'react-router-dom'
import { Row, Col, Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap'
import { slide as Menu } from 'react-burger-menu'
import DesktopNav from 'DesktopNav'

import './mobileNav.css'

class MobileNav extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};
  }

  toggleMenu() {
    this.setState({isOpen: !this.state.isOpen})
  }

  render() {
      return (
        <div {...this.props}>
          <Menu right width={"100%"} onClick={this.toggleMenu} isOpen={this.state.isOpen}>
            <DesktopNav />
          </Menu>
        </div>
      )
  }
}

export default MobileNav
