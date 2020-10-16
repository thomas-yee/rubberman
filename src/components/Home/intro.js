import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Intro = props => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "example-picture.jpg" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  let content = {
    English: {
      mainSection: {
        information:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        buttonTitle: "Contact Us",
      },
    },
    Indonesian: {
      mainSection: {
        information: "XXX",
        buttonTitle: "XXX",
      },
    },
  }

  const checkLanguage = () => {
    props.language === "English"
      ? (content = content.English)
      : (content = content.Indonesian)
  }

  return (
    <div>
      <section className="py-5 bg-light">
        {checkLanguage()}
        <div className="container">
          <div className="row">
            <div className="col col-sm-8 mx-auto">
              <h4>{content.mainSection.information}</h4>
              <Link to="/contact/">
                <button className="btn text-uppercase btn-blue mt-3">
                  {content.mainSection.buttonTitle}
                </button>
              </Link>
            </div>
            <div className="col float-right">
              <Img
                fixed={data.image.childImageSharp.fixed}
                alt="Intro picture"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Intro
