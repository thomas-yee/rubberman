import React from "react"
import Layout from "../components/layout"
import Contact from "../components/Contact/contactForm"
import Locations from "../components/Contact/locations"

const ContactPage = () => {
  const languageStoredInLocalStorage = localStorage.getItem("language")
  return (
    <div>
      <Layout>
        <Contact language={languageStoredInLocalStorage} />
        <Locations />
      </Layout>
    </div>
  )
}

export default ContactPage
