import React from 'react'

// Components
import Logo from '../components/atoms/Logo'
import LightText from '../components/atoms/LightText'
import BoldText from '../components/atoms/BoldText'
import Subtitle from '../components/atoms/Subtitle'
import ExpandableCard from '../components/molecules/ExpandableCard'
import LinkButton from '../components/atoms/LinkButton'

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
          <h1>{ data.job.name }</h1>
          <Logo src={data.job.owner.logo} alt={data.job.owner.name + " Logo"} className="lrg"/>
          <div>
            <BoldText text="Project: "/>
            <LightText text={data.job.owner.name}/>
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

            { data.tasks.map((task) => (
              <div className='tasks'>
                <ExpandableCard
                  title={ task.name }
                  logoClass="logo-class"
                  children={
                    <div>
                      <BoldText text="Status: " />
                      <LightText text={ task.status } /> <br />
                      <LinkButton label='View' buttonColor='#F06734' link={ `/tasks/${task._id}` }/>
                    </div>                    
                  } />
              </div>              
            ))}

          </div>
          </div>
        ) : (
          'Loading Job'
        )
      }
    </div>
  )
}
