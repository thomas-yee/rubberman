import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import Img from "gatsby-image"

const Footer = props => {
  let content = {
    English: {
      companySection: {
        title: "Who We Are",
        aboutLink: "About Us",
        referralLink: "Referral Program",
      },
      productSection: {
        title: "Our Services",
        linkTitle: "Link To Products",
      },
      contactSection: {
        title: "Contact Us",
        phoneNumber: "T: +62-21-4584-4781",
        faxNumber: "F: +62-21-4584-4785",
      },
    },
    Indonesian: {
      companySection: {
        title: "XXX",
        aboutLink: "XXX",
        referralLink: "Referral Program",
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
          <div className="col-4">
            <Img fixed={data.image.childImageSharp.fixed} alt="Intro picture" />
          </div>
          <div className="col">
            <h6>{content.companySection.title}</h6>
            <hr className="mt-0 mb-2 horizontal-bar" />
            <p>{content.companySection.information}</p>
          </div>
          <div className="col">
            <h6>{content.productSection.title}</h6>
            <hr className="mt-0 mb-0 horizontal-bar" />
            <Link
              to="/about"
              className="nav-link text-capitalize link-blue-footer"
            >
              {content.productSection.linkTitle}
            </Link>
          </div>
          <div className="col">
            <h6>{content.contactSection.title}</h6>
            <hr className="mt-0 mb-2 horizontal-bar" />
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
