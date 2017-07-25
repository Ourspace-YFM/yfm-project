import React from 'react'
import TextInput from '../components/atoms/TextInput'
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
      <div className='stepContainer'>
        <div>
          <Title
            text='Enter Booking Details'
            onChange={ this.handleChange } />
        </div>

        <div className='bookingName'>
          <TextInput className='regularInput' label={
              <BoldText text='Booking name:' />
            }/>
        </div>

        <br />

        <div className='stepFormRow owner'>
          <div className='stepFormTile'>
            <BoldText text='Job owner: ' />
            <GreyedInput text='COL Burwood' />
          </div>
          <div className='stepFormTile'>
            <BoldText text='Owner contact: ' />
            <GreyedInput text='(03) 8888-8888' />
          </div>
        </div>

        <br />

        <div className='stepFormRow'>
          <div className='bookingLocation stepFormTile'>
            <TextInput label={
              <BoldText text='Booking location:' />
            }/>
          </div>

          <div className='bookingContact stepFormTile'>
            <TextInput label={
              <BoldText text='Location contact:' />
            }/>
          </div>
        </div>

        <br />
      
        <div className='stepFormRow'>
          <div className='installer stepFormTile'>
            <DropDownMenu label={
                <BoldText text='Installer:' />
              } listItems={
                [
                  'Alice Crash Repairs',
                  'Vehicle Wraps',
                  'LBE Signs',
                  'Unique Signs',
                  'Empire Graphics'
                ]
              }
            />
          </div>

          <br />

          <div className='installerContact stepFormTile'>
            <BoldText text='Installer contact:' />
            <GreyedInput text='(03) 7777-7777' />
          </div>
        </div>

        <br />

        <div className='stepFormRow'>
          <div className='bookingDate stepFormTile'>
            <DatePick label={ 
              <BoldText text='Booking Date:' />
            } className='bookingDatePicker' />
          </div>

          <div className='bookingTime stepFormTile'>
            <TextInput label={
              <BoldText text='Booking time:' />
            }/>
          </div>

          <br />

          <div className='bookingDuration stepFormTile'>
            <TextInput label={
              <BoldText text='Estimated duration:' />
            }/>
          </div>
        </div>
      </div>
    )
  }
}
