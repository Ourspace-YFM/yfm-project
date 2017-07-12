import React from 'react'

// Components
import ProgressBar from '../components/ProgressBar'
import DatePick from '../components/DatePick'
import Icon from '../components/Icon'
import Logo from '../components/Logo'
import Subtitle from '../components/Subtitle'
import LightText from '../components/LightText'
import BoldText from '../components/BoldText'
import Title from '../components/Title'
import Link from '../components/Link'
import TextArea from '../components/TextArea'
import DropDownMenuMain from '../molecules/DropDownMenu'

// MUI Components
import {Tabs, Tab} from 'material-ui/Tabs'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'

// Molecules
import ExpandableCard from '../molecules/ExpandableCard'
import SummaryItem from '../molecules/SummaryItem'
import ProgressItem from '../molecules/ProgressItem'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

const buttonStyle = {
  margin: 12,
  color: 'red'
};

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  }
}

export const ComponentLibrary = () => (
    <div>
        <h1>YFM Component Library</h1>
        <h2>Atoms</h2>

        <div>
          <Icon icon="home"/>
        </div>

        <div>
          <Logo src="https://static.wixstatic.com/media/eea06a_7d3b5db08196495294d713a1ef98f4aa.jpg_256" alt="Test Logo" className="testClassName"/>
        </div>

        <div>
          <MuiThemeProvider>
            <Tabs>
             <Tab label="Item One">
               <div>
                 <p style={styles.headline}>Tab One</p>
                 <p>
                   Input children here
                 </p>
               </div>
             </Tab>
             <Tab label="Item Two" >
               <div>
                 <p style={styles.headline}>Tab Two</p>
                 <p>
                   Input children here
                 </p>
               </div>
             </Tab>
            </Tabs>
          </MuiThemeProvider>
        </div>

        <div>
          <MuiThemeProvider>
            <DropDownMenuMain />
          </MuiThemeProvider>
        </div>

        <div>
          <ProgressBar completed="50" />
        </div>

        <div>
          <DatePick text="Date Picker" />
        </div>

        <div>
          <TextArea
            rows="4"
            columns="50"
            text="Text Area"/>
        </div>

        <div>
          <Subtitle text="Subtitle"/>
        </div>

        <div>
          <LightText text="Light Text"/>
        </div>

        <div>
          <BoldText text="Bold Text"/>
        </div>

        <div>
          <Title text="Page Title"/>
        </div>

        <div>
          <MuiThemeProvider>
            <RaisedButton
              className='dynamic-btn green-btn'
              label='Dynamic Button'
              onClick={ () => {(console.log("Hello"))} }
              style={ buttonStyle } />
          </MuiThemeProvider>
        </div>

        <div>
          <MuiThemeProvider>
            <RaisedButton
              className='link-btn orange-btn'
              label='Link Button'
              href="/somelink"
              style={ buttonStyle } />
          </MuiThemeProvider>
        </div>

        <div>
          <Link redirectpath="/somelink" name="Link" />
        </div>

        <h2>Molecules</h2>

        <div>
          <ExpandableCard title="JOBS" subtitle="6 jobs">
            <p>Place children here</p>
          </ExpandableCard>
        </div>

        <div>
          <ExpandableCard subtitle="6 jobs" logoSrc="https://static.wixstatic.com/media/eea06a_7d3b5db08196495294d713a1ef98f4aa.jpg_256" logoAlt="Test Logo" logoClass="testClassName">
            <p>Place children here</p>
          </ExpandableCard>
        </div>
        <br/>
        <br/>
        <div>
          <SummaryItem title="Title" subtitle="Subtitle" link="/somewhere">
            <p>Insert badge and other info here as children</p>
          </SummaryItem>
        </div>
        <br/>
        <br/>
        <div>
          <ProgressItem title="Title" subtitle="Subtitle" completed="30" numerator="3" denominator="10">
            <p>Insert badge and other info here as children</p>
          </ProgressItem>
        </div>
    </div>
)

export default ComponentLibrary
