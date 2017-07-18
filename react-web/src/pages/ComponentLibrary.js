import React from 'react'
import '../custom.css'

// Components
import ProgressBar from '../components/atoms/ProgressBar'
import DatePick from '../components/atoms/DatePick'
import Icon from '../components/atoms/Icon'
import Logo from '../components/atoms/Logo'
import Subtitle from '../components/atoms/Subtitle'
import LightText from '../components/atoms/LightText'
import BoldText from '../components/atoms/BoldText'
import Title from '../components/atoms/Title'
import Link from '../components/atoms/Link'
import TextArea from '../components/atoms/TextArea'
import DynamicButton from '../components/atoms/DynamicButton'
import LinkButton from '../components/atoms/LinkButton'
import DropDownMenu from '../components/molecules/DropDownMenu'

// Molecules
import ExpandableCard from '../components/molecules/ExpandableCard'
import SummaryItem from '../components/molecules/SummaryItem'
import ProgressItem from '../components/molecules/ProgressItem'
import Map from '../components/molecules/Map'

// MUI Dependencies
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()


const AnyReactComponent = ({ text }) => <div>{text}</div>;

export const ComponentLibrary = ({
  setDrawerOpen,
  setDrawerData
}) => (
    <div>
        <h1>YFM Component Library</h1>
        <h2>Atoms</h2>

        <div style={{display: "inline-block", marginLeft: "15px", marginRight: "15px"}}>
          <p>Green button set as default</p>
          <DynamicButton action={ () => {(console.log('Green Button!'))} } />
        </div>

        <div style={{display: "inline-block", marginLeft: "15px", marginRight: "15px"}}>
          <p>buttonColor="#F06734"</p>
          <LinkButton buttonColor='#F06734' link='/home' />
        </div>

        <div style={{marginTop: "15px", marginBottom: "15px"}}>
          <div style={{display: "inline-block", marginLeft: "15px", marginRight: "15px"}}>
            <p>size="25px"</p>
            <Icon icon="home" size="25px"/>
          </div>

          <div style={{display: "inline-block", marginLeft: "15px", marginRight: "15px"}}>
            <p>size="40px"</p>
            <Icon icon="home" size="40px"/>
          </div>

          <div style={{display: "inline-block", marginLeft: "15px", marginRight: "15px"}}>
            <p>size="60px"</p>
            <Icon icon="home" size="60px"/>
          </div>
        </div>

        <div style={{marginTop: "15px", marginBottom: "15px"}}>
          <div style={{display: "inline-block", marginLeft: "15px", marginRight: "15px"}}>
            <p>fillColor="#F1F2F2"</p>
            <Icon icon="home" size="40px" fillColor="#F1F2F2"/>
          </div>

          <div style={{display: "inline-block", marginLeft: "15px", marginRight: "15px"}}>
            <p>fillColor="#D1D3D4"</p>
            <Icon icon="home" size="40px" fillColor="#D1D3D4"/>
          </div>

          <div style={{display: "inline-block", marginLeft: "15px", marginRight: "15px"}}>
            <p>fillColor="#414042"</p>
            <Icon icon="home" size="40px" fillColor="#414042"/>
          </div>
        </div>

        <div>
          <DropDownMenu />
        </div>

        <div style={{display: "inline-block", marginLeft: "15px", marginRight: "15px"}}>
          <p>className="mini"</p>
          <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Coles_logo.svg/1200px-Coles_logo.svg.png" alt="Test Logo" className="mini"/>
        </div>

        <div style={{display: "inline-block", marginLeft: "15px", marginRight: "15px"}}>
          <p>className="sml"</p>
          <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Coles_logo.svg/1200px-Coles_logo.svg.png" alt="Test Logo" className="sml"/>
        </div>

        <div style={{display: "inline-block", marginLeft: "15px", marginRight: "15px"}}>
          <p>className="md"</p>
          <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Coles_logo.svg/1200px-Coles_logo.svg.png" alt="Test Logo" className="md"/>
        </div>

        <div style={{display: "inline-block", marginLeft: "15px", marginRight: "15px"}}>
          <p>className="lrg"</p>
          <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Coles_logo.svg/1200px-Coles_logo.svg.png" alt="Test Logo" className="lrg"/>
        </div>

        <div>
          <p>width="50%" - determines the width of the progress bar relative to the parent div (parent div rendered outside of the component)</p>
          <ProgressBar completed={50} width="50%"/>
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
          <Link redirectpath="/somelink" name="Link" />
        </div>

        <h2>Molecules</h2>

        <div>
          <Map
            setDrawerOpen={setDrawerOpen}
            setDrawerData={setDrawerData}
            >
            <AnyReactComponent
              lat={-33.8688}
              lng={151.2093}
              text={'Sydney'}
            />
          </Map>
        </div>

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
          <ProgressItem title="Title" subtitle="Subtitle" completed={30} numerator={3} denominator={10}>
            <p>Insert badge and other info here as children</p>
          </ProgressItem>
        </div>
    </div>
)

export default ComponentLibrary
