/*
 * Components: Navbar(default)
 * States: None required, props will do.
 * Props: props include (but not limited to) four elements that are shown in appbar i.e., brand-logo, search-box, avatar etc.
 * Actions: Currently no action is involved, every action is handled by its own individual component.
 */

import React from 'react'
import AppBar from 'material-ui/AppBar'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import Toolbar from 'material-ui/Toolbar'

const styles = theme => ({
  appBar: {
    position: 'static',
    marginTop: '-10px',
    marginBottom: '10px',
  }
})

class Navbar extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const classes = this.props.classes
    return (
      <AppBar className={classes.appBar} color='default'>
        <Toolbar>
          { this.props.leftMostChild }
          { this.props.leftChild }
          { this.props.rightChild }
          { this.props.rightMostChild }
        </Toolbar>
      </AppBar>
    )
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Navbar)
