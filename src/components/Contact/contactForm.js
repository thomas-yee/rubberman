import React from "react"
import Title from "../title"

const ContactForm = props => {
  let content = {
    English: {
      title: "Let's Talk",
      intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      firstName: "First Name*",
      lastName: "Last Name*",
      emailAddress: "Email*",
      phone: "Phone",
      message: "Message*",
      button: "Submit",
    },
    Indonesian: {
      title: "Let's Talk",
      intro: "XXX",
      firstName: "XXX",
      lastName: "XXX",
      emailAddress: "XXX",
      phone: "XXX",
      message: "XXX",
      button: "XXX",
    },
  }

  const checkLanguage = () => {
    props.language === "English"
      ? (content = content.English)
      : (content = content.Indonesian)
  }

  return (
    <section className="py-5">
      {checkLanguage()}
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 col-sm-8 mb-2">
            <h3>{content.title}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-10 col-sm-8">
            <p className="lead text-muted mb-5">{content.intro}</p>
          </div>
        </div>
        <form action="https://formspree.io/xrgogjke" method="POST">
          <div className="form-row">
            {/*name*/}
            <div className="form-group col-10 col-sm-8 col-md-6">
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder={content.firstName}
              ></input>
            </div>
            <div className="form-group col-10 col-sm-8 col-md-6">
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder={content.lastName}
              ></input>
            </div>
          </div>
          <div className="form-row">
            {/*Email*/}
            <div className="form-group col-10 col-sm-8 col-md-6">
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder={content.emailAddress}
              ></input>
            </div>
            {/*Phone number*/}
            <div className="form-group col-10 col-sm-8 col-md-6">
              <input
                type="text"
                className="form-control"
                name="phone"
                id="phone"
                placeholder={content.phone}
              ></input>
            </div>
          </div>
          <div className="form-group">
            {/*Message*/}
            <div className="form-group">
              <textarea
                type="text"
                className="form-control"
                name="message"
                id="message"
                rows="4"
                placeholder={content.message}
              ></textarea>
            </div>
          </div>
          {/*Submit*/}
          <button type="submit" className="btn btn-blue text-capitalize btn-lg">
            {content.button}
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
