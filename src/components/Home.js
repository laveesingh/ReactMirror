import React from 'react'
import {connect} from 'react-redux'
import Grid from 'material-ui/Grid'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Navbar1 from './Navbar1'
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
      }
    }
    return (
      <Grid id="page" container style={ styles.page }>
        <Grid id="navbar" item md={12}>
          <Navbar1 />
        </Grid>
        <Grid item md={12}>
          <Grid container spacing={24}>
            <Grid id="leftbar" item md={2} style={ styles.leftBar }>
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
            <Grid id='lobby' item md={10} style={ styles.lobby }>
              <Grid container>
                <Grid id='get-started' item md={12} style={ styles.getStarted }>
                  { getStartedMotive() }
                </Grid>
                <Grid id='lobby-content' item md={12}>
                  <Grid container>
                    { 
                      cardsList.map((cardProps) => (
                          <Grid item md={3}>
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

