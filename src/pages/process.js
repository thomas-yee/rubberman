import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import Process from "../components/Products/theProcess"

const ContactPage = () => {
  const [language, setLanguage] = useState(undefined)

  useEffect(() => {
    setLanguage(localStorage.getItem("language"))
  }, [])

  return (
    <div>
      <Layout>
        <Process language={language} />
      </Layout>
    </div>
  )
}

export default ContactPage
