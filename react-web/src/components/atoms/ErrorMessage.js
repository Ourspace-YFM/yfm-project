import React from 'react'

export default function Field({
  error
}) {

  let message = error.message

  if (error.response){
    const status = error.sponse.status
    if (status === 401){
      message = 'Please sign in to view this page'
    }
  }
  return (
    <p>
        { message }
    </p>
  )
}
