import React, { Component } from 'react'

import { Col, Row } from 'reactstrap'
import { Media } from 'reactstrap';

import './education.css'

import education from 'medical_education.jpg'
import pdfIcon from 'round_pdf.svg'
import docIcon from 'doctor.svg'
import heartIcon from 'heart.svg'

class Education extends Component {
  render() {
    return[
      <Row noGutters>
        <Col xs={12} className="education">
          <img src={education} />
        </Col>
      </Row>,
      <Row noGutters className="education justify-content-center">
        <Col xs={12} md={4} className="p-4 text-left">
          <p>
            At Yakima Medical Clinic we strive to provide all patients with the most up-to-date information on chronic or acute illnesses.
          </p>
          <p>
            If our patients don’t have access to any of these resources, our staff will be happy to print out the information needed before they leave the office.
          </p>
        </Col>
        <Col xs={12} md={4} className="p-4 text-left">
          <Media className="mb-4">
            <Media left href="/lab_result_explanation.pdf">
              <Media object src={pdfIcon} alt="Explanation of Labratory Results" />
            </Media>
            <Media body className="ml-3">
              <Media heading>
                <a href="/lab_result_explanation.pdf">Lab Results</a>
              </Media>
              Our staff is happy to explain the results of your examination.  You can also download an explanation of the terminology found in the results here.
            </Media>
          </Media>
          <Media className="mb-4">
            <Media left href="http://www.webmd.com">
              <Media object src={docIcon} alt="WebMD" />
            </Media>
            <Media body className="ml-3">
              <Media heading>
                <a href="http://www.webmd.com">WebMD</a>
              </Media>
                Yakima Medical Clinic providers and staff often us Web MD. Web MD is dedicated to providing quality health information and services to consumers, providers and health plan members.
            </Media>
          </Media>
          <Media className="mb-4">
            <Media left href="http://www.thehartcenter.com">
              <Media object src={heartIcon} alt="Hart Center" />
            </Media>
            <Media body className="ml-3">
              <Media heading>
                <a href="http://www.thehartcenter.com">Hart Center</a>
              </Media>
              The Hart Center is another excellent resource for information on mental health and addiction issues.
            </Media>
          </Media>
        </Col>
      </Row>
    ]
  }
}

export default Education;
