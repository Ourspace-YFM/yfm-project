import React from 'react'

import NavBar from '../components/atoms/Navigation'
import ExpandableCard from '../components/molecules/ExpandableCard'
import ProgressItem from '../components/molecules/ProgressItem'
import BoldText from '../components/atoms/BoldText'
import LightText from '../components/atoms/LightText'
import * as dataSorter from '../api/dataSorter'

const Projects = ({
	projects

}) => {
	console.log(projects)
	return (
		<div>
			<div className="navbar">
				<div className="logo">
					<p><span className="bold">OUR</span>SPACE</p>
				</div>
				<div className="links">
					<a href="/dashboard">DASHBOARD</a>
				</div>
				<div className="links active">
					<a href="/projects">PROJECTS</a>
				</div>
				<div className="links">
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
					<h1>Projects</h1>
					{!!projects ? (
						<div>
							{ dataSorter.clientsWithGroupedProjects(projects).map((client) => (
								<ExpandableCard
									logoSrc={ client.logo }
									logoAlt="Test Logo"
									logoClass="sml" >
									{client.projects.map((project)=>(
										<div key={ project._id }>
											<div className="cardInfoContainer">
												<ProgressItem
													className="projectsPageProgressItem"
													completed={ 35 }
													numerator={ 3 }
													denominator={ 10 }
													link={ `/projects/${project._id}` }
													buttonLabel="View">
													<div className="progressItemInfo">
														<BoldText text="Description" />
														<br/><br/>
														<LightText text={ project.description } />
													</div>
													<div className="progressItemInfo">
														<BoldText text="Start Date" />
														<br/><br/>
														<LightText text={ project.startDate } />
													</div>
													<div className="progressItemInfo">
														<BoldText text="End Date" />
														<br/><br/>
														<LightText text={ project.endDate } />
													</div>
													<div className="progressItemInfo">
														<BoldText text="Type" />
														<br/><br/>
														<LightText text={ project.type } />
													</div>
												</ProgressItem>
											</div>
										</div>
									))}
								</ExpandableCard>
							))}
						</div>
						):(
							'Loading Projects'
						)
					}
			</div>
		</div>
	)
}

export default Projects
