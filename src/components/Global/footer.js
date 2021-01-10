import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import logo from "../../images/rubberman.png"

const Footer = props => {
  let content = {
    English: {
      companySection: {
        information:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
      },
      aboutSection: {
        title: "About",

        mythsLink: "Myths",
        whyRetreadLink: "Why Retread?",
      },
      productSection: {
        title: "Products",
        productLink: "Tires",
        processLink: "Process",
      },
      referralSection: {
        title: "Referral Program",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
      },
      contactSection: {
        title: "Contact Us",
        phoneNumber: "T: +62-21-4584-4781",
        faxNumber: "F: +62-21-4584-4785",
      },
    },
    Indonesian: {
      companySection: {
        information:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
      },
      aboutSection: {
        title: "About",

        mythsLink: "Myths",
        whyRetreadLink: "Why Retread?",
      },
      productSection: {
        title: "Products",
        productLink: "Tires",
        processLink: "Process",
      },
      referralSection: {
        title: "Referral Program",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
      },
      contactSection: {
        title: "XXXX",
        phoneNumber: "T: +62-21-4584-4781",
        faxNumber: "F: +62-21-4584-4785",
      },
    },
  }

  const checkLanguage = () => {
    props.language === "English"
      ? (content = content.English)
      : (content = content.Indonesian)
  }

  return (
    <footer className="footer py-3">
      {checkLanguage()}
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3 pt-3 mr-5">
            <img className="img-fluid" src={logo} />
            <p className="footerFont mt-3 ml-2">
              {content.companySection.information}
            </p>
          </div>
          <div className="col-sm-2 pt-5">
            <h6 className="headerFont">{content.aboutSection.title}</h6>
            <Link
              to="/about"
              className="nav-link text-capitalize link-footer pb-0"
            >
              {content.aboutSection.mythsLink}
            </Link>
            <Link
              to="/about"
              className="nav-link text-capitalize link-footer pb-0"
            >
              {content.aboutSection.whyRetreadLink}
            </Link>
          </div>
          <div className="col-sm-2 pt-5">
            <h6 className="headerFont">{content.productSection.title}</h6>
            <Link
              to="/products"
              className="nav-link text-capitalize link-footer mt-4"
            >
              {content.productSection.productLink}
            </Link>
            <Link to="/about" className="nav-link link-footer pb-0 mt-4">
              {content.productSection.processLink}
            </Link>
          </div>
          <div className="col-sm-2 mr-4 pt-5">
            <h6 className="headerFont">{content.referralSection.title}</h6>
            <p className="footerFont mt-4 pt-2">
              {content.referralSection.text}
            </p>
          </div>
          <div className="col-sm-2 pt-5">
            <h6 className="headerFont">{content.contactSection.title}</h6>
            <div className="row">
              <div className="col-10 footerFont mt-4">
                {content.contactSection.phoneNumber}
                <br />
                {content.contactSection.faxNumber}
                <br />
              </div>
              <div className="col">
                <a href="https://www.linkedin.com/company/pt-rubberman-indonesia/">
                  <FontAwesomeIcon icon={faLinkedin} className="fa-2x" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
