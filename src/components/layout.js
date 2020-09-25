import React from "react"
import Header from "../components/Global/header"
import Footer from "../components/Global/footer"

import "./bootstrap.min.css"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
