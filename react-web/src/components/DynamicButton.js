import React from 'react'

export default function DynamicButton({
  action,
  name

}) {
  return (
        <button
          onClick={ action } >
          { name }
        </button>
  )
}