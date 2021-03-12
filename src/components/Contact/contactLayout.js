import React from "react"
import Contact from "../Contact/contactForm"
import Locations from "../Contact/locations"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Background from "../../images/contact_1.jpg"
import Image from "react-bootstrap/Image"

const ContactLayout = props => {
  return (
    <section className="">
      <div className="container-fluid">
        <Row className="pt-3">
          <Image
            className="contactMapBackground"
            src={Background}
            fluid
          ></Image>
          <Row className="contactForm">
            <Col className="col-12 col-xl-6">
              <Contact language={props.language} />
            </Col>
            <Col className="col-12 col-xl-6 pt-5">
              <Locations />
            </Col>
          </Row>
        </Row>
      </div>
    </section>
  )
}

export default ContactLayout
