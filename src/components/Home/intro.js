import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Intro = () => {
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

  return (
    <div>
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col col-sm-8 mx-auto">
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              </h4>
              <Link to="/contact/">
                <button className="btn text-uppercase btn-blue mt-3">
                  Contact Us
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
