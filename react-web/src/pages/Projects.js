import React from 'react'

// MUI Components
import ExpandableCard from '../molecules/ExpandableCard'
import ProgressItem from '../molecules/ProgressItem'
import BoldText from '../components/BoldText'
import LightText from '../components/LightText'

const Data = {
	"clients": [
		{
			"_id": "jjkadnfkan",
			"client": "Coles",
			"logo": "https://i.imgur.com/zgANrVM.jpg",
			"projects": [
				{
					"name": "Johnny",
					"type": "New Truck",
					"status": "closed",
					"urgent": false
				},
				{
					"name": "Click and Collect",
					"type": "Rebrand",
					"status": "open",
					"urgent": true
				},
				{
					"name": "Maintainance & Repairs",
					"type": "Repairs",
					"status": "open",
					"urgent": true
				},
				{
					"name": "Visit new store for measure up",
					"type": "inspect",
					"status": "open",
					"urgent": true
				}
			]
		},
		{
			"_id": "ksdjbnkdfv",
			"client": "Supercheap storage",
			"logo": "https://i.imgur.com/lbPitNB.png",
			"projects": [
				{
					"name": "SCS Perth & LGL Burwood",
					"type": "New Truck",
					"status": "closed",
					"urgent": false
				},
				{
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
            <div>
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
                            subtitle={ "Project: " + (project.name) } 
                            completed={ 30 } 
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
        }

    </div>
)

export default Projects
