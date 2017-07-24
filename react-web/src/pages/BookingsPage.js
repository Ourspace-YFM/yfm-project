import React from 'react'
import '../custom.css'

import ExpandableCard from '../components/molecules/ExpandableCard'
import ProgressItem from '../components/molecules/ProgressItem'
import BoldText from '../components/atoms/BoldText'
import LightText from '../components/atoms/LightText'
import * as dataSorter from '../api/dataSorter'

const Bookings = ({
	bookings

}) => {
	return (
		<div>
				<h1>Bookings</h1>
				{!!bookings ? (
					<div>
						"Loaded"
					</div>
					):(
						'Loading Bookings'
					)
				}

		</div>
	)
}

export default Bookings
