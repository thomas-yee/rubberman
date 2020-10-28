import React from "react"
import { Link } from "gatsby"

const ContactUs = props => {
  return (
    <section className="py-6 contact-us">
      <div className="container">
        <div className="row">
          <div className="col-7">
            {props.language === "English" ? (
              <h4>{props.content.English.mainSection.information}</h4>
            ) : (
              <h4>{props.content.Indonesian.mainSection.information}</h4>
            )}
          </div>
          <div className="col-md-3 ml-auto contact-us-button-padding">
            <Link to="/contact/">
              <button className="btn text-uppercase contact-us-button">
                {props.language === "English" ? (
                  <div>{props.content.English.mainSection.contactLink}</div>
                ) : (
                  <div>{props.content.Indonesian.mainSection.contactLink}</div>
                )}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
