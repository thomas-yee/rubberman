import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <footer className="footer py-3">
      <div className="container">
        <div className="row">
          <div className="col text-white">
            <h4>Rubberman</h4>
            <p>Information here</p>
          </div>
          <div className="col text-white">
            <h4>Our Products</h4>
            <Link to="/about" className="nav-link text-capitalize text-white">
              Link to products
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col text-white">
            <h4>Offices</h4>
            <p>Insert the locations here</p>
          </div>
          <div className="col text-white">
            <h4>Referral Program</h4>
            <p>Link to referral form</p>
          </div>
        </div>
        <div className="row">
          <div className="col text-white">
            <h4>Contact Us</h4>
            <Link to="/about">
              <FontAwesomeIcon icon={faLinkedin} className="fa-3x" />
            </Link>
          </div>
          <div className="col text-white"></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
