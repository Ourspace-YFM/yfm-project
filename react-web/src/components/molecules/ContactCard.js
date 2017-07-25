import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Card, CardHeader, CardText } from 'material-ui/Card';
import LightText from '../atoms/LightText'
import BoldText from '../atoms/BoldText'
import Logo from '../atoms/Logo'

export default function ContactCard({
  logoSrc,
  logoAlt,
  logoClass,
  contactName,
  companyName,
  accountId,
  position,
  phone,
  email

}) {
  return (
    <div>
      <MuiThemeProvider>
        <Card className="expandable-card">       
          <CardHeader
            title={ contactName }
            actAsExpander={true}
            showExpandableButton={true} >
              <Logo 
              src={ logoSrc } 
              alt={ logoAlt } 
              className={ logoClass } />
          </CardHeader>

          <CardText expandable={true}>
            <BoldText text="Company: " /> <LightText text={ companyName } /> <br /><br />
            <BoldText text="Account ID: "/> <LightText text={ accountId.toUpperCase() } /> <br /><br />
            <BoldText text="Position: "/> <LightText text={ position } /> <br /><br />
            <BoldText text="Phone: "/> <LightText text={ phone } /> <br /><br />
            <BoldText text="Email: "/> <LightText text={ email } />
          </CardText>
        </Card>
      </MuiThemeProvider>
    </div>
  )
}