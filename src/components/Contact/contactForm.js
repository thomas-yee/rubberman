import React from "react"
import Title from "../title"

const ContactForm = props => {
  let content = {
    English: {
      intro:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor",
      firstName: "First Name",
      lastName: "Last Name",
      emailAddress: "Email Address",
      phone: "Phone",
      message: "Message",
      button: "Send Message",
    },
    Indonesian: {
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
    <section className="py-5 bg-light">
      {checkLanguage()}
      <div className="container">
        <Title title="Let's Talk" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">{content.intro}</p>
          </div>
        </div>
        <form action="https://formspree.io/xrgogjke" method="POST">
          <div className="form-row">
            {/*name*/}
            <div className="form-group col-10 col-sm-8 col-md-6">
              <label htmlFor="name">{content.firstName}</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
              ></input>
            </div>
            <div className="form-group col-10 col-sm-8 col-md-6">
              <label htmlFor="name">{content.lastName}</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
              ></input>
            </div>
          </div>
          <div className="form-row">
            {/*Email*/}
            <div className="form-group col-10 col-sm-8 col-md-6">
              <label htmlFor="email">{content.emailAddress}</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="you@example.com"
              ></input>
            </div>
            {/*Phone number*/}
            <div className="form-group col-10 col-sm-8 col-md-6">
              <label htmlFor="phone">{content.phone}</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                id="phone"
                placeholder="(000)-203-2039"
              ></input>
            </div>
          </div>
          <div className="form-group">
            {/*Message*/}
            <div className="form-group">
              <label htmlFor="message">{content.message}</label>
              <textarea
                type="text"
                className="form-control"
                name="message"
                id="message"
                rows="4"
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
