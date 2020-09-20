import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import BackgroundSection from "../components/backgroundSection"
import Info from "../components/Home/info"

const IndexPage = props => {
  return (
    <div>
      <Layout>
        <BackgroundSection
          img={props.data.image.childImageSharp.fluid}
          title=""
          styleClass="default-background"
        />
        <Info />
      </Layout>
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    image: file(relativePath: { eq: "Rubberman-logo-new1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
