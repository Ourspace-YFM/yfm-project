import React from 'react'

// Components
import NavBar from '../components/atoms/Navigation'
import AssetCard from '../components/molecules/AssetCard'


const Assets = () => (
	<div>
		<div className="navbar">
			<div className="logo">
				<p><span className="bold">OUR</span>SPACE</p>
			</div>
			<div className="links">
				<a href="/dashboard">DASHBOARD</a>
			</div>
			<div className="links">
				<a href="/projects">PROJECTS</a>
			</div>
			<div className="links">
				<a href="/bookings">BOOKINGS</a>
			</div>
			<div className="links active">
				<a href="/assets">ASSETS</a>
			</div>
			<div className="links">
				<a href="/contacts">CONTACTS</a>
			</div>
			<div className="signOut">
				<a href="/contacts">Sign out</a>
			</div>
		</div>
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
