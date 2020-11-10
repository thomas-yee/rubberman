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
      id: 5,
      name: "Bandar Lampung",
      coordinates: {
        lat: -5.394147,
        lng: 105.26593,
      },
    },
    location6: {
      id: 6,
      name: "Serang",
      coordinates: {
        lat: -6.118078,
        lng: 106.159277,
      },
    },
    location7: {
      id: 7,
      name: "Jakarta",
      coordinates: {
        lat: -6.207557,
        lng: 106.849772,
      },
    },
    location8: {
      id: 8,
      name: "Bekasi",
      coordinates: {
        lat: -6.267813,
        lng: 106.976465,
      },
    },
    location9: {
      id: 9,
      name: "Sukabumi",
      coordinates: {
        lat: -6.92909,
        lng: 106.930099,
      },
    },
    location10: {
      id: 10,
      name: "Bandung",
      coordinates: {
        lat: -6.919637,
        lng: 107.618438,
      },
    },
    location11: {
      id: 11,
      name: "Cirebon",
      coordinates: {
        lat: -6.738259,
        lng: 108.551464,
      },
    },
    location12: {
      id: 12,
      name: "Tegal",
      coordinates: {
        lat: -6.878495,
        lng: 109.12505,
      },
    },
    location13: {
      id: 13,
      name: "Purwokerto",
      coordinates: {
        lat: -7.418691,
        lng: 109.236551,
      },
    },
    location14: {
      id: 14,
      name: "Cilacap",
      coordinates: {
        lat: -7.706513,
        lng: 109.022366,
      },
    },
    location15: {
      id: 15,
      name: "Semarang",
      coordinates: {
        lat: -7.003261,
        lng: 110.429081,
      },
    },
    location16: {
      id: 16,
      name: "Jogja",
      coordinates: {
        lat: -7.845816,
        lng: 110.370721,
      },
    },
    location17: {
      id: 17,
      name: "Solo",
      coordinates: {
        lat: -7.556231,
        lng: 110.826108,
      },
    },
    location18: {
      id: 18,
      name: "Purworejo",
      coordinates: {
        lat: -7.722956,
        lng: 109.97751,
      },
    },
    location19: {
      id: 19,
      name: "Kudus",
      coordinates: {
        lat: -6.788084,
        lng: 110.871404,
      },
    },
    location20: {
      id: 20,
      name: "Lasem",
      coordinates: {
        lat: -6.692918,
        lng: 111.44264,
      },
    },
    location21: {
      id: 21,
      name: "Ponorogo",
      coordinates: {
        lat: -7.924964,
        lng: 111.505374,
      },
    },
    location22: {
      id: 22,
      name: "Tuban",
      coordinates: {
        lat: -6.893739,
        lng: 112.033221,
      },
    },
    location23: {
      id: 23,
      name: "Tulungagung",
      coordinates: {
        lat: -8.106862,
        lng: 111.964662,
      },
    },
    location24: {
      id: 24,
      name: "Kediri",
      coordinates: {
        lat: -7.852654,
        lng: 112.007639,
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
