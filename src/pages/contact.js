import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import ContactLayout from "../components/Contact/contactLayout"

const ContactPage = () => {
  const [language, setLanguage] = useState(undefined)

  useEffect(() => {
    setLanguage(localStorage.getItem("language"))
  }, [])

  return (
    <div>
      <Layout>
        <ContactLayout language={language} />
      </Layout>
    </div>
  )
}

export default ContactPage
