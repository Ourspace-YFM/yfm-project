import React from 'react'

import NavBar from '../components/atoms/Navigation'
import ExpandableCard from '../components/molecules/ExpandableCard'
import LinkButton from '../components/atoms/LinkButton'
import BoldText from '../components/atoms/BoldText'
import LightText from '../components/atoms/LightText'
import * as dataSorter from '../api/dataSorter'

const Bookings = ({
	bookings

}) => {

	console.log(bookings)

	return (
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
				<div className="links active">
					<a href="/bookings">BOOKINGS</a>
				</div>
				<div className="links">
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
					<h1>Bookings</h1>
					{!!bookings ? (
						<div>
						 {bookings.map(booking => (
							 <ExpandableCard
							 	title={ booking.name }>
								<div>
									<BoldText text="Installer: "/>
									<LightText text={ booking.installerId.name }/>
								</div>
								<div>
									<BoldText text="Location: "/>
									<LightText text={ booking.locationId.name }/>
								</div>
								<div>
									<BoldText text="Status: "/>
									<LightText text={ booking.status }/>
								</div>
								<br />
								<div>
									<LinkButton link={ "/bookings/" + booking._id } label="View"/>
								</div>
							</ExpandableCard>
						 ))}
						</div>
						):(
							'Loading Bookings'
						)
					}
			</div>
		</div>
	)
}

export default Bookings
