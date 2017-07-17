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

export default function Project({
  clientId,
  name,
  type,
  description,
  status,
  priority,
  startDate,
  endDate

}) {
  return (
    <div>

      <div>
        <h1>{ name }</h1>
      </div>

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
            <TableRow>
              <TableRowColumn>{ clientId }</TableRowColumn>
              <TableRowColumn>{ name }</TableRowColumn>
              <TableRowColumn>{ type }</TableRowColumn>
              <TableRowColumn>{ description }</TableRowColumn>
              <TableRowColumn>{ status }</TableRowColumn>
              <TableRowColumn>{ priority }</TableRowColumn>
              <TableRowColumn>{ startDate }</TableRowColumn>
              <TableRowColumn>{ endDate }</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </MuiThemeProvider>

      <div>
        {/* Insert Project Jobs Here */}
      </div>
    </div>
  )
}