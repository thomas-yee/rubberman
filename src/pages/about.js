import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import ContactUs from "../components/Global/contactUs"

const AboutPage = () => {
  const [language, setLanguage] = useState(undefined)

  useEffect(() => {
    setLanguage(localStorage.getItem("language"))
  }, [])

  let contactContent = {
    English: {
      mainSection: {
        information: "Want to learn more? Get in touch with us",
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
        {/* <Info language={language} /> */}
        <ContactUs language={language} content={contactContent} />
      </Layout>
    </div>
  )
}

export default AboutPage
