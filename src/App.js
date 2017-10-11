/*
* Component Name: App
* Usage: Represents the entry point for our application, handles all the routes and renders components accordingly
* States: [No states required]
* Dispatchable Actions: [No actions required]
*/

import React from 'react'
import {
  BrowserRouter,
  hashHistory,
  Link,
  Route,
  Switch
} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { createMuiTheme } from 'material-ui/styles'
import { purple, green, red } from 'material-ui/colors'
import SignupForm from './components/SignupForm'
import MotiveCard from './components/MotiveCard'
import Register from './components/Register'
import Login from './components/Login'
import Navbar1 from './components/Navbar1'
import Home from './components/Home'
import Profile from './components/Profile'
import CoverCard from './components/utils/CoverCard'

import { routes } from './components/TestHome'

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: {
      ...green,
      A400: '#00e677'
    },
    error: red
  }
})

class App extends React.Component {
  render () {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter history={hashHistory}>
          <Switch>
            <Route exact path='/' component={routes} />
            <Route path='/home' component={Home} />
            <Route path='/demo/signup' component={SignupForm} />
            <Route path='/demo/motivecard' component={MotiveCard} />
            <Route path='/demo/register' component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/demo/navbar1' component={Navbar1} />
            <Route path='/profile' component={Profile} />
            <Route path='/cover' component={CoverCard} />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    )
  }
}

export default App
