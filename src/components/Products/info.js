import React from "react"

const Info = props => {
  let content = {
    English: {
      mainSection: {
        information:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      },
    },
    Indonesian: {
      mainSection: {
        information: "XXX",
      },
    },
  }

  const checkLanguage = () => {
    props.language === "English"
      ? (content = content.English)
      : (content = content.Indonesian)
  }
  return (
    <section className="bg-light">
      {checkLanguage()}
      <div className="container productsBackground"></div>
    </section>
  )
}

export default Info
