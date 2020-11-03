import React from "react"
import Title from "../title"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons"
import Map from "./googleMap"

import "./contact.css"

const locations = [
  {
    name: "location1",
    defaultZoom: 10,
    defaultCenter: {
      lat: 50.414361,
      lng: -105.531109,
    },
    style: {
      height: "40vh",
      width: "85%",
    },
    options: {
      minZoom: 4,
      maxZoom: 10,
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
              T: +62-21-4584-4781
              <br />
              F: +62-21-4584-4785
              <br />
            </text>
          </div>
          <div className="col">
            <Map location={locations[0]} options={locations.options} />
          </div>
        </div>
        <div className="row"></div>
      </div>
    </section>
  )
}

export default Locations
