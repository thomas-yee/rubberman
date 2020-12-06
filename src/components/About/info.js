import React from "react"
import { Link } from "gatsby"
import Title from "../title"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"

const Info = props => {
  let content = {
    English: {
      steps: {
        stepOne: "step 1 : initial inspection",
        stepTwo: "step 2 : nail hole inspection",
        stepThree: "step 3 : shearography",
        stepFour: "step 4 : buffing",
        stepFive: "step 5 : repairing",
        stepSix: "step 6 : applying cushion",
        stepSeven: "step 7 : building",
        stepEight: "step 8 : enveloping",
        stepNine: "step 9 : curing",
        stepTen: "step 10 : final inspection",
      },
    },
    Indonesian: {
      steps: {
        stepOne: "step 1 : initial inspection",
        stepTwo: "step 2 : nail hole inspection",
        stepThree: "step 3 : shearography",
        stepFour: "step 4 : buffing",
        stepFive: "step 5 : repairing",
        stepSix: "step 6 : applying cushion",
        stepSeven: "step 7 : building",
        stepEight: "step 8 : enveloping",
        stepNine: "step 9 : curing",
        stepTen: "step 10 : final inspection",
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
      <div className="container">
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              {content.steps.stepOne}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body></Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              {content.steps.stepTwo}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              {content.steps.stepThree}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
              {content.steps.stepFour}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="4">
              {content.steps.stepFive}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="5">
              {content.steps.stepSix}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="5">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="6">
              {content.steps.stepSeven}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="6">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="7">
              {content.steps.stepEight}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="7">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="8">
              {content.steps.stepNine}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="8">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="9">
              {content.steps.stepTen}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="9">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </section>
  )
}

export default Info
