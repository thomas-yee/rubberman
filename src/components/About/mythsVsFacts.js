import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import Shield from "../../images/myth1.png"

const Intro = props => {
  let content = {
    English: {
      title: "myths vs facts",
      myths: {
        myth1: {
          title: "Myth 1",
          subtitle: "Retreads are not safe",
          descriptionTitle: "fact 1",
          description:
            "Safety of retreads depends a lot on two things: the quality of the casing and the quality of the retreading by the manufacturer. Our retreading uses advanced technology, equipment, and comprehensive inspection techniques to ensure that only qualified casings are retreaded. Once qualified they are retreaded with the utmost seriousnes.",
        },
        myth2: {
          title: "Myth 2",
          subtitle: "Retreads don't perform as well as new tires",
          descriptionTitle: "fact 2",
          description:
            "Did you know that more than 80% of all aircraft tires in use in the US are retreads? Fighter jets and school buses use them too! If retreads don't perform, then why would they be used every day across various industries?",
        },
        myth3: {
          title: "Myth 3",
          subtitle: "Retreads will end up costing you more",
          descriptionTitle: "fact 3",
          description:
            "Retreads cost much less than new tires upfront because retreads are made using existing casings. But they also save in the long run, because the performance of our retreads are comparable to new tires meaning that you will receive similar mileage with a significantly lower cost.",
        },
        myth4: {
          title: "Myth 4",
          subtitle:
            "retreads will wear out faster and cause more blowouts than new tires",
          descriptionTitle: "fact 4",
          description:
            "Retreads will wear out similarly to new tires and blowouts are usually caused by lack of proper maintenance of the tire.",
        },
        myth5: {
          title: "Myth 5",
          subtitle: "Heat easily ruins retreads",
          descriptionTitle: "fact 5",
          description:
            "Too much heat can ruin any tire whether new or retreaded. The main cause of het damage is underinflation so proper maintenance of the tire is required.",
        },
        myth6: {
          title: "Myth 6",
          subtitle: "Retreads are illegal",
          descriptionTitle: "fact 6",
          description:
            "Retreads are legal in many countries and are definitely legal in Indonesia",
        },
      },
    },
    Indonesian: {
      title: "myths vs facts",
      myths: {
        myth1: {
          title: "Myth 1",
          subtitle: "Retreads are not safe",
          descriptionTitle: "fact 1",
          description:
            "Safety of retreads depends a lot on two things: the quality of the casing and the quality of the retreading by the manufacturer. Our retreading uses advanced technology, equipment, and comprehensive inspection techniques to ensure that only qualified casings are retreaded. Once qualified they are retreaded with the utmost seriousnes.",
        },
        myth2: {
          title: "Myth 2",
          subtitle: "Retreads don't perform as well as new tires",
          descriptionTitle: "fact 2",
          description:
            "Did you know that more than 80% of all aircraft tires in use in the US are retreads? Fighter jets and school buses use them too! If retreads don't perform, then why would they be used every day across various industries?",
        },
        myth3: {
          title: "Myth 3",
          subtitle: "Retreads will end up costing you more",
          descriptionTitle: "fact 3",
          description:
            "Retreads cost much less than new tires upfront because retreads are made using existing casings. But they also save in the long run, because the performance of our retreads are comparable to new tires meaning that you will receive similar mileage with a significantly lower cost.",
        },
        myth4: {
          title: "Myth 4",
          subtitle:
            "retreads will wear out faster and cause more blowouts than new tires",
          descriptionTitle: "fact 4",
          description:
            "Retreads will wear out similarly to new tires and blowouts are usually caused by lack of proper maintenance of the tire.",
        },
        myth5: {
          title: "Myth 5",
          subtitle: "Heat easily ruins retreads",
          descriptionTitle: "fact 5",
          description:
            "Too much heat can ruin any tire whether new or retreaded. The main cause of het damage is underinflation so proper maintenance of the tire is required.",
        },
        myth6: {
          title: "Myth 6",
          subtitle: "Retreads are illegal",
          descriptionTitle: "fact 6",
          description:
            "Retreads are legal in many countries and are definitely legal in Indonesia",
        },
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
      <section>
        {checkLanguage()}
        <div className="container-fluid ">
          <Row className="mythTitle pl-3 pb-3">
            <h2>{content.title}</h2>
          </Row>
          <Row>
            <Col className="col-md-4 text-center">
              <Row className="ml-2 mr-2 pt-3 mythBackground">
                <h4 className="mythTitle centerHorizon">
                  {content.myths.myth1.title}
                </h4>
                <h4 className="mythTitle centerHorizon">
                  {content.myths.myth1.subtitle}
                </h4>
                <Image
                  className="centerHorizon mythSize pt-4"
                  src={Shield}
                  fluid
                ></Image>
                <h4 className="centerHorizon pt-4 text-uppercase">
                  {content.myths.myth1.descriptionTitle}
                </h4>
                <h4 className="centerHorizon">
                  {content.myths.myth1.description}
                </h4>
              </Row>
            </Col>
            <Col className="col-md-4 text-center">
              <Row className="ml-2 mr-2 pt-3 mythBackground">
                <h4 className="mythTitle centerHorizon">
                  {content.myths.myth2.title}
                </h4>
                <h4 className="mythTitle centerHorizon">
                  {content.myths.myth2.subtitle}
                </h4>
                <Image
                  className="centerHorizon mythSize pt-4"
                  src={Shield}
                  fluid
                ></Image>
                <h4 className="centerHorizon pt-4 text-uppercase">
                  {content.myths.myth2.descriptionTitle}
                </h4>
                <h4 className="centerHorizon">
                  {content.myths.myth2.description}
                </h4>
              </Row>
            </Col>
            <Col className="col-md-4 text-center ">
              <Row className="ml-2 mr-2 pt-3 mythBackground">
                <h4 className="mythTitle centerHorizon">
                  {content.myths.myth3.title}
                </h4>
                <h4 className="mythTitle centerHorizon">
                  {content.myths.myth3.subtitle}
                </h4>
                <Image
                  className="centerHorizon mythSize pt-4"
                  src={Shield}
                  fluid
                ></Image>
                <h4 className="centerHorizon pt-4 text-uppercase">
                  {content.myths.myth3.descriptionTitle}
                </h4>
                <h4 className="centerHorizon">
                  {content.myths.myth3.description}
                </h4>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="col-md-4 text-center">
              <Row className="ml-2 mr-2 pt-3 mythBackground">
                <h4 className="mythTitle centerHorizon">
                  {content.myths.myth4.title}
                </h4>
                <h4 className="mythTitle centerHorizon">
                  {content.myths.myth4.subtitle}
                </h4>
                <Image
                  className="centerHorizon mythSize pt-4"
                  src={Shield}
                  fluid
                ></Image>
                <h4 className="centerHorizon pt-4 text-uppercase">
                  {content.myths.myth4.descriptionTitle}
                </h4>
                <h4 className="centerHorizon">
                  {content.myths.myth4.description}
                </h4>
              </Row>
            </Col>
            <Col className="col-md-4 text-center">
              <Row className="ml-2 mr-2 pt-3 mythBackground">
                <h4 className="mythTitle centerHorizon">
                  {content.myths.myth5.title}
                </h4>
                <h4 className="mythTitle centerHorizon">
                  {content.myths.myth5.subtitle}
                </h4>
                <Image
                  className="centerHorizon mythSize pt-4"
                  src={Shield}
                  fluid
                ></Image>
                <h4 className="centerHorizon pt-4 text-uppercase">
                  {content.myths.myth5.descriptionTitle}
                </h4>
                <h4 className="centerHorizon">
                  {content.myths.myth5.description}
                </h4>
              </Row>
            </Col>
            <Col className="col-md-4 text-center ">
              <Row className="ml-2 mr-2 pt-3 mythBackground">
                <h4 className="mythTitle centerHorizon">
                  {content.myths.myth6.title}
                </h4>
                <h4 className="mythTitle centerHorizon">
                  {content.myths.myth6.subtitle}
                </h4>
                <Image
                  className="centerHorizon mythSize pt-4"
                  src={Shield}
                  fluid
                ></Image>
                <h4 className="centerHorizon pt-4 text-uppercase">
                  {content.myths.myth6.descriptionTitle}
                </h4>
                <h4 className="centerHorizon">
                  {content.myths.myth6.description}
                </h4>
              </Row>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  )
}

export default Intro
