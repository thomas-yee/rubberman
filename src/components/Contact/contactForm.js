import React from "react"
import Title from "../title"

const ContactForm = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <Title title="Let's Talk" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <form action="https://formspree.io/xrgogjke" method="POST">
          <div className="form-row">
            {/*name*/}
            <div className="form-group col-10 col-sm-8 col-md-6">
              <label htmlFor="name">First Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
              ></input>
            </div>
            <div className="form-group col-10 col-sm-8 col-md-6">
              <label htmlFor="name">Last Name</label>
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
              <label htmlFor="email">Email Address</label>
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
              <label htmlFor="phone">Phone</label>
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
            {/*Company*/}
            <label htmlFor="company">Company</label>
            <input
              type="text"
              className="form-control"
              name="company"
              id="company"
            ></input>
          </div>
          <div className="form-group">
            {/*Message*/}
            <div className="form-group">
              <label htmlFor="message">Message</label>
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
            send message
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
