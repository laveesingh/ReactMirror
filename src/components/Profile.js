/*
* Component Name: Profile
* Usage: Represents the user profile screen
* States: [Currently no states required]
* Dispatchable Actions: [Currently no actions required]
*/

import React from 'react'
import {connect} from 'react-redux'
import Grid from 'material-ui/Grid'
import Divider from 'material-ui/Divider'
import Typography from 'material-ui/Typography'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Tabs, { Tab } from 'material-ui/Tabs'
import Navbar1 from './Navbar1'
import { footer } from './utils/Footer'
import { lobbyStreamCard, cardsList } from './utils/StreamCard'
import { getStartedMotive } from './utils/GetStarted'

class Profile extends React.Component {

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
      cover: {
        background: "#d8d8d8"
      },
      footer: {
        background: "#c8c8c8"
      },
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
                <Divider light />
                <ListItem button>
                  <ListItemText primary="Live" />
                </ListItem>
                <Divider light />
                <ListItem button>
                  <ListItemText primary="Sports" />
                </ListItem>
                <Divider light />
                <ListItem button>
                  <ListItemText primary="Events" />
                </ListItem>
                <Divider light />
                <ListItem button>
                  <ListItemText primary="Your Subscriptions" />
                </ListItem>
              </List>
            </Grid>
            <Grid id='lobby' item lg={10} md={10} sm={10} style={ styles.lobby }>
              <Grid container>
                <Grid id='cover' item lg={12} md={12} sm={12} style={ styles.cover }>

                THis is for the cover photo<br />
                THis is for the cover photo<br />
                THis is for the cover photo<br />
                THis is for the cover photo<br />

                </Grid>
                <Grid id='stream-following' item lg={12} md={12} sm={12}>
                  <Tabs value={0} onChange={() => console.log("Stream/following tab clicked")} >
                    <Tab label="Streams" /> 
                    <Tab label="Following" /> 
                  </Tabs>
                </Grid>
                <Grid id='lobby-featured' item lg={12} md={12} sm={12}>
                  <Grid container>
                    <Grid item lg={12} md={12} sm={12}>
                      <Typography type="headline" component="h1">
                        Featured Lobbies
                      </Typography>
                    </Grid>
                    { 
                      cardsList.filter(function(card){
                        return card.streamType === "featured"
                      }).map((cardProps) => (
                          <Grid item lg={3} md={4} sm={6} key={cardProps.id}>
                            { lobbyStreamCard(cardProps) }
                          </Grid>
                        )
                      ) 
                    }

                  </Grid>
                </Grid>
                <Grid id='lobby-sports' item lg={12} md={12} sm={12}>
                  <Grid container>
                    <Grid item lg={12} md={12} sm={12}>
                      <Typography type="headline" component="h1">
                        Sports
                      </Typography>
                    </Grid>
                    { 
                      cardsList.filter(function(card){
                        return card.streamType === "sports"
                      }).map((cardProps) => (
                          <Grid item lg={3} md={4} sm={6} key={cardProps.id}>
                            { lobbyStreamCard(cardProps) }
                          </Grid>
                        )
                      ) 
                    }
                  </Grid>
                </Grid>
                <Grid id='lobby-events' item lg={12} md={12} sm={12}>
                  <Grid container>
                    <Grid item lg={12} md={12} sm={12}>
                      <Typography type="headline" component="h1">
                        Events
                      </Typography>
                    </Grid>
                    { 
                      cardsList.filter(function(card){
                        return card.streamType === "events"
                      }).map((cardProps) => (
                          <Grid item lg={3} md={4} sm={6} key={cardProps.id}>
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
     currentState: state.currentState,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
     actionHandler: (event) => dispatch( componentActionHandler(event)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)

