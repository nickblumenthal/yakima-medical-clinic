import React, { Component } from 'react'

import { Row, Col, Jumbotron } from 'reactstrap'
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody, CardLink } from 'reactstrap';
 import { Media } from 'reactstrap';

import './home.css'

import TeamPhoto from 'team_large.jpg'
import SynergyPhoto from 'synergy_logo.png'
import MwlcyPhoto from 'mwlcy_logo.svg'
import SuboxonePhoto from 'suboxone_logo.png'
import { stethoscope_2, heart_2 } from 'data_icons/stethoscope'

class Home extends Component {
  render() {
    return [
        <Row noGutters key={1}>
          <Col xs={12}>
            <img src={TeamPhoto} className="banner"/>
            <p className="main-description text-left text-sm-center">
              Yakima Medical Clinic provides a full range of general practice medical services for family members of all ages. We serve patients from Eastern Washington and Central Washington communities including the Lower Yakima Valley, Ellensburg, Tri-Cities, and Moses Lake - all from our office in Yakima.

              We provide walk-in and urgent care medical services during our clinic hours - even if you are not a current patient and don't have an appointment.
            </p>
          </Col>
        </Row>,
        <Row noGutters className="justify-content-around m-5" key={2}>
          <Col xs={12} lg={5}>
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
          <Col xs={12} lg={5}>
            <Media>
              <Media left className="pr-sm-2 d-none d-sm-block">
                <Media object src={heart_2} height="64" width="64"/>
              </Media>
              <Media body className="text-left">
                <Media heading>
                  Addiction Treatment
                </Media>
                An additional area of specialty we offer is evaluation and treatment management for drugs of abuse such as cocaine, alcohol and meth. Dr. Vye also specializes in Addiction Treatments with Suboxone, which is utilized for opiate addiction.
              </Media>
            </Media>
          </Col>
        </Row>,
        <Row noGutters className="justify-content-center"><Col xs={10} className="border border-top-0"></Col></Row>,
        <Row noGutters className="justify-content-around card-row py-2 p-sm-4" key={3}>
          <Col xs={12} md={10} lg={4} className="px-4">

              <a href="http://synergymedaesthetics.com/"><img width="100%" src={SynergyPhoto} alt="Synergy MedAesthetics" /></a>
              <CardBody>
                <CardTitle>A New You</CardTitle>
                <CardSubtitle>Now Serving Tri-Cities</CardSubtitle>
                <CardText>Synergy has partnered with Yakima Medical Center to offer cutting edge cosmetic and body sculpting procedures</CardText>
                <CardLink href="http://synergymedaesthetics.com/">Visit</CardLink>
              </CardBody>
              <hr  className="d-lg-none"/>
          </Col>
          <Col xs={12} md={10} lg={4} className="bordered-lg px-4">

              <a href="http://mwlcy.com"><img width="100%" src={MwlcyPhoto} alt="Medical Weight Loss Center Yakima" /></a>
              <CardBody>
                <CardTitle>Sustainable Weight Loss</CardTitle>
                <CardText>Meet your health and wellness goals with our specialized nutrition and exercise plans tailored to your specific needs.</CardText>
                <CardLink href="mailto:scheduling@yakimamedicalclinic.com">Book a consultation</CardLink>
              </CardBody>
              <hr  className="d-lg-none"/>
          </Col>
          <Col xs={12} md={10} lg={4} className="px-4">

              <a href="/suboxone_info.pdf"><img width="100%" src={SuboxonePhoto} alt="Suboxone Logo" /></a>
              <CardBody>
                <CardTitle>Suboxone</CardTitle>
                <CardSubtitle>Dependency Treatment</CardSubtitle>
                <CardText>Yakima Medical Clinic specializes in Suboxone to help heal chemical dependency.  Our trained staff has years of experience in providing the tools necessary to reach full recovery.</CardText>
                <CardLink href="/suboxone_info.pdf">Find out more</CardLink>
              </CardBody>
          </Col>
        </Row>
    ]
  }
}

export default Home;
