import React from "react"
import Years from "../../images/35_Years.png"
import Plants from "../../images/Factories.png"
import ISO from "../../images/ISO_Certified_Logo.png"
import Image from "react-bootstrap/Image"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Info = props => {
  let content = {
    English: {
      mainSection: {
        experience: "35 Years Experience",
        operations: "30+ Tire Retreading Plants",
        certification: "ISO 9001:2015 Certified",
      },
    },
    Indonesian: {
      mainSection: {
        experience: "Pengalaman 35 Tahun",
        operations: "30+ Pabrik Vulkanisir Ban",
        certification: "Sertifikasi ISO 9001: 2015",
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
      <div className="container-fluid text-center pt-5 pb-5">
        <Row>
          <Col>
            <Row>
              <Image className="iconSize" src={Years} fluid></Image>
            </Row>
          </Col>
          <Col>
            <Row>
              <Image className="iconSize" src={Plants} fluid></Image>
            </Row>
          </Col>
          <Col>
            <Row>
              <Image className="iconSize" src={ISO} fluid></Image>
            </Row>
          </Col>
        </Row>
        <Row className="pt-3">
          <Col>
            <h2 className="iconFont">{content.mainSection.experience}</h2>
          </Col>
          <Col>
            <h2 className="iconFont">{content.mainSection.operations}</h2>
          </Col>
          <Col>
            <h2 className="iconFont">{content.mainSection.certification}</h2>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default Info
