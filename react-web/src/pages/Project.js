import React from 'react'
import { Link } from 'react-router-dom'

export default function Project({
  _id,
  name,
  type,
  status,
  urgent
}) {
  return (
    <div>
      <h2>
        <Link to={ `/projects/${_id}` }>
          { name }
        </Link>
        {' '}
        <small>({ type })</small>
      </h2>
    </div>
  )
}