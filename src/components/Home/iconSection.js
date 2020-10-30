import React from "react"
import { Link } from "gatsby"

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
    <section className="py-5">
      {checkLanguage()}
      <div className="container">
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto">
            <h4>{content.mainSection.title}</h4>
            <hr className="mt-0 mb-2 horizontal-bar" />
            <p className="lead text-muted mb-5">
              {content.mainSection.information}
            </p>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </section>
  )
}

export default Info
