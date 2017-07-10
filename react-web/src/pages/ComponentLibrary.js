import React from 'react'

// Components
import Subtitle from '../components/Subtitle'
import LightText from '../components/LightText'
import BoldText from '../components/BoldText'
import Title from '../components/Title'
import DynamicButton from '../components/DynamicButton'
import RouteButton from '../components/RouteButton'
import RouteLink from '../components/RouteLink'

const ComponentLibrary = () => (
    <div>
        <h1>YFM Component Library</h1>
        <h2>Atoms</h2>
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
          <DynamicButton action={ () => {(console.log("Hello"))}} name="DynamicButton" />
        </div>

        <div>
          <RouteButton redirectpath="/home" name="RouteButton" />
        </div>

        <div>
          <RouteLink redirectpath="/pages" name="RouteLink" />
        </div>
    </div>
)

export default ComponentLibrary
