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
            Yakima Medical Clinic provides a full range of family practice medical services for family members of all ages in the Yakima area. Our highly qualified care providers offer comprehensive well child and adult exams.

            We assist patients with pain management when clinically necessary.

            Our comprehensive lifestyle program addresses a full range of medical concerns. We specialize in assisting patients with weight loss by developing a specific lifestyle program and prescribing a weight loss medication as needed.

            Our practice includes a bilingual provider to better serve patients who speak Spanish.
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
          <h2>Chemical Dependence Treatment</h2>
          <p>
            Yakima Medical Clinic offers treatment and medication management for drugs of abuse such as alcohol, cocaine and meth. These treatments are offered to all ages who are willing to start the process to a clean and successful lifestyle.
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
