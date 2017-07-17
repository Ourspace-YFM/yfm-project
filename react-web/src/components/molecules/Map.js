import React from 'react';
import GoogleMapReact from 'google-map-react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default function SummaryItem({
  children,
  setDrawerOpen,
  setDrawerData
}) {
  return (
    <div style={{height: '400px', width: '600px',marginLeft: 'auto', marginRight: 'auto'}}>
      <MuiThemeProvider>
        <RaisedButton
          label="Open Drawer"
          onTouchTap={() => setDrawerOpen(true)}
        />
      </MuiThemeProvider>

      <GoogleMapReact
        apiKey='AIzaSyDJDUWwEDnnopMM9BDiYJj7pqfQzJz2v74'
        defaultCenter={{lat: -26.2744, lng: 133.7751}}
        defaultZoom={5}
      >
      {children}
      </GoogleMapReact>
    </div>
  )
}
