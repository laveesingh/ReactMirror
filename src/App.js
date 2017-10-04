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

import { routes } from './components/TestHome'

class App extends React.Component {
  render () {
    return (
      <MuiThemeProvider>
        <BrowserRouter history={hashHistory}>
          <Switch>
            <Route exact path='/' component={routes} />
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
