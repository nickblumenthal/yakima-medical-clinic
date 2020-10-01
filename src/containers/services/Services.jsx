import React, { Component } from 'react'

import { Col, Row } from 'reactstrap'

import './services.css'

class Services extends Component {
  render() {
    return[
      <Row noGutters className="justify-content-center p-4">
        <Col xs={12} md={10} className="text-left">
          <h2>Family Medicine</h2>
          <p>
            Yakima Medical Clinic provides a full range of family practice medical services for family members of all ages in the Yakima area. Our highly qualified care providers offer comprehensive well child and adult exams. Our practice includes a bilingual provider to better serve patients who speak Spanish.
          </p>
        </Col>
      </Row>,
      <Row noGutters className="justify-content-center p-4">
        <Col xs={12} md={10} className="text-left">
          <h2>Telemedicine Visits</h2>
          <p>
            We strive to make all of our services as easy and accessible as possible.  We are proud to offer telemedicine visits.
            Simply schedule an appointment and one of our care providers will be happy to video chat with you from the comfort of your home.
          </p>
        </Col>
      </Row>,
      <Row noGutters className="justify-content-center p-4">
        <Col xs={12} md={10} className="text-left">
          <h2>Pain Management and Weight Loss</h2>
          <p>
            We assist patients with pain management when clinically necessary and recommend physician monitored weight-loss medications when medically appropriate.
          </p>
        </Col>
      </Row>,
      <Row noGutters className="justify-content-center p-4">
        <Col xs={12} md={10} className="text-left">
          <h2>Suboxone Treatment for Opiate Addiction</h2>
          <p>
            An area of specialization at Yakima Medical Clinic is a clinic for addiction treatments. Our treatments include Suboxone (buprenorphine), a medication used to treat opiate dependence and addiction. For more information, <a href="./suboxone_info.pdf">click here</a>.
          </p>
        </Col>
      </Row>
    ]
  }
}

export default Services;
