import React, { useState } from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import Logo from "../../images/rubberman.png"

const Header = props => {
  const [navbarOpen, setNavBarOpen] = useState("false")
  const [navbarClass, setNavbarClass] = useState("collapse navbar-collapse")

  let links = {
    English: {
      home: {
        id: 1,
        path: "/",
        text: "home",
      },
      products: {
        id: 2,
        path: "/products",
        text: "our products",
      },
      about: {
        id: 3,
        path: "/about",
        text: "about",
      },
      contact: {
        id: 4,
        path: "/contact",
        text: "contact",
      },
    },
    Indonesian: {
      home: {
        id: 1,
        path: "/",
        text: "XXX",
      },
      products: {
        id: 2,
        path: "/products",
        text: "XXX",
      },
      about: {
        id: 3,
        path: "/about",
        text: "XXX",
      },
      contact: {
        id: 4,
        path: "/contact",
        text: "XXX",
      },
    },
  }

  const checkLanguage = () => {
    props.language === "English"
      ? (links = links.English)
      : (links = links.Indonesian)
  }

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
    <div className="container">
      {checkLanguage()}
      <nav className="navbar sticky-top navbar-expand-sm navbar-light no-padding-sides">
        <Link to="/" className="navbar-brand">
          <img
            src={Logo}
            alt="rubberman logo"
            css={css`
              max-height: 80px;
              width: auto;
            `}
          ></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={navbarHandler}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={navbarClass}>
          <ul className="navbar-nav ml-auto">
            <select
              className="custom-select"
              value={props.language}
              onChange={e => props.handleSetLanguage(e.target.value)}
            >
              <option value="English">English</option>
              <option value="Indonesian">Indonesian</option>
            </select>
            <li key={links.home.id} className="nav-item">
              <Link to={links.home.path} className="nav-link text-capitalize">
                {links.home.text}
              </Link>
            </li>
            <li key={links.products.id} className="nav-item">
              <Link
                to={links.products.path}
                className="nav-link text-capitalize"
              >
                {links.products.text}
              </Link>
            </li>
            <li key={links.about.id} className="nav-item">
              <Link to={links.about.path} className="nav-link text-capitalize">
                {links.about.text}
              </Link>
            </li>
            <li key={links.contact.id} className="nav-item">
              <Link
                to={links.contact.path}
                className="nav-link text-capitalize"
              >
                {links.contact.text}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
