import React from 'react'
import { NavLink } from 'react-router-dom'

export default ({
  isSignedIn,
  onSignOut
}) => (
    <nav>
        <NavLink exact to='/' activeClassName='active' key='home'>Home</NavLink>
        {
          isSignedIn ? [
            <NavLink to='/' onClick={ onSignOut } activeClassName='active' key='sign-out'>Sign Out</NavLink>
            // <button onClick={ onSignOut }></button>
        ] : [
          <NavLink to='/signin'  activeClassName='active' key='sign-in'>Sign In/Create Account</NavLink>,
          <div key="other-links-div">
            <NavLink to='/componentlibrary'  activeClassName='active' key='component-library'>YFM Component Library</NavLink>
            <div  key='projects-div'>
              <NavLink to='/projects'  activeClassName='active' key='projects'>Projects</NavLink>
            </div>
            <div>
              <NavLink to='/assets'  activeClassName='active'>Assets</NavLink>
            </div>
          </div>
        ]
        }
    </nav>
)
