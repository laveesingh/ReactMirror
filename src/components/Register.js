import React from 'react'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import MotiveCard from './MotiveCard'
import SignupForm from './SignupForm'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Navbar from './Navbar'

const styles = theme => ({
  motiveCard: {
    height: '100%',
    width: '35%'
  },
  signupForm: {
    height: '100%',
    width: '35%'
  }
})

class Register extends React.Component {
  constructor (props) {
    super(props)
    // maintain states below here
    this.state = {
    }
  }

  componentDidMount () {
    //const logoUrl = require('../../public/logos/vstv-logo-v2.0-dark-withtitle.png')
    this.setState({
      appBarLeftMostChild: ( <img src='/logos/vstv-logo-v2.0-dark-withtitle.png' style={{ width: 100, height:40 }}/> )
    })
  }

  render () {
    const classes = this.props.classes
    return (
      <div>
        <Navbar leftMostChild={this.state.appBarLeftMostChild} />
        <Grid container >
          <Grid item xs={12}>
            <Grid container justify='center'>
              <Grid item key={'0'} className={classes.motiveCard}>
                <MotiveCard />
              </Grid>
              <Grid item key={'1'} className={classes.motiveCard}>
                <SignupForm />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Register)
