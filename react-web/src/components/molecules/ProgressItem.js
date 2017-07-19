import React from 'react';
import BoldText from '../atoms/BoldText'
import LightText from '../atoms/LightText'
import ProgressBar from '../atoms/ProgressBar'
import LinkButton from '../atoms/LinkButton'

export default function ProgressItem({
  className,
  title,
  subtitle,
  completed,
  numerator,
  denominator,
  children,
  width,
  buttonColor = "#F06734",
  link,
  buttonLabel

}) {
  return (
    <div className={ className }>
      <div>
        <BoldText text={ title }/>
        <span>   </span>
        <LightText text={ subtitle }/>
      </div>
      { children }
      <div className="progressItemBarContainer">
        <ProgressBar
         completed={ completed } width={ width }/>
        <LightText text={ numerator + '/' + denominator }/>
      </div>
      <div className="progressItemButtonContainer">
        <LinkButton buttonColor={ buttonColor } link={ link } label={ buttonLabel } />
      </div>
    </div>
  )
}
