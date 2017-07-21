import React from 'react'
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default function Text({
  text
}) {
  return (
    <div>
      <MuiThemeProvider>
        <TextField hintText={ text } />
      </MuiThemeProvider>
    </div>
  )
}