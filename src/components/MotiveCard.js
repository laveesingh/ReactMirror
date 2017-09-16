import React from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import List, {ListItem, ListItemText, ListItemIcon} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import {DirectionsRun, Mood, VpnLock} from 'material-ui-icons';

export default class MotiveCard extends React.Component{

  render(){
    return (
      <Paper >
        <Grid container> 
          <Grid item xs={12}>
            <Grid container justify="center">
              <Grid item key={0}>
                <h3>Join the community of thriving streamers and broadcasters</h3>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} >
            <Grid container justify="center">
              <Grid item key={1} >
                <List>
                  <ListItem>
                    <Avatar>
                      <DirectionsRun />
                    </Avatar>
                    <ListItemText 
                      primary="Watch live sports, events and series with your friends and family"
                      secondary="cool" 
                    />
                  </ListItem>
                  <ListItem>
                    <Avatar>
                      <VpnLock />
                    </Avatar>
                    <ListItemText 
                      primary="Connect with your audience in a better way"
                      secondary="cool" 
                    />
                  </ListItem>
                  <ListItem>
                    <Avatar>
                      <Mood />
                    </Avatar>
                    <ListItemText 
                      primary="Making reaction videos is now easier and fun"
                      secondary="cool" 
                    />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}
