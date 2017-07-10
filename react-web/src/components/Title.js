import React from 'react'

export default function Title({
  className,
  text

}) {
  return (
      <h1
        className={ className } >
        { text }
      </h1>
  )
}
