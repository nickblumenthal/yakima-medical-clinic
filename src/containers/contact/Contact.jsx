import React, { Component } from 'react'

import { Col, Row } from 'reactstrap'

import officeFront from 'office_front.jpg'

class Contact extends Component {
  render() {
    return(
      <Row noGutters className="justify-content-center">
        <Col xs={11} md={3} className="text-left">
          <address>
            <b>Yakima Medical Clinic</b><br />
            310 Holton Ave<br />
            Yakima, Washington 98902<br />
            Phone (509) 452-2508<br />
            Fax (509) 452-7316<br />
          </address>
          <p>
            <b>Office Hours:</b><br />
            Monday-Thursday: 8:00am - 5:00pm<br />
            Friday: 8:00am - 3:00pm<br />
          </p>
          <img src={officeFront} style={{'width': '300px'}} alt='Front of the Yakima Medical Clinic'/>
        </Col>
        <Col xs={12} md={7}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2741.6877942047377!2d-120.523866!3d46.59340900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5499d7e055de42ef%3A0x839faf518dc9e375!2sYakima+Medical+Clinic!5e0!3m2!1sen!2sus!4v1409800129049"
            width="100%"
            height="400"
            frameBorder="0"></iframe>
        </Col>
        <Col xs={10} className="text-left mt-4">
          <p>
            If the office is closed at the time of your call, you may leave a general message on the office voice mail. That call will be returned during the next business day.<br />

            To contact the physician on call, please call the Medical Exchange at (509) 494-8136.
          </p>

          <h4>Caution regarding email communications</h4>
          <p>
            Information sent via email to Yakima Medical Clinic concerning personal health care issues or billing information may be not be secure. Yakima Medical Clinic cannot be held liable for unauthorized use of this information by outside parties. Please use caution in emailing privacy-related information to Yakima Medical Clinic. All return correspondence to patients will be by phone or in person.
          </p>
        </Col>
      </Row>
    )
  }
}

export default Contact;
