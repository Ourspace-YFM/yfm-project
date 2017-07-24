import React from 'react'

// Components
import NavBar from '../components/atoms/Navigation'
import AssetCard from '../components/molecules/AssetCard'


const Assets = () => (
	<div>
		<NavBar/>
		<div className="pageContents">
			<AssetCard
				client="Coles"
				location="Burwood"
				name="Mitchell"
				companyID="11.15, 11.173"
				registration="BK34XP"
				operationalStatus="'Operational', 'Retired', 'In-build'"
				chassisMake="Hino"
				chassisModel="300 Series"
				bodyManufacturer="Thermaxx"
				makeCode="H3"
				bodyCode="TRS"
				truckTypeCode="H3-TRS"
				leaseEnd="Date"
				dsCampaign="FDMC1-Sides"
				psCampaign="FDMC1-Sides"
				rCampaign="DCCD7D"/>
		</div>
	</div>
)

export default Assets
