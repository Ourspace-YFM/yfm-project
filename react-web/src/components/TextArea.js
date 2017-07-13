import React from 'react'

export default function TextArea({
  rows,
  columns,
  text,
  className

}) {
  return (
    <textarea className={ className } rows={ rows } cols={ columns }>
      { text }
    </textarea>
  )
}
