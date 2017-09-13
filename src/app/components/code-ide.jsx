import React, { Component } from 'react';
import { render } from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';
 
import 'brace/mode/java';
import 'brace/mode/javascript';
import 'brace/theme/solarized_dark';


export default class  extends Component {

    onChange(val) {
        console.log(val);
    }

    render () {
        return (
            <AceEditor
            width="100%"
            height="100%"
            mode="javascript"
            theme="solarized_dark"
            onChange={this.onChange.bind(this)}
            name="code_ide"
            editorProps={{$blockScrolling: true}}
          /> 
        );
    }
}
