import React from "react"
import { Link } from "gatsby"
import Title from "../title"

const Info = props => {
  let content = {
    English: {
      mainSection: {
        title: "About Rubberman",
        information:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      },
    },
    Indonesian: {
      mainSection: {
        title: "XXXX",
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
      <div className="container aboutBackground">
        <div className="row"></div>
      </div>
    </section>
  )
}

export default Info
