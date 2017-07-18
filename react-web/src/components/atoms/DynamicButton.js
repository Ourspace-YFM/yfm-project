import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'

export default function DynamicButton({
  className,
  label="Dynamic Button",
  action,
  buttonColor='#7CB160',
  labelColor='#FFFFFF'

}) {
  return (
    <MuiThemeProvider>
      <RaisedButton
        className={ 'button ' + className }
        label={ label }
        labelColor={ labelColor }
        onClick={ action }
        backgroundColor={ buttonColor }
        />
    </MuiThemeProvider>
  )
}
