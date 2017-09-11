import React, { Component } from 'react';
import { render } from 'react-dom';
// import ReactRouter,{Router, Route } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom'
import  Home  from './app/components/home.jsx';
import  Login  from './app/components/login.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


// document.head.innerHTML =  document.head.innerHTML + `<base href="/" />`;
// document.body.innerHTML = document.body.innerHTML + `
//   <div id="root"></div>
// `;



render(
  <MuiThemeProvider>
    <BrowserRouter>
      <Route exact path='/' component={Home}>
        {/* <IndexRoute component={Home} /> */}
      
      </Route>
    </BrowserRouter>
  </MuiThemeProvider>
  ,
    document.getElementById('root')
);


// render(element,
//   document.getElementById('root')
// );