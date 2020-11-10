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
    location25: {
      id: 25,
      name: "Jombang",
      coordinates: {
        lat: -7.55533,
        lng: 112.236564,
      },
    },
    location26: {
      id: 26,
      name: "Surabaya",
      coordinates: {
        lat: -7.264469,
        lng: 112.748271,
      },
    },
    location27: {
      id: 27,
      name: "Malang",
      coordinates: {
        lat: -7.965724,
        lng: 112.630581,
      },
    },
    location28: {
      id: 28,
      name: "Probolinggo",
      coordinates: {
        lat: -7.779114,
        lng: 113.201304,
      },
    },
    location29: {
      id: 29,
      name: "Jember",
      coordinates: {
        lat: -8.21804,
        lng: 113.678862,
      },
    },
    location30: {
      id: 30,
      name: "Banyuwangi",
      coordinates: {
        lat: -8.222871,
        lng: 114.36864,
      },
    },
    location31: {
      id: 31,
      name: "Bali",
      coordinates: {
        lat: -8.354105,
        lng: 115.089364,
      },
    },
    location32: {
      id: 32,
      name: "Lombok",
      coordinates: {
        lat: -8.656334,
        lng: 116.315537,
      },
    },
    location33: {
      id: 33,
      name: "Sumbawa",
      coordinates: {
        lat: -8.770911,
        lng: 118.134984,
      },
    },
    location34: {
      id: 34,
      name: "Kupang",
      coordinates: {
        lat: -10.179173,
        lng: 123.604247,
      },
    },
    location35: {
      id: 35,
      name: "Makasar",
      coordinates: {
        lat: -5.154913,
        lng: 119.429061,
      },
    },
    location36: {
      id: 36,
      name: "Palu",
      coordinates: {
        lat: -0.905249,
        lng: 119.883479,
      },
    },
    location37: {
      id: 37,
      name: "Kendari",
      coordinates: {
        lat: -3.995152,
        lng: 122.520393,
      },
    },
    location38: {
      id: 38,
      name: "Manado",
      coordinates: {
        lat: 1.470801,
        lng: 124.843879,
      },
    },
    location39: {
      id: 39,
      name: "Pontianak",
      coordinates: {
        lat: -0.028872,
        lng: 109.327945,
      },
    },
    location40: {
      id: 40,
      name: "Banjarmasin",
      coordinates: {
        lat: -3.31962,
        lng: 114.585972,
      },
    },
    location41: {
      id: 41,
      name: "Pangkalan Bun",
      coordinates: {
        lat: -2.690119,
        lng: 111.622098,
      },
    },
    location42: {
      id: 42,
      name: "Samarinda",
      coordinates: {
        lat: -0.506251,
        lng: 117.140501,
      },
    },
    location43: {
      id: 43,
      name: "Balikpapan",
      coordinates: {
        lat: -1.250803,
        lng: 116.857882,
      },
    },
    location44: {
      id: 44,
      name: "Ambon",
      coordinates: {
        lat: -3.647151,
        lng: 128.128808,
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
      maxZoom: 9,
      defaultCenter: {
        lat: -4.391102,
        lng: 122.085345,
      },
      defaultZoom: 3.7,
      restriction: {
        latLngBounds: {
          north: 10,
          south: -15,
          east: 140,
          west: 90,
        },
      },
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
