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
        height: props.style.height,
        width: props.style.width,
      }}
    >
      {console.log(props.location)}
      <Map
        bootstrapURLKeys={{ key: APIKEY }}
        defaultZoom={props.options.defaultZoom}
        defaultCenter={{
          lat: props.options.defaultCenter.lat,
          lng: props.options.defaultCenter.lng,
        }}
        options={props.location.options}
      >
        {/* {props.location.map((location) => {
          return (
            <AnyReactComponent
              lat={location.coordinates.lat}
              lng={location.coordinates.lng}
              text="my marker"
            />
          )
        })} */}
        {/* <AnyReactComponent
          lat={props.location.location1.coordinates.lat}
          lng={props.location.location1.coordinates.lng}
          text="my marker"
        /> */}
      </Map>
    </div>
  )
}

export default GoogleMap
