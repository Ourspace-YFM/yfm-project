import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Card, CardHeader, CardText } from 'material-ui/Card';
import LightText from '../atoms/LightText'
import Logo from '../atoms/Logo'

export default function ExpandableCard({
  logoSrc,
  logoAlt,
  logoClass,
  title,
  subtitle,
  children

}) {
  return (
    <div>
      <MuiThemeProvider>
        <Card className="expandable-card">       
          <CardHeader
            title={ title }
            actAsExpander={true}
            showExpandableButton={true} >
              <Logo 
              src={ logoSrc } 
              alt={ logoAlt } 
              className={ logoClass } />
          </CardHeader>

          <LightText text={ subtitle }/>
          <CardText expandable={true}>
            { children }
          </CardText>
        </Card>
      </MuiThemeProvider>
    </div>
  )
}