import React, {Component} from 'react'

import {Col, Row} from 'reactstrap'

class Information extends Component {
  render() {
    return (
      <Row noGutters className="justify-content-center">
        <Col xs={10} className="text-left">
          <section>
            <h3>Medical Insurance</h3>
            <p>
              Medical Insurance We are currently accepting the following insurance plans:
              <ul>
                <li>Yakima Medical Clinic</li>
                <li>Apple Care</li>
                <li>Cigna</li>
                <li>Coordinated Care</li>
                <li>First Choice</li>
                <li>First Health</li>
                <li>Great West</li>
                <li>Kaiser Permanente</li>
                <li>Medicare</li>
                <li>Molina</li>
                <li>PHCO</li>
                <li>PHCS</li>
                <li>Premera</li>
                <li>Regence</li>
                <li>Untied Health Care</li>
              </ul>
            </p>
          </section>
          <section>
            <h3>Co-pays</h3>
            <p>
            All co-pays are due at the time of service.
            </p>
          </section>
          <section>
            <h3>Patients without Insurance</h3>
            <p>
              New Patients without medical insurance are required to pay $100.00 before the time of service. Established patients are required to pay $50.00 before the time of service. All remaining balances need to be paid within 30 days unless the patient sets up payment arrangements with the billing coordinator.
            </p>
          </section>
          <section>
            <h3>Medical Records</h3>
            <p>
              If you are requesting any medical record information, we require that the patient sign a medical records release form. Upon receiving the release form, charts are copied by IOD Incorporated and mailed within 1-3 working days after they are completed. Please feel free to contact IOD Incorporated at 1-877-328-7344 ext 72 for their price list. Download the Authorization for Release of Information [PDF File pdf 99 KB]
            </p>
          </section>
          <section>
            <h3>Prescriptions</h3>
            <p>
              Please call your pharmacy to request a refill. They will then contact our office for approval. We require 24-48 hours to refill a medication. We no longer fax prescriptions to mail away pharmacies. You may call our office and request a written prescription which will be signed and given to the patient, which in turn can be mailed in by them.
            </p>
          </section>
        </Col>
        Information
      </Row>
    )
  }
}

export default Information;
