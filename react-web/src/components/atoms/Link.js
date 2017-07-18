import React from 'react'

export default function Link({
  redirectpath,
  name,
  className

}) {
  return (
    <a href={ redirectpath } className={"links " + className}>
      { name }
    </a>
  )
}
