import React from 'react'


// MUI Components
import ExpandableCard from '../components/molecules/ExpandableCard'
import ProgressItem from '../components/molecules/ProgressItem'
import BoldText from '../components/atoms/BoldText'
import LightText from '../components/atoms/LightText'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import LinkButton from '../components/atoms/LinkButton'

import groupBy from 'lodash/groupBy'
import uniqBy from 'lodash/uniqBy'
import map from 'lodash/map'
// import groupBy from 'lodash/groupBy'

const Projects = ({
	projects
}) => {
	let clients;
	if (!!projects) {
		// // Group projects by clientId
		// // { clientIDA: [ project1, project2 ], clientIDB: [ project3 ] }
		// const projectsByClient = groupBy(projects, (project) => project.clientId._id)
		// console.log('projectsByClient', projectsByClient)
		// // Get clients with projects nested inside
		// // [ { name: "Client name", projects: [] }, ... ]
		// const clients = uniqBy(projects.map((project) => Object.assign({},
		// 	project.clientId,
		// 	{ projects: projectsByClient[project.clientId._id] }
		// )), '_id')

		// Group projects by clientId
		// { clientIDA: [ project1, project2 ], clientIDB: [ project3 ] }
		const projectsByClient = groupBy(projects, (project) => project.clientId._id)
		console.log('projectsByClient', projectsByClient)
		// Get clients with projects nested inside
		// [ { name: "Client name", projects: [] }, ... ]
		const clients = uniqBy(projects.map((project) => Object.assign({},
			project.clientId,
			{ projects: projectsByClient[project.clientId._id] }
		)), '_id')
		// clientsByID = _.zipObject(_.map(clients, '_id'), clients)
		console.log('clients', clients)
	}
	console.log('projects',projects)
	return (
	    <div>
	        <h1>Projects</h1>
					{!!projects ? (
						<div>
							{ projects.map((project) => (
								<ExpandableCard
									title={ project.name }
									logoSrc={ project.clientId.logo }
									logoAlt="Test Logo"
									logoClass="logo-class"
									children="Test" >
									<p>{ project.description }</p>
									<p>{ project.startDate }</p>
									<p>{ project.endDate }</p>
									<p>{ project.type }</p>
									<LinkButton buttonColor='#F06734' link={`/project/${project._id}`}/>
								</ExpandableCard>
							))}
						</div>
						):(
							'Loading Projects'
						)
					}
	        {/*
	          Data.clients.map((client) => (
	            <div key={client._id}>
	              <div>
	                <ExpandableCard
	                  title={ client.client }
	                  logoSrc={ client.logo }
	                  logoAlt="Test Logo"
	                  logoClass="logo-class"
	                  children="Test" >

	                  {
	                    client.projects.map((project) => (
	                      <div key={project._id}>
	                        <div>
	                          <ProgressItem
	                            completed={ 35 }
	                            numerator={ 3 }
	                            denominator={ 10 }>
	                          <div>
	                            <BoldText text="Project:" />  <br />
	                            <LightText text={ project.name } />
	                          </div>
	                        <br/>
	                        <br/>
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
																<RaisedButton
																	className='link-btn'
																	label={ "View: " + project.name }
																	href={ `/projects/${project._id}` } />
															</MuiThemeProvider>
														</div>
	                        <br/>
	                        <br/>
	                          </ProgressItem>
	                        <br/>
	                        <br/>
	                        </div>
	                      </div>
	                    ))
	                  }

	                </ExpandableCard>
	              </div>
	            </div>
	          ))
	        */}

	    </div>
	)
}

export default Projects
