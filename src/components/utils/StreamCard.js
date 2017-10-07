/*
* Component Name: Stream Cards
* Usage: This component is not directly usable as any screen, but it defines several kinds of elements like lobbyStreamCard that are reused in HomePage.
* States: [Currently no states required]
* Dispatchable Actions: [Currently no actions required]
*/

import React from 'react'
import Card, { CardMedia, CardContent, CardActions} from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

16
export const cardsList = [
  { id: "1", img_url: "http://img01.ibnlive.in/ibnlive/uploads/2013/04/foot-8-april-1.jpg", title: "Sports Stream", user: "Simple Stream User", viewers: "33k", followers: "50k", streamType: "sports"},
  { id: "2", img_url: "http://img01.ibnlive.in/ibnlive/uploads/2013/04/foot-8-april-1.jpg", title: "Sports Stream", user: "Simple Stream User", viewers: "33k", followers: "50k", streamType: "sports"},
  { id: "3", img_url: "http://img01.ibnlive.in/ibnlive/uploads/2013/04/foot-8-april-1.jpg", title: "Simple Stream", user: "Simple Stream User", viewers: "33k", followers: "50k", streamType: "events"},
  { id: "4", img_url: "http://img01.ibnlive.in/ibnlive/uploads/2013/04/foot-8-april-1.jpg", title: "Sports Stream", user: "Simple Stream User", viewers: "33k", followers: "50k", streamType: "sports"},
  { id: "5", img_url: "http://img01.ibnlive.in/ibnlive/uploads/2013/04/foot-8-april-1.jpg", title: "Sports Stream", user: "Simple Stream User", viewers: "33k", followers: "50k", streamType: "sports"},
  { id: "6", img_url: "http://img01.ibnlive.in/ibnlive/uploads/2013/04/foot-8-april-1.jpg", title: "Simple Stream", user: "Simple Stream User", viewers: "33k", followers: "50k", streamType: "events"},
  { id: "7", img_url: "http://img01.ibnlive.in/ibnlive/uploads/2013/04/foot-8-april-1.jpg", title: "Simple Stream", user: "Simple Stream User", viewers: "33k", followers: "50k", streamType: "events"},
  { id: "8", img_url: "http://img01.ibnlive.in/ibnlive/uploads/2013/04/foot-8-april-1.jpg", title: "Sports Stream", user: "Simple Stream User", viewers: "33k", followers: "50k", streamType: "sports"},
  { id: "9", img_url: "http://img01.ibnlive.in/ibnlive/uploads/2013/04/foot-8-april-1.jpg", title: "Simple Stream", user: "Simple Stream User", viewers: "33k", followers: "50k", streamType: "events"},
  { id: "10", img_url: "http://img01.ibnlive.in/ibnlive/uploads/2013/04/foot-8-april-1.jpg", title: "Simple Stream", user: "Simple Stream User", viewers: "33k", followers: "50k", streamType: "events"},
  { id: "11", img_url: "http://img01.ibnlive.in/ibnlive/uploads/2013/04/foot-8-april-1.jpg", title: "Sports Stream", user: "Simple Stream User", viewers: "33k", followers: "50k", streamType: "sports"},
  { id: "12", img_url: "http://img01.ibnlive.in/ibnlive/uploads/2013/04/foot-8-april-1.jpg", title: "Simple Stream", user: "Simple Stream User", viewers: "33k", followers: "50k", streamType: "events"},
  { id: "13", img_url: "http://img01.ibnlive.in/ibnlive/uploads/2013/04/foot-8-april-1.jpg", title: "Featured Stream", user: "Featurd Stream User", viewers: "33k", followers: "50k", streamType: "featured"},
  { id: "14", img_url: "http://img01.ibnlive.in/ibnlive/uploads/2013/04/foot-8-april-1.jpg", title: "Featured Stream", user: "Featurd Stream User", viewers: "33k", followers: "50k", streamType: "featured"},
  { id: "15", img_url: "http://img01.ibnlive.in/ibnlive/uploads/2013/04/foot-8-april-1.jpg", title: "Featured Stream", user: "Featurd Stream User", viewers: "33k", followers: "50k", streamType: "featured"},
]


export function lobbyStreamCard(props){
  return (
    <Card>
      <CardMedia title="Image Title">
        <img src="http://img01.ibnlive.in/ibnlive/uploads/2013/04/foot-8-april-1.jpg" style={{ width: "100%", height: "100%" }}/>
      </CardMedia>
      <CardContent>
        <Typography type="headline" component="h2">
          { props.title }
        </Typography>
        <Typography component="h3">
          { props.user }
        </Typography>
      </CardContent>
      <CardActions>
        <Button dense color="primary">
          { props.viewers + " viewers now " }
        </Button>
        <Button dense color="primary">
          { props.followers + " followers " }
        </Button>
      </CardActions>
    </Card>
  )

}

export function simpleStreamCard(props){
  return
}
