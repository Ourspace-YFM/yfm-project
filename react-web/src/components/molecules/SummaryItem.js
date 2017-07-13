import React from 'react';
import BoldText from '../atoms/BoldText'
import LightText from '../atoms/LightText'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'

export default function SummaryItem({
  title,
  subtitle,
  link,
  label="View",
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
          <RaisedButton
            className='link-btn'
            label={ label }
            href={ link }/>
        </MuiThemeProvider>
      </div>
    </div>
  )
}
