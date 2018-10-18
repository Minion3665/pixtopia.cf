import React, { Component } from 'react';
import './App.css';

class Lambda extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, msg: null };
  }

  getMotd() => {

    this.setState({ loading: true });
    fetch('/.netlify/functions/getMotd')
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }));
  };

  render() {
    let motd = getMotd();
    console.log(motd);
    if (motd == null){
        document.title = "Pixtopia - MOTD: Welcome To Pixtopia";
    } else {
        document.title = "Pixtopia - MOTD: "+motd;
    }
    const { loading, msg } = this.state;

    return (
        <p></p>
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
