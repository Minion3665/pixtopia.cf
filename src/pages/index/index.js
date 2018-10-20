import React, { Component } from 'react';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Index
        {this.props.children}
      </div>
    );
  }
}

export default App;