import React from 'react'
import '../custom.css'

import ExpandableCard from '../components/molecules/ExpandableCard'
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
 
		</div>
	)
}

export default Projects
