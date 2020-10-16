import React from "react"
import Layout from "../components/layout"
import Info from "../components/About/info"

const AboutPage = () => {
  const languageStoredInLocalStorage = localStorage.getItem("language")
  return (
    <div>
      <Layout>
        <Info language={languageStoredInLocalStorage} />
      </Layout>
    </div>
  )
}

export default AboutPage
