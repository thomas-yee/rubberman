import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import Wheel from "../../images/blank-image.jpg"
import Background from "../../images/products_1.jpg"

const Info = () => {
  let products = [
    {
      size1: {
        id: 1,
        size: "RGY 208 | 14 | 1100-20/1000R-20/11R-22.5",
      },
      size2: {
        id: 2,
        size: "RGY 216 | 14 | 1100-20/1000R-20/11R-22.5",
      },
      size3: {
        id: 3,
        size: "RGY 230 | 14 | 1100-20/1000R-20/11R-22.5",
      },
      size4: {
        id: 4,
        size: "RGY 242 | 14 | 1200-20/1100R-20/11R-22.5/295-22.5",
      },
      size5: {
        id: 5,
        size: "RF 193 | 14 | 1000-20",
      },
      size6: {
        id: 6,
        size: "RF 203 | 14 | 1100-20",
      },
      size7: {
        id: 7,
        size: "RAB 160 | 12 | 750-15/16",
      },
      size8: {
        id: 8,
        size: "RAB 176 | 13 | 900-20",
      },
      size9: {
        id: 9,
        size: "RAR 193 | 13.5 | 1000-20",
      },
      size10: {
        id: 10,
        size: "RAR 203 | 13.5 | 1100-20",
      },
      size11: {
        id: 11,
        size: "RAL 140| 12 | 700-16",
      },
      size12: {
        id: 12,
        size: "RAL 158| 12 | 750-15/16",
      },
      size13: {
        id: 13,
        size: "RAL 178| 13.5 | 900-20",
      },
      size14: {
        id: 14,
        size: "RAL 203| 13.5 | 1100-20",
      },
      size15: {
        id: 15,
        size: "RM 193 | 13.5 | 1000-20",
      },
      size16: {
        id: 16,
        size: "RM 216 | 14 | 1100-20/1000R-20/11R-22.5",
      },
      size17: {
        id: 17,
        size: "RM 193 | 13.5 | 1100R-20/11R-22.5/205-22.5",
      },
      size18: {
        id: 18,
        size: "RMR 250 A | 14 | 1200-20/11R-22.5/295-22.5/1100R-20",
      },
      size19: {
        id: 19,
        size: "RMR 250 B | 17 | 1200-20/11R-22.5/295-22.5/1100R-20",
      },
      size20: {
        id: 20,
        size: "RLG 198 | 17 | 1000-20/1100R-20",
      },
      size21: {
        id: 21,
        size: "RH 168 | 13 | 900-20",
      },
      size22: {
        id: 22,
        size: "RCE 150 | 13 | 750-15/16",
      },
      size23: {
        id: 23,
        size: "RCE 178 | 14 | 900-20",
      },
      size24: {
        id: 24,
        size: "RCE 195 | 14.5 | 1000-20",
      },
      size25: {
        id: 25,
        size: "RCE 205 | 14.5 | 1100-20",
      },
      size26: {
        id: 26,
        size: "RGF 195 | 14.5 | 1000-20",
      },
      size27: {
        id: 27,
        size: "RGF 205 | 14.5 | 1100-20",
      },
      size28: {
        id: 28,
        size: "RHR 158 | 13 | 750-15/16",
      },
      size29: {
        id: 29,
        size: "RHR 178 | 14 | 900-20",
      },
      size30: {
        id: 30,
        size: "RHR 195 | 14 | 1000-20",
      },
      size31: {
        id: 31,
        size: "RHR 205 | 14.5 | 1100-20",
      },
      size32: {
        id: 32,
        size: "RHM 220 | 15 | 1100-20/1000R-20/11R-22.5",
      },
      size33: {
        id: 33,
        size: "RHM 250 | 17 | 1200-20/1100R-20/11R-22.5/295-22.5",
      },
      size34: {
        id: 34,
        size: "RMR 240 | 17 | 1200-20/1100R-20/11R-22.5/295-22.5",
      },
      size35: {
        id: 35,
        size: "RW 230 | 17 | 1100R-20/11R-22.5/295-22.5",
      },
      size36: {
        id: 36,
        size: "RW 240 | 17 | 1200-20/1100R-20/11R-22.5/295-22.5",
      },
      size37: {
        id: 37,
        size: "RW 250 | 17 | 1200-20/1100R-20/11R-22.5/295-22.5",
      },
      size38: {
        id: 38,
        size: "RHM 240 | 17 | 1200-20/1100R-20/11R-22.5/295-22.5",
      },
      size39: {
        id: 39,
        size: "RM 240 | 14 | 1100R-20/11R-22.5/295-22.5",
      },
      size40: {
        id: 40,
        size: "RM 250 | 14 | 1100R-20/11R-22.5/295-22.5",
      },
      size41: {
        id: 41,
        size: "RAL 184 | 13.5 | 1000-20",
      },
    },
  ]

  return (
    <section className="bg-light">
      <div className="container-fluid">
        <Image src={Background} fluid></Image>
      </div>
      <Container className="pt-4">
        <Row>
          <Col>
            <Row>
              <Image src={Wheel} fluid></Image>
            </Row>
            <Row>
              <ul className="list-unstyled">
                {Object.keys(products[0])
                  .slice(0, 4)
                  .map((size, i) => {
                    return (
                      <li key={i} className="pt-2">
                        {products[0][size].size}
                      </li>
                    )
                  })}
              </ul>
            </Row>
          </Col>
          <Col>
            <Row>
              <Image src={Wheel} fluid></Image>
            </Row>
            <Row>
              <ul className="list-unstyled">
                {Object.keys(products[0])
                  .slice(4, 6)
                  .map((size, i) => {
                    return (
                      <li key={i} className="pt-2">
                        {products[0][size].size}
                      </li>
                    )
                  })}
              </ul>
            </Row>
          </Col>
          <Col>
            <Row>
              <Image src={Wheel} fluid></Image>
            </Row>
            <Row>
              <ul className="list-unstyled">
                {Object.keys(products[0])
                  .slice(6, 8)
                  .map((size, i) => {
                    return (
                      <li key={i} className="pt-2">
                        {products[0][size].size}
                      </li>
                    )
                  })}
              </ul>
            </Row>
          </Col>
        </Row>
        <Row className>
          <Col>
            <Row>
              <Image src={Wheel} fluid></Image>
            </Row>
            <Row>
              <ul className="list-unstyled">
                {Object.keys(products[0])
                  .slice(8, 10)
                  .map((size, i) => {
                    return (
                      <li key={i} className="pt-2">
                        {products[0][size].size}
                      </li>
                    )
                  })}
              </ul>
            </Row>
          </Col>
          <Col>
            <Row>
              <Image src={Wheel} fluid></Image>
            </Row>
            <Row>
              <ul className="list-unstyled">
                {Object.keys(products[0])
                  .slice(10, 14)
                  .map((size, i) => {
                    return (
                      <li key={i} className="pt-2">
                        {products[0][size].size}
                      </li>
                    )
                  })}
              </ul>
            </Row>
          </Col>
          <Col>
            <Row>
              <Image src={Wheel} fluid></Image>
            </Row>
            <Row>
              <ul className="list-unstyled">
                {Object.keys(products[0])
                  .slice(14, 17)
                  .map((size, i) => {
                    return (
                      <li key={i} className="pt-2">
                        {products[0][size].size}
                      </li>
                    )
                  })}
              </ul>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Image src={Wheel} fluid></Image>
            </Row>
            <Row>
              <ul className="list-unstyled">
                {Object.keys(products[0])
                  .slice(17, 19)
                  .map((size, i) => {
                    return (
                      <li key={i} className="pt-2">
                        {products[0][size].size}
                      </li>
                    )
                  })}
              </ul>
            </Row>
          </Col>
          <Col>
            <Row>
              <Image src={Wheel} fluid></Image>
            </Row>
            <Row>
              <ul className="list-unstyled">
                {Object.keys(products[0])
                  .slice(19, 20)
                  .map((size, i) => {
                    return (
                      <li key={i} className="pt-2">
                        {products[0][size].size}
                      </li>
                    )
                  })}
              </ul>
            </Row>
          </Col>
          <Col>
            <Row>
              <Image src={Wheel} fluid></Image>
            </Row>
            <Row>
              <ul className="list-unstyled">
                {Object.keys(products[0])
                  .slice(20, 21)
                  .map((size, i) => {
                    return (
                      <li key={i} className="pt-2">
                        {products[0][size].size}
                      </li>
                    )
                  })}
              </ul>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Image src={Wheel} fluid></Image>
            </Row>
            <Row>
              <ul className="list-unstyled">
                {Object.keys(products[0])
                  .slice(21, 25)
                  .map((size, i) => {
                    return (
                      <li key={i} className="pt-2">
                        {products[0][size].size}
                      </li>
                    )
                  })}
              </ul>
            </Row>
          </Col>
          <Col>
            <Row>
              <Image src={Wheel} fluid></Image>
            </Row>
            <Row>
              <ul className="list-unstyled">
                {Object.keys(products[0])
                  .slice(25, 27)
                  .map((size, i) => {
                    return (
                      <li key={i} className="pt-2">
                        {products[0][size].size}
                      </li>
                    )
                  })}
              </ul>
            </Row>
          </Col>
          <Col>
            <Row>
              <Image src={Wheel} fluid></Image>
            </Row>
            <Row>
              <ul className="list-unstyled">
                {Object.keys(products[0])
                  .slice(27, 31)
                  .map((size, i) => {
                    return (
                      <li key={i} className="pt-2">
                        {products[0][size].size}
                      </li>
                    )
                  })}
              </ul>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Image src={Wheel} fluid></Image>
            </Row>
            <Row>
              <ul className="list-unstyled">
                {Object.keys(products[0])
                  .slice(31, 33)
                  .map((size, i) => {
                    return (
                      <li key={i} className="pt-2">
                        {products[0][size].size}
                      </li>
                    )
                  })}
              </ul>
            </Row>
          </Col>
          <Col>
            <Row>
              <Image src={Wheel} fluid></Image>
            </Row>
            <Row>
              <ul className="list-unstyled">
                {Object.keys(products[0])
                  .slice(33, 34)
                  .map((size, i) => {
                    return (
                      <li key={i} className="pt-2">
                        {products[0][size].size}
                      </li>
                    )
                  })}
              </ul>
            </Row>
          </Col>
          <Col>
            <Row>
              <Image src={Wheel} fluid></Image>
            </Row>
            <Row>
              <ul className="list-unstyled">
                {Object.keys(products[0])
                  .slice(34, 37)
                  .map((size, i) => {
                    return (
                      <li key={i} className="pt-2">
                        {products[0][size].size}
                      </li>
                    )
                  })}
              </ul>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Image src={Wheel} fluid></Image>
            </Row>
            <Row>
              <ul className="list-unstyled">
                {Object.keys(products[0])
                  .slice(37, 38)
                  .map((size, i) => {
                    return (
                      <li key={i} className="pt-2">
                        {products[0][size].size}
                      </li>
                    )
                  })}
              </ul>
            </Row>
          </Col>
          <Col>
            <Row>
              <Image src={Wheel} fluid></Image>
            </Row>
            <Row>
              <ul className="list-unstyled">
                {Object.keys(products[0])
                  .slice(38, 40)
                  .map((size, i) => {
                    return (
                      <li key={i} className="pt-2">
                        {products[0][size].size}
                      </li>
                    )
                  })}
              </ul>
            </Row>
          </Col>
          <Col>
            <Row>
              <Image src={Wheel} fluid></Image>
            </Row>
            <Row>
              <ul className="list-unstyled">
                {Object.keys(products[0])
                  .slice(40, 41)
                  .map((size, i) => {
                    return (
                      <li key={i} className="pt-2">
                        {products[0][size].size}
                      </li>
                    )
                  })}
              </ul>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Info
