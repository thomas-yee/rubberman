import React from "react"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import Background from "../../images/retread_1.jpg"
import Crown from "../../images/logo_crown.png"
import Classic from "../../images/logo_classic.png"
import Super from "../../images/logo_super.png"
import Green from "../../images/logo_green.png"
import Blackbelt from "../../images/logo_blackbelt.png"
import Image from "react-bootstrap/Image"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Info = props => {
  let content = {
    English: {
      title: "why retread?",
      informationLine1:
        "For over 35 years, Rubberman has provided world-class retreads to customers that operate trucks and buses regularly. Our retreads perform like new tires but cost much less.",
      informationLine2: "Wondering how much you can save?",
      informationLine3: "Try using our savings calculator below!",
      quality: {
        title: "Types of qualities",
        crown: "supreme quality",
        super: "super quality",
        classic: "standard quality",
        green: "economical quality",
        blackbelt: "economical quality",
      },
      steps: {
        stepOne: "savings from price and quality",
        stepTwo: "savings from inner tube",
        stepThree: "savings from flap",
        stepFour: "savings from maintenance",
        stepFive: "savings from bolts",
        stepSix: "savings from downtime",
        stepSeven: "grand total savings",
      },
    },
    Indonesian: {
      title: "why retread?",
      informationLine1:
        "For over 35 years, Rubberman has provided world-class retreads to customers that operate trucks and buses regularly. Our retreads perform like new tires but cost much less.",
      informationLine2: "Wondering how much you can save?",
      informationLine3: "Try using our savings calculator below!",
      quality: {
        title: "Types of qualities",
        crown: "supreme quality",
        super: "super quality",
        classic: "standard quality",
        green: "economical quality",
        blackbelt: "economical quality",
      },
      steps: {
        stepOne: "savings from price and quality",
        stepTwo: "savings from inner tube",
        stepThree: "savings from flap",
        stepFour: "savings from maintenance",
        stepFive: "savings from bolts",
        stepSix: "savings from downtime",
        stepSeven: "grand total savings",
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
      <div className="container-fluid containerStyle">
        <Row>
          <Image src={Background} fluid></Image>
          <h1 className="retreadTitle text-capitalize">{content.title}</h1>
          <div className="retreadLine1">{content.informationLine1}</div>
        </Row>
      </div>
      <div className="container-fluid">
        <Row className="retreadQualitiesTitle">
          <h2>{content.quality.title}</h2>
        </Row>
        <Row>
          <Col className="pt-10">
            <Image src={Crown} fluid></Image>
            <h5 className="retreadTitleTwo">Supreme Quality</h5>
          </Col>
          <Col>
            <Image src={Super} fluid></Image>
          </Col>
          <Col>
            <Image src={Classic} fluid></Image>
          </Col>
          <Col>
            <Image src={Green} fluid></Image>
          </Col>
          <Col>
            <Image src={Blackbelt} fluid></Image>
          </Col>
        </Row>
      </div>
      <div className="container-fluid no-padding-sides no-border-sides">
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="0"
              className="stepHeaderFont btn-step"
            >
              {content.steps.stepOne}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>TBA</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="1"
              className="stepHeaderFont"
            >
              {content.steps.stepTwo}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>TBA</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="2"
              className="stepHeaderFont"
            >
              {content.steps.stepThree}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>TBA</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="3"
              className="stepHeaderFont"
            >
              {content.steps.stepFour}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>TBA</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="4"
              className="stepHeaderFont"
            >
              {content.steps.stepFive}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body>TBA</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="5"
              className="stepHeaderFont"
            >
              {content.steps.stepSix}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="5">
              <Card.Body>TBA</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="6"
              className="stepHeaderFont"
            >
              {content.steps.stepSeven}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="6">
              <Card.Body>TBA</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </section>
  )
}

export default Info
