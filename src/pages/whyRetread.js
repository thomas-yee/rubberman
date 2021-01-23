import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import Retread from "../components/About/retread"

const ContactPage = () => {
  const [language, setLanguage] = useState(undefined)

  useEffect(() => {
    setLanguage(localStorage.getItem("language"))
  }, [])

  return (
    <div>
      <Layout>
        <Retread language={language} />
      </Layout>
    </div>
  )
}

export default ContactPage
