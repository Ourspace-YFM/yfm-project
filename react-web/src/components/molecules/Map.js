import React from 'react'
import GoogleMapReact from 'google-map-react'

export default function Map({

}) {
  return (
    <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text={'Kreyser Avrora'}
        />
      </GoogleMapReact>
  )
}
