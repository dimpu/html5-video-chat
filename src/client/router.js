import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './css/style.css';

// app code 
import Home from './app/components/home.jsx';
import Login from './app/components/login.jsx';


export default class Router extends Component {
  render() {
    return (<MuiThemeProvider>
      <BrowserRouter>
        <Route exact path='/' component={Home}>
          {/* <IndexRoute component={Home} /> */}

        </Route>
      </BrowserRouter>
    </MuiThemeProvider>
    );
  }
}
