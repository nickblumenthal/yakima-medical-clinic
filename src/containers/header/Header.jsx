import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    return(
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/education">Patient Education</NavLink>
            <NavLink to="/information">New Patient Information</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header;
