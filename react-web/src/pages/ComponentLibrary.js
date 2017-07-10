import React from 'react'

// Components
import Subtitle from '../components/Subtitle'
import LightText from '../components/LightText'
import BoldText from '../components/BoldText'
import Title from '../components/Title'
import Link from '../components/Link'
import DropDownMenuMain from '../molecules/DropDownMenu'

// MUI Components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

const buttonStyle = {
  margin: 12,
};

export const ComponentLibrary = () => (
    <div>
        <h1>YFM Component Library</h1>
        <h2>Atoms</h2>

        <div>
          <MuiThemeProvider>
            <DropDownMenuMain />
          </MuiThemeProvider>
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
              className='dynamic-btn'
              label='Dynamic Button'
              onClick={ () => {(console.log("Hello"))} }
              style={ buttonStyle } />
          </MuiThemeProvider>
        </div>

        <div>
          <MuiThemeProvider>
            <RaisedButton 
              className='link-btn'
              label='Link Button'
              href="/somelink" 
              style={ buttonStyle } />
          </MuiThemeProvider>
        </div>

        <div>
          <Link redirectpath="/somelink" name="Link" />
        </div>
    </div>
)

export default ComponentLibrary