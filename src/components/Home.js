/*
* Component Name: Home
* Usage: Represents the home screen
* States: [Currently no states required]
* Dispatchable Actions: [Currently no actions required]
*/

import React from 'react'
import {connect} from 'react-redux'
import Grid from 'material-ui/Grid'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Navbar1 from './Navbar1'
import { footer } from './utils/Footer'
import { lobbyStreamCard, cardsList } from './utils/StreamCard'
import { getStartedMotive } from './utils/GetStarted'

class Home extends React.Component {

  constructor(props){
    super(props)
  }

  componentDidMount(){

  }

  render() {

    const styles = {
      page: {},
      leftBar: {
        background: "#f4f4f4"
      },
      lobby: {
      },
      getStarted: {
        background: "#d8d8d8"
      },
      footer: {
        background: "#c8c8c8"
      }
    }
    return (
      <Grid id="page" container style={ styles.page }>
        <Grid id="navbar" item lg={12} md={12} sm={12}>
          <Navbar1 />
        </Grid>
        <Grid id="page-content" item lg={12} md={12} sm={12}>
          <Grid container spacing={24}>
            <Grid id="leftbar" item lg={2} md={2} sm={2} style={ styles.leftBar }>
              <List >
                <ListItem button>
                  <ListItemText primary="Popular" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Live" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Sports" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Events" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Your Subscriptions" />
                </ListItem>
              </List>
            </Grid>
            <Grid id='lobby' item lg={10} md={10} sm={10} style={ styles.lobby }>
              <Grid container>
                <Grid id='get-started' item lg={12} md={12} sm={12} style={ styles.getStarted }>
                  { getStartedMotive() }
                </Grid>
                <Grid id='lobby-content' item lg={12} md={12} sm={12}>
                  <Grid container>
                    { 
                      cardsList.map((cardProps) => (
                          <Grid item lg={3} md={4} sm={6}>
                            { lobbyStreamCard(cardProps) }
                          </Grid>
                        )
                      ) 
                    }
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid id="footer" item lg={12} md={12} sm={12} style={styles.footer}>
          { footer() }
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
     currentState: state. currentState,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
     actionHandler: (event) => dispatch( componentActionHandler(event)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

