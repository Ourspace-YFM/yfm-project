import React from 'react'
import BoldText from '../components/atoms/BoldText'
import LightText from '../components/atoms/LightText'

export default function BookingPage({
  data
}) {
    if (!!data) {
      console.log(data)
    }

  return (
    <div className='booking'>
  {
      !!data ? (
        <div>
          <h1></h1>
          <div>
            <BoldText text='Attachments:' /> <LightText text={ data.name } />
          </div>

          <div>
            <BoldText text='Status:' /> <LightText text={ data.installerId } />
          </div>
        </div>
      ) : (
        'Loading Tasks'
      )
  }
    </div>
  )
}