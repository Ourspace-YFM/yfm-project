import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

export default class Map extends Component{

  static defaultProps = {
    center: {lat: -26.2744, lng: 133.7751},
    zoom: 4
  };

  render() {
    return (
      <div style={{height: '400px', width: '600px',marginLeft: 'auto', marginRight: 'auto'}}>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.props.children}
        </GoogleMapReact>
      </div>
    );
  }
}
