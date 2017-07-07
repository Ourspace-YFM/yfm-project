import React from 'react'
import BoldText from './BoldText'

export default function Ourspace({
  className
}) {
  return (
    <p className={ className }>
      <BoldText text="OUR"/>
      <span>SPACE</span>
    </p>
  )
}
