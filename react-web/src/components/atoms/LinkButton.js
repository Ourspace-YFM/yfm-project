import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'

export default function LinkButton({
  className,
  label="Link Button",
  link,
  buttonColor='#7CB160',
  labelColor='#FFFFFF'

}) {
  return (
    <MuiThemeProvider>
      <RaisedButton
        className={ className }
        label={ label }
        labelColor={ labelColor }
        href={ link }
        backgroundColor={ buttonColor } />
    </MuiThemeProvider>
  )
}
