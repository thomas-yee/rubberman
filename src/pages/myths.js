import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import Myths from "../components/About/mythsVsFacts"

const ContactPage = () => {
  const [language, setLanguage] = useState(undefined)

  useEffect(() => {
    setLanguage(localStorage.getItem("language"))
  }, [])

  return (
    <div>
      <Layout>
        <Myths language={language} />
      </Layout>
    </div>
  )
}

export default ContactPage
