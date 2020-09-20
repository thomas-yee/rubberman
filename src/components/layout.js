import React from "react"
import Header from "../components/header"

import "./bootstrap.min.css"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default Layout
