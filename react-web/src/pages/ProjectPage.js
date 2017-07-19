import React from 'react'
import LinkButton from '../components/atoms/LinkButton'
import ExpandableCard from '../components/molecules/ExpandableCard'

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
            <p>{data.project.name}</p>
            <p>{data.project.description}</p>
            <p>{data.project.status}</p>
            <p>{data.project.type} </p>
            <div className='jobs'>
              {dataSorter.projectsGroupedByStatus(data.jobs).map(group => (

                <ExpandableCard
  								title={ group.key }
  								logoClass="logo-class"
  								children="Test" >
  								{group.items.map((job)=>(
  									<div>
                      <p>{job.name}</p>
    									<p>{job.description}</p>
    									<p>{job.status}</p>
                      <LinkButton buttonColor='#F06734' link={`/jobs/${job._id}`}/>
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
