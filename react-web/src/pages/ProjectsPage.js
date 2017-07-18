import React from 'react'

// MUI Components
import ExpandableCard from '../components/molecules/ExpandableCard'
import ProgressItem from '../components/molecules/ProgressItem'
import BoldText from '../components/atoms/BoldText'
import LightText from '../components/atoms/LightText'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const Projects = ({
	projects
}) => {
	return (
	    <div>
	        <h1>Projects</h1>
					{projects.map((project)=>{
						<div>
							
						</div>
					})}
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
