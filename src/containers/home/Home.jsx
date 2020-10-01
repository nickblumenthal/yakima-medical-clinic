import React, { Component } from 'react'

import { Row, Col, Jumbotron } from 'reactstrap'
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody, CardLink } from 'reactstrap';
import { Media } from 'reactstrap';
import { FiPhone } from 'react-icons/fi';

import './home.css'

import TeamPhoto from 'team_large.jpg'
import SynergyPhoto from 'synergy_logo.png'
import MwlcyPhoto from 'mwlcy_logo.svg'
import SuboxonePhoto from 'suboxone_logo.png'
import { stethoscope_2, heart_2 } from 'data_icons/stethoscope'
import telehealthIcon from 'telemedicine.png'
import hospital from 'hospital.png'

class Home extends Component {
  render() {
    return [
        <Row noGutters key={1}>
          <Col xs={12}>
            <img src={TeamPhoto} className="banner"/>
            <p className="main-description text-left text-sm-center">
              Yakima Medical Clinic provides a full range of general practice medical services for family members of all ages. We serve patients across Washington state - all from our office in Yakima.

              We provide walk-in and urgent care medical services during our clinic hours - even if you don't have an appointment.
              <div className="main-description text-center mb-0 pb-0">
                <a className="btn btn-dark flex align-items-center" role="button" href="tel:509-452-2508">
                  <FiPhone style={{top: -1, position: "relative"}}/>
                  <span className="pl-2">Call Now: (509) 452-2508</span>
                </a>
              </div>
            </p>
          </Col>
        </Row>,
        <Row noGutters className="justify-content-around m-5" key={2}>
          <Col xs={12} lg={3}>
            <Media className="pb-4">
              <Media left className="pr-sm-2 d-none d-sm-block">
                <Media object src={telehealthIcon} height="64" width="64"/>
              </Media>
              <Media body className="text-left">
                <Media heading>
                  Telehealth
                </Media>
                We're happy to provide telehealth visits for all patients.  To get started <a href="./ymc_med_docs.pdf">download</a> our new patient forms and contact us to schedule an appointment.
              </Media>
            </Media>
          </Col>
          <Col xs={12} lg={3}>
            <Media className="pb-4">
              <Media left className="pr-sm-2 d-none d-sm-block">
                <Media object src={stethoscope_2} height="64" width="64"/>
              </Media>
              <Media body className="text-left">
                <Media heading>
                  Care Providers
                </Media>
                Our team of highly skilled care providers work closely with patients to determine the optimal therapy or treatment to ensure good health.

                Our doctors provide specialized services in treating obesity through weight loss medication as well as pain management medication.
              </Media>
            </Media>
          </Col>
          <Col xs={12} lg={3} className="pb-4">
            <Media className="pb-4">
              <Media left className="pr-sm-2 d-none d-sm-block">
                <Media object src={hospital} height="64" width="64"/>
              </Media>
              <Media body className="text-left">
                <Media heading>
                  Opioid Dependency
                </Media>
                Yakima Medical Clinic specializes in Suboxone to help treat chemical dependency.  Dr. Vye is board certified in addiction medicine, and our trained staff has years of experience in providing the tools necessary to reach full recovery.
              </Media>
            </Media>
          </Col>
        </Row>
    ]
  }
}

export default Home;
