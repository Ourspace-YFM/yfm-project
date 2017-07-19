import React from 'react'

export default function TextArea({
  label, 
  rows,
  columns,
  value,
  className

}) {
  return (
    <div>
      <p className="inputLabel">{ label }</p>
      <textarea className={className} rows={ rows } cols={ columns }>
        { value }
      </textarea>
    </div>
  )
}
