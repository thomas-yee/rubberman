import React from "react"
import Map from "google-map-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"

const APIKEY = "AIzaSyC_3Lk9znbSQICmGjqXO5YEIhTPnOWCVAc"

const AnyReactComponent = () => (
  <div>
    <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon fa-3x" />
  </div>
)

const GoogleMap = props => {
  return (
    <div
      style={{
        height: props.location.style.height,
        width: props.location.style.width,
      }}
    >
      {console.log(props)}
      <Map
        bootstrapURLKeys={{ key: APIKEY }}
        defaultZoom={props.location.defaultZoom}
        defaultCenter={{
          lat: props.location.defaultCenter.lat,
          lng: props.location.defaultCenter.lng,
        }}
        options={props.location.options}
      >
        <AnyReactComponent
          lat={props.location.defaultCenter.lat}
          lng={props.location.defaultCenter.lng}
          text="my marker"
        />
      </Map>
    </div>
  )
}

export default GoogleMap
