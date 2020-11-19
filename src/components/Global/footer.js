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
        processLink: "Process",
        mythsLink: "Myths",
        whyRetreadLink: "Why Retread?",
        historyLink: "Our History",
      },
      productSection: {
        title: "Products",
        linkTitle: "Link To Products",
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
        processLink: "Process",
        mythsLink: "Myths",
        whyRetreadLink: "Why Retread?",
        historyLink: "Our History",
      },
      productSection: {
        title: "XXX",
        linkTitle: "XXXX",
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
      <div className="container">
        <div className="row">
          <div className="col-4 pt-4">
            {/* <Img fixed={data.image.childImageSharp.fixed} alt="Intro picture" /> */}
            <img className="img-fluid" src={logo} />
            <p>{content.companySection.information}</p>
          </div>
          <div className="col pt-5">
            <h6 className="headerFont">{content.aboutSection.title}</h6>
            <p>{content.aboutSection.information}</p>
            <Link
              to="/about"
              className="nav-link text-capitalize link-blue-footer"
            >
              {content.aboutSection.processLink}
            </Link>
            <Link
              to="/about"
              className="nav-link text-capitalize link-blue-footer"
            >
              {content.aboutSection.mythsLink}
            </Link>
            <Link
              to="/about"
              className="nav-link text-capitalize link-blue-footer"
            >
              {content.aboutSection.whyRetreadLink}
            </Link>
            <Link
              to="/about"
              className="nav-link text-capitalize link-blue-footer"
            >
              {content.aboutSection.historyLink}
            </Link>
          </div>
          <div className="col pt-5">
            <h6 className="headerFont">{content.productSection.title}</h6>
            <Link
              to="/about"
              className="nav-link text-capitalize link-blue-footer"
            >
              {content.productSection.linkTitle}
            </Link>
          </div>
          <div className="col pt-5">
            <h6 className="headerFont">{content.referralSection.title}</h6>
          </div>
          <div className="col pt-5">
            <h6 className="headerFont">{content.contactSection.title}</h6>
            <div className="row">
              <div className="col-10">
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
