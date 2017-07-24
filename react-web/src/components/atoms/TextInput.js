import React from 'react'

export default function TextInput({
  type = "text",
  label,
  name,
  value,
  placeholder,
  className

}) {
  return (
    <div>
      <p className="inputLabel">{ label }</p>
      <input type={ type } name={ name } value={ value } placeholder={placeholder} className={ className }/>
    </div>
  )
}
