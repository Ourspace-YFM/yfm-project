import React from 'react'
import Text from '../components/atoms/TextField'
import Title from '../components/atoms/Title'
import BoldText from '../components/atoms/BoldText'
import GreyedInput from '../components/atoms/GreyedInput'
import DropDownMenu from '../components/molecules/DropDownMenu'
import DatePick from '../components/atoms/DatePick'

export default class Newbooking extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
      value: {}
    };
  }

  handleChange = (event, index, value) => this.setState({ value });

  render() {
    return (
      <div>
        <div>
          <Title 
            text='Enter Booking Details'
            onChange={ this.handleChange } />
        </div>

        <div className='bookingName'>
          <Text text='Booking Name'/>
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
          <Text text='Booking Location'/>
        </div>

        <br />

        <div className='bookingContact'>
          <BoldText text='Location Contact: ' /> 
          <Text text='Location Contact'/>
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
        </div>

        <div className='bookingTime'>
          <Text text='Booking Time'/>
        </div>

        <br />           

        <div className='bookingDuration'>
          <BoldText text='Estimated Booking Duration: ' /> 
          <Text text='Estimated Booking Duration'/>
        </div>        
      </div>
    )
  }
}