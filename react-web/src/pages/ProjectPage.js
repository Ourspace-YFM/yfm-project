import React from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ExpandableCard from '../components/molecules/ExpandableCard'
import ProgressItem from '../components/molecules/ProgressItem'
import BoldText from '../components/atoms/BoldText'
import LightText from '../components/atoms/LightText'
import RaisedButton from 'material-ui/RaisedButton'
import CircularProgress from 'material-ui/CircularProgress'

export default function Project({
  data
}) {
  return (
    <div className='project'>
      {
        !!data ? (
          <div>
            <MuiThemeProvider>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHeaderColumn>Client ID</TableHeaderColumn>
                    <TableHeaderColumn>Project Name</TableHeaderColumn>
                    <TableHeaderColumn>Type</TableHeaderColumn>
                    <TableHeaderColumn>Description</TableHeaderColumn>
                    <TableHeaderColumn>Status</TableHeaderColumn>
                    <TableHeaderColumn>Priority</TableHeaderColumn>
                    <TableHeaderColumn>Start Date</TableHeaderColumn>
                    <TableHeaderColumn>End Date</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow hoverable={ true }>
                    <TableRowColumn>{data.project.name}</TableRowColumn>
                    <TableRowColumn>{data.project.type}</TableRowColumn>
                    <TableRowColumn>{data.project.description}</TableRowColumn>
                    <TableRowColumn>{data.project.status}</TableRowColumn>
                    <TableRowColumn>{data.project.priority}</TableRowColumn>
                    {/*<TableRowColumn>VALUES TO BE DISCUSSED</TableRowColumn>*/}
                    <TableRowColumn>{data.project.startDate}</TableRowColumn>
                    <TableRowColumn>{data.project.endDate}</TableRowColumn>
                  </TableRow>
                </TableBody>
              </Table>
            </MuiThemeProvider>

            <div className='jobs'>
              {
                data.jobs.map((job)=>(
                <MuiThemeProvider>
                  <ExpandableCard
                    title={ job.name }
                    logoAlt="Test Logo"
                    logoClass="logo-class"
                    children="Test" >
                    {
                        <div key={job._id}>
                            <ProgressItem
                              completed={ 35 }
                              numerator={ 3 }
                              denominator={ 10 }>
                            <div>
                              <BoldText text="Job Name:" />  <br />
                              <LightText text={ job.name } />
                            </div>
                          <br/>
                          <br/>
                            <div>
                              <BoldText text="Type:" />  <br />
                              <LightText text={ job.type } />
                            </div>
                          <br/>
                          <br/>
                            <div>
                              <BoldText text="Status:" />  <br />
                              <LightText text={ job.status } />
                            </div>
                          <br/>
                          <br/>
                            <div>
                              <RaisedButton
                                className='link-btn'
                                label={ "View Task: " + job.name }
                                href={ `/jobs/${job._id}` } />
                            </div>
                          <br/>
                          <br/>
                            </ProgressItem>
                          <br/>
                          <br/>
                        </div>
                    }

                  </ExpandableCard>
                </MuiThemeProvider>
                ))
              }
            </div>
          </div>
        ) : (
          'Loading Project'
        )
      }
    </div>
  )
}
