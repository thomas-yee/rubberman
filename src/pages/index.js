import React from "react"
import Layout from "../components/layout"
import Info from "../components/Home/info"
import Intro from "../components/Home/intro"
import LogoSection from "../components/Home/logoSection"
import ContactUs from "../components/Global/contactUs"

const IndexPage = () => {
  const languageStoredInLocalStorage = localStorage.getItem("language")

  let contactContent = {
    English: {
      mainSection: {
        information:
          "Interested in partnering with us? Become part of the Rubberman team!",
        contactLink: "Contact Us",
      },
    },
    Indonesian: {
      mainSection: {
        information: "XXXX",
        contactLink: "XXXX",
      },
    },
  }
  return (
    <div>
      <Layout>
        <Intro language={languageStoredInLocalStorage} />
        <Info language={languageStoredInLocalStorage} />
        <LogoSection language={languageStoredInLocalStorage} />
        <ContactUs
          language={languageStoredInLocalStorage}
          content={contactContent}
        />
      </Layout>
    </div>
  )
}

export default IndexPage
