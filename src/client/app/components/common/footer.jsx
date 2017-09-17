import React, { Component } from 'react';
import './footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-links">
          <span className="ftrCopy">©2017 LetsTalkCode</span>
          <a className="ftrTerms" href="#">Terms of Use</a>
          <a className="ftrPrivacy" href="#">Privacy &amp; Cookies</a>
        </div>
      </div>
    );
  }
}