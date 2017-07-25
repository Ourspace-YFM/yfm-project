import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import LinkButton from '../components/atoms/LinkButton'

import WorkDetails from'../pages/WorkDetailsPage'
import NewBooking from'../pages/NewBookingPage'
import Comments from'../pages/CommentsPage'

export default class CreateBooking extends React.Component {

  state = {
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <NewBooking />
      case 1:
        return <WorkDetails />
      case 2:
        return <Comments />
      default:
        return 'Page not found!';
    }
  }

  render() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return (
      <MuiThemeProvider>
        <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <h1>Create New Booking</h1>
          <Stepper activeStep={stepIndex}>
            <Step>
              <StepLabel>Enter Booking Details</StepLabel>
            </Step>
            <Step>
              <StepLabel>Select Tasks for Booking</StepLabel>
            </Step>
            <Step>
              <StepLabel>Comments</StepLabel>
            </Step>
          </Stepper>
          <div style={contentStyle}>
            {finished ? (
              <div>
                <h1>[Display Booking Summary]</h1>
                <LinkButton 
                  link='/projects'
                  label='Submit' />
              </div>
            ) : (
              <div>
                {this.getStepContent(stepIndex)}
                <div style={{marginTop: 12}}>
                  <FlatButton
                    label="Back"
                    disabled={stepIndex === 0}
                    onTouchTap={this.handlePrev}
                    style={{marginRight: 12}}
                  />
                  <RaisedButton
                    label={stepIndex === 2 ? 'Finish' : 'Next'}
                    primary={true}
                    onTouchTap={this.handleNext}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
