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
        <Col xs={5} className="text-left">
          © 2005-{this.currentYear()} Yakima Medical Clinic, PC<br />
          Open: Monday-Thursday 8-5; Fridays 8-3
        </Col>
        <Col xs={5} className="text-right">
          <address>
            Yakima Medical Clinic, PC<br />
            310 Holton Avenue<br />
            Yakima, WA 98902<br />
            Phone: 509.452.2508<br />
          </address>
        </Col>
      </Row>
    )
  }


}

export default Footer
