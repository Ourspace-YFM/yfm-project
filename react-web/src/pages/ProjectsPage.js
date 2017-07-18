import React from 'react'
import '../custom.css'

// Components
import ExpandableCard from '../components/molecules/ExpandableCard'
import ProgressItem from '../components/molecules/ProgressItem'
import BoldText from '../components/atoms/BoldText'
import LightText from '../components/atoms/LightText'

import LinkButton from '../components/atoms/LinkButton'
import * as dataSorter from '../api/dataSorter'

const Projects = ({
	projects
}) => {
	return (
		<div>
				<h1>Projects</h1>
				{!!projects ? (
					<div>
						{ dataSorter.clientsWithGroupedProjects(projects).map((client) => (
							<ExpandableCard
								title={ client.name }
								logoSrc={ client.logo }
								className={'mini'}
								logoAlt="Test Logo"
								logoClass="logo-class"
								children="Test" >
								{client.projects.map((project)=>(
									<div>
										<p>{ project.description }</p>
										<p>{ project.startDate }</p>
										<p>{ project.endDate }</p>
										<p>{ project.type }</p>
										<LinkButton buttonColor='#F06734' link={`/projects/${project._id}`}/>
									</div>
								))}
							</ExpandableCard>
						))}
					</div>
					):(
						'Loading Projects'
					)
				}

<<<<<<< HEAD
		</div>
	)
}
=======
        {
          Data.clients.map((client) => (
            <div key={client._id}>
              <div>
                <ExpandableCard
                  logoSrc={ client.logo }
                  logoAlt="Test Logo"
                  logoClass="logo-class"
                  children="Test" >

                  {
                    client.projects.map((project) => (
                      <div key={project._id}>
                        <div className="cardInfoContainer">
                          <ProgressItem
														className="projectsPageProgressItem"
                            completed={ 35 }
                            numerator={ 3 }
                            denominator={ 10 }
														link={ `/projects/${project._id}` }
														buttonLabel="View">
                          <div className="progressItemInfo">
                            <BoldText text="Project" />
														<br/><br/>
                            <LightText text={ project.name } />
                          </div>
                          <div className="progressItemInfo">
                            <BoldText text="Type" />
														<br/><br/>
														<LightText text={ project.type } />
                          </div>
                          <div className="progressItemInfo">
                            <BoldText text="Status" />
														<br/><br/>
														<LightText text={ project.status } />
                          </div>
                          </ProgressItem>
                        </div>
                      </div>
                    ))
                  }

                </ExpandableCard>
              </div>
            </div>
          ))
        }

    </div>
)
>>>>>>> origin/add-sass-styling

export default Projects
