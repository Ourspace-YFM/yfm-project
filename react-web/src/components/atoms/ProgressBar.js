import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LinearProgress from 'material-ui/LinearProgress'

export default function ProgressBar({
  completed="0",
  className
}) {
  return (
    <MuiThemeProvider>
      <LinearProgress
       mode="determinate"
       value={ completed }
       className={ className }/>
    </MuiThemeProvider>
  )
}
