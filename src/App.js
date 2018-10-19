import url from 'url';
import React, { Component } from 'react';
import './App.css';

class ShowPageContent extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }

  render() {
    return (
      <React.Fragment>
        <h1>Hello world</h1>
      </React.Fragment>
    );
  }
}

class ShowMOTD extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, msg: null };
  }

  componentDidMount() {
    const { loading, msg } = this.state;
    if ({msg}.msg == null) {
      this.setState({ loading: true});
      fetch('/.netlify/functions/getMotd')
        .then(response => response.json())
        .then(json => this.setState({ loading: false, msg: json.msg }));
    }
  };

  render() {
    const { loading, msg } = this.state;
    document.title = "Welcome to Pixtopia - MOTD: "+{msg}.msg;
    return (
      <React.Fragment>
        <b>Status: Under Development, Motd: {msg}</b>
      </React.Fragment>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <font size="20" color="#aa0000">Welcome To Pixtopia</font><br/>
          <ShowMOTD />
        </div>
        <div className="header2">
          <font size="20" color="#aa0000">Welcome To Pixtopia</font><br/>
          <ShowMOTD />
        </div>
        <ShowPageContent />
        <div className="bottombar">
          <span className="link activelink">Home</span>
          <a href="bugreports.html" className="link">Report a bug</a>
        </div>
      </div>
    );
  }
}

export default App;
