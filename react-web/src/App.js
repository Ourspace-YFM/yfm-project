import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import './App.css'
import './custom.css'
import PrimaryNav from './components/atoms/PrimaryNav'
import ErrorMessage from './components/atoms/ErrorMessage'
import HomePage from './pages/HomePage'
import SignInPage from './pages/SignInPage'
import ComponentLibrary from './pages/ComponentLibrary'
import Projects from './pages/ProjectsPage'
import Project from './pages/ProjectPage'
import CreateBooking from'./pages/CreateBooking'
import Bookings from'./pages/BookingsPage'
import Assets from './pages/AssetsPage'
import Job from './pages/JobPage'
import Task from './pages/TaskPage'
import Contacts from './pages/ContactsPage'
import SignIn from './pages/SignIn'

import * as authAPI from './api/auth'
import * as projectsAPI from './api/projects'
import * as bookingsAPI from './api/bookings'
import * as jobsAPI from './api/jobs'
import * as tasksAPI from './api/tasks'
import { setApiToken } from './api/init'

import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
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
    drawerOpen: null,
    drawerData: null,
    projects: null,
    singleProject: null,
    mapData: null,
    singleJob: null,
    singleTask: null,
    bookings: null
  }

  loadPromises = {}

  loadUsing({
    makePromise,
    stateKey,
    reload = false
  }) {
    // If we have already loaded and we are not being asked to reload, then bail
    if (!!this.loadPromises[stateKey] && !reload) {
      return
    }

    // Load from API
    this.loadPromises[stateKey] = makePromise()
      // Our then will be called in the future
      .then(data => {
        // Update state with projects
        this.setState({ [stateKey]: data })
      })
      .catch(error => {
        this.setState({ error })
      })
  }

  loadProjects({ reload = false } = {}) {
    return this.loadUsing({
      makePromise: projectsAPI.list,
      stateKey: 'projects',
      reload
    })
  }

  loadSingleProject({ reload = false, id } = {}) {
    return this.loadUsing({
      makePromise: () => projectsAPI.listSingle(id),
      stateKey: 'singleProject',
      reload
    })
  }

  loadSingleJob({ reload = false, id } = {}) {
    return this.loadUsing({
      makePromise: () => jobsAPI.listSingle(id),
      stateKey: 'singleJob',
      reload
    })
  }

  loadSingleTask({ reload = false, id } = {}) {
    return this.loadUsing({
      makePromise: () => tasksAPI.listSingle(id),
      stateKey: 'singleTask',
      reload
    })
  }

  loadBookings({ reload = false } = {}) {
    return this.loadUsing({
      makePromise: bookingsAPI.list,
      stateKey: 'bookings',
      reload
    })
  }


  /* loadProjects({ reload = false } = {}) {
    // If we have already loaded and we are not being asked to reload, then bail
    if (!!loadPromises.listProjects && !reload) {
      return
    }

    // Load from API
    loadPromises.listProjects = projectsAPI.list()
      // Our then will be called in the future
      .then(projects => {
        // Update state with projects
        this.setState({ projects })
      })
  } */

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

  // handleCreateProject = ({ email, password }) => {
  //   projectsAPI.create({ email, password })
  //     .then(json => {
  //       this.setToken(json.token)
  //       this.loadProjects({ reload: true })
  //     })
  //     .catch(error => {
  //       this.setState({ error })
  //     })
  // }

  render() {
    const { error, token, createAccount=false,drawerOpen } = this.state
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
            <Route exact path='/assets' component={ Assets } />
            <Route exact path='/contacts' component={ Contacts } />
            <Route exact path='/createbooking' component={ CreateBooking } />
            <Route exact path='/signin' component={ SignIn } />

              <Route path='/componentlibrary' render={ () => (
                <ComponentLibrary
                  setDrawerOpen={this.setDrawerOpen}
                  setDrawerData={this.setDrawerData}
                  />
              ) } />
            <Route exact path='/projects' render={() =>{
                this.loadProjects()

                // console.log(projectsAPI.list().then())
                return <Projects projects={ this.state.projects } />} } />
              <Route exact path='/bookings' render={() =>{
                  this.loadBookings()
                  return <Bookings bookings={ this.state.bookings } />} } />
            <Route path='/signin' render={
              () => (
                <SignInPage token={ token } createAccount={ createAccount } toggleCreateAccount={ this.toggleCreateAccount } onSignIn={ this.handleSignIn } onCreateAccount={ this.handleCreateAccount} />
              )
            } />
          <Route path='/projects/:id' render={
              ({ match }) => {
                  const id = match.params.id
                  this.loadSingleProject({id: id})
    							return (
                    <Project data={this.state.singleProject } />
    							)
    						}
            } />
          <Route path='/jobs/:id' render={
              ({ match }) => {
                  const id = match.params.id
                  this.loadSingleJob({id: id})
    							return (
                    <Job data={this.state.singleJob } />
    							)
    						}
            } />
          <Route path='/tasks/:id' render={
              ({ match }) => {
                  const id = match.params.id
                  this.loadSingleTask({id: id})
                  !!this.state.singleTask ? this.state.singleTask : ''
    							return (
                    <Task data={ this.state.singleTask } />
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
}

export default App
