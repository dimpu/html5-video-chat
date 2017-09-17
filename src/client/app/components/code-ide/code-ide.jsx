import React, { Component } from 'react';
import { render } from 'react-dom';
// import brace from 'brace';
import AceEditor from 'react-ace';
import './modes';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';


const languages = [
    'javascript',
    'java',
    'python',
    'xml',
    'ruby',
    'sass',
    'markdown',
    'mysql',
    'json',
    'html',
    'handlebars',
    'golang',
    'csharp',
    'elixir',
    'typescript',
    'css'
];

const langMenuIteams = [];

languages.forEach((val) => {
    langMenuIteams.push(<MenuItem value={val} key={val} primaryText={`${val.toUpperCase()}`} />);
});

const fontSizeMenuIteams = [];

[10,11,12,13,14,15,16,17,18,19,20,21,22,23,24].forEach((val) => {
    fontSizeMenuIteams.push(<MenuItem value={val} key={val} primaryText={`${val}`} />);
});

const styles = {
    customWidth: {
        width: 200,
    },
};

export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            font: 14,
            mode: 'javascript'
        };
    }

    // when code is changed
    onCodeChange(val) {
        console.log(val);
    }

    // on mode(language) change
    handleModeChange(event, index, value) {
        this.setState({
            mode: value
        });
    }

    // on font size cange
    handleFontSizeChange(event, index, value) {
        this.setState({
            font: value
        });
    }

    render() {
        return (
            <div className="full">
                <DropDownMenu style={styles.customWidth} maxHeight={300} openImmediately={true} value={this.state.mode} onChange={this.handleModeChange.bind(this)}>
                    {langMenuIteams}
                </DropDownMenu>
                <DropDownMenu style={styles.customWidth} maxHeight={300} openImmediately={true} value={this.state.font} onChange={this.handleFontSizeChange.bind(this)}>
                    {fontSizeMenuIteams}
                </DropDownMenu>
                <AceEditor
                    width="100%"
                    height="100%"
                    mode={this.state.mode}
                    theme="solarized_dark"
                    name="blah2"
                    onLoad={this.onLoad}
                    onChange={this.onCodeChange}
                    fontSize={this.state.font}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    value={`function hi(argument) {
  // body...
}`}
                    setOptions={{
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        enableSnippets: true,
                        showLineNumbers: true,
                        tabSize: 4,
                    }} />
            </div>
        );
    }
}
