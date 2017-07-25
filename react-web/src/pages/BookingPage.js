import React from 'react'
import BoldText from '../components/atoms/BoldText'
import LightText from '../components/atoms/LightText'

export default function BookingPage({
  data
}) {
    if (!!data) {
      console.log(data)
    }

  return (
    <div className='booking'>
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
				<div className="links active">
					<a href="/bookings">BOOKINGS</a>
				</div>
				<div className="links">
					<a href="/contacts">CONTACTS</a>
				</div>
				<div className="signOut">
					<a href="/contacts">Sign out</a>
				</div>
			</div>
      <div className="pageContents">
  {
      !!data ? (
          <div>
            <h1>Booking</h1>

            <div>
              <BoldText text='Booking Name:' /> <LightText text={ data.name } />
            </div>

            <div>
              <BoldText text='Booking Date:' /> <LightText text='Thur Jul 27 2017 at 9 AM' />
            </div>

            <div>
              <BoldText text='Status:' /> <LightText text={ data.status } />
            </div>

            <br />

            <h2>Tasks:</h2>
            { data.taskId.map((task) => (
            <div>
              <ul><LightText text={ task.name } /></ul>
            </div>
            )) }

          </div>

      ) : (
        'Loading Tasks'
      )
  }
    </div>
    </div>
  )
}
