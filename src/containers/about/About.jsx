import React, { Component } from 'react'


import { Row, Col, Jumbotron } from 'reactstrap'

import './about.css'

import vyeHeadshot from 'vye_headshot.jpg'
import lopezHeadshot from 'lopez_headshot.jpg'


class About extends Component {
  render() {
    return[
      <Row noGutters className="goal-statement py-2 p-4">
        <blockquote class="blockquote">
          Our goal at the Yakima Medical Clinic is to provide you with the best possible care suited to your individual needs. We treat each patient with <em>respect, compassion, and honesty</em>.
          <footer class="blockquote-footer">Dr. Vye</footer>
        </blockquote>
      </Row>,
      <Row noGutters className="bio py-2 p-4 mt-4 justify-content-center">
        <Col xs={12} lg={4}>
          <img src={vyeHeadshot} className="headshot"/>
        </Col>
        <Col xs={12} lg={7}>
          <h2>Dr. T. Kent Vye</h2>
          <p>
            Dr. Vye graduated in 1985 from the University of Health Sciences, College of Osteopathic Medicine in Kansas City, Missouri. He then moved to Detroit, Michigan, where he completed his rotating medical internship at Garden City Hospital. Dr. Vye relocated to Yakima after his internship and has been practicing here since 1988.
          </p>
          <p>
            Dr, Vye retains the following certifications:

            Board Certified Family Medicine, received in 1994.
            Board Certified Addiction Medicine, received in 2002.
          </p>
        </Col>
        <Col xs={12} className="justify-content-center mt-4">
          <hr />
        </Col>
      </Row>,
      <Row noGutters className="bio py-2 p-4 justify-content-center">
        <Col xs={12} lg={4}>
          <img src={lopezHeadshot} className="headshot"/>
        </Col>
        <Col xs={12} lg={7}>
          <h2>Salvador Lopez</h2>
          <p>
            Salvador Lopez PA-C, is a native to the Yakima Valley and received his Masters of Science Physician Assistant from Heritage University. In addition, Salvador earned his bachelors in Medical Biology with high honors from Heritage University in 2013. He also worked in chronic pain for nearly a year, where he learned an interdisciplinary approach to ease the pain and suffering of those living with chronic pain while improving their quality of life.  Salvador is a member of the WAPA and the AAPA, state and national PA organizations. 
          </p>
          <p>
            Salvador has resided in the Yakima Valley for over 29 years and has created many ties throughout the community and he looks forward to providing the highest quality medical care possible to the community where he grew up. He enjoys spending time with his wife, two young boys, and his baby girl. He also enjoys barbequing, fishing with his sons, spending time with friends, and being outdoors.
          </p>
        </Col>
      </Row>
    ]
  }
}

export default About;
