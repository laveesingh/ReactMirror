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
import SignupForm from './components/SignupForm'
import MotiveCard from './components/MotiveCard'
import Register from './components/Register'
import Login from './components/Login'
import Navbar1 from './components/Navbar1'
import Home from './components/Home'

import { routes } from './components/TestHome'

class App extends React.Component {
  render () {
    return (
      <MuiThemeProvider>
        <BrowserRouter history={hashHistory}>
          <Switch>
            <Route exact path='/' component={routes} />
            <Route path='/home' component={Home} />
            <Route path='/demo/signup' component={SignupForm} />
            <Route path='/demo/motivecard' component={MotiveCard} />
            <Route path='/demo/register' component={Register} />
            <Route path='/demo/login' component={Login} />
            <Route path='/demo/navbar1' component={Navbar1} />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    )
  }
}

export default App
