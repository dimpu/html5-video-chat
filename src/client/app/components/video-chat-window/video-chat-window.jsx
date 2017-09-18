import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Video from 'twilio-video';
import './video-chat-window.css';

let $TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTS2JjNzgwY2MyMWM5ODMyYTI4MmNiY2VkOWUzNGEwNjE5LTE1MDU1MTUwNDciLCJpc3MiOiJTS2JjNzgwY2MyMWM5ODMyYTI4MmNiY2VkOWUzNGEwNjE5Iiwic3ViIjoiQUNlYjA0OWRiY2E2YWFlOGNjZDg0MDYzOWRkNzQxNWQ2NCIsImV4cCI6MTUwNTUxODY0NywiZ3JhbnRzIjp7ImlkZW50aXR5IjoiYnVkZGhhYXJhdmluZEBnbWFpbC5jb20iLCJ2aWRlbyI6eyJyb29tIjoicm9vbS1uYW1lIn19fQ.D_ELD0CllKLXz7Jnm-sPQlN-3CxHUxynWLx9WLKSqFI';

export default class VideoChatWindow extends Component {

  constructor(props) {
    super(props);

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // Not adding `{ audio: true }` since we only want video now
      navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        this.refs.vidRef.src = window.URL.createObjectURL(stream);
        this.refs.vidRef.play();
      });
    }

    fetch('/api/token')
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.twilioConnect(res.token);
      });
  }

  twilioConnect($TOKEN) {
    console.log('totken');
    console.log($TOKEN);
    Video.connect($TOKEN, { name: 'room1' }).then(room => {
      console.log('Connected to Room "%s"', room.name);
      // console.log(room.participants);
      // applyVideoInputDeviceSelection('sadsdf',this.refs.vidRef.value);


      room.on('participantConnected',  (participant) => {
        console.log('A remote Participant connected: ', participant);
        participant.on('trackAdded', track => {
          // console.log(track);
          // this.refs.vidRef.src = window.URL.createObjectURL(track.videoTracks);
          // this.refs.vidRef.appendChild(track.attach());
          participant.tracks.forEach((track) => {
            console.log(track);
            // this.refs.vidRef.appendChild(track.attach());
            document.body.appendChild(track.attach())
          });
        });
      })
      this.refs.vidRef.play();
    });

  }


  render() {
    return (
      <div className="full">
        <Card>
          <video ref="vidRef" width="100%" height="100%">
            {/* <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" /> */}
          </video>
        </Card>
      </div>
    );
  }

}

function applyVideoInputDeviceSelection(deviceId, video) {
  return Video.createLocalVideoTrack({
    deviceId: deviceId,
    height: 240,
    width: 320
  }).then(function (localTrack) {
    localTrack.attach(video);
  });
}

function participantConnected(participant) {
  console.log('Participant "%s" connected', participant.identity);

  const div = document.createElement('div');
  div.id = participant.sid;
  div.innerText = participant.identity;

  participant.on('trackAdded', track => trackAdded(div, track));
  participant.tracks.forEach(track => trackAdded(div, track));
  participant.on('trackRemoved', trackRemoved);

  document.body.appendChild(div);
}

function participantDisconnected(participant) {
  console.log('Participant "%s" disconnected', participant.identity);

  participant.tracks.forEach(trackRemoved);
  document.getElementById(participant.sid).remove();
}

function trackAdded(div, track) {

  console.log(track.attach());
  div.appendChild(track.attach());
}

function trackRemoved(track) {
  track.detach().forEach(element => element.remove());
}



// const Video = require('twilio-video');





// Video.connect($TOKEN, { name: 'room-name' }).then(room => {
//   console.log('Connected to Room "%s"', room.name);

//   room.participants.forEach(participantConnected);
//   room.on('participantConnected', participantConnected);

// //   // room.on('participantDisconnected', participantDisconnected);
// //   // room.once('disconnected', error => room.participants.forEach(participantDisconnected));
// });

// function participantConnected(participant) {
//   console.log('Participant "%s" connected', participant.identity);

//   const div = document.createElement('div');
//   div.id = participant.sid;
//   div.innerText = participant.identity;

//   participant.on('trackAdded', track => trackAdded(div, track));
//   participant.tracks.forEach(track => trackAdded(div, track));
//   participant.on('trackRemoved', trackRemoved);

//   document.body.appendChild(div);
// }