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
        stepFive: {
          title: "savings from bolts",
          replaced: "Bolts Replaced/Month =",
          replacedCrown: "Bolts Replaced with Crown/Month =",
          difference: "Difference =",
          price: "Bolt Price =",
          savings: {
            title: "Savings",
            monthly: "Monthly =",
            yearly: "Yearly =",
          },
        },
        stepSix: {
          title: "savings from downtime",
          overhaul: {
            assumption: "*Assuming overhead time is 30 minutes",
            monthly: "Monthly Overhaul Time (Hours) =",
            yearly: "Yearly Overhaul Time =",
          },
          assumptionOperation: "*Assuming truck/bus operating for 10 hours",
          loss: "Loss of Operational Days (Monthly/Yearly) =",
          earnings: "Earnings per Day =",
          savings: {
            title: "Savings",
            monthly: "Monthly =",
            yearly: "Yearly =",
          },
        },
        stepSeven: {
          title: "Grand total savings",
          savings: "yearly savings =",
        },
      },
    },
    Indonesian: {
      title: "mengapa vulkanisir?",
      informationLine1:
        "Selama lebih dari 35 tahun, Rubberman telah menyediakan vulkanisir kelas dunia kepada pelanggan yang mengoperasikan truk dan bus secara teratur. Vulkanisir kami bekerja seperti ban baru tetapi harganya jauh lebih murah.",
      informationLine2: "Wondering how much you can save?",
      informationLine3: "Try using our savings calculator below!",
      quality: {
        title: "Jenis kualitas",
        crown: "kualitas tertinggi",
        super: "kualitas super",
        classic: "kualitas standar",
        green: "kualitas ekonomis",
        blackbelt: "kualitas ekonomis",
      },
      steps: {
        stepOne: {
          title: "penghematan dari harga dan kualitas",
          crown: {
            title: "Mahkota",
            mileage: "70000 km",
            price: "1,000,000",
            rp: "14.2857",
          },
          otherBrand: {
            title: "Merek lain",
            mileage: "Jarak tempuh =",
            price: "Harga =",
            rp: "Rp/km =",
            realPrice: "Harga Riil =",
          },
          savings: {
            title: "Tabungan",
            monthly: "Bulanan",
            yearly: "Tahunan",
          },
          other: {
            difference: "Perbedaan Harga Riil =",
            tireChanges: "Jumlah Pergantian Ban/Bulan =",
          },
        },
        stepTwo: {
          title: "penghematan dari ban dalam",
          changes: "Jumlah Perubahan dengan Crown =",
          difference: "Perbedaan Perubahan =",
          cost: "Biaya Inner Tube =",
          savings: {
            title: "Tabungan",
            monthly: "Bulanan =",
            yearly: "Tahunan =",
          },
        },
        stepThree: {
          title: "tabungan dari flap",
          cost: "Biaya Flap =",
          savings: {
            title: "Tabungan",
            monthly: "Bulanan =",
            yearly: "Tahunan =",
          },
        },
        stepFour: {
          title: "penghematan dari pemeliharaan",
          cost: "Biaya per Ban =",
          savings: {
            title: "Tabungan",
            monthly: "Bulanan =",
            yearly: "Tahunan =",
          },
        },
        stepFive: {
          title: "tabungan dari baut",
          replaced: "Baut Diganti/Bulan =",
          replacedCrown: "Baut Diganti dengan Mahkota/Bulan =",
          difference: "Perbedaan =",
          price: "Harga Baut =",
          savings: {
            title: "Tabungan",
            monthly: "Bulanan =",
            yearly: "Tahunan =",
          },
        },
        stepSix: {
          title: "penghematan dari waktu henti",
          overhaul: {
            assumption: "*Dengan asumsi waktu overhead adalah 30 menit",
            monthly: "Waktu Perbaikan Bulanan (Jam) =",
            yearly: "Waktu Perbaikan Tahunan =",
          },
          assumptionOperation:
            "*Dengan asumsi truk / bus beroperasi selama 10 jam",
          loss: "Kehilangan Hari Operasional (Bulanan/Tahunan) =",
          earnings: "Penghasilan per Hari =",
          savings: {
            title: "Tabungan",
            monthly: "Bulanan =",
            yearly: "Tahunan =",
          },
        },
        stepSeven: {
          title: "Penghematan total yang besar",
          savings: "tabungan tahunan =",
        },
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
  const [boltsReplaced, setBoltsReplaced] = useState(0)
  const [boltsReplacedCrown, setBoltsReplacedCrown] = useState(0)
  const [boltsDifference, setBoltsDifference] = useState(0)
  const [boltsPrice, setBoltsPrice] = useState(0)
  const [boltsMonthlySavings, setBoltsMonthlySavings] = useState(0)
  const [boltsYearlySavings, setBoltsYearlySavings] = useState(0)
  const [overhaulMonthlyTime, setOverhaulMonthlyTime] = useState(0)
  const [overhaulYearlyTime, setOverhaulYearlyTime] = useState(0)
  const [lossOperationalDays, setLossOperationalDays] = useState(0)
  const [earnings, setEarnings] = useState(0)
  const [downtimeMonthlySavings, setDowntimeMonthlySavings] = useState(0)
  const [downtimeYearlySavings, setDowntimeYearlySavings] = useState(0)
  const [yearlySavings, setYearlySavings] = useState(0)

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
      <Popover.Content className="popoverChangesCrown"></Popover.Content>
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

  const boltsReplacedCrownPopover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Bolts Replaced with Crown</Popover.Title>
      <Popover.Content>
        (Other brand milage / Crown milage) x bolts replaced/month
      </Popover.Content>
    </Popover>
  )

  const boltsMonthlySavingsPopover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Monthly Savings</Popover.Title>
      <Popover.Content>
        Difference x bolts price = Monthly Savings
      </Popover.Content>
    </Popover>
  )

  const overhaulPopover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Monthly Overhaul Time</Popover.Title>
      <Popover.Content>1/2 x Changes/Month = Overhaul Time</Popover.Content>
    </Popover>
  )

  const lossOperationPopover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">
        Loss of Operational Days (Monthly/Yearly)
      </Popover.Title>
      <Popover.Content>
        Monthly Overhaul Time/10 = Loss of Operational Days
      </Popover.Content>
    </Popover>
  )

  const downtimeMonthlySavingsPopover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Monthly Savings</Popover.Title>
      <Popover.Content>
        Coss of operational days x Earnings per day = savings
      </Popover.Content>
    </Popover>
  )

  const calculateYearlySavings = () => {
    const savings =
      priceYearlySavings +
      tubeYearlySavings +
      flapYearlySavings +
      maintenanceYearlySavings +
      boltsYearlySavings +
      downtimeYearlySavings
    setYearlySavings(savings)
  }

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
    calculateYearlySavings()
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
    calculateYearlySavings()
  }

  const calculateFlap = () => {
    const monthlySavings = differenceChanges * flap
    setFlapMonthlySavings(monthlySavings)
    const yearlySavings = monthlySavings * 12
    setFlapYearlySavings(yearlySavings)
    calculateYearlySavings()
  }

  const calculateMaintenance = () => {
    const monthlySavings = differenceChanges * maintenance
    setMaintenanceMonthlySavings(monthlySavings)
    const yearlySavings = monthlySavings * 12
    setMaintenanceYearlySavings(yearlySavings)
    calculateYearlySavings()
  }

  const calculateBolts = () => {
    const replaced = (mileage / 70000) * boltsReplaced
    setBoltsReplacedCrown(replaced)
    const differenceInBolts = boltsReplaced - replaced
    setBoltsDifference(differenceInBolts)
    const monthlySavings = differenceInBolts * boltsPrice
    setBoltsMonthlySavings(monthlySavings)
    const yearlySavings = monthlySavings * 12
    setBoltsYearlySavings(yearlySavings)
    calculateYearlySavings()
  }

  const calculateDowntime = () => {
    const monthOverhaul = 0.5 * tires
    setOverhaulMonthlyTime(monthOverhaul)
    const yearOverhaul = 12 * monthOverhaul
    setOverhaulYearlyTime(yearOverhaul)
    const loss = monthOverhaul / 10
    setLossOperationalDays(loss)
    const monthlySavings = loss * earnings
    setDowntimeMonthlySavings(monthlySavings)
    const yearlySavings = monthlySavings * 12
    setDowntimeYearlySavings(yearlySavings)
    calculateYearlySavings()
  }

  return (
    <section className="bg-light">
      {checkLanguage()}
      <div className="container-fluid containerStyle">
        <Row>
          <Image src={Background} fluid></Image>
          <h1 className="retreadTitle text-capitalize">{content.title}</h1>
          <span className="retreadLine1">{content.informationLine1}</span>
        </Row>
      </div>
      <div className="container-fluid paddingSides">
        <Row className="retreadQualitiesTitle">
          <h2>{content.quality.title}</h2>
        </Row>
        <Row>
          <Col className="pt-5 col-12 col-md-6 col-xl pr-5 pl-5 text-center">
            <Row>
              <Image className="logoSize" src={Crown} fluid></Image>
              <h5 className="retreadTitleTwo pt-lg-4 centerHorizon">
                {content.quality.crown}
              </h5>
            </Row>
          </Col>
          <Col className="pt-5 col-12 col-md-6 col-xl pr-5 pl-5 text-center">
            <Row>
              <Image className="logoSize" src={Super} fluid></Image>
              <h5 className="retreadTitleTwo pt-lg-4  centerHorizon">
                {content.quality.super}
              </h5>
            </Row>
          </Col>
          <Col className="pt-5 col-12 col-md-6 col-xl pr-5 pl-5 text-center">
            <Row>
              <Image className="logoSize" src={Classic} fluid></Image>
              <h5 className="retreadTitleTwo pt-4 centerHorizon">
                {content.quality.classic}
              </h5>
            </Row>
          </Col>
          <Col className="pt-5 col-12 col-md-6 col-xl pr-5 pl-5 text-center">
            <Row>
              <Image className="logoSize" src={Green} fluid></Image>
              <h5 className="retreadTitleTwo pt-4 centerHorizon">
                {content.quality.green}
              </h5>
            </Row>
          </Col>
          <Col className="pt-5 col-12 col-md-12 col-xl pr-5 pl-5 text-center">
            <Row>
              <Image className="logoSize" src={Blackbelt} fluid></Image>
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
                  <Col className="col-lg-8 col-12">
                    <Row>
                      <Col className="col-md-5 pl-5 col-xs-12 col-sm-12">
                        <h4>{content.steps.stepOne.crown.title}</h4>
                        <Form>
                          <Form.Group as={Row} controlId="formCrownMileage">
                            <Form.Label
                              column
                              xs="4"
                              sm="4"
                              md="5"
                              lg="6"
                              xl="5"
                              className="pr-0"
                            >
                              {content.steps.stepOne.otherBrand.mileage}
                            </Form.Label>
                            <Col xs="8" sm="8" md="7" lg="6" xl="7">
                              <Form.Label column className="no-padding-sides">
                                {content.steps.stepOne.crown.mileage}
                              </Form.Label>
                            </Col>
                          </Form.Group>
                        </Form>
                        <Form>
                          <Form.Group as={Row} controlId="formCrownMileage">
                            <Form.Label
                              column
                              xs="4"
                              sm="4"
                              md="5"
                              lg="6"
                              xl="5"
                              className="pr-0"
                            >
                              {content.steps.stepOne.otherBrand.price}
                            </Form.Label>
                            <Col xs="8" sm="8" md="7" lg="6" xl="7">
                              <Form.Label column className="no-padding-sides">
                                {content.steps.stepOne.crown.price}
                              </Form.Label>
                            </Col>
                          </Form.Group>
                        </Form>
                        <Form>
                          <Form.Group as={Row} controlId="formCrownMileage">
                            <Form.Label
                              column
                              xs="4"
                              sm="4"
                              md="5"
                              lg="6"
                              xl="5"
                              className="pr-0"
                            >
                              {content.steps.stepOne.otherBrand.rp}
                            </Form.Label>
                            <Col xs="8" sm="8" md="7" lg="6" xl="7">
                              <Form.Label column className="no-padding-sides">
                                {content.steps.stepOne.crown.rp}
                              </Form.Label>
                            </Col>
                          </Form.Group>
                        </Form>
                      </Col>
                      <Col className="col-md-7 pl-5 col-xs-12 col-sm-12">
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
                              <Form.Label column sm="8" className="pl-0">
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
                              <Form.Label column sm="8" className="pl-0">
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
                      <Col className="col-md-12 pl-5 col-xs-12 col-sm-12">
                        <Form.Group
                          as={Row}
                          controlId="formPlaintextDifferenceInPrice"
                        >
                          <Form.Label column sm="4">
                            {content.steps.stepOne.other.difference}
                          </Form.Label>
                          <Col sm="8">
                            <Form.Label column sm="8" className="pl-0">
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
                      <Col className="col-md-12 pl-5 col-xs-12 col-sm-12">
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
                      <Col className="col-md-12 pl-5 col-xs-12 col-sm-12">
                        <h4>{content.steps.stepOne.savings.title}</h4>
                        <Form.Group
                          as={Row}
                          controlId="formPlaintextDifferenceInPrice"
                        >
                          <Form.Label column sm="4" md="3">
                            {content.steps.stepOne.savings.monthly}
                          </Form.Label>
                          <Col sm="8" md="3">
                            <Form.Label column className="pl-0">
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
                          <Form.Label
                            column
                            sm="4"
                            xs="3"
                            md="3"
                            className="pr-0"
                          >
                            {content.steps.stepOne.savings.yearly}
                          </Form.Label>
                          <Col sm="8" xs="9" md="3">
                            <Form.Label column className="pl-0">
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
                  <Col className="col-lg-4 col-12">
                    <Image src={Price} fluid></Image>
                  </Col>
                </Row>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion defaultActiveKey="0">
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
                  <Col className="col-lg-8 col-12">
                    <Row>
                      <Col className="col-md-12 pl-5">
                        <Form.Group
                          as={Row}
                          controlId="formPlaintextDifferenceInPrice"
                        >
                          <Form.Label column sm="4">
                            {content.steps.stepTwo.changes}
                          </Form.Label>
                          <Col sm="8">
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
                          <Form.Label column sm="4">
                            {content.steps.stepTwo.difference}
                          </Form.Label>
                          <Col sm="8">
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
                  <Col className="col-lg-4 col-12">
                    <Image src={InnerTube} fluid></Image>
                  </Col>
                </Row>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion defaultActiveKey="0">
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
                  <Col className="col-lg-8 col-12">
                    <Row>
                      <Col className="col-md-12 pl-5">
                        <Form>
                          <Form.Group as={Row} controlId="mileage">
                            <Form.Label column sm="4">
                              {content.steps.stepThree.cost}
                            </Form.Label>
                            <Col sm="8">
                              <Form.Control
                                type="Flap"
                                placeholder="Flap"
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
                  <Col className="col-lg-4 col-12">
                    <Image src={Flap} fluid></Image>
                  </Col>
                </Row>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion defaultActiveKey="0">
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
                  <Col className="col-lg-8 col-12">
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
                  <Col className="col-lg-4 col-12">
                    <Image src={Maintenance} fluid></Image>
                  </Col>
                </Row>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="4"
              className="stepHeaderFont"
            >
              {content.steps.stepFive.title}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                <Row>
                  <Col className="col-lg-8 col-12">
                    <Row>
                      <Col className="col-md-12 pl-5">
                        <Form>
                          <Form.Group as={Row} controlId="mileage">
                            <Form.Label column sm="4">
                              {content.steps.stepFive.replaced}
                            </Form.Label>
                            <Col sm="8">
                              <Form.Control
                                type="Maintenance"
                                placeholder="Input"
                                onChange={e => setBoltsReplaced(e.target.value)}
                              />
                            </Col>
                          </Form.Group>
                        </Form>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="col-md-12 pl-5">
                        <Form>
                          <Form.Group
                            as={Row}
                            controlId="formPlaintextDifferenceInPrice"
                          >
                            <Form.Label column sm="4">
                              {content.steps.stepFive.replacedCrown}
                            </Form.Label>
                            <Col sm="8">
                              <Form.Label column sm="12">
                                {boltsReplacedCrown}
                                <OverlayTrigger
                                  trigger="click"
                                  placement="right"
                                  overlay={boltsReplacedCrownPopover}
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
                        </Form>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="col-md-12 pl-5">
                        <Form>
                          <Form.Group
                            as={Row}
                            controlId="formPlaintextDifferenceInPrice"
                          >
                            <Form.Label column sm="2">
                              {content.steps.stepFive.difference}
                            </Form.Label>
                            <Col sm="4">
                              <Form.Label column sm="12">
                                {boltsDifference}
                              </Form.Label>
                            </Col>
                          </Form.Group>
                        </Form>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="col-md-12 pl-5">
                        <Form>
                          <Form.Group as={Row} controlId="mileage">
                            <Form.Label column sm="4">
                              {content.steps.stepFive.price}
                            </Form.Label>
                            <Col sm="8">
                              <Form.Control
                                type="Maintenance"
                                placeholder="Input"
                                onChange={e => setBoltsPrice(e.target.value)}
                              />
                            </Col>
                          </Form.Group>
                        </Form>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="col-md-12 pl-5">
                        <h4>{content.steps.stepFive.savings.title}</h4>
                        <Form.Group
                          as={Row}
                          controlId="formPlaintextDifferenceInPrice"
                        >
                          <Form.Label column sm="2">
                            {content.steps.stepFive.savings.monthly}
                          </Form.Label>
                          <Col sm="4">
                            <Form.Label column sm="12">
                              {boltsMonthlySavings}
                              <OverlayTrigger
                                trigger="click"
                                placement="right"
                                overlay={boltsMonthlySavingsPopover}
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
                            {content.steps.stepFive.savings.yearly}
                          </Form.Label>
                          <Col sm="4">
                            <Form.Label column sm="12">
                              {boltsYearlySavings}
                            </Form.Label>
                          </Col>
                          <Button
                            variant="primary"
                            className="ml-3 mt-3"
                            type="Calculate"
                            onClick={() => {
                              calculateBolts()
                            }}
                          >
                            Calculate
                          </Button>
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="col-lg-4 col-12">
                    <Image src={Bolts} fluid></Image>
                  </Col>
                </Row>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="5"
              className="stepHeaderFont"
            >
              {content.steps.stepSix.title}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                <Row>
                  <Col className="col-lg-8 col-12">
                    <Row>
                      <Col className="col-md-12 pl-5">
                        <Form>
                          <Form.Group
                            as={Row}
                            controlId="formPlaintextDifferenceInPrice"
                          >
                            <Form.Label column sm="12">
                              {content.steps.stepSix.overhaul.assumption}
                            </Form.Label>
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
                            {content.steps.stepSix.overhaul.monthly}
                          </Form.Label>
                          <Col sm="8">
                            <Form.Label column sm="12">
                              {overhaulMonthlyTime}
                              <OverlayTrigger
                                trigger="click"
                                placement="right"
                                overlay={overhaulPopover}
                              >
                                <FontAwesomeIcon
                                  icon={faQuestionCircle}
                                  className="fa-1x"
                                  className="ml-3"
                                />
                              </OverlayTrigger>
                            </Form.Label>
                          </Col>
                          <Form.Label column sm="4">
                            {content.steps.stepSix.overhaul.yearly}
                          </Form.Label>
                          <Col sm="8">
                            <Form.Label column sm="12">
                              {overhaulYearlyTime}
                            </Form.Label>
                          </Col>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="col-md-12 pl-5">
                        <Form>
                          <Form.Group
                            as={Row}
                            controlId="formPlaintextDifferenceInPrice"
                          >
                            <Form.Label column sm="12">
                              {content.steps.stepSix.assumptionOperation}
                            </Form.Label>
                          </Form.Group>
                        </Form>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="col-md-12 pl-5">
                        <Form>
                          <Form.Group
                            as={Row}
                            controlId="formPlaintextDifferenceInPrice"
                          >
                            <Form.Label column sm="4">
                              {content.steps.stepSix.loss}
                            </Form.Label>
                            <Col sm="8">
                              <Form.Label column sm="12">
                                {lossOperationalDays}
                                <OverlayTrigger
                                  trigger="click"
                                  placement="right"
                                  overlay={lossOperationPopover}
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
                        </Form>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="col-md-12 pl-5">
                        <Form>
                          <Form.Group as={Row} controlId="mileage">
                            <Form.Label column sm="4">
                              {content.steps.stepSix.earnings}
                            </Form.Label>
                            <Col sm="8">
                              <Form.Control
                                type="Maintenance"
                                placeholder="Input"
                                onChange={e => setEarnings(e.target.value)}
                              />
                            </Col>
                          </Form.Group>
                        </Form>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="col-md-12 pl-5">
                        <h4>{content.steps.stepFive.savings.title}</h4>
                        <Form.Group
                          as={Row}
                          controlId="formPlaintextDifferenceInPrice"
                        >
                          <Form.Label column sm="2">
                            {content.steps.stepFive.savings.monthly}
                          </Form.Label>
                          <Col sm="4">
                            <Form.Label column sm="12">
                              {downtimeMonthlySavings}
                              <OverlayTrigger
                                trigger="click"
                                placement="right"
                                overlay={downtimeMonthlySavingsPopover}
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
                            {content.steps.stepFive.savings.yearly}
                          </Form.Label>
                          <Col sm="4">
                            <Form.Label column sm="12">
                              {downtimeYearlySavings}
                            </Form.Label>
                          </Col>
                          <Button
                            variant="primary"
                            className="ml-3 mt-3"
                            type="Calculate"
                            onClick={() => {
                              calculateDowntime()
                            }}
                          >
                            Calculate
                          </Button>
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="col-lg-4 col-12">
                    <Image src={Downtime} fluid></Image>
                  </Col>
                </Row>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="6"
              className="stepHeaderFont"
            >
              {content.steps.stepSeven.title}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="6">
              <Card.Body>
                <Row>
                  <Col className="col-12 pl-5 text-uppercase retreadGrandTotal">
                    <Form>
                      <Form.Group
                        as={Row}
                        controlId="formPlaintextDifferenceInPrice"
                      >
                        <Form.Label column sm="4">
                          <h1>{content.steps.stepSeven.savings}</h1>
                        </Form.Label>
                        <Col sm="8">
                          <Form.Label column sm="12">
                            <h1>{yearlySavings}</h1>
                          </Form.Label>
                        </Col>
                      </Form.Group>
                    </Form>
                  </Col>
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
