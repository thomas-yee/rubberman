import React from "react"
import Title from "../title"

const ContactForm = () => {
  return (
    <section className="py-5">
      <div>
        <Title title="contact us" />
        <div className="row">
          <div className="col-10 col-sm-8 col-md-6 mx-auto">
            <form action="https://formspree.io/xrgogjke" method="POST">
              {/*name*/}
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                ></input>
              </div>
              {/*Email*/}
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id="email"
                ></input>
              </div>
              {/*Company*/}
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  className="form-control"
                  name="company"
                  id="company"
                ></input>
              </div>
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
              {/*Submit*/}
              <button
                type="submit"
                className="btn btn-blue text-capitalize bt-5"
              >
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
