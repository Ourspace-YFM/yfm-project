import React from 'react'
import { Redirect } from 'react-router-dom'
import SignInForm from '../components/SignInForm'

const SignInPage = ({
    token,
    onSignIn,
    onCreateAccount,
    toggleCreateAccount,
    createAccount
}) => (
    <div>
    {
        !!token ? (
            <Redirect to='/' />
        ) : (
            <SignInForm
            toggleCreateAccount={ toggleCreateAccount }
            createAccount={ createAccount }
            onSignIn={ onSignIn }
            onCreateAccount={ onCreateAccount }
            />
        )
    }
    </div>
)

export default SignInPage
