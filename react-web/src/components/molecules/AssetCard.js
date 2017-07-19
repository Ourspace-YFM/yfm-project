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
  id,
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
            <br/><br/>
            <LightText text={ id } />
          </div>
          <div className="assetCardInfo">
            <BoldText text="Coles ID" />
            <br/><br/>
            <LightText text={ name } />
          </div>
          <div className="assetCardInfo">
            <BoldText text="Registration" />
            <br/><br/>
            <LightText text={ registration } />
          </div>
          <div className="assetCardInfo">
            <BoldText text="Operational Status" />
            <br/><br/>
            <LightText text={ operationalStatus } />
          </div>
          <div className="assetCardInfo">
            <BoldText text="Chassis Make" />
            <br/><br/>
            <LightText text={ chassisMake } />
          </div>
          <div className="assetCardInfo">
            <BoldText text="Chassis Model" />
            <br/><br/>
            <LightText text={ chassisModel } />
          </div>
          <div className="assetCardInfo">
            <BoldText text="Body Manufacturer" />
            <br/><br/>
            <LightText text={ bodyManufacturer } />
          </div>
          <div className="assetCardInfo">
            <BoldText text="Make/Model Code" />
            <br/><br/>
            <LightText text={ makeCode } />
          </div>
          <div className="assetCardInfo">
            <BoldText text="Body Code" />
            <br/><br/>
            <LightText text={ bodyCode } />
          </div>
          <div className="assetCardInfo">
            <BoldText text="Truck Type Code" />
            <br/><br/>
            <LightText text={ truckTypeCode } />
          </div>
          <div className="assetCardInfo">
            <BoldText text="Lease End Date" />
            <br/><br/>
            <LightText text={ leaseEnd } />
          </div>
          <div className="assetCardInfo">
            <BoldText text="DS Campaign" />
            <br/><br/>
            <LightText text={ dsCampaign } />
          </div>
          <div className="assetCardInfo">
            <BoldText text="PS Campaign" />
            <br/><br/>
            <LightText text={ psCampaign } />
          </div>
          <div className="assetCardInfo">
            <BoldText text="R Campaign" />
            <br/><br/>
            <LightText text={ rCampaign } />
          </div>
          </CardText>
        </Card>
      </MuiThemeProvider>
    </div>
  )
}
