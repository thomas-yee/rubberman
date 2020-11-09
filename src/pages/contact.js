import React from "react"
import Layout from "../components/layout"
import Contact from "../components/Contact/contactForm"
import Locations from "../components/Contact/locations"
import ContactLayout from "../components/Contact/contactLayout"

const ContactPage = () => {
  const languageStoredInLocalStorage = localStorage.getItem("language")
  return (
    <div>
      <Layout>
        <ContactLayout language={languageStoredInLocalStorage} />
      </Layout>
    </div>
  )
}

export default ContactPage
