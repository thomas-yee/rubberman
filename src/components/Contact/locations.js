import React from "react"
import Title from "../title"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons"

import "./contact.css"

const Locations = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Office Locations" />

        <div className="row">
          <div className="col">
            <FontAwesomeIcon
              icon={faLocationArrow}
              className="location-icon fa-3x"
            />
          </div>
          <div className="col-11">
            <h4 className="font-weight-bold">Calgary </h4>
            <text>
              2000 Street NW <br />
              Calgary, AB, 3K6 L0D <br />
              Canada <br />
            </text>
          </div>
        </div>
        <div className="row"></div>
      </div>
    </section>
  )
}

export default Locations
