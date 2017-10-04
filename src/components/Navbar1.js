import React from 'react'
import {connect} from 'react-redux'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import { Link } from 'react-router-dom'

import { navKeywordChange } from '../actions/navbar1'

class Navbar1 extends React.Component {

  constructor(props){
    super(props)
  }

  componentDidMount(){

  }

  render() {
    return (
      <AppBar position="static" color="default" style={{ padding: 5 }}>
        <Toolbar>
          <div id="logo-div" style={{ display: "inline", marginRight: 10 }}>
            <img src="/logos/vstv-logo-v2.0-dark-icon.png" style={{ height: 75, width: 100 }}/>
          </div>
          <div id="search-box" style={{ display: "inline", width: "50%", marginRight: 10 }}>
            <TextField label="search and watch videos with friends" 
              placeholder="enter your search terms" value={this.props.keyword}
              fullWidth={true}
            />
          </div>
          {
            this.props.isLogged 
              ? (<h3>Logged in</h3>)  // will be replaced with profile picture most probably
              : (
                <div id='login-button' style={{ display: 'inline', align: 'right' }}>
                  <Link to='/login'>
                    <Button raised color='primary'>
                      Login
                    </Button>
                  </Link>
                </div>
              )

          }
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

