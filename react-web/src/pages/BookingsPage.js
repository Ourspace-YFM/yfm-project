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
				<NavBar/>
				<div className="pageContents">
					<h1>Bookings</h1>
					{!!bookings ? (
						<div>
						 {bookings.map(booking => (
							 <ExpandableCard
							 	title={ booking.name }>
								<div>
									<BoldText text="Installer"/>
									<LightText text={ booking.installerId.name }/>
								</div>
								<div>
									<BoldText text="Location"/>
									<LightText text={ booking.locationId.name }/>
								</div>
								<div>
									<BoldText text="Status"/>
									<LightText text={ booking.status }/>
								</div>
								<div>
									<LinkButton link={ "/booking/" + booking._id } label="View"/>
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
