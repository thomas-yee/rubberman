import React, { useState } from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import Logo from "../../images/rubberman.png"

const Header = () => {
  const links = [
    {
      id: 1,
      path: "/",
      text: "home",
    },
    {
      id: 2,
      path: "/products",
      text: "our products",
    },
    {
      id: 3,
      path: "/about",
      text: "about",
    },
    {
      id: 4,
      path: "/contact",
      text: "contact",
    },
  ]

  const [navbarOpen, setNavBarOpen] = useState("false")
  const [navbarClass, setNavbarClass] = useState("collapse navbar-collapse")

  const navbarHandler = () => {
    if (navbarOpen === "true") {
      setNavBarOpen("false")
      setNavbarClass("collapse navbar-collapse")
    } else {
      setNavBarOpen("true")
      setNavbarClass("collapse navbar-collapse show")
    }
  }

  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <Link to="/" className="navbar-brand">
        <img
          className="img-thumbnail"
          src={Logo}
          alt="rubberman logo"
          css={css`
            max-height: 100px;
            width: auto;
          `}
        ></img>
      </Link>
      <button className="navbar-toggler" type="button" onClick={navbarHandler}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={navbarClass}>
        <ul className="navbar-nav mr-sm-3">
          {links.map(link => (
            <li key={link.id} className="nav-item">
              <Link to={link.path} className="nav-link text-capitalize">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Header
