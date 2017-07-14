import React from 'react';
<<<<<<< HEAD:react-web/src/components/molecules/ExpandableCard.js
import LightText from '../atoms/LightText'
import Logo from '../atoms/Logo'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
=======
import LightText from '../components/LightText'
import Logo from '../components/Logo'
import {Card, CardHeader, CardText} from 'material-ui/Card';
>>>>>>> 3ea4fa89dfa54e8d2545dc9b6a5ad9ebe363ff00:react-web/src/molecules/ExpandableCard.js
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
