import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LinearProgress from 'material-ui/LinearProgress'

export default function ProgressBar({
  completed="0",
  className,
  width
}) {
  return (
    <MuiThemeProvider>
      <div style={{maxWidth: width}}>
      <LinearProgress
       mode="determinate"
       value={ completed }
       className={ className }
       color="#7CB160"
       style={{height: "6px"}}/>
      </div>
    </MuiThemeProvider>
  )
}
