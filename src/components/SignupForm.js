import React from 'react'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import {FacebookLoginButton, GoogleLoginButton, TwitterLoginButton} from 'react-social-login-buttons'

export default class SignupForm extends React.Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleGoogleClick = this.handleGoogleClick.bind(this)
    this.handleFacebookClick = this.handleFacebookClick.bind(this)
    this.handleTwitterClick = this.handleTwitterClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      username: '',
      email: '',
      password: ''
    }
  }

  componentDidMount () {} // is invoked right after component is rendered

  handleChange (event) {
    // handle changes in signup form fields
    switch (event.target.id) {
      case 'username': this.setState({ username: event.target.value }); break
      case 'email': this.setState({ email: event.target.value }); break
      default: this.setState({ password: event.target.value })
    }
  }

  handleSubmit (event) {
    /* Steps to write handleSubmit
     * First import signup endpoint from utils/configs.js
     * record all data from state and send a post reqeust
     */
  }

  handleGoogleClick (event) {
    /*
     * This function handles login via google+
     */
  }

  handleFacebookClick (event) {
    /*
     * This function handles login via facebook
     */
  }

  handleTwitterClick (event) {
    /*
     * This function handles login via twitter
     */
  }

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
                  value={this.state.username}
                  onChange={this.handleChange}
                  margin='normal'
                  autoFocus
                  />
                <br />
                <TextField
                  id='email'
                  label='Email'
                  value={this.state.email}
                  onChange={this.handleChange}
                  margin='normal'
                  />
                <br />
                <TextField
                  type='password'
                  id='password'
                  label='Password'
                  value={this.state.password}
                  onChange={this.handleChange}
                  margin='normal'
                  />
                <br />
                <Button raised color='primary' onClick={this.handleSubmit}>
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
