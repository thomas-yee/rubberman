import React from "react"

const Intro = props => {
  let content = {
    English: {
      mainSection: {
        information:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        buttonTitle: "Contact Us",
      },
    },
    Indonesian: {
      mainSection: {
        information: "XXX",
        buttonTitle: "XXX",
      },
    },
  }

  const checkLanguage = () => {
    props.language === "English"
      ? (content = content.English)
      : (content = content.Indonesian)
  }

  return (
    <div>
      <section className="bg-light">
        {checkLanguage()}
        <div className="container-fluid homeBackground">
          <div className="row"></div>
        </div>
      </section>
    </div>
  )
}

export default Intro
