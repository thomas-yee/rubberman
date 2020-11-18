import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import Info from "../components/Home/info"
import Intro from "../components/Home/intro"
import LogoSection from "../components/Home/logoSection"
import ContactUs from "../components/Global/contactUs"
import IconSection from "../components/Home/iconSection"

const IndexPage = () => {
  const [language, setLanguage] = useState(undefined)

  useEffect(() => {
    setLanguage(localStorage.getItem("language"))
  }, [])

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
        <Intro language={language} />
        <IconSection language={language} />
        <Info language={language} />
        <LogoSection language={language} />
        <ContactUs language={language} content={contactContent} />
      </Layout>
    </div>
  )
}

export default IndexPage
