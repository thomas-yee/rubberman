import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import logo from "../../images/rubberman.png"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"

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
    <footer className="footer py-3 bg-light">
      {checkLanguage()}
      <div className="container-fluid">
        <Row>
          <Col className="col-12 col-lg-3 pt-3">
            <Image className="pr-5" src={logo} fluid></Image>
            <p className="footerFont mt-3 ml-2 pr-4">
              {content.companySection.information}
            </p>
          </Col>
          <Col className="col-12 col-lg-3 pt-5">
            <Row className="headerFont centerHorizon pl-3 pl-lg-5">
              <h5>{content.aboutSection.title}</h5>
            </Row>
            <Row className="centerHorizon text-capitalize">
              <Link to="/myths" className="nav-link link-footer mt-4 pl-lg-5">
                {content.aboutSection.mythsLink}
              </Link>
            </Row>
            <Row className="centerHorizon text-capitalize">
              <Link
                to="/whyRetread"
                className="nav-link link-footer mt-4 pl-lg-5"
              >
                {content.aboutSection.whyRetreadLink}
              </Link>
            </Row>
          </Col>
          <Col className="col-12 col-lg-3 pt-5">
            <Row className="centerHorizon text-capitalize pl-3">
              <h5 className="headerFont">{content.productSection.title}</h5>
            </Row>
            <Row>
              <Link
                to="/products"
                className="nav-link text-capitalize link-footer mt-4"
              >
                {content.productSection.productLink}
              </Link>
            </Row>
            <Row>
              <Link to="/about" className="nav-link link-footer mt-4">
                {content.productSection.processLink}
              </Link>
            </Row>
          </Col>
          <Col className="col-12 col-lg-3 pt-5">
            <Row className="centerHorizon text-capitalize pl-3">
              <h5 className="headerFont">{content.contactSection.title}</h5>
            </Row>
            <Row className="footerFont mt-4 pl-3">
              {content.contactSection.phoneNumber}
              <br />
              {content.contactSection.faxNumber}
              <br />
            </Row>
            <Row className="mt-4 pl-3">
              <a href="https://www.linkedin.com/company/pt-rubberman-indonesia/">
                <FontAwesomeIcon icon={faLinkedin} className="fa-2x" />
              </a>
            </Row>
          </Col>
        </Row>
      </div>
    </footer>
  )
}

export default Footer
