import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import Logo from "../../images/rubberman.png"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { NavDropdown } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

const Header = props => {
  let links = {
    English: {
      language: {
        id: 1,
        english: "EN",
        indonesian: "ID",
      },
      home: {
        id: 2,
        path: "/",
        text: "home",
      },
      products: {
        id: 3,
        text: "products",
        tires: {
          path: "/products",
          text: "tires",
        },
        process: {
          path: "/process",
          text: "the process",
        },
      },
      about: {
        id: 4,
        path: "/about",
        text: "about",
      },
      contact: {
        id: 5,
        path: "/contact",
        text: "contact",
      },
    },
    Indonesian: {
      language: {
        id: 1,
        english: "EN",
        indonesian: "ID",
      },
      home: {
        id: 2,
        path: "/",
        text: "XXX",
      },
      products: {
        id: 3,
        text: "products",
        tires: {
          path: "/products",
          text: "tires",
        },
        process: {
          path: "/process",
          text: "the process",
        },
      },
      about: {
        id: 4,
        path: "/about",
        text: "about",
      },
      contact: {
        id: 5,
        path: "/contact",
        text: "contact",
      },
    },
  }

  const checkLanguage = () => {
    props.language === "English"
      ? (links = links.English)
      : (links = links.Indonesian)
  }

  return (
    <div className="container-fluid">
      {checkLanguage()}
      <Navbar
        collapseOnSelect
        expand="lg"
        className="navbar-light headerFont"
        sticky="top"
      >
        <Navbar.Brand>
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
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto sm-2">
            <Nav.Link key={links.language.id} className="mr-5 pt-5">
              <select
                className="custom-select"
                value={props.language}
                onChange={e => props.handleSetLanguage(e.target.value)}
              >
                <option value="English">{links.language.english}</option>
                <option value="Indonesian">{links.language.indonesian}</option>
              </select>
            </Nav.Link>
            <Nav.Link key={links.home.id} className="mr-5 pt-5">
              <Link to={links.home.path} className="nav-link text-capitalize">
                {links.home.text}
              </Link>
            </Nav.Link>
            <NavDropdown
              title={
                <span>
                  {links.products.text}
                  <FontAwesomeIcon icon={faChevronDown} className="fa-1x" />
                </span>
              }
              id="basic-nav-dropdown"
              className="mr-5 pt-5"
            >
              <NavDropdown.Item>
                <Link
                  to={links.products.tires.path}
                  className="dropdown-item text-capitalize"
                >
                  {links.products.tires.text}
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to={links.products.process.path}
                  className="dropdown-item text-capitalize"
                >
                  {links.products.process.text}
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link key={links.about.id} className="mr-5 pt-5">
              <Link to={links.about.path} className="nav-link text-capitalize">
                {links.about.text}
              </Link>
            </Nav.Link>
            <Nav.Link key={links.contact.id} className="mr-5 pt-5">
              <Link
                to={links.contact.path}
                className="nav-link text-capitalize"
              >
                {links.contact.text}
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
