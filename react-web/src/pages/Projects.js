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
			"logo": "logo.png",
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

const GetClients = (
  Data.clients.map((client) => (
    <p>{ client.client }</p>
  ))
)

const GetProjects = (
  Data.clients.map((client) => (
    client.projects.map((project) => (
      <p>{ project.name }</p>
    ))
  ))
)

const Projects = () => (
    <div>
        <h1>Projects</h1>

        { GetClients }

        { GetProjects }

        <div>
          <ExpandableCard 
            subtitle={ (Data.clients[0].projects.length) + " Projects" }
            logoSrc={ Data.clients[0].logo }
            logoAlt="Test Logo"
            logoClass="testClassName"
            children="Test" >
            <br/>
            <br/>

            <div>
              <ProgressItem title={ Data.clients[0].projects[0].name } completed={30} numerator={3} denominator={10}>
            <br/>
            <br/>   
              <div>
                <BoldText text="Type:" />  <br />
                <LightText text={ Data.clients[0].projects[0].type } />
              </div>
            <br/>
            <br/>        
              <div>
                <BoldText text="Status:" />  <br />
                <LightText text={ Data.clients[0].projects[0].status } />
              </div>
            <br/>
            <br/>   
              </ProgressItem>            
            </div>
          </ExpandableCard>
        </div>

    </div>
)

export default Projects
