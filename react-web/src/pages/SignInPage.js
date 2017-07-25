import React from 'react'
import { Redirect } from 'react-router-dom'
import SignInForm from '../components/atoms/SignInForm'

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
            <Redirect to='/SignIn' />
        )
    }
    </div>
)

export default SignInPage
