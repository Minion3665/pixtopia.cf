import React, { Component } from 'react';
import './App.css';

class Lambda extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, msg: "Loading MOTD..." };
  }

  componentDidMount() {
    this.setState({ loading: true, msg: "Almost There..."});
    fetch('/.netlify/functions/getMotd')
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }));
  };

  render() {
    const { loading, msg } = this.state;
    document.title = {JSON.stringify(msg)};
    return (
      <React.Fragment>
        <b>Under Development, Motd: {msg}</b>
      </React.Fragment>
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
