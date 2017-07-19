import React from 'react'

export default function TextInput({
  label,
  name,
  value,
  className

}) {
  return (
    <div>
      <p className="inputLabel">{ label }</p>
      <input type="text" name={ name } value={ value } className={ className }/>
    </div>
  )
}
