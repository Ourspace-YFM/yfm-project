import React from 'react'

export default function TextArea({
  rows,
  columns,
  text,
  className

}) {
  return (
    <textarea classname={className} rows={ rows } cols={ columns }>
      { text }
    </textarea>
  )
}
