import React from 'react'

export default function NavBar({

}) {
  return (
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
        <a href="/contacts">CONTACTS</a>
      </div>
      <div className="signOut">
        <a href="/contacts">Sign out</a>
      </div>
    </div>
  )
}
