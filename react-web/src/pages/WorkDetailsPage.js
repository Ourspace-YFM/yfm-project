import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const WorkDetails = () => (
  <div>
    <h1>Select Tasks for Booking</h1>
    <MuiThemeProvider>
      <Table multiSelectable={ true }>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Task Name</TableHeaderColumn>
            <TableHeaderColumn>Status</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableRowColumn>Install D/S skin</TableRowColumn>
            <TableRowColumn>Incomplete</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Install P/S skin</TableRowColumn>
            <TableRowColumn>Incomplete</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Replace damaged/missing corner covers</TableRowColumn>
            <TableRowColumn>Incomplete</TableRowColumn>
          </TableRow>     
          <TableRow>
            <TableRowColumn>Remove/replace D/S weight decal</TableRowColumn>
            <TableRowColumn>Incomplete</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Remove/replace read door SAV</TableRowColumn>
            <TableRowColumn>Incomplete</TableRowColumn>
          </TableRow>                      
        </TableBody>
      </Table>
    </MuiThemeProvider>
  </div>
)

export default WorkDetails
