/*
 * Component Name: MotiveCard
 * Usage: Inclusion in register and login screen.
 * States: []
 * Dispatchable Actions: []
 */

import React from 'react'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import List, {ListItem, ListItemText, ListItemIcon} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import {DirectionsRun, Mood, VpnLock} from 'material-ui-icons'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Typography from 'material-ui/Typography'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    height: '100%'
  }
})

class MotiveCard extends React.Component {
  render () {
    const classes = this.props.classes
    return (
      <Paper className={classes.paper}>
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <Grid container justify='center'>
              <Typography type='headline' component='h3'>
                  Join the community of thriving streamers and broadcasters
                </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} >
            <Grid container justify='center'>
              <List>
                <ListItem>
                  <Avatar>
                    <DirectionsRun />
                  </Avatar>
                  <Typography type='body1' component='p'>
                      Watch live sports, events and series with your friends and family
                    </Typography>
                </ListItem>
                <ListItem>
                  <Avatar>
                    <VpnLock />
                  </Avatar>
                  <Typography type='body1' component='p'>
                      Connect with your audience in a better way
                    </Typography>
                </ListItem>
                <ListItem>
                  <Avatar>
                    <Mood />
                  </Avatar>
                  <Typography type='body1' component='p'>
                      Making reaction videos is now easier and fun
                    </Typography>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

MotiveCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(MotiveCard)
