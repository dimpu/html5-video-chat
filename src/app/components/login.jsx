import React, { Component } from 'react';
// import FacebookLoginButton from 'react-social-login-buttons/lib/buttons/FacebookLoginButton';
import RaisedButton from 'material-ui/RaisedButton';
// import Footer from './common/footer';

export default class Login extends Component {
  render () {
    return (
      <div>
      <div class="bg">
      <div class="blur"></div>
      <div class="bgImg"></div>
      <div class="bgOverLay"></div>
    </div>
    

    <div class="outer">
    <div class="middle">
      <div class="inner">
       
      </div>
    </div>
    </div>
    {/* <Footer></Footer> */}
    
  </div>
    );
  }
  showLock() {
    // Show the Auth0Lock widget
    // this.lock.show();
  }

  componentWillMount() {
    let clientId = 'gzUfxDdRpu1UT51S6m5ZmQJnRFONQZCs'
    let domain = 'techumber.auth0.com'
    this.lock = new Auth0Lock(clientId, domain);
    this.lock.show();
    // console.log(this.lock);
  }
}