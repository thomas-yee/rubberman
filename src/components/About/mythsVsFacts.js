import React from "react"
// import Background from "../../images/home_1.jpg"
import Image from "react-bootstrap/Image"

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
        <div className="container-fluid">
          {/* <div className="row">
            <Image src={Background} fluid></Image>
          </div> */}
        </div>
      </section>
    </div>
  )
}

export default Intro
