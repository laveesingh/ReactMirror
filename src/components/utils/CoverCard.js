import React from 'react'
import {connect} from 'react-redux'
import Grid from 'material-ui/Grid'
import Avatar from 'material-ui/Avatar'
import Card, { CardMedia, CardActions, CardContent } from 'material-ui/Card'
import '../../css/CoverCard.css'

class CoverCard extends React.Component {

  constructor(props){
    super(props)
  }

  componentDidMount(){

  }

  render() {
    return (
      <Grid container className="card-div">  
        <Grid item id='img-div'>
          <img src="https://static.pexels.com/photos/34950/pexels-photo.jpg" id="cover-img"/>
        </Grid>
        <Grid item id='cover-hover'>
          <Avatar alt="lavee" src="/media/img-lavee.jpg" sizess="200x100" className="cover-avatar" />
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

export default connect(mapStateToProps, mapDispatchToProps)(CoverCard)

