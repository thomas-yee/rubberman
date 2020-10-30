import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandshake } from "@fortawesome/free-solid-svg-icons"
import { faIndustry } from "@fortawesome/free-solid-svg-icons"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

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
    <section className="py-5">
      {checkLanguage()}
      <div className="container">
        <div className="row text-center">
          <div className="col">
            <div className="blue">
              <FontAwesomeIcon icon={faHandshake} className="fa-5x" />
            </div>
            <div className="pt-4">
              <h4>{content.mainSection.experience}</h4>
            </div>
          </div>
          <div className="col">
            <div className="blue">
              <FontAwesomeIcon icon={faIndustry} className="fa-5x" />
            </div>
            <div className="pt-4">
              <h4>{content.mainSection.operationsLineOne}</h4>
              <h4>{content.mainSection.operationsLineTwo}</h4>
            </div>
          </div>
          <div className="col">
            <div className="blue">
              <FontAwesomeIcon icon={faCheck} className="fa-5x" />
            </div>
            <div className="pt-4">
              <h4>{content.mainSection.certificationLineOne}</h4>
              <h4>{content.mainSection.certificationLineTwo}</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
