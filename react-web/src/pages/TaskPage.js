import React from 'react'
import LinkButton from '../components/atoms/LinkButton'
import ExpandableCard from '../components/molecules/ExpandableCard'

import * as dataSorter from '../api/dataSorter'

export default function Task({
  data
}) {
    if(!!data) {
      'data',data
    }

  return (
    <div className='task'>
      {
        !!data ? (
          <div>
            <p>{ data.task }</p>   
            <p>{ data.task }</p>
            <p>{ data.task }</p>
            <div className='tasks'>
              {
                <ExpandableCard
  								title={ data.task.name }
  								logoClass="logo-class"
  								children="Test" >
  									<div>
                      <LinkButton buttonColor='#F06734' link={ `/bookings/${data.bookings._id}` }/>
  									</div>
  							</ExpandableCard>               
              }

            </div>
          </div>
        ) : (
          'Loading Tasks'
        )
      }
    </div>
  )
}