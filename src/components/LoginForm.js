import React from 'react'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import { connect } from 'react-redux'

import { 
  loginUsernameChange,
  loginPasswordChange,
  loginHandleFormSubmit,
} from '../actions/login'

class LoginForm extends React.Component {

  render () {
    const styles = {
      loginForm: {
        padding: '5%'
      }
    }

    return (
      <Paper style={styles.loginForm}>
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
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.username,
    password: state.password,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleUsernameChange: (event) => dispatch(loginUsernameChange(event.target.value)),
    handlePasswordChange: (event) => dispatch(loginPasswordChange(event.target.value)),
    handleFormSubmit: (event) => dispatch(loginHandleFormSubmit(event)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
