import React from 'react'

export default function DropDownInput({
  label,
  className,
  children

}) {
  return (
    <div>
    <p className="inputLabel">{ label }</p>
      <select className={ className }>
        { children }
      </select>
    </div>
  )
}
