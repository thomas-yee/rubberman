import React from "react"
import Contact from "../Contact/contactForm"
import Locations from "../Contact/locations"

const ContactLayout = props => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <Contact language={props.language} />
          </div>
          <div className="col">
            <Locations />
          </div>
        </div>
        <div className="row"></div>
      </div>
    </section>
  )
}

export default ContactLayout
