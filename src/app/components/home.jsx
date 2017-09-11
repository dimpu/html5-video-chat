import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import SplitPane from 'react-split-pane';

import './home.css';
import Footer from './common/footer.jsx';
import VideoChatWindow from './video-chat-window.jsx';
import CodeBoard from './code-board.jsx';
import ChatBubble from './chat-bubble/ChatBubble.jsx';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
    this.state.messages =
    [{
          "type" : 0,
          "image": "https://randomuser.me/api/portraits/men/60.jpg",
          "text": "Hello! Good Morning!"
      }, {
          "type": 1,
          "image": "https://randomuser.me/api/portraits/women/65.jpg",
          "text": "Hello! Good Afternoon!"
      }];
  }
  getHeight() {
    
  }
  render () {
    return (
      <div style={{height:"100%"}}>
      <AppBar
      title="Lets Talk Code"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
    <div className="canvas">
    <SplitPane split="vertical" minSize={50} defaultSize={800}>
        <SplitPane split="horizontal" className="sub"  defaultSize={100}>
            <VideoChatWindow></VideoChatWindow>
            <ChatBubble messages = {this.state.messages} />
        </SplitPane>
        
        <CodeBoard></CodeBoard>
    </SplitPane>

      <Footer></Footer>
    </div>
    </div>
    );
  }
}