import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

export default class VideoChatWindow extends Component {
  render () {
    return (
      <div style={{}}>
      <Card>
      <CardMedia>
      <video controls width="100%" height="100%"></video>   
        
      </CardMedia>       
  
       
      </Card>
      </div>
    );
  }
}