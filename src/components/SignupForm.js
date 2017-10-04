/*
 * Component Name: SignupForm
 * Usage: inclusion into register screen
 * States: [ username, password, email ]
 * Dispatchable Actions: [ handleFormChange, handleFormSubmit,
 *                         handleGoogleClick, handleFacebookClick,
 *                         handleTwitterClick ]
*/ 

import React from 'react'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import { connect } from 'react-redux'
import {
  FacebookLoginButton,
  GoogleLoginButton,
  TwitterLoginButton
} from 'react-social-login-buttons'
import { 
  signupUsernameChange,
  signupPasswordChange,
  signupEmailChange,
  signupHandleFormSubmit,
  handleGoogleClick,
  handleFacebookClick,
  handleTwitterClick
} from '../actions/signup'

class SignupForm extends React.Component {

  render () {
    const styles = {
      signupForm: {
        padding: '5%'
      }
    }
    return (
      <Paper style={styles.signupForm}>
        <Grid container>
          <Grid item xs={12} >
            <Grid container justify='center'>
              <form noValidate autoComplete='off' >
                <TextField
                  id='username'
                  label='Username'
                  value={this.props.username}
                  onChange={this.props.handleUsernameChange}
                  margin='normal'
                  autoFocus
                  />
                <br />
                <TextField
                  id='email'
                  label='Email'
                  value={this.props.email}
                  onChange={this.props.handleEmailChange}
                  margin='normal'
                  />
                <br />
                <TextField
                  type='password'
                  id='password'
                  label='Password'
                  value={this.props.password}
                  onChange={this.props.handlePasswordChange}
                  margin='normal'
                  />
                <br />
                <Button raised color='primary' onClick={this.props.handleFormSubmit}>
                  Submit
                </Button>
                <span >Or continue with</span>
              </form>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justify='center'>
              <GoogleLoginButton style={{width: '35px', display: 'inline-block'}} onClick={this.handleGoogleClick} />
              <FacebookLoginButton style={{width: '35px', display: 'inline-block'}} onClick={this.handleFacebookClick} />
              <TwitterLoginButton style={{width: '35px', display: 'inline-block'}} onClick={this.handleTwitterClick} />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.signupUsernameChange.username,
    password: state.signupPasswordChange.password,
    email: state.signupEmailChange.email
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleUsernameChange: (event) => dispatch(signupUsernameChange(event.target.value)),
    handlePasswordChange: (event) => dispatch(signupPasswordChange(event.target.value)),
    handleEmailChange: (event) => dispatch(signupEmailChange(event.target.value)),
    handleFormSubmit: (event) => dispatch(signupHandleFormSubmit(event)),
    handleGoogleClick: (event) => dispatch(handleGoogleClick(event)),
    handleFacebookClick: (event) => dispatch(handleFacebookClick(event)),
    handleTwitterClick: (event) => dispatch(handleTwitterClick(event))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)
