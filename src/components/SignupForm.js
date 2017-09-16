import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

export default class SignupForm extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  componentDidMount(){} // is invoked right after component is rendered

  handleChange(event){
    // handle changes in signup form fields
    switch(event.target.id){
        case "username": this.setState({ username: event.target.value }); break;
        case "email": this.setState({ email: event.target.value }); break;
        default: this.setState({ password: event.target.value });
    }
  }

  handleSubmit(event){
    /* Steps to write handleSubmit
     * First import signup endpoint from utils/configs.js
     * record all data from state and send a post reqeust
     */
  }

  render(){

    const styles = {
      signupForm: {
        padding: "5%",
      }
    };

    return (
      <Paper style={styles.signupForm}>
        <Grid container> 
          <Grid item xs={12} >
            <Grid container justify="center">
              <Grid item key={0} >
                <form noValidate autoComplete="off" >
                  <TextField 
                    id="username" 
                    label="Username" 
                    value={this.state.username} 
                    onChange={this.handleChange} 
                    margin="normal" 
                    autoFocus={true} 
                  />
                  <br />
                  <TextField 
                    id="email" 
                    label="Email" 
                    value={this.state.email} 
                    onChange={this.handleChange} 
                    margin="normal" 
                  />
                  <br />
                  <TextField 
                    type="password" 
                    id="password" 
                    label="Password" 
                    value={this.state.password} 
                    onChange={this.handleChange} 
                    margin="normal" 
                  />
                  <br />
                  <Button raised color="primary" onClick={this.handleSubmit}>
                    Submit
                  </Button>

                </form>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

