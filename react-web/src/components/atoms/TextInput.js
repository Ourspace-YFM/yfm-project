import React from 'react'

export default function TextInput({
  label,
  name,
  value,
  placeholder, 
  className

}) {
  return (
    <div>
      <p className="inputLabel">{ label }</p>
      <input type="text" name={ name } value={ value } placeholder={placeholder} className={ className }/>
    </div>
  )
}
