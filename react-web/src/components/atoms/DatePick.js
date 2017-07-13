import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DatePicker from 'material-ui/DatePicker'

export default function DatePick({
  text,
  className
}) {
  return (
    <MuiThemeProvider>
      <DatePicker hintText={ text } className={ className }/>
    </MuiThemeProvider>
  )
}
