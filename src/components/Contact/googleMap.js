import React from "react"
import Map from "google-map-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"

const APIKEY = "AIzaSyC_3Lk9znbSQICmGjqXO5YEIhTPnOWCVAc"

const AnyReactComponent = () => (
  <div>
    <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon fa-1x" />
  </div>
)

const GoogleMap = props => {
  return (
    <div
      style={{
        height: props.style.height,
        width: props.style.width,
      }}
    >
      {console.log(props)}
      <Map
        bootstrapURLKeys={{ key: APIKEY }}
        defaultZoom={props.options.defaultZoom}
        defaultCenter={{
          lat: props.options.defaultCenter.lat,
          lng: props.options.defaultCenter.lng,
        }}
        options={props.options}
      >
        {Object.keys(props.location).map((location, i) => {
          return (
            <AnyReactComponent
              onMouseOver={() => console.log("hover")}
              onMouseOut={() => console.log("gone")}
              key={i}
              lat={props.location[location].coordinates.lat}
              lng={props.location[location].coordinates.lng}
              text="my marker"
            />
          )
        })}
      </Map>
    </div>
  )
}

export default GoogleMap
