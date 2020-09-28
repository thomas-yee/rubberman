import React from "react"
import Title from "../title"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons"
import Map from "./googleMap"

import "./contact.css"

const locations = [
  {
    name: "location1",
    defaultZoom: 15,
    defaultCenter: {
      lat: 50.414361,
      lng: -105.531109,
    },
    style: {
      height: "40vh",
      width: "85%",
    },
  },
]

const Locations = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Office Locations" />

        <div className="row">
          <div className="col-1 pt-4">
            <FontAwesomeIcon
              icon={faLocationArrow}
              className="location-icon fa-3x"
            />
          </div>
          <div className="col-3">
            <h4 className="font-weight-bold">Calgary </h4>
            <text>
              2000 Street NW <br />
              Calgary, AB, 3K6 L0D <br />
              Canada <br />
            </text>
          </div>
          <div className="col">
            <Map location={locations[0]} />
          </div>
        </div>
        <div className="row"></div>
      </div>
    </section>
  )
}

export default Locations
