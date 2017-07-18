import React from 'react';
import BoldText from '../atoms/BoldText'
import LightText from '../atoms/LightText'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ProgressBar from '../atoms/ProgressBar'

export default function ProgressItem({
  title,
  subtitle,
  completed,
  numerator,
  denominator,
  children,
  width

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
        <ProgressBar
         completed={ completed } width={ width }/>
        <LightText text={ numerator + '/' + denominator }/>
      </div>
    </div>
  )
}
