import React, { Component } from 'react'

import { Row, Col, Jumbotron } from 'reactstrap'
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';
 import { Media } from 'reactstrap';

import './home.css'

import TeamPhoto from 'team_large.jpg'
import SynergyPhoto from 'synergy_logo.png'
import MwlcyPhoto from 'mwlcy_logo.svg'
import SuboxonePhoto from 'suboxone_logo.png'
import { stethoscope, heart } from 'data_icons/stethoscope'

class Home extends Component {
  render() {
    return [
        <Row noGutters>
          <Col xs={12}>
            <img src={TeamPhoto} />
            <p className="main-description text-left text-sm-center">
              Yakima Medical Clinic provides a full range of general practice medical services for family members of all ages. We serve patients from Eastern Washington and Central Washington communities including the Lower Yakima Valley, Ellensburg, Tri-Cities, and Moses Lake - all from our office in Yakima.

              We provide walk-in and urgent care medical services during our clinic hours - even if you are not a current patient and don't have an appointment.
            </p>
          </Col>
        </Row>,
        <Row noGutters className="justify-content-around m-5">
          <Col xs={12} lg={5}>
            <Media className="pb-4">
              <Media left className="pr-sm-2 d-none d-sm-block">
                <Media object src={stethoscope} />
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
                <Media object src={heart} />
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
        <Row noGutters className="justify-content-center card-row py-2 p-sm-4">
          <Col xs={12} md={10}>
            <CardDeck>
              <Col md={12} lg={4}>
                <Card>
                  <CardImg top width="100%" src={SynergyPhoto} alt="Synergy MedAesthetics" />
                  <CardBody>
                    <CardTitle>A New You</CardTitle>
                    <CardSubtitle>Now Serving Tri-Cities</CardSubtitle>
                    <CardText>Synergy has partnered with Yakima Medical Center to offer cutting edge cosmetic and body sculpting procedures</CardText>
                    <a href="http://synergymedaesthetics.com/"><Button>Visit</Button></a>
                  </CardBody>
                </Card>
              </Col>
              <Col md={12} lg={4}>
                <Card>
                  <CardImg top width="100%" src={MwlcyPhoto} alt="Medical Weight Loss Center Yakima" />
                  <CardBody>
                    <CardTitle>Sustainable Weight Loss</CardTitle>
                    <CardSubtitle>with Candace Degesnstein</CardSubtitle>
                    <CardText>Meet your health and wellness goals with our specialized nutrition and exercise plans tailored to your specific needs.</CardText>
                    <Button>Book a consultation</Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md={12} lg={4}>
                <Card>
                  <CardImg top width="100%" src={SuboxonePhoto} alt="Suboxone Logo" />
                  <CardBody>
                    <CardTitle>Suboxone</CardTitle>
                    <CardSubtitle>Dependency Treatment</CardSubtitle>
                    <CardText>Yakima Medical Clinic provides specializes in Suboxone to help heal chemical dependency.  Our trained staff has years of experience in providing the tools necessary to reach full recovery.</CardText>
                    <a href="/suboxone_info.pdf"><Button>Find out more</Button></a>
                  </CardBody>
                </Card>
              </Col>
            </CardDeck>
          </Col>
        </Row>
    ]
  }
}

export default Home;
