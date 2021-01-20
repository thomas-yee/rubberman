import React from "react"
import Contact from "../Contact/contactForm"
import Locations from "../Contact/locations"

const ContactLayout = props => {
  return (
    <section className="">
      <div className="container-fluid">
        <div className="row contactMapBackground pt-3">
          <div className="col">
            <Contact language={props.language} />
          </div>
          <div className="col pt-5">
            <Locations />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactLayout
