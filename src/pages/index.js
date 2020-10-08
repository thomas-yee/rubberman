import React from "react"
import Layout from "../components/layout"
import Info from "../components/Home/info"
import Intro from "../components/Home/intro"
import LogoSection from "../components/Home/logoSection"

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <Intro />
        <Info />
        <LogoSection />
      </Layout>
    </div>
  )
}

export default IndexPage
