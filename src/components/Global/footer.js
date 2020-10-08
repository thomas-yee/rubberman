import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <footer className="footer py-3">
      <div className="container">
        <div className="row pt-1 text-white">
          <div className="col">
            <h4>Rubberman</h4>
            <hr className="mt-0 mb-2 horizontal-bar" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            </p>
          </div>
          <div className="col">
            <h4>Our Products</h4>
            <hr className="mt-0 mb-0 horizontal-bar" />
            <Link
              to="/about"
              className="nav-link text-capitalize link-blue-footer"
            >
              Link to products
            </Link>
          </div>
          <div className="col">
            <h4>Contact Us</h4>
            <hr className="mt-0 mb-2 horizontal-bar" />
            <div className="row">
              <div className="col">
                <a href="https://www.linkedin.com/company/tire-discounters-inc-/">
                  <FontAwesomeIcon icon={faLinkedin} className="fa-3x" />
                </a>
              </div>
              <div className="col-10">
                T: +62-21-4584-4781
                <br />
                F: +62-21-4584-4785
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-3 text-white">
          <div className="col">
            <h4>The Process</h4>
            <hr className="mt-0 mb-2 horizontal-bar" />
            <p>Insert the locations here</p>
          </div>
          <div className="col">
            <h4>Referral Program</h4>
            <hr className="mt-0 mb-2 horizontal-bar" />
            <p>Link to referral form</p>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
