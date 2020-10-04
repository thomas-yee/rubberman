import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
// import BackgroundSection from "../components/backgroundSection"
import Info from "../components/Home/info"
import Intro from "../components/Home/intro"

const IndexPage = props => {
  return (
    <div>
      <Layout>
        <Intro img={props.data.image.childImageSharp.fixed} />
        <Info />
      </Layout>
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    image: file(relativePath: { eq: "example-picture.jpg" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
