/*
* Component Name: GetStarted
* Usage: Defines a motive-card that's used in homepage
* States: [No current states]
* Dispatchable Actions: [No current states]
*/

import React from 'react'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'

export function getStartedMotive(props){
  return (
    <Grid container>
      <Grid item lg={3} md={1} sm={0}> </Grid>
      <Grid item lg={6} md={10} sm={12}> 
        <Typography component="h1">
          Best place to hangout with friends
        </Typography>
        <Typography type="body1" component="p">
          Create a lobby to watch videos ranging from live-streams to dead hoofers and shitty-click baits to favorite web-series with a community friends a family.
        </Typography>
        <Button raised color="accent">
          Get Started
        </Button>
      </Grid>
      <Grid item lg={3} md={1} sm={0}> </Grid>
    </Grid>
  )
}
