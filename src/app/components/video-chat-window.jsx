import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import './video-chat-window.css';

export default class VideoChatWindow extends Component {
  render () {
    return (
      <div className="full">
        <Card>
            <video controls width="100%" height="100%">
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            </video>   
        </Card>
      </div>
    );
  }
}