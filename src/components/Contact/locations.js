import React from "react"
import Map from "./googleMap"

import "./contact.css"

const locations = [
  {
    location1: {
      id: 1,
      name: "Medan",
      coordinates: {
        lat: 3.595334,
        lng: 98.673602,
      },
    },
    location2: {
      id: 2,
      name: "Pematang Siantar",
      coordinates: {
        lat: 2.955764,
        lng: 99.063064,
      },
    },
    location3: {
      id: 3,
      name: "Padang",
      coordinates: {
        lat: -0.905404,
        lng: 100.386805,
      },
    },
    location4: {
      id: 4,
      name: "Pekanbaru",
      coordinates: {
        lat: 0.508298,
        lng: 101.446324,
      },
    },
    location5: {
      id: 3,
      name: "Bandar Lampung",
      coordinates: {
        lat: -5.394147,
        lng: 105.26593,
      },
    },
    location6: {
      id: 4,
      name: "Serang",
      coordinates: {
        lat: -6.118078,
        lng: 106.159277,
      },
    },
  },
]

const locationSettings = [
  {
    style: {
      height: "30vh",
      width: "100%",
    },
    options: {
      minZoom: 3.7,
      maxZoom: 8,
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
