import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import SignaturePad from 'react-signature-pad';
import './code-board.css';

export default class CodeBoard extends Component {

  constructor(props) {
    super(props);
   
  }

  onBegin(data) {
    console.log(this.refs.mySignature.toDataURL());
  }

  onEnd()  {
    console.log(this.refs.mySignature.toDataURL()); 
  }

  componentDidMount() {
    var signature = this.refs.mySignature;
    
    // console.log(signature);
    // signature.on('onBegin', (data) => {
    //   console.log(data);
    // });
    // signature.onBegin((data)=>{
    //   console.log(data);
    // });
  }
  onWriteing() {
    return "hi";
  }


  render() {
    return (
      <div className="full">
        <Card>
          <SignaturePad clearButton="true" ref="mySignature" onBegin={this.onBegin.bind(this)} onEnd={this.onEnd.bind(this)}></SignaturePad>
        </Card>
      </div>
    );
  }

}