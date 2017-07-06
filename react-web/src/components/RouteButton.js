import React from 'react'
import { Link } from 'react-router-dom'

export default function RouteButton({
  redirectpath,
  name

}) {
  return (
      <Link 
        to={ redirectpath } >
        <button>
          { name }
        </button>
      </Link>
  )
}