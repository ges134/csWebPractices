import React, { Component } from 'react';
import ParamViewer from '../paramViewer/ParamViewer';
import logo from './logo.svg';
import './App.css';

interface AppProps {
  data : string;
}

class App extends Component {  
  props : AppProps;

  constructor(props : AppProps) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div className="body">
          <ParamViewer param={this.props.data} />
        </div>
      </div>
    );
  }
}

export default App;
