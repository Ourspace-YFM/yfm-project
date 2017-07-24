import React from 'react'
import NavBar from '../components/atoms/Navigation'
import TextInput from '../components/atoms/TextInput'
import DynamicButton from '../components/atoms/DynamicButton'
import Link from '../components/atoms/Link'
import Subtitle from '../components/atoms/Subtitle'

const SignIn = ({

}) => {

	return (
		<div className="dashboard">
			<div className="navbar">
				<div className="logo">
					<p><span className="bold">OUR</span>SPACE</p>
				</div>
				<div className="links active">
					<a href="/dashboard">DASHBOARD</a>
				</div>
				<div className="links">
					<a href="/projects">PROJECTS</a>
				</div>
				<div className="links">
					<a href="/bookings">BOOKINGS</a>
				</div>
				<div className="links">
					<a href="/assets">ASSETS</a>
				</div>
				<div className="links">
					<a href="/contacts">CONTACTS</a>
				</div>
				<div className="signOut">
					<a href="/contacts">Sign out</a>
				</div>
			</div>
			<div className="pageContents">
				<h1>Dashboard</h1>
				<Subtitle text="Updates"/>
				<Subtitle text="Upcoming"/>
				<Subtitle text="To Do"/>
			</div>
		</div>
	)
}

export default SignIn
