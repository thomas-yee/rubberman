import React from "react"
import Layout from "../components/layout"
import Info from "../components/Products/info"

const ProductsPage = () => {
  const languageStoredInLocalStorage = localStorage.getItem("language")
  return (
    <div>
      <Layout>
        <Info language={languageStoredInLocalStorage} />
      </Layout>
    </div>
  )
}

export default ProductsPage
