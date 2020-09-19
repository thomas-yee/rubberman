import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"
import Logo from "../images/rubberman.png"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <nav>
        <Link to="/">
          <img
            className={headerStyles.logo}
            src={Logo}
            alt="Rubberman Logo"
          ></img>
        </Link>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
