import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import Shield from "../../images/myth1.png"
import Wheel from "../../images/myth2.png"
import Piggy from "../../images/myth3.png"
import Chain from "../../images/myth4.png"
import Temp from "../../images/myth5.png"
import Form from "../../images/myth6.png"

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
      title: "mitos vs fakta",
      myths: {
        myth1: {
          title: "Mitos 1",
          subtitle: "Vulkanisir tidak aman",
          descriptionTitle: "fakta 1",
          description:
            "Keamanan vulkanisir sangat bergantung pada dua hal: kualitas casing dan kualitas vulkanisir oleh pabrikan. Vulkanisir kami menggunakan teknologi canggih, peralatan, dan teknik inspeksi komprehensif untuk memastikan bahwa hanya casing yang memenuhi syarat yang di-vulkanisir. Setelah memenuhi syarat, mereka akan menjalani vulkanisir dengan sangat serius.",
        },
        myth2: {
          title: "Mitos 2",
          subtitle: "Vulkanisir tidak bekerja sebaik ban baru",
          descriptionTitle: "fakta 2",
          description:
            "Tahukah Anda bahwa lebih dari 80% dari semua ban pesawat yang digunakan di AS adalah vulkanisir? Jet tempur dan bus sekolah juga menggunakannya! Jika vulkanisir tidak berhasil, lalu mengapa vulkanisir digunakan setiap hari di berbagai industri?",
        },
        myth3: {
          title: "Mitos 3",
          subtitle: "Vulkanisir pada akhirnya akan membebani Anda lebih banyak",
          descriptionTitle: "fakta 3",
          description:
            "Biaya vulkanisir jauh lebih murah daripada ban baru dimuka karena vulkanisir dibuat menggunakan casing yang ada. Tetapi mereka juga menghemat dalam jangka panjang, karena kinerja vulkanisir kami sebanding dengan ban baru yang berarti Anda akan mendapatkan jarak tempuh yang sama dengan biaya yang jauh lebih rendah.",
        },
        myth4: {
          title: "Mitos 4",
          subtitle:
            "vulkanisir akan lebih cepat aus dan menyebabkan lebih banyak ledakan daripada ban baru",
          descriptionTitle: "Fakta 4",
          description:
            "Vulkanisir akan aus seperti halnya ban baru dan ledakan biasanya disebabkan oleh kurangnya perawatan yang tepat pada ban.",
        },
        myth5: {
          title: "Mitos 5",
          subtitle: "Panas dengan mudah merusak vulkanisir",
          descriptionTitle: "Fakta 5",
          description:
            "Terlalu banyak panas dapat merusak ban baik baru maupun vulkanisir. Penyebab utama kerusakan ban adalah kurangnya inflasi sehingga ban perlu dirawat dengan benar.",
        },
        myth6: {
          title: "Mitos 6",
          subtitle: "Vulkanisir ilegal",
          descriptionTitle: "fakta 6",
          description:
            "Vulkanisir legal di banyak negara dan pasti legal di Indonesia",
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
          <Row className="">
            <Col className="col-xl-4 col-md-6 col-sm-12 col-12 text-center mythBackground pl-2 pr-2 mb-5">
              <Row className="ml-2 mr-2 pt-4">
                <h4 className="mythTitle centerHorizon">
                  {content.myths.myth1.title}
                </h4>
                <h4 className="mythTitle centerHorizon mythTitleSize pt-1">
                  {content.myths.myth1.subtitle}
                </h4>
                <Image
                  className="centerHorizon mythSize pt-4"
                  src={Shield}
                  fluid
                ></Image>
                <h4 className="centerHorizon pt-5 text-uppercase text-white">
                  {content.myths.myth1.descriptionTitle}
                </h4>
                <h4 className="centerHorizon pb-5 text-white">
                  {content.myths.myth1.description}
                </h4>
              </Row>
            </Col>
            <Col className="col-xl-4 col-md-6 col-sm-12 col-12 text-center mythBackground pl-2 pr-2 mb-5">
              <Row className="ml-2 mr-2 pt-4">
                <h4 className="mythTitle centerHorizon">
                  {content.myths.myth2.title}
                </h4>
                <h4 className="mythTitle centerHorizon mythTitleSize pt-1">
                  {content.myths.myth2.subtitle}
                </h4>
                <Image
                  className="centerHorizon mythSize pt-4"
                  src={Wheel}
                  fluid
                ></Image>
                <h4 className="centerHorizon pt-5 text-uppercase text-white">
                  {content.myths.myth2.descriptionTitle}
                </h4>
                <h4 className="centerHorizon text-white">
                  {content.myths.myth2.description}
                </h4>
              </Row>
            </Col>
            <Col className="col-xl-4 col-md-6 col-sm-12 col-12 text-center mythBackground pl-2 pr-2 mb-5">
              <Row className="ml-2 mr-2 pt-4">
                <h4 className="mythTitle centerHorizon">
                  {content.myths.myth3.title}
                </h4>
                <h4 className="mythTitle centerHorizon mythTitleSize pt-1">
                  {content.myths.myth3.subtitle}
                </h4>
                <Image
                  className="centerHorizon mythSize pt-4"
                  src={Piggy}
                  fluid
                ></Image>
                <h4 className="centerHorizon pt-5 text-uppercase text-white">
                  {content.myths.myth3.descriptionTitle}
                </h4>
                <h4 className="centerHorizon text-white">
                  {content.myths.myth3.description}
                </h4>
              </Row>
            </Col>
          </Row>
          <Row className="">
            <Col className="col-xl-4 col-md-6 col-sm-12 col-12 text-center mythBackground pl-2 pr-2 mb-5">
              <Row className="ml-2 mr-2 pt-4">
                <h4 className="mythTitle centerHorizon">
                  {content.myths.myth4.title}
                </h4>
                <h4 className="mythTitle centerHorizon mythTitleSize pt-1">
                  {content.myths.myth4.subtitle}
                </h4>
                <Image
                  className="centerHorizon mythSize pt-4"
                  src={Chain}
                  fluid
                ></Image>
                <h4 className="centerHorizon pt-5 text-uppercase text-white">
                  {content.myths.myth4.descriptionTitle}
                </h4>
                <h4 className="centerHorizon pb-5 pr-4 text-white">
                  {content.myths.myth4.description}
                </h4>
              </Row>
            </Col>
            <Col className="col-xl-4 col-md-6 col-sm-12 col-12 text-center mythBackground pl-2 pr-2 mb-5">
              <Row className="ml-2 mr-2 pt-4">
                <h4 className="mythTitle centerHorizon">
                  {content.myths.myth5.title}
                </h4>
                <h4 className="mythTitle centerHorizon mythTitleSize pt-1">
                  {content.myths.myth5.subtitle}
                </h4>
                <Image
                  className="centerHorizon mythSize pt-4"
                  src={Temp}
                  fluid
                ></Image>
                <h4 className="centerHorizon pt-5 text-uppercase text-white">
                  {content.myths.myth5.descriptionTitle}
                </h4>
                <h4 className="centerHorizon text-white">
                  {content.myths.myth5.description}
                </h4>
              </Row>
            </Col>
            <Col className="col-xl-4 col-md-6 col-sm-12 col-12 text-center mythBackground pl-2 pr-2 mb-5">
              <Row className="ml-2 mr-2 pt-4">
                <h4 className="mythTitle centerHorizon">
                  {content.myths.myth6.title}
                </h4>
                <h4 className="mythTitle centerHorizon mythTitleSize pt-1">
                  {content.myths.myth6.subtitle}
                </h4>
                <Image
                  className="centerHorizon mythSize pt-4"
                  src={Form}
                  fluid
                ></Image>
                <h4 className="centerHorizon pt-5 text-uppercase text-white">
                  {content.myths.myth6.descriptionTitle}
                </h4>
                <h4 className="centerHorizon text-white">
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
