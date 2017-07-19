import React from 'react'

// Components
import Logo from '../components/atoms/Logo'
import LightText from '../components/atoms/LightText'
import BoldText from '../components/atoms/BoldText'
import Subtitle from '../components/atoms/Subtitle'

export default function Job({
  data
}) {
    if(!!data) {
      console.log(data)
    }
  return (
    <div className='Job'>
      {
        !!data ? (
          <div>
          { JSON.stringify(data) }
          <h1>{ data.job.name }</h1>
          <Logo src={data.job.owner.logo} alt={data.job.owner.name + " Logo"} className="lrg"/>
          <div>
            <BoldText text="Project: "/>
            <LightText text={data.job.parentProject.description}/>
          </div>
          <div className="jobDetails">
            <Subtitle text="Job Details"/>
            <div>
              <BoldText text="Status: "/>
              <LightText text={data.job.status}/>
            </div>
            <div>
              <BoldText text="Priority: "/>
              <LightText text={data.job.priority ? "Urgent" : "Normal"}/>
            </div>
            <div>
              <BoldText text="Start Date: "/>
              <LightText/>
            </div>
            <div>
              <BoldText text="End Date: "/>
              <LightText/>
            </div>

          </div>

          </div>
        ) : (
          'Loading Job'
        )
      }
    </div>
  )
}
