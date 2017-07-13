import React from 'react';
import LightText from '../components/LightText'
import Logo from '../components/Logo'
import {Card, CardHeader, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

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
