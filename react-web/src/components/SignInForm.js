import React from 'react'

const formStyle = {
  display: 'flex',
  flexDirection: 'column'
}

function submitSignIn(event, onSignIn) {
  // Stop usual browser form submission
  event.preventDefault()

  // Get <form>
  const form = event.target
  // Get values from the field
  const email = form.elements['email'].value
  const password = form.elements['password'].value
  // Call the onSignIn function with our values
  onSignIn({ email, password })
}
function submitCreateAccount(event, onCreateAccount) {
  // Stop usual browser form submission
  event.preventDefault()

  // Get <form>
  const form = event.target
  // Get values from the field
  const email = form.elements['email'].value
  const password = form.elements['password'].value
  // Call the onSignIn function with our values
  onCreateAccount({ email, password })
}

export default function SignInForm({
  onSignIn,
  onCreateAccount,
  toggleCreateAccount,
  createAccount
}) {
  return (
    <div> <button onClick={toggleCreateAccount}>
           { createAccount ? ('Sign In') : ('Create Account') }
          </button>
{ createAccount ? (
      <form
        onSubmit={ (event) => submitCreateAccount(event, onCreateAccount) }
        style={ formStyle }
      >
        <label>
          <span>Email </span>
          <input name='email' />
        </label>
        <label>
          <span>Password </span>
          <input type='password' name='password' />
        </label>
        <button>Create Account</button>
      </form>
      ) : (
        <form
          onSubmit={ (event) => submitSignIn(event, onSignIn) }
          style={ formStyle }
        >
          <label>
            <span>Email </span>
            <input name='email' />
          </label>
          <label>
            <span>Password </span>
            <input type='password' name='password' />
          </label>
          <button>Sign In</button>
        </form>
      )
    } </div>
  )
}
