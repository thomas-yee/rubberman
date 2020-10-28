import React from "react"
import { Link } from "gatsby"

const ContactUs = props => {
  let content = {
    English: {
      mainSection: {
        information:
          "Interested in partnering with us? Become part of the Rubberman team!",
        contactLink: "Contact Us",
      },
    },
    Indonesian: {
      mainSection: {
        information: "XXXX",
        contactLink: "XXXX",
      },
    },
  }

  const checkLanguage = () => {
    props.language === "English"
      ? (content = content.English)
      : (content = content.Indonesian)
  }
  return (
    <section className="py-6 contact-us contact-us-padding">
      {checkLanguage()}
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h4>{content.mainSection.information}</h4>
          </div>
          <div className="col-md-3 ml-auto contact-us-button-padding">
            <Link to="/contact/">
              <button className="btn text-uppercase contact-us-button">
                {content.mainSection.contactLink}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
