/*
* Component Name: routes
* Usage: Temporarily provide routing of urls
* States: [No states required]
* Dispatchable Actions: [no actions required]
*/

import React from 'react'
import { Link } from 'react-router-dom'
//import styles from '../css/TestHome.css'
import '../css/TestHome.css'

export class routes extends React.Component{
  render(){
    return (
      <div className="root" >
        <h3>Followings are the components that have been made so far!</h3>
        <div className="rootlink" > <Link to="/demo/signup" >Signup Form</Link> </div>
        <div className="rootlink" > <Link to='/demo/motivecard'  >MotiveCard</Link> </div>
        <div className="rootlink" > <Link to='/demo/register'  >Register</Link> </div>
        <div className="rootlink" > <Link to='/login'  >Login</Link> </div>
        <div className="rootlink" > <Link to='/demo/navbar1'  >Navbar1</Link> </div>
        <div className="rootlink" > <Link to='/home'  >Home</Link> </div>
        <div className="rootlink" > <Link to='/profile' >Profile</Link></div>
      </div>
    )
  }
}
