import React from 'react'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import { connect } from 'react-redux'

import { 
  loginHandleFormChange,
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
                  onChange={this.props.handleFormChange}
                  margin='normal'
                  autoFocus
                  />
                <br />
                <TextField
                  type='password'
                  id='password'
                  label='Password'
                  value={this.props.password}
                  onChange={this.props.handleFormChange}
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
    handleFormChange: (event) => dispatch(loginHandleFormChange(event)),
    handleFormSubmit: (event) => dispatch(loginHandleFormSubmit(event)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
