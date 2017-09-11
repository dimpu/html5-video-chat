import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import {Router, Route} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';


export class Home extends Component {
    render(){
        return (<RaisedButton label="Default" />);
    }
}

// More components
export class Car extends Component {
    render(){
        return (<h1>Cars page</h1>);
    }
}

export class About extends Component {
    render(){
        return (<h1>About page</h1>);
    }
}





// render(element,
//   document.getElementById('root')
// );