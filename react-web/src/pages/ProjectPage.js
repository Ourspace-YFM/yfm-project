import React from 'react'
import LinkButton from '../components/atoms/LinkButton'
import ExpandableCard from '../components/molecules/ExpandableCard'
import BoldText from '../components/atoms/BoldText'
import LightText from '../components/atoms/LightText'

import * as dataSorter from '../api/dataSorter'

export default function Project({
  data
}) {
    if(!!data) {
      console.log('data',data)
      console.log('console',dataSorter.projectsGroupedByStatus(data.jobs))
    }
  return (
    <div className='project'>
      {
        !!data ? (
          <div>
            <h1>{ data.project.name }</h1>

            <div>
              <BoldText text='Project Description:' /> <br />
              <LightText text={ data.project.description } />
              
            </div>

            <br />

            <div>
              <BoldText text='Project Status:' /> <br />
              <LightText text={ data.project.status } />
            </div>

            <br />

            <div>
              <BoldText text='Project Type:' /> <br />
              <LightText text={ data.project.type } />
            </div>

            <br />

            <div className='jobs'>
              {dataSorter.projectsGroupedByStatus(data.jobs).map(group => (

                <ExpandableCard
  								title={ 
                    <div>
                      <BoldText text={<h2>Jobs</h2>} /> <br />
                      <LightText text={ `Group Status: ${ group.key }` } />
                    </div> 
                  }
  								logoClass="logo-class"
  								children="Test" >
  								{group.items.map((job)=>(
  									<div>
                      <div>
                        <BoldText text='Job Name:' /> <br />
                        <LightText text={ job.name } />
                      </div>

                      <br />
                      
                      <div>
                        <BoldText text='Job Description:' /> <br />
                        <LightText text={ job.description } />
                      </div>

                      <br />
                      
                      <div>
                        <BoldText text='Job Status:' /> <br />
                        <LightText text={ job.status } />
                      </div>

                      <br />

                      <LinkButton label='View' buttonColor='#F06734' link={`/jobs/${job._id}`}/>

                      <br />
                      <br />
                      <br />
  									</div>

  								))}
  							</ExpandableCard>
              ))}

            </div>
          </div>
        ) : (
          'Loading Project'
        )
      }
    </div>
  )
}
