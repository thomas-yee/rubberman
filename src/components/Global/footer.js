import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import Img from "gatsby-image"

const Footer = props => {
  let content = {
    English: {
      companySection: {
        title: "Rubberman",
        information:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor",
      },
      productSection: {
        title: "Our Products",
        linkTitle: "Link To Products",
      },
      contactSection: {
        title: "Contact Us",
        phoneNumber: "T: +62-21-4584-4781",
        faxNumber: "F: +62-21-4584-4785",
      },
      referralSection: {
        title: "Referral Program",
        linkTitle: "Link to Referral",
      },
    },
    Indonesian: {
      companySection: {
        title: "XXXX",
        information: "XXXX",
      },
      productSection: {
        title: "XXX",
        linkTitle: "XXXX",
      },
      contactSection: {
        title: "XXXX",
        phoneNumber: "T: +62-21-4584-4781",
        faxNumber: "F: +62-21-4584-4785",
      },
      referralSection: {
        title: "XXX",
        linkTitle: "XXX",
      },
    },
  }

  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "rubberman.png" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

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
          <div className="col">
            <Img fixed={data.image.childImageSharp.fixed} alt="Intro picture" />
          </div>
          <div className="col">
            <h4>{content.companySection.title}</h4>
            <hr className="mt-0 mb-2 horizontal-bar" />
            <p>{content.companySection.information}</p>
          </div>
          <div className="col">
            <h4>{content.productSection.title}</h4>
            <hr className="mt-0 mb-0 horizontal-bar" />
            <Link
              to="/about"
              className="nav-link text-capitalize link-blue-footer"
            >
              {content.productSection.linkTitle}
            </Link>
          </div>
          <div className="col">
            <h4>{content.contactSection.title}</h4>
            <hr className="mt-0 mb-2 horizontal-bar" />
            <div className="row">
              <div className="col">
                <a href="https://www.linkedin.com/company/pt-rubberman-indonesia/">
                  <FontAwesomeIcon icon={faLinkedin} className="fa-3x" />
                </a>
              </div>
              <div className="col-10">
                {content.contactSection.phoneNumber}
                <br />
                {content.contactSection.faxNumber}
                <br />
              </div>
            </div>
          </div>
          <div className="col">
            <h4>{content.referralSection.title}</h4>
            <hr className="mt-0 mb-2 horizontal-bar" />
            <p>{content.referralSection.linkTitle}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
