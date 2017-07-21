import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DatePicker from 'material-ui/DatePicker'

export default function DatePick({
  label,
  className

}) {
  return (
    <div>
      <p className="inputLabel">{ label }</p>
      <MuiThemeProvider>
        <DatePicker
        hintText="Select Booking Date"
        className={ className }/>
      </MuiThemeProvider>
    </div>
  )
}
