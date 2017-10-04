import React from 'react'
import Card, { CardMedia, CardContent, CardActions} from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

export const cardsList = [
  { img_url: "http://img01.ibnlive.in/ibnlive/uploads/2013/04/foot-8-april-1.jpg", title: "Simple Stream", user: "Simple Stream User", viewers: "33k", followers: "50k" },
  { img_url: "http://img01.ibnlive.in/ibnlive/uploads/2013/04/foot-8-april-1.jpg", title: "Simple Stream", user: "Simple Stream User", viewers: "33k", followers: "50k" },
  { img_url: "http://img01.ibnlive.in/ibnlive/uploads/2013/04/foot-8-april-1.jpg", title: "Simple Stream", user: "Simple Stream User", viewers: "33k", followers: "50k" },
  { img_url: "http://img01.ibnlive.in/ibnlive/uploads/2013/04/foot-8-april-1.jpg", title: "Simple Stream", user: "Simple Stream User", viewers: "33k", followers: "50k" },
  { img_url: "http://img01.ibnlive.in/ibnlive/uploads/2013/04/foot-8-april-1.jpg", title: "Simple Stream", user: "Simple Stream User", viewers: "33k", followers: "50k" },
  { img_url: "http://img01.ibnlive.in/ibnlive/uploads/2013/04/foot-8-april-1.jpg", title: "Simple Stream", user: "Simple Stream User", viewers: "33k", followers: "50k" },
  { img_url: "http://img01.ibnlive.in/ibnlive/uploads/2013/04/foot-8-april-1.jpg", title: "Simple Stream", user: "Simple Stream User", viewers: "33k", followers: "50k" },
  { img_url: "http://img01.ibnlive.in/ibnlive/uploads/2013/04/foot-8-april-1.jpg", title: "Simple Stream", user: "Simple Stream User", viewers: "33k", followers: "50k" },
  { img_url: "http://img01.ibnlive.in/ibnlive/uploads/2013/04/foot-8-april-1.jpg", title: "Simple Stream", user: "Simple Stream User", viewers: "33k", followers: "50k" },
  { img_url: "http://img01.ibnlive.in/ibnlive/uploads/2013/04/foot-8-april-1.jpg", title: "Simple Stream", user: "Simple Stream User", viewers: "33k", followers: "50k" },
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
