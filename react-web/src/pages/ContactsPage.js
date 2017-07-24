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
            accountId='596dc1db10ec3b08f61dda01'
            position='Coles Operations Manager'
            phone='(03) 8888-8888'
            email='jhancock@coles.com.au'
          />
					<br />
          <ContactCard
            contactName='Brett Enever'
            logoClass='mini'
            logoSrc='https://s3.us-east-2.amazonaws.com/ourspace/logos/SCS.png'
            companyName='SCS'
            accountId='596dc1db10ec3b08f61eed01'
            position='Coles Operations Manager'
            phone='(03) 8888-8888'
            email='benever@scs.com.au'
					/>
					<br />
          <ContactCard
            contactName='Alex Hatzimihail'
            logoClass='mini'
            logoSrc='https://s3.us-east-2.amazonaws.com/ourspace/logos/SCS.png'
            companyName='SCS'
            accountId='596dc1db10ec3b08f61eed01'
            position='Account Manager'
            phone='(03) 8888-8888'
            email='a_hatzimihail@scs.com.au'
					/>
					<br />
          <ContactCard
            contactName='Sharon Carr'
            logoClass='mini'
            logoSrc='https://s3.us-east-2.amazonaws.com/ourspace/logos/ONK.png'
            companyName='City Of Onkaparinga'
            accountId='596dc1db10ec3b08f61def01'
            position='Account Manager'
            phone='(03) 8888-8888'
            email='scarr@cityofonkaparinga.gov.au'
					/>
					<br />
          <ContactCard
            contactName='Yuen Hua'
            logoClass='mini'
            logoSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Coles_logo.svg/1200px-Coles_logo.svg.png'
            companyName='Coles'
            accountId='596dc1db10ec3b08f61ded01'
            position='Coles Marketing Manager'
            phone='(03) 8888-8888'
            email='yhua@coles.com.au'
					/>
					<br />
          <ContactCard
            contactName='Kieren Pearson'
            logoClass='mini'
            logoSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Coles_logo.svg/1200px-Coles_logo.svg.png'
            companyName='Coles'
            accountId='596dc1db10ec3b08f61dde01'
            position='Coles Site Manager'
            phone='(03) 8888-8888'
            email='kpearson@coles.com.au'
          />																								
        </div>
      </div>
    </div>
)

export default Assets
