import React, { Component } from 'react'

import { Row, Col } from 'reactstrap'

import './footer.css'

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  currentYear() {
    let date = new Date();
    return date.getFullYear();
  }

  render() {
    return (
      <Row noGutters className="footer justify-content-center pt-4">
        <Col xs={10} md={5} className="text-sm-center text-md-left">
          © 2005-{this.currentYear()} Yakima Medical Clinic, PC<br />
          Open: Mon-Thurs 8-5; Fri 8-3
        </Col>
        <Col xs={10} md={5} className="text-sm-center text-md-right">
          <address>
            <span className="d-none d-sm-inline">Yakima Medical Clinic</span><br />
            310 Holton Avenue<br />
            Yakima, WA 98902<br />
            Phone: (509) 452-2508<br />
          </address>
        </Col>
      </Row>
    )
  }


}

export default Footer
