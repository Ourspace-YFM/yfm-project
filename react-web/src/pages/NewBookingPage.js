import React from 'react'
import Text from '../components/atoms/TextField'
import BoldText from '../components/atoms/BoldText'
import GreyedInput from '../components/atoms/GreyedInput'
import DropDownMenu from '../components/molecules/DropDownMenu'
import DatePick from '../components/atoms/DatePick'

const NewBooking = () => (
    <div>
      <div className='bookingName'>
        <Text text='Booking Name'/>
      </div>      

      <br />

      <div className='status'>
        <BoldText text='Status: ' />
        <GreyedInput text='Incomplete' />
      </div>

      <br />

      <div className='owner'>
        <BoldText text='Owner: ' />
        <GreyedInput text='COL Burwood' /> <br />
        <BoldText text='Owner Contact: ' />
        <GreyedInput text='(03) 8888-8888' />        
      </div>
      
      <br />

      <div className='bookingLocation'>
        <BoldText text='Booking Location: ' /> 
        <GreyedInput text='Burwood Hwy & Blackburn Rd, Kmart Plaza (VIC), Burwood East VIC 3151' /> <br />
        <BoldText text='Booking Contact: ' />
        <GreyedInput text='(03) 7777-7777' />          
      </div>

      <br />

      <div className='installer'>
        <BoldText text='Installer: ' /> 
        <DropDownMenu listItems={['Alice Crash Repairs','Vehicle Wraps','LBE Signs','Unique Signs','Empire Graphics']} />
      </div>

      <br />      

      <div className='installerContact'>
        <BoldText text='Installer Contact: ' />
        <GreyedInput text='(03) 7777-7777' />         
      </div>

      <br />      

      <div className='bookingDate'>
        <DatePick label={ <BoldText text='Select Booking Date: ' /> } className='bookingDatePicker' />    
        <Text text='Time (HH:MM AM/PM)'/>   
      </div>      
    </div>
)

export default NewBooking
