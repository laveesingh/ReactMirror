import React from 'react'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'

export function getStartedMotive(props){
  return (
    <Grid container>
      <Grid item md={3}> </Grid>
      <Grid item md={6}> 
        <Typography component="h1">
          Best place to hangout with friends
        </Typography>
        <Typography component="p">
          Create a lobby to watch videos ranging from live-streams to dead hoofers and shitty-click baits to favorite web-series with a community friends a family.
        </Typography>
        <Button raised color="accent">
          Get Started
        </Button>
      </Grid>
      <Grid item md={3}> </Grid>
    </Grid>
  )
}
