import React from "react"
import { Link } from "gatsby"
import Title from "../title"

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
    <section className="py-5 bg-light">
      {checkLanguage()}
      <div className="container">
        <Title title="Our Story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              {content.mainSection.information}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
