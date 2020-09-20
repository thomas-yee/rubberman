import React, { useState } from "react"
import { Link } from "gatsby"
import Logo from "../images/rubberman.png"

const Header = () => {
  const links = [
    {
      id: 1,
      path: "/",
      text: "home",
    },
    {
      id: 2,
      path: "/about",
      text: "about",
    },
    {
      id: 3,
      path: "/contact",
      text: "contact",
    },
  ]

  const [navbarOpen, setNavBarOpen] = useState("false")
  const [navbarClass, setNavbarClass] = useState("collapse navbar-collapse")

  const navbarHandler = () => {
    console.log("hello")
  }

  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <Link to="/" className="navbar-brand">
        <img className="img-thumbnail" src={Logo} alt="rubberman logo"></img>
      </Link>
      <button className="navbar-toggler" type="button" onClick={navbarHandler}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={navbarClass}>
        <ul className="navbar-nav mx-auto"></ul>
      </div>
    </nav>
  )
}

export default Header
