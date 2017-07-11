import React from 'react'

// MUI Components
import ExpandableCard from '../molecules/ExpandableCard'
import SummaryItem from '../molecules/SummaryItem'
import ProgressItem from '../molecules/ProgressItem'
import BoldText from '../components/BoldText'
import LightText from '../components/LightText'
import Logo from '../components/Logo'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const Projects = () => (
    <div>
        <h1>Projects</h1>

        <div>
          <ExpandableCard 
            subtitle="6 Projects"
            logoSrc="https://i.imgur.com/zgANrVM.jpg"
            logoAlt="Test Logo"
            logoClass="testClassName"
            children="Test" >
            <br/>
            <br/>

            <div>
              <ProgressItem title="00912211384742" subtitle="Johnny" completed="30" numerator="3" denominator="10">
            <br/>
            <br/>   
              <div>
                <BoldText text="Type:" />  <br />
                <LightText text="New Truck" />
              </div>
            <br/>
            <br/>        
              <div>
                <BoldText text="Status:" />  <br />
                <LightText text="Closed" />
              </div>
            <br/>
            <br/>   
 
              </ProgressItem>            
            </div>
          </ExpandableCard>
        </div>

        <div>
          <ExpandableCard 
            subtitle="6 Projects"
            logoSrc="https://i.imgur.com/zgANrVM.jpg"
            logoAlt="Test Logo"
            logoClass="testClassName"
            children="Test" >
            <br/>
            <br/>

            <div>
              <ProgressItem title="00912211384742" subtitle="Johnny" completed="30" numerator="3" denominator="10">
            <br/>
            <br/>   
              <div>
                <BoldText text="Type:" />  <br />
                <LightText text="New Truck" />
              </div>
            <br/>
            <br/>        
              <div>
                <BoldText text="Status:" />  <br />
                <LightText text="Closed" />
              </div>
            <br/>
            <br/>   
 
              </ProgressItem>            
            </div>
          </ExpandableCard>
        </div>

        <div>
          <ExpandableCard 
            subtitle="6 Projects"
            logoSrc="https://i.imgur.com/zgANrVM.jpg"
            logoAlt="Test Logo"
            logoClass="testClassName"
            children="Test" >
            <br/>
            <br/>

            <div>
              <ProgressItem title="00912211384742" subtitle="Johnny" completed="30" numerator="3" denominator="10">
            <br/>
            <br/>   
              <div>
                <BoldText text="Type:" />  <br />
                <LightText text="New Truck" />
              </div>
            <br/>
            <br/>        
              <div>
                <BoldText text="Status:" />  <br />
                <LightText text="Closed" />
              </div>
            <br/>
            <br/>   
 
              </ProgressItem>            
            </div>
          </ExpandableCard>
        </div>

        <div>
          <ExpandableCard 
            subtitle="6 Projects"
            logoSrc="https://i.imgur.com/zgANrVM.jpg"
            logoAlt="Test Logo"
            logoClass="testClassName"
            children="Test" >
            <br/>
            <br/>

            <div>
              <ProgressItem title="00912211384742" subtitle="Johnny" completed="30" numerator="3" denominator="10">
            <br/>
            <br/>   
              <div>
                <BoldText text="Type:" />  <br />
                <LightText text="New Truck" />
              </div>
            <br/>
            <br/>        
              <div>
                <BoldText text="Status:" />  <br />
                <LightText text="Closed" />
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
