import React, { useState, useEffect } from "react"
import Header from "../components/Global/header"
import Footer from "../components/Global/footer"

import "./bootstrap.min.css"
import "./layout.css"

const Layout = ({ children }) => {
  const [language, setLanguage] = useState(undefined)

  const storeLanguageInLocalStorage = language => {
    localStorage.setItem("language", language)
  }

  useEffect(() => {
    setLanguage(localStorage.getItem("language"))
  }, [])

  return (
    <div>
      <Header
        language={language}
        handleSetLanguage={language => {
          window.location.reload()
          storeLanguageInLocalStorage(language)
        }}
      />
      {children}
      <Footer language={language} />
    </div>
  )
}

export default Layout
