import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Card, CardHeader, CardText } from 'material-ui/Card';
import LightText from '../atoms/LightText'
import BoldText from '../atoms/BoldText'
import Logo from '../atoms/Logo'

export default function AssetCard({
  client,
  location,
  name,
  companyID,
  registration,
  operationalStatus,
  chassisMake,
  chassisModel,
  bodyManufacturer,
  makeCode,
  bodyCode,
  truckTypeCode,
  leaseEnd,
  dsCampaign,
  psCampaign,
  rCampaign

}) {
  return (
    <div>
      <MuiThemeProvider>
        <Card className="expandable-card">
          <CardHeader
            title={ client }
            subtitle={ location }
            actAsExpander={true}
            showExpandableButton={true} >
          </CardHeader>

          <CardText expandable={true}>
          <div className="assetCardInfo">
            <BoldText text="Name" />
            <br/>
            <LightText text={ companyID } />
          </div>

          <br/>

          <div className="assetCardInfo">
            <BoldText text="Coles ID" />
            <br/>
            <LightText text={ name } />
          </div>

          <br/>
          
          <div className="assetCardInfo">
            <BoldText text="Registration" />
            <br/>
            <LightText text={ registration } />
          </div>

          <br/>
          
          <div className="assetCardInfo">
            <BoldText text="Operational Status" />
            <br/>
            <LightText text={ operationalStatus } />
          </div>

          <br/>
          
          <div className="assetCardInfo">
            <BoldText text="Chassis Make" />
            <br/>
            <LightText text={ chassisMake } />
          </div>

          <br/>
          
          <div className="assetCardInfo">
            <BoldText text="Chassis Model" />
            <br/>
            <LightText text={ chassisModel } />
          </div>

          <br/>
          
          <div className="assetCardInfo">
            <BoldText text="Body Manufacturer" />
            <br/>
            <LightText text={ bodyManufacturer } />
          </div>

          <br/>
          
          <div className="assetCardInfo">
            <BoldText text="Make/Model Code" />
            <br/>
            <LightText text={ makeCode } />
          </div>

          <br/>
          
          <div className="assetCardInfo">
            <BoldText text="Body Code" />
            <br/>
            <LightText text={ bodyCode } />
          </div>

          <br/>
          
          <div className="assetCardInfo">
            <BoldText text="Truck Type Code" />
            <br/>
            <LightText text={ truckTypeCode } />
          </div>

          <br/>
          
          <div className="assetCardInfo">
            <BoldText text="Lease End Date" />
            <br/>
            <LightText text={ leaseEnd } />
          </div>

          <br/>
          
          <div className="assetCardInfo">
            <BoldText text="DS Campaign" />
            <br/>
            <LightText text={ dsCampaign } />
          </div>

          <br/>
          
          <div className="assetCardInfo">
            <BoldText text="PS Campaign" />
            <br/>
            <LightText text={ psCampaign } />
          </div>

          <br/>
          
          <div className="assetCardInfo">
            <BoldText text="R Campaign" />
            <br/>
            <LightText text={ rCampaign } />
          </div>
          </CardText>
        </Card>
      </MuiThemeProvider>
    </div>
  )
}
