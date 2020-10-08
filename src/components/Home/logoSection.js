import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Title from "../title"

const Intro = () => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { relativeDirectory: { eq: "logos" } }) {
        nodes {
          id
          childImageSharp {
            fixed(width: 400, height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      <section className="py-5 bg-light">
        <div className="container">
          <Title title="Trusted Partners" />
          <div className="row">
            {data.images.nodes.map(image => (
              <div className="col">
                <Img key={image.id} fixed={image.childImageSharp.fixed} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Intro
