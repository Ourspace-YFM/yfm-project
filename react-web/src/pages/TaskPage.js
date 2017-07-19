import React from 'react'
import LinkButton from '../components/atoms/LinkButton'
import ExpandableCard from '../components/molecules/ExpandableCard'
import LightText from '../components/atoms/LightText'
import BoldText from '../components/atoms/BoldText'

export default function Task({
  data
}) {
    if (!!data) {
      console.log(data)
    }

  return (
    <div className='task'>
      {
        !!data ? (
          <div>

            <h2>{data.task.name}</h2> 

            <div>
              <BoldText text='Attachments:' /> <LightText text={ data.task.attachments } />
            </div>

            <div>
              <BoldText text='Status:' /> <LightText text={ data.task.status } />
            </div>

            <div>
              <BoldText text='Parent Job:' /> <LightText text={ data.task.parentJob.name } />
            </div>

            <br />

              { /* (data.bookings) information to go here when bookings seeds have been added. */
                !!data.bookings._id ? (
                  <div className='tasks'>
                    <ExpandableCard
                      title="Bookings"
                      logoClass="logo-class"
                      children={
                      /* If there are bookings, display a link button. If there aren't, display a message */
                        <div>
                          <LinkButton buttonColor='#F06734' link={ `/bookings/${data.bookings._id}` } />
                        </div>
                      } />
                  </div>
                ) : (
                  <div>
                    <LightText text='There are currently no assigned bookings for this task.' />
                  </div>
                )
              }

          </div>
        ) : (
          'Loading Tasks'
        )
      }
    </div>
  )
}