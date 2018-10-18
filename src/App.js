import React, { Component } from 'react';
import './App.css';

class Lambda extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, msg: null };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch('/.netlify/functions/getMotd')
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }));
  };

  render() {
    const { loading, msg } = this.state;
    document.title = {msg}.body;
    return (
      <b>Under Development Motd: {msg}</b>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Pixtopia Gaming Site. Down For Maintenance. Please Bear With Us
          </p>
          <Lambda />
        </header>
      </div>
    );
  }
}

export default App;
