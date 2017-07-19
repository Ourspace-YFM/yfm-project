import React from 'react'

export default function GreyedInput({
  label,
  text

}) {
  return (
    <div>
      <p className="inputLabel">{ label }</p>
      <div className="greyedInput">
        <p>{ text }</p>
      </div>
    </div>
  )
}
