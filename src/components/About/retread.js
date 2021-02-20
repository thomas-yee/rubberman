import React, { useState } from "react"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import Background from "../../images/retread_1.jpg"
import Crown from "../../images/logo_crown.png"
import Classic from "../../images/logo_classic.png"
import Super from "../../images/logo_super.png"
import Green from "../../images/logo_green.png"
import Blackbelt from "../../images/logo_blackbelt.png"
import Price from "../../images/savings_price_quality.png"
import InnerTube from "../../images/savings_inner_tube.png"
import Flap from "../../images/savings_flap.png"
import Maintenance from "../../images/savings_maintenance.png"
import Bolts from "../../images/savings_bolts.png"
import Downtime from "../../images/savings_downtime.png"
import Image from "react-bootstrap/Image"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Popover from "react-bootstrap/Popover"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons"
import ChangesCrown from "../../images/numberChangesCrownPop.jpg"

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
        stepOne: {
          title: "savings from price and quality",
          crown: {
            title: "Crown",
            mileage: "70000 km",
            price: "1,000,000",
            rp: "14.2857",
          },
          otherBrand: {
            title: "Other brand",
            mileage: "Mileage =",
            price: "Price =",
            rp: "Rp/km =",
            realPrice: "Real Price =",
          },
          savings: {
            title: "Savings",
            monthly: "Monthly =",
            yearly: "Yearly =",
          },
          other: {
            difference: "Differences in Real Prices =",
            tireChanges: "Number of Tire Changes/Month =",
          },
        },
        stepTwo: {
          title: "savings from inner tube",
          changes: "Number of Changes with Crown =",
          difference: "Difference in Changes =",
          cost: "Cost of Inner Tube =",
          savings: {
            title: "Savings",
            monthly: "Monthly =",
            yearly: "Yearly =",
          },
        },
        stepThree: {
          title: "savings from flap",
          cost: "Cost of Flap =",
          savings: {
            title: "Savings",
            monthly: "Monthly =",
            yearly: "Yearly =",
          },
        },
        stepFour: {
          title: "savings from maintenance",
          cost: "Fee per Tire =",
          savings: {
            title: "Savings",
            monthly: "Monthly =",
            yearly: "Yearly =",
          },
        },
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
        stepOne: {
          title: "savings from price and quality",
          crown: {
            title: "Crown",
            mileage: "70000 km",
            price: "1,000,000",
            rp: "14.2857",
          },
          otherBrand: {
            title: "Other brand",
            mileage: "Mileage =",
            price: "Price =",
            rp: "Rp/km =",
            realPrice: "Real Price =",
          },
          savings: {
            title: "Savings",
            monthly: "Monthly",
            yearly: "Yearly",
          },
          other: {
            difference: "Differences in Real Prices =",
            tireChanges: "Number of Tire Changes/Month =",
          },
        },
        stepTwo: {
          title: "savings from inner tube",
          changes: "Number of Changes with Crown =",
          difference: "Difference in Changes =",
          cost: "Cost of Inner Tube =",
          savings: {
            title: "Savings",
            monthly: "Monthly =",
            yearly: "Yearly =",
          },
        },
        stepThree: {
          title: "savings from flap",
          cost: "Cost of Flap =",
          savings: {
            title: "Savings",
            monthly: "Monthly =",
            yearly: "Yearly =",
          },
        },
        stepFour: {
          title: "savings from maintenance",
          cost: "Fee per Tire =",
          savings: {
            title: "Savings",
            monthly: "Monthly =",
            yearly: "Yearly =",
          },
        },
        stepFive: "savings from bolts",
        stepSix: "savings from downtime",
        stepSeven: "grand total savings",
      },
    },
  }

  const [mileage, setMileage] = useState(0)
  const [price, setPrice] = useState(0)
  const [rpkm, setRpKm] = useState(0)
  const [realPrice, setRealPrice] = useState(0)
  const [difference, setDifference] = useState(0)
  const [tires, setTiresChanges] = useState(0)
  const [priceMonthlySavings, setPriceMonthlySavings] = useState(0)
  const [priceYearlySavings, setPriceYearlySavings] = useState(0)
  const [crownChanges, setCrownChanges] = useState(0)
  const [differenceChanges, setDifferenceChanges] = useState(0)
  const [innerTube, setInnerTube] = useState(0)
  const [tubeMonthlySavings, setTubeMonthlySavings] = useState(0)
  const [tubeYearlySavings, setTubeYearlySavings] = useState(0)
  const [flap, setFlap] = useState(0)
  const [flapMonthlySavings, setFlapMonthlySavings] = useState(0)
  const [flapYearlySavings, setFlapYearlySavings] = useState(0)
  const [maintenance, setMaintenance] = useState(0)
  const [maintenanceMonthlySavings, setMaintenanceMonthlySavings] = useState(0)
  const [maintenanceYearlySavings, setMaintenanceYearlySavings] = useState(0)

  const checkLanguage = () => {
    props.language === "English"
      ? (content = content.English)
      : (content = content.Indonesian)
  }

  const realPricePopover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Real Price</Popover.Title>
      <Popover.Content>
        Crown milage x Other brand Rp/km = Real Price
      </Popover.Content>
    </Popover>
  )
  const differencePricePopover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Differences in Real Prices</Popover.Title>
      <Popover.Content>
        Other Brand Real Price - Crown Price = Real Price Difference
      </Popover.Content>
    </Popover>
  )

  const priceMonthlySavingsPopover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Monthly Savings</Popover.Title>
      <Popover.Content>
        Number of Tire Changes x Real Price Difference = Monthly Savings
      </Popover.Content>
    </Popover>
  )

  const numberChangesCrownPopover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Number of Changes with Crown</Popover.Title>
      <Popover.Content className="popoverChangesCrown">
        <Image src={ChangesCrown} fluid></Image>
      </Popover.Content>
    </Popover>
  )

  const differenceChangesPopover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Difference in Changes</Popover.Title>
      <Popover.Content>
        Number of Tire Changes - Number of Changes (Crown) = Difference
      </Popover.Content>
    </Popover>
  )

  const tubeMonthlySavingsPopover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Monthly Savings</Popover.Title>
      <Popover.Content>
        Difference x Price of inner tube = Monthly Savings
      </Popover.Content>
    </Popover>
  )

  const flapMonthlySavingsPopover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Monthly Savings</Popover.Title>
      <Popover.Content>
        Difference in tire change frequency x price of flap = Monthly Savings
      </Popover.Content>
    </Popover>
  )

  const maintenanceMonthlySavingsPopover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Monthly Savings</Popover.Title>
      <Popover.Content>
        Difference x fee per tire = Monthly Savings
      </Popover.Content>
    </Popover>
  )

  const calculatePriceAndQuality = () => {
    const rpkm = price / mileage
    setRpKm(rpkm)
    const newPrice = 70000 * rpkm
    setRealPrice(newPrice)
    const differencePrice = newPrice - 1000000
    setDifference(differencePrice)
    const monthlySavings = tires * differencePrice
    setPriceMonthlySavings(monthlySavings)
    const yearlySavings = monthlySavings * 12
    setPriceYearlySavings(yearlySavings)
  }

  const calculateInnerTube = () => {
    const changesWithCrown = (mileage / 70000) * tires
    setCrownChanges(changesWithCrown)
    const differenceInChanges = tires - crownChanges
    setDifferenceChanges(differenceInChanges)
    const monthlySavings = differenceInChanges * innerTube
    setTubeMonthlySavings(monthlySavings)
    const yearlySavings = monthlySavings * 12
    setTubeYearlySavings(yearlySavings)
  }

  const calculateFlap = () => {
    const monthlySavings = differenceChanges * flap
    setFlapMonthlySavings(monthlySavings)
    const yearlySavings = monthlySavings * 12
    setFlapYearlySavings(yearlySavings)
  }

  const calculateMaintenance = () => {
    const monthlySavings = differenceChanges * maintenance
    setMaintenanceMonthlySavings(monthlySavings)
    const yearlySavings = monthlySavings * 12
    setMaintenanceYearlySavings(yearlySavings)
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
      <div className="container-fluid paddingSides">
        <Row className="retreadQualitiesTitle">
          <h2>{content.quality.title}</h2>
        </Row>
        <Row>
          <Col className="col-sm-6 pt-10 col-12 col-md-6 col-lg pr-5 pl-5 text-center">
            <Row>
              <Image src={Crown} fluid></Image>
              <h5 className="retreadTitleTwo pt-5 centerHorizon">
                {content.quality.crown}
              </h5>
            </Row>
          </Col>
          <Col className="col-sm-6 pt-10 col-12 col-md-6 col-lg pr-5 pl-5 text-center">
            <Row>
              <Image className="logoSize" src={Super} fluid></Image>
              <h5 className="retreadTitleTwo pt-3 centerHorizon">
                {content.quality.super}
              </h5>
            </Row>
          </Col>
          <Col className="col-sm-6 pt-9 col-12 col-md-6 col-lg pr-5 pl-5 text-center">
            <Row>
              <Image className="logoSizeTwo" src={Classic} fluid></Image>
              <h5 className="retreadTitleTwo pt-4 centerHorizon">
                {content.quality.classic}
              </h5>
            </Row>
          </Col>
          <Col className="col-sm-6 pt-10 col-12 col-md-6 col-lg pr-5 pl-5 text-center">
            <Row>
              <Image className="logoSize" src={Green} fluid></Image>
              <h5 className="retreadTitleTwo pt-4 centerHorizon">
                {content.quality.green}
              </h5>
            </Row>
          </Col>
          <Col className="col-sm-12 pt-5 col-12 col-md-12 col-lg pr-5 pl-5 text-center">
            <Row>
              <Image className="logoSizeThree" src={Blackbelt} fluid></Image>
              <h5 className="retreadTitleTwo pt-4 centerHorizon">
                {content.quality.blackbelt}
              </h5>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="container-fluid paddingSides no-border-sides">
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="0"
              className="stepHeaderFont btn-step"
            >
              {content.steps.stepOne.title}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Row>
                  <Col className="col-md-8">
                    <Row>
                      <Col className="col-md-5 pl-5">
                        <h4>{content.steps.stepOne.crown.title}</h4>
                        <Form>
                          <Form.Group as={Row} controlId="formCrownMileage">
                            <Form.Label column sm="5">
                              {content.steps.stepOne.otherBrand.mileage}
                            </Form.Label>
                            <Col sm="7">
                              <Form.Label column sm="12">
                                {content.steps.stepOne.crown.mileage}
                              </Form.Label>
                            </Col>
                          </Form.Group>
                        </Form>
                        <Form>
                          <Form.Group as={Row} controlId="formCrownMileage">
                            <Form.Label column sm="5">
                              {content.steps.stepOne.otherBrand.price}
                            </Form.Label>
                            <Col sm="7">
                              <Form.Label column sm="12">
                                {content.steps.stepOne.crown.price}
                              </Form.Label>
                            </Col>
                          </Form.Group>
                        </Form>
                        <Form>
                          <Form.Group as={Row} controlId="formCrownMileage">
                            <Form.Label column sm="5">
                              {content.steps.stepOne.otherBrand.rp}
                            </Form.Label>
                            <Col sm="7">
                              <Form.Label column sm="12">
                                {content.steps.stepOne.crown.rp}
                              </Form.Label>
                            </Col>
                          </Form.Group>
                        </Form>
                      </Col>
                      <Col className="col-md-7">
                        <h4>{content.steps.stepOne.otherBrand.title}</h4>
                        <Form>
                          <Form.Group as={Row} controlId="mileage">
                            <Form.Label column sm="4">
                              {content.steps.stepOne.otherBrand.mileage}
                            </Form.Label>
                            <Col sm="8">
                              <Form.Control
                                type="mileage"
                                placeholder="Mileage"
                                onChange={e => setMileage(e.target.value)}
                              />
                            </Col>
                          </Form.Group>
                          <Form.Group as={Row} controlId="price">
                            <Form.Label column sm="4">
                              {content.steps.stepOne.otherBrand.price}
                            </Form.Label>
                            <Col sm="8">
                              <Form.Control
                                type="price"
                                placeholder="Price"
                                onChange={e => {
                                  setPrice(e.target.value)
                                }}
                              />
                            </Col>
                          </Form.Group>
                          <Form.Group as={Row} controlId="formPlainRpkm">
                            <Form.Label column sm="4">
                              {content.steps.stepOne.otherBrand.rp}
                            </Form.Label>
                            <Col sm="8">
                              <Form.Label column sm="8">
                                {rpkm}
                              </Form.Label>
                            </Col>
                          </Form.Group>
                        </Form>
                        <Form>
                          <Form.Group
                            as={Row}
                            controlId="formPlaintextRealprice"
                          >
                            <Form.Label column sm="4">
                              {content.steps.stepOne.otherBrand.realPrice}
                            </Form.Label>
                            <Col sm="8">
                              <Form.Label column sm="8">
                                {realPrice}
                                <OverlayTrigger
                                  trigger="click"
                                  placement="right"
                                  overlay={realPricePopover}
                                >
                                  <FontAwesomeIcon
                                    icon={faQuestionCircle}
                                    className="fa-1x ml-3"
                                  />
                                </OverlayTrigger>
                              </Form.Label>
                            </Col>
                          </Form.Group>
                        </Form>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="col-md-12 pl-5">
                        <Form.Group
                          as={Row}
                          controlId="formPlaintextDifferenceInPrice"
                        >
                          <Form.Label column sm="4">
                            {content.steps.stepOne.other.difference}
                          </Form.Label>
                          <Col sm="8">
                            <Form.Label column sm="8">
                              {difference}
                              <OverlayTrigger
                                trigger="click"
                                placement="right"
                                overlay={differencePricePopover}
                              >
                                <FontAwesomeIcon
                                  icon={faQuestionCircle}
                                  className="fa-1x ml-3"
                                />
                              </OverlayTrigger>
                            </Form.Label>
                          </Col>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="col-md-12 pl-5">
                        <Form.Group
                          as={Row}
                          controlId="formPlaintextDifferenceInPrice"
                        >
                          <Form.Label column sm="4">
                            {content.steps.stepOne.other.tireChanges}
                          </Form.Label>
                          <Col sm="8">
                            <Form.Control
                              type="tireChanges"
                              placeholder="Tire Changes"
                              onChange={e => {
                                setTiresChanges(e.target.value)
                              }}
                            />
                          </Col>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="col-md-12 pl-5">
                        <h4>{content.steps.stepOne.savings.title}</h4>
                        <Form.Group
                          as={Row}
                          controlId="formPlaintextDifferenceInPrice"
                        >
                          <Form.Label column sm="2">
                            {content.steps.stepOne.savings.monthly}
                          </Form.Label>
                          <Col sm="4">
                            <Form.Label column sm="12">
                              {priceMonthlySavings}
                              <OverlayTrigger
                                trigger="click"
                                placement="right"
                                overlay={priceMonthlySavingsPopover}
                              >
                                <FontAwesomeIcon
                                  icon={faQuestionCircle}
                                  className="fa-1x"
                                  className="ml-3"
                                />
                              </OverlayTrigger>
                            </Form.Label>
                          </Col>
                          <Form.Label column sm="2">
                            {content.steps.stepOne.savings.yearly}
                          </Form.Label>
                          <Col sm="4">
                            <Form.Label column sm="12">
                              {priceYearlySavings}
                            </Form.Label>
                          </Col>
                          <Button
                            variant="primary"
                            className="ml-3 mt-3"
                            type="Calculate"
                            onClick={() => {
                              calculatePriceAndQuality()
                            }}
                          >
                            Calculate
                          </Button>
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="col-md-4">
                    <Image src={Price} fluid></Image>
                  </Col>
                </Row>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="1"
              className="stepHeaderFont"
            >
              {content.steps.stepTwo.title}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <Row>
                  <Col className="col-md-8">
                    <Row>
                      <Col className="col-md-12 pl-5">
                        <Form.Group
                          as={Row}
                          controlId="formPlaintextDifferenceInPrice"
                        >
                          <Form.Label column sm="2">
                            {content.steps.stepTwo.changes}
                          </Form.Label>
                          <Col sm="4">
                            <Form.Label column sm="12">
                              {priceMonthlySavings}
                              <OverlayTrigger
                                trigger="click"
                                placement="right"
                                overlay={numberChangesCrownPopover}
                              >
                                <FontAwesomeIcon
                                  icon={faQuestionCircle}
                                  className="fa-1x"
                                  className="ml-3"
                                />
                              </OverlayTrigger>
                            </Form.Label>
                          </Col>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="col-md-12 pl-5">
                        <Form.Group
                          as={Row}
                          controlId="formPlaintextDifferenceInPrice"
                        >
                          <Form.Label column sm="2">
                            {content.steps.stepTwo.difference}
                          </Form.Label>
                          <Col sm="4">
                            <Form.Label column sm="12">
                              {differenceChanges}
                              <OverlayTrigger
                                trigger="click"
                                placement="right"
                                overlay={differenceChangesPopover}
                              >
                                <FontAwesomeIcon
                                  icon={faQuestionCircle}
                                  className="fa-1x"
                                  className="ml-3"
                                />
                              </OverlayTrigger>
                            </Form.Label>
                          </Col>
                        </Form.Group>
                        <Form>
                          <Form.Group as={Row} controlId="mileage">
                            <Form.Label column sm="4">
                              {content.steps.stepTwo.cost}
                            </Form.Label>
                            <Col sm="8">
                              <Form.Control
                                type="Inner Tube"
                                placeholder="Inner Tube"
                                onChange={e => setInnerTube(e.target.value)}
                              />
                            </Col>
                          </Form.Group>
                        </Form>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="col-md-12 pl-5">
                        <h4>{content.steps.stepTwo.savings.title}</h4>
                        <Form.Group
                          as={Row}
                          controlId="formPlaintextDifferenceInPrice"
                        >
                          <Form.Label column sm="2">
                            {content.steps.stepTwo.savings.monthly}
                          </Form.Label>
                          <Col sm="4">
                            <Form.Label column sm="12">
                              {tubeMonthlySavings}
                              <OverlayTrigger
                                trigger="click"
                                placement="right"
                                overlay={tubeMonthlySavingsPopover}
                              >
                                <FontAwesomeIcon
                                  icon={faQuestionCircle}
                                  className="fa-1x"
                                  className="ml-3"
                                />
                              </OverlayTrigger>
                            </Form.Label>
                          </Col>
                          <Form.Label column sm="2">
                            {content.steps.stepTwo.savings.yearly}
                          </Form.Label>
                          <Col sm="4">
                            <Form.Label column sm="12">
                              {tubeYearlySavings}
                            </Form.Label>
                          </Col>
                          <Button
                            variant="primary"
                            className="ml-3 mt-3"
                            type="Calculate"
                            onClick={() => {
                              calculateInnerTube()
                            }}
                          >
                            Calculate
                          </Button>
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="col-md-4">
                    <Image src={InnerTube} fluid></Image>
                  </Col>
                </Row>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="2"
              className="stepHeaderFont"
            >
              {content.steps.stepThree.title}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <Row>
                  <Col className="col-md-8">
                    <Row>
                      <Col className="col-md-12 pl-5">
                        <Form>
                          <Form.Group as={Row} controlId="mileage">
                            <Form.Label column sm="4">
                              {content.steps.stepThree.cost}
                            </Form.Label>
                            <Col sm="8">
                              <Form.Control
                                type="Inner Tube"
                                placeholder="Inner Tube"
                                onChange={e => setFlap(e.target.value)}
                              />
                            </Col>
                          </Form.Group>
                        </Form>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="col-md-12 pl-5">
                        <h4>{content.steps.stepThree.savings.title}</h4>
                        <Form.Group
                          as={Row}
                          controlId="formPlaintextDifferenceInPrice"
                        >
                          <Form.Label column sm="2">
                            {content.steps.stepThree.savings.monthly}
                          </Form.Label>
                          <Col sm="4">
                            <Form.Label column sm="12">
                              {flapMonthlySavings}
                              <OverlayTrigger
                                trigger="click"
                                placement="right"
                                overlay={flapMonthlySavingsPopover}
                              >
                                <FontAwesomeIcon
                                  icon={faQuestionCircle}
                                  className="fa-1x"
                                  className="ml-3"
                                />
                              </OverlayTrigger>
                            </Form.Label>
                          </Col>
                          <Form.Label column sm="2">
                            {content.steps.stepThree.savings.yearly}
                          </Form.Label>
                          <Col sm="4">
                            <Form.Label column sm="12">
                              {flapYearlySavings}
                            </Form.Label>
                          </Col>
                          <Button
                            variant="primary"
                            className="ml-3 mt-3"
                            type="Calculate"
                            onClick={() => {
                              calculateFlap()
                            }}
                          >
                            Calculate
                          </Button>
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="col-md-4">
                    <Image src={Flap} fluid></Image>
                  </Col>
                </Row>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="3"
              className="stepHeaderFont"
            >
              {content.steps.stepFour.title}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <Row>
                  <Col className="col-md-8">
                    <Row>
                      <Col className="col-md-12 pl-5">
                        <Form>
                          <Form.Group as={Row} controlId="mileage">
                            <Form.Label column sm="4">
                              {content.steps.stepFour.cost}
                            </Form.Label>
                            <Col sm="8">
                              <Form.Control
                                type="Maintenance"
                                placeholder="Maintenance"
                                onChange={e => setMaintenance(e.target.value)}
                              />
                            </Col>
                          </Form.Group>
                        </Form>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="col-md-12 pl-5">
                        <h4>{content.steps.stepFour.savings.title}</h4>
                        <Form.Group
                          as={Row}
                          controlId="formPlaintextDifferenceInPrice"
                        >
                          <Form.Label column sm="2">
                            {content.steps.stepFour.savings.monthly}
                          </Form.Label>
                          <Col sm="4">
                            <Form.Label column sm="12">
                              {maintenanceMonthlySavings}
                              <OverlayTrigger
                                trigger="click"
                                placement="right"
                                overlay={maintenanceMonthlySavingsPopover}
                              >
                                <FontAwesomeIcon
                                  icon={faQuestionCircle}
                                  className="fa-1x"
                                  className="ml-3"
                                />
                              </OverlayTrigger>
                            </Form.Label>
                          </Col>
                          <Form.Label column sm="2">
                            {content.steps.stepFour.savings.yearly}
                          </Form.Label>
                          <Col sm="4">
                            <Form.Label column sm="12">
                              {maintenanceYearlySavings}
                            </Form.Label>
                          </Col>
                          <Button
                            variant="primary"
                            className="ml-3 mt-3"
                            type="Calculate"
                            onClick={() => {
                              calculateMaintenance()
                            }}
                          >
                            Calculate
                          </Button>
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="col-md-4">
                    <Image src={Maintenance} fluid></Image>
                  </Col>
                </Row>
              </Card.Body>
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
              <Card.Body>
                <Row>
                  <Col className="col-md-8"></Col>
                  <Col className="col-md-4">
                    <Image src={Bolts} fluid></Image>
                  </Col>
                </Row>
              </Card.Body>
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
              <Card.Body>
                <Row>
                  <Col className="col-md-8"></Col>
                  <Col className="col-md-4">
                    <Image src={Downtime} fluid></Image>
                  </Col>
                </Row>
              </Card.Body>
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
              <Card.Body>
                <Row>
                  <Col className="col-md-8"></Col>
                  <Col className="col-md-4"></Col>
                </Row>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </section>
  )
}

export default Info
