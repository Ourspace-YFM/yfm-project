import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FontIcon from 'material-ui/FontIcon'

export default function Icon({
  icon,
  size,
  fillColor
}) {
  return (
    <MuiThemeProvider>
      <FontIcon  className={"material-icons"} style={{fontSize: size, color: fillColor}}>{ icon }</FontIcon>
    </MuiThemeProvider>
  )
}
