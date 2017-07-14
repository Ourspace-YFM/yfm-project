import React from 'react';
import BoldText from '../atoms/BoldText'
import LightText from '../atoms/LightText'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LinearProgress from 'material-ui/LinearProgress'

export default function ProgressItem({
  title,
  subtitle,
  completed,
  numerator,
  denominator,
  children

}) {
  return (
    <div>
      <div>
        <BoldText text={ title }/>
        <span>   </span>
        <LightText text={ subtitle }/>
      </div>
      { children }
      <div>
        <MuiThemeProvider>
          <LinearProgress
           mode="determinate"
           value={ completed } />
        </MuiThemeProvider>
        <LightText text={ numerator + '/' + denominator }/>
      </div>
    </div>
  )
}
