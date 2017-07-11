import React from 'react';
import LightText from '../components/LightText'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default function ExpandableCard({
  title,
  subtitle,
  children

}) {
  return (
    <div>
      <MuiThemeProvider>
        <Card>
          <CardHeader
            actAsExpander={true}
            showExpandableButton={true}
          />
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
