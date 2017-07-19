import React from 'react'

export default function DropDownOption({
  className,
  value,
  label
}) {
  return (
    <option value={ value } className={ className }>{ label }</option>
  )
}
