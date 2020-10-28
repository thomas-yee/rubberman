import React from "react"
import Layout from "../components/layout"
import Info from "../components/About/info"
import ContactUs from "../components/Global/contactUs"

const AboutPage = () => {
  const languageStoredInLocalStorage = localStorage.getItem("language")

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
        <Info language={languageStoredInLocalStorage} />
        <ContactUs
          language={languageStoredInLocalStorage}
          content={contactContent}
        />
      </Layout>
    </div>
  )
}

export default AboutPage
