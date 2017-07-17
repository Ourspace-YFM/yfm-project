import React from 'react';
import LightText from '../LightText'
import Logo from '../Logo'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
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
            actAsExpander={true}
            showExpandableButton={true}
          />
          <Logo src={ logoSrc } alt={ logoAlt } className={ logoClass }/>
          <h3>{ title }</h3>
          <LightText text={ subtitle }/>
          <CardText expandable={true}>
            { children }
          </CardText>
        </Card>
      </MuiThemeProvider>
    </div>
  )
}
