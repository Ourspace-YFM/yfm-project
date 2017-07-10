import React from 'react'

export default function Link({
  redirectpath,
  name

}) {
  return (
      <a href={ redirectpath }>
        { name }
      </a>
  )
}