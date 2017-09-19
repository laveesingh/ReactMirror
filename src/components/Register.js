import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import MotiveCard from './MotiveCard';
import SignupForm from './SignupForm';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles'


const styles = theme => ({
  motiveCard: {
    height: "100%",
    width: "35%",
  },
  signupForm: {
    height: "100%",
    width: "35%",
  }
});

class Register extends React.Component{
  constructor(props){
    super(props);
    // maintain states below here
    this.state = {};
  }

  componentDidMount(){} // is invoked right after component is rendered

  render(){
    const classes = this.props.classes;
    return (
      <Grid container >
        <Grid item xs={12}>
          <Grid container justify="center">
            <Grid item key={"0"} className={classes.motiveCard}>
              <MotiveCard />
            </Grid>
            <Grid item key={"1"}  className={classes.motiveCard}>
              <SignupForm />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Register);
