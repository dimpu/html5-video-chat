import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import SignaturePad from 'react-signature-pad';
import './code-board.css';

export default class CodeBoard extends Component {
  render () {
    return (
      <div className="full">
      <Card>
        <SignaturePad clearButton="true" ref="mySignature"></SignaturePad>
      </Card>
      </div>
    );
  }
}