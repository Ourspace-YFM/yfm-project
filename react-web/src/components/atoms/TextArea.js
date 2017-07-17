import React from 'react'

export default function TextArea({
  rows,
  columns,
  value,
  className

}) {
  return (
    <textarea className={className} rows={ rows } cols={ columns }>
      { value }
    </textarea>
  )
}
