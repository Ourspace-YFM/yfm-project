import React from 'react'
import TextInput from '../components/atoms/TextInput'
import LinkButton from '../components/atoms/LinkButton'
import Link from '../components/atoms/Link'

const SignIn = ({

}) => {

	return (
		<div className="signInPage">
			<div className="left">
				<div className="contents">
					<h1><span className="bold">OUR</span>SPACE</h1>
					<p>A communications platform that aims to streamline the operations of <span className="bold">Your Fleet Media</span></p>
				</div>
				<div className="border">
				</div>
			</div>
			<div className="right">
				<div className="contents">
					<h1><span className="bold">SIGN IN</span></h1>
					<TextInput placeholder="Email" className="input"/>
					<TextInput type="password" placeholder="Password" className="input"/>
					<div>
						<LinkButton label="Log In" buttonColor="#F06734" className="signInButton" link="/bookings"/>
					</div>
					<div className="forgotPasswordDiv">
						<Link className="forgotPassword" name="Forgot your password?"/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SignIn
