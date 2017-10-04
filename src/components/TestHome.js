import React from 'react'
import { Link } from 'react-router-dom'

export class routes extends React.Component{
  render(){
    return (
      <div style={{ margin: 20 }}>
        <h3>Followings are the components that have been made so far!</h3>
        <Link to="/demo/signup">Signup Form</Link> <br />
        <Link to='/demo/motivecard' >MotiveCard</Link> <br />
        <Link to='/demo/register' >Register</Link> <br />
        <Link to='/demo/login' >Login</Link> <br />
        <Link to='/demo/navbar1' >Navbar1</Link> <br />
      </div>
    )
  }
}
