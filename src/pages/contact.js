import React from "react"
import Layout from "../components/layout"
import Contact from "../components/Contact/contactForm"
import Locations from "../components/Contact/locations"

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <Contact />
        <Locations />
      </Layout>
    </div>
  )
}

export default ContactPage
