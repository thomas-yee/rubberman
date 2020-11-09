import React from "react"
import Map from "./googleMap"

import "./contact.css"

const locations = [
  {
    location1: {
      id: 1,
      name: "location1",
      coordinates: {
        lat: -4.391102,
        lng: 122.085345,
      },
    },
    location2: {
      id: 2,
      name: "location2",
      coordinates: {
        lat: -5.293221,
        lng: 122.861457,
      },
    },
  },
]

const locationSettings = [
  {
    style: {
      height: "40vh",
      width: "100%",
    },
    options: {
      minZoom: 3,
      maxZoom: 15,
      defaultCenter: {
        lat: -4.391102,
        lng: 122.085345,
      },
      defaultZoom: 3.7,
    },
  },
]

const Locations = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <Map
              location={locations[0]}
              options={locationSettings[0].options}
              style={locationSettings[0].style}
            />
          </div>
        </div>
        <div className="row"></div>
      </div>
    </section>
  )
}

export default Locations
