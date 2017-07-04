import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import './App.css'
import PrimaryNav from './components/PrimaryNav'
import ErrorMessage from './components/ErrorMessage'
import HomePage from './pages/HomePage'
import SignInPage from './pages/SignInPage'
import * as authAPI from './api/auth'
import { setApiToken} from './api/init'

const tokenKey = 'userToken'
const savedToken = localStorage.getItem(tokenKey)
setApiToken(savedToken)

class App extends Component {
  // Initial state
  state = {
    error: null,
    token: savedToken,
    createAccount: false
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
    const { error, token, createAccount=false } = this.state
    return (
      <Router>
        <main>
          <PrimaryNav isSignedIn={!!token} onSignOut={ this.handleSignOut } />
          { !!error && <ErrorMessage error={error}/> }

          <Switch>
            <Route exact path='/' component={ HomePage } />
            <Route path='/signin' render={
              () => (
                <SignInPage token={ token } createAccount={ createAccount } toggleCreateAccount={ this.toggleCreateAccount } onSignIn={ this.handleSignIn } onCreateAccount={ this.handleCreateAccount} />
              )
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
    // Asychronous

  }
}

export default App
