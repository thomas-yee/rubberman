import React from "react"
import Layout from "../components/layout"
import Info from "../components/Home/info"
import Intro from "../components/Home/intro"

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <Intro />
        <Info />
      </Layout>
    </div>
  )
}

export default IndexPage
