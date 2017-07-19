import React from 'react';
import GoogleMapReact from 'google-map-react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default function SummaryItem({
  children,
  setDrawerOpen,
  setDrawerData,
  data // [{lat,lng,type,functionToFill}]
}) {

  return (
    <div style={{height: '200px', width: '400px',marginLeft: 'auto', marginRight: 'auto'}}>
      <MuiThemeProvider>
        <RaisedButton
          label="Open Drawer"
          onTouchTap={() => setDrawerOpen(true)}
        />
      </MuiThemeProvider>
      <button onTouchTap={() => setDrawerOpen(true)}>hello</button>
      {
      /*  !!data ? (
          {
            data.map((object) =>{

            })
          }
        ) : (
          'Loading'
        ) */
      }
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
