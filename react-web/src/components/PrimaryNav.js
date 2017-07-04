import React from 'react'
import { NavLink } from 'react-router-dom'

export default ({
  isSignedIn,
  onSignOut
}) => (
    <nav>
        <NavLink exact to='/' activeClassName='active'>Home</NavLink>
        {
          isSignedIn ? [
            <NavLink to='/movies'  activeClassName='active'>Movies</NavLink>,
            <NavLink to='/' onClick={ onSignOut } activeClassName='active'>Sign Out</NavLink>
            // <button onClick={ onSignOut }></button>
        ] : [
          <NavLink to='/signin'  activeClassName='active'>Sign In/Create Account</NavLink>
        ]
        }
    </nav>
)
