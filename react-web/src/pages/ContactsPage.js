import React from 'react'

import NavBar from '../components/atoms/Navigation'
import ContactCard from '../components/molecules/ContactCard'

const Assets = () => (
    <div>
      <NavBar/>
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
