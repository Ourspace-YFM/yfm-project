import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FontIcon from 'material-ui/FontIcon'

export default function Icon({
  className,
  icon
}) {
  return (
    <MuiThemeProvider>
      <FontIcon  className={"material-icons " + className}>{ icon }</FontIcon>
    </MuiThemeProvider>
  )
}
