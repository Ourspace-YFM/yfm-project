import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import './App.css'
import './custom.css'
import PrimaryNav from './components/PrimaryNav'
import ErrorMessage from './components/ErrorMessage'
import HomePage from './pages/HomePage'
import SignInPage from './pages/SignInPage'
import ComponentLibrary from './pages/ComponentLibrary'
import Projects from './pages/ProjectsPage'
import * as authAPI from './api/auth'

// import * as bookingsAPI from './api/projects'
// import * as jobsAPI from './api/projects'

import { setApiToken } from './api/init'
import Project from './components/Project'

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
const tokenKey = 'userToken'
const savedToken = localStorage.getItem(tokenKey)
setApiToken(savedToken)

class App extends Component {
  // Initial state
  state = {
    error: null,
    token: savedToken,
    createAccount: false,
    data: null,
    drawerData: null,
    drawerOpen: false
  }

  setDrawerData = (dataFunction) => {
    dataFunction
    .then(data => {
      this.setState({data})
    })
    .catch(error => {
      this.setState({ error })
    })
  }

  setDrawerOpen = (boolean) => {
    this.setState({drawerOpen: boolean})
  }

  setData = (dataFunction) => {
    dataFunction
    .then(data => {
      this.setState({data})
    })
    .catch(error => {
      this.setState({ error })
    })
  }

  handleSignOut = () => {
    localStorage.removeItem(tokenKey)
    this.setState({ token: null })
  }

  setToken = (token) => {
    if (token) {
      localStorage.setItem(tokenKey,token)
    } else {
      localStorage.removeItem(tokenKey)
    }
    setApiToken(savedToken)
    this.setState({ token: token })
  }

  toggleCreateAccount = () => {
    this.setState({createAccount: !this.state.createAccount})
  }

  handleSignIn = ({ email, password }) => {
    authAPI.signIn({ email, password })
      .then(json => {
        this.setToken(json.token)
      })
      .catch(error => {
        this.setState({ error })
      })
  }
  handleCreateAccount = ({ email, password }) => {
    authAPI.register({ email, password })
      .then(json => {
        this.setToken(json.token)
      })
      .catch(error => {
        this.setState({ error })
      })
  }

  render() {
    const { error, token, createAccount=false, drawerData, drawerOpen } = this.state
    return (

      <Router>
        <main>
          <PrimaryNav isSignedIn={!!token} onSignOut={ this.handleSignOut } />
            <MuiThemeProvider>
              <Drawer
                docked={false}
                width={200}
                open={drawerOpen}
                onRequestChange={(value) => this.setDrawerOpen(value)}
              >
                <MenuItem onTouchTap={() => {this.setDrawerOpen(false)}}>Menu Item</MenuItem>
                <MenuItem onTouchTap={() => {this.setDrawerOpen(false)}}>Menu Item 2</MenuItem>
              </Drawer>
            </MuiThemeProvider>
          { !!error && <ErrorMessage error={error}/> }
          <Switch>
            <Route exact path='/' component={ HomePage } />
            <Route exact path='/projects' component={ Projects } />
            <Route path='/componentlibrary' render={ () => (
                <ComponentLibrary
                  setDrawerOpen={this.setDrawerOpen}
                  setDrawerData={this.setDrawerData}
                  />
              ) } />
            <Route path='/signin' render={
              () => (
                <SignInPage token={ token } createAccount={ createAccount } toggleCreateAccount={ this.toggleCreateAccount } onSignIn={ this.handleSignIn } onCreateAccount={ this.handleCreateAccount} />
              )
            } />
            <Route path='/projects/:id' render={
              ({ match }) => {
    							const id = match.params.id
                  const data = {"_id": "Dy3978rWy5dWrM",
        					"name": "SCS Perth & LGL Burwood",
        					"type": "New Truck",
        					"status": "closed",
        					"urgent": false}
    							return (
    									<Project {...data}/>
    							)
    						}
            } />
            <Route render={
              ({ location }) => <p>{ location.pathname } not found</p>
            } />
          </Switch>
        </main>
      </Router>
    )
  }

  componentDidMount() {
    // Test load projects
      // this.setData(jobsAPI.list())
  }
}

export default App
