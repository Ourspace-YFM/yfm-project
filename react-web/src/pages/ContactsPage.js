import React from 'react'

import NavBar from '../components/atoms/Navigation'
import ContactCard from '../components/molecules/ContactCard'

const Assets = () => (
    <div>
			<div className="navbar">
				<div className="logo">
					<p><span className="bold">OUR</span>SPACE</p>
				</div>
				<div className="links">
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
				<div className="links active">
					<a href="/contacts">CONTACTS</a>
				</div>
				<div className="signOut">
					<a href="/contacts">Sign out</a>
				</div>
			</div>
      <div className="pageContents">
        <h1>YFM Contacts Directory</h1>
        <div>
          <ContactCard
            contactName='John Hancock'
            logoClass='mini'
            logoSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Coles_logo.svg/1200px-Coles_logo.svg.png'
            companyName='Coles'
            accountId='596dc1db10ec3b08f61abc01'
            position='Coles Operations Manager'
            phone='(03) 8888-8888'
            email='jhancock@coles.com.au'
          />
        </div>
      </div>
    </div>
)

export default Assets
