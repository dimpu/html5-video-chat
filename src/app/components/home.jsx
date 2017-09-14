import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import SplitPane from 'react-split-pane';
import Tab from 'material-ui/Tabs/Tab';
import Tabs from 'material-ui/Tabs/Tabs';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

// other coponents
import Footer from './common/footer.jsx';
import VideoChatWindow from './video-chat-window.jsx';
import CodeBoard from './code-board.jsx';
import ChatBubble from './chat-bubble/ChatBubble.jsx';
import CodeIde from './code-ide/code-ide.jsx';

// this component css
import './home.css';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      open: false
    };
    this.state.messages =
      [{
        "type": 0,
        "image": "https://randomuser.me/api/portraits/men/60.jpg",
        "text": "Hello! Good Morning!"
      }, {
        "type": 1,
        "image": "https://randomuser.me/api/portraits/women/65.jpg",
        "text": "Hello! Good Afternoon!"
      }, {
        "type": 0,
        "image": "https://randomuser.me/api/portraits/women/65.jpg",
        "text": "Hello! Good Afternoon!"
      }, {
        "type": 1,
        "image": "https://randomuser.me/api/portraits/women/65.jpg",
        "text": "Hello! Good Afternoon!"
      }, {
        "type": 0,
        "image": "https://randomuser.me/api/portraits/women/65.jpg",
        "text": "Hello! Good Afternoon!"
      }, {
        "type": 1,
        "image": "https://randomuser.me/api/portraits/women/65.jpg",
        "text": "Hello! Good Afternoon!"
      }, {
        "type": 0,
        "image": "https://randomuser.me/api/portraits/women/65.jpg",
        "text": "Hello! Good Afternoon!"
      }];
  }

  getHeight() {
    return 200;
  }

  getHWidth() {

  }

  handleTabActive() {
    console.log('active');
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    });
  }

  openMenu() {
    this.setState({
      open: true
    });
  }

  render() {
    return (
      <div style={{ height: "100%" }}>
        <AppBar
          title="Lets Talk Code"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onRightIconButtonTouchTap={this.openMenu.bind(this)}
        />
        <Drawer open={this.state.open} docked={false} onRequestChange={(open) => this.setState({open})}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
        <div className="canvas">
          <SplitPane split="vertical" minSize={50} defaultSize={getHWidth()}>
            <SplitPane split="horizontal" className="sub" defaultSize={getHeight()}>
              <VideoChatWindow></VideoChatWindow>
              <ChatBubble className="chat-pane" messages={this.state.messages} />
            </SplitPane>
            <Tabs className="code-area">
              <Tab label="Board">
                <CodeBoard></CodeBoard>
              </Tab>
              <Tab label="Editor" className="code-area-ide" onActive={this.handleTabActive.bind(this)}>
                <CodeIde></CodeIde>
              </Tab>
            </Tabs>
          </SplitPane>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

let getHWidth = () => (window.innerWidth) / 2;
let getHeight = () => (window.innerHeight - (64 + 18)) / 2;