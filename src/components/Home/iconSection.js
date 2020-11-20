import React from "react"
import { Link } from "gatsby"
import hexagon from "../../images/Hexagon.png"

const Info = props => {
  let content = {
    English: {
      mainSection: {
        experience: "38+ Years Experience",
        operationsLineOne: "30+ Tire Retreading",
        operationsLineTwo: "Plants",
        certificationLineOne: "Certified",
        certificationLineTwo: "ISO 9001:2015",
      },
    },
    Indonesian: {
      mainSection: {
        experience: "35 Years Experience",
        operationsLineOne: "30+ Tire Retreading",
        operationsLineTwo: "Plants",
        certificationLineOne: "Certified",
        certificationLineTwo: "ISO 9001:2015",
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
      <div className="container iconBackground">
        <div className="row justify-content-md-center pt-10">
          <div className="col-md-2 col-md-offset-3">
            <img className="img-fluid pt-5 position-relative" src={hexagon} />
            <div class="position-absolute">Hello</div>
          </div>
          <div className="col-md-2">
            <img className="img-fluid pt-5" src={hexagon} />
          </div>
          <div className="col-md-2">
            <img className="img-fluid pt-5" src={hexagon} />
          </div>
        </div>
        <div className="row"></div>
      </div>
      <div className="row"></div>
    </section>
  )
}

export default Info
