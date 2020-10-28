import React from "react"
import Layout from "../components/layout"
import Info from "../components/Home/info"
import Intro from "../components/Home/intro"
import LogoSection from "../components/Home/logoSection"
import ContactUs from "../components/Home/contactUs"

const IndexPage = () => {
  const languageStoredInLocalStorage = localStorage.getItem("language")

  return (
    <div>
      <Layout>
        <Intro language={languageStoredInLocalStorage} />
        <Info language={languageStoredInLocalStorage} />
        <LogoSection language={languageStoredInLocalStorage} />
        <ContactUs language={languageStoredInLocalStorage} />
      </Layout>
    </div>
  )
}

export default IndexPage
