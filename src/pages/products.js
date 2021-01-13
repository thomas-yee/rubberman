import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import Products from "../components/Products/theProducts"
import ContactUs from "../components/Global/contactUs"

let contactContent = {
  English: {
    mainSection: {
      information: "Still have questions? Get in touch with us",
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

const ProductsPage = () => {
  const [language, setLanguage] = useState(undefined)

  useEffect(() => {
    setLanguage(localStorage.getItem("language"))
  }, [])

  return (
    <div>
      <Layout>
        <Products language={language} />
        <ContactUs language={language} content={contactContent} />
      </Layout>
    </div>
  )
}

export default ProductsPage
