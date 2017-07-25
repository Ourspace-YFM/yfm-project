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

            <h2>Task: {data.task.name}</h2> 

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



              { /* If there are bookings, display the expandable card. If there aren't, display a message */
                !!data.bookings ? (
                  /* (data.bookings) information to go here when bookings seeds have been added. */
                    <div>
                    { data.bookings.map((booking) => (
                      <ExpandableCard
                        title="Current Bookings"
                        logoClass="logo-class" 
                        children={
                        <div>
                          <div>
                            <BoldText text='Booking Name:' /> <br />
                            <LightText text={ booking.name } />
                          </div>

                          <br />

                          <div>
                            <BoldText text='Booking Status:' /> <br />
                            <LightText text={ booking.status } />
                          </div>                          
                          
                          <br />
                          <br />

                          <div>
                            <LinkButton label='View' buttonColor='#F06734' link={ `/bookings/${booking._id}` } />
                          </div>

                        </div>
                        }
                      />
                    ))}
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