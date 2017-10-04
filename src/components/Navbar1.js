import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'

import { navKeywordChange } from '../actions/navbar1'

class Navbar1 extends React.Component {

  constructor(props){
    super(props)
  }

  componentDidMount(){

  }

  render() {
    const styles = {
      appBar: {
        padding: 5
      },
      logo: {
        height: 50,
        width: 70
      },
      login: {
        textDecoration: 'none'
      },
      searchBar: {
      }
    }
    return (
      <AppBar position="static" color="default" style={ styles.appBar }>
        <Toolbar>
          <Grid container spacing={24}>
            <Grid item md={4}>
              <img src="/logos/vstv-logo-v2.0-dark-icon.png" style={ styles.logo }/>
            </Grid>
            <Grid item md={6}>
              <TextField label="search and watch videos with friends" 
                placeholder="enter your search terms" value={this.props.keyword}
                fullWidth={true} style={ styles.searchBar } 
              />
            </Grid>
            <Grid item md={2}>
              { 
                this.props.isLogged 
                ? ( <h3>Logged In</h3> )
                : ( 
                  <Link to='/login' style={ styles.login }>
                    <Button raised color='primary'>
                      Login
                    </Button>
                  </Link>
                )
              }
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    keyword: state.keyword,
    isLogged: state.isLogged,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
     keywordChange: (event) => dispatch(navKeywordChange(event.target.value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar1)

