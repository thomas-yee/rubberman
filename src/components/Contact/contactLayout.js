import React from "react"
import Contact from "../Contact/contactForm"
import Locations from "../Contact/locations"
import Col from "react-bootstrap/Col"

const ContactLayout = props => {
  return (
    <section className="">
      <div className="container-fluid">
        <div className="row contactMapBackground pt-3">
          <Col>
            <Contact language={props.language} />
          </Col>
          <Col className="col pt-5">
            <Locations />
          </Col>
        </div>
      </div>
    </section>
  )
}

export default ContactLayout
