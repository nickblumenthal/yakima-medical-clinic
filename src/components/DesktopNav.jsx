import React, { Component } from 'react'

import { Link, NavLink } from 'react-router-dom'
import { Row, Col, Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap'

const DesktopNav = (props) => {
  return (
    <Nav navbar className="justify-content-end" {...props}>
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
        <NavLink exact to="/information">New Patient</NavLink>
      </NavItem>
      <NavItem>
        <NavLink exact to="/contact">Contact</NavLink>
      </NavItem>
      <NavItem>
        <a href='http://www.yourhealthfile.com'>YourHealthFile</a>
      </NavItem>
    </Nav>
  )
};

export default DesktopNav;
