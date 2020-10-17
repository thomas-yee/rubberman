import React, { useState } from "react"
import Header from "../components/Global/header"
import Footer from "../components/Global/footer"

import "./bootstrap.min.css"
import "./layout.css"

const Layout = ({ children }) => {
  const languageStoredInLocalStorage = localStorage.getItem("language")
  const [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
  )

  const storeLanguageInLocalStorage = language => {
    localStorage.setItem("language", language)
  }

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
