import React from 'react'
import '../custom.css'


// Components
import ExpandableCard from '../components/molecules/ExpandableCard'
import ProgressItem from '../components/molecules/ProgressItem'
import BoldText from '../components/atoms/BoldText'
import LightText from '../components/atoms/LightText'

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
					"urgent": false
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
			"client": "Supercheap Storage",
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
        <h1>Projects</h1>

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

export default Projects
