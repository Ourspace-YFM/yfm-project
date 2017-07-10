import React from 'react'

// Components
import Subtitle from '../components/Subtitle'
import LightText from '../components/LightText'
import BoldText from '../components/BoldText'
import Title from '../components/Title'
import Link from '../components/Link'
import TextArea from '../components/TextArea'

// MUI Components
import LinearProgress from 'material-ui/LinearProgress'
import DatePicker from 'material-ui/DatePicker'
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
            <DatePicker hintText="Portrait Dialog" />
          </MuiThemeProvider>
        </div>

        <div>
        <p>Progress bar: </p>
          <MuiThemeProvider>
            <LinearProgress
             mode="determinate"
             value='50' />
          </MuiThemeProvider>
          <br/>
          <br/>
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
