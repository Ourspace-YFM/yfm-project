import React from 'react'
import { Link } from 'react-router-dom'

// MUI Components
import ExpandableCard from '../molecules/ExpandableCard'
import ProgressItem from '../molecules/ProgressItem'
import BoldText from '../components/BoldText'
import LightText from '../components/LightText'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const Data = {
	"clients": [
		{
			"_id": "kSXU6uZ42Ne69E",
			"client": "Coles",
			"logo": "https://i.imgur.com/zgANrVM.jpg",
			"projects": [
				{
					"_id": "2EevR3XRpWcLDM",
					"name": "Click and Collect",
					"type": "Rebrand",
					"status": "open",
					"urgent": true
				},
				{
					"_id": "jmjjpYW48E3azj",
					"name": "Maintainance & Repairs",
					"type": "Repairs",
					"status": "open",
					"urgent": true
				},
				{
					"_id": "2ryyCU4DGTW2nA",
					"name": "Visit new store for measure up",
					"type": "inspect",
					"status": "open",
					"urgent": true
				}
			]
		},
		{
			"_id": "EvV4uF2BzDG7pV",
			"client": "Supercheap storage",
			"logo": "https://i.imgur.com/lbPitNB.png",
			"projects": [
				{
					"_id": "Dy3978rWy5dWrM",
					"name": "SCS Perth & LGL Burwood",
					"type": "New Truck",
					"status": "closed",
					"urgent": false
				},
				{
					"_id": "FqC5BbzQbeunNK",
					"name": "Nightshopper",
					"type": "Rebrand",
					"status": "open",
					"urgent": true
				}
			]
		}
	]
}

const Projects = () => (
    <div>
							<div>
							<h1>Projects</h1>
								{
									Data.clients.map((client) => (
										<div>
											<ExpandableCard
												title={ client.client }
												logoSrc={ client.logo }
												logoAlt="Test Logo"
												logoClass="testClassName"
												children="Test" >
												{
													client.projects.map((project) => (
														<div>
															<div>
																<ProgressItem
																	subtitle={ "Project: " + project.name }
																	completed={ 35 }
																	numerator={ 3 }
																	denominator={ 10 }>
																<div>
																	<BoldText text="Type:" />  <br />
																	<LightText text={ project.type } />
																</div>
															<br/>
															<br/>
																<div>
																	<BoldText text="Status:" />  <br />
																	<LightText text={ project.status } />
																</div>
															<br/>
															<br/>
																<div>
																	<MuiThemeProvider>
																	<Link to={`/projects/${project._id}`}>
																		<RaisedButton
																			className='link-btn'
																			label={ "View: " + project.name }
																			/>
																	</Link>
																	</MuiThemeProvider>
																</div>
															<br/>
																</ProgressItem>
															<br/>
															</div>
														</div>
													))
												}

											</ExpandableCard>
										</div>
									))
								}
							</div>
				} />
    </div>
)

export default Projects
