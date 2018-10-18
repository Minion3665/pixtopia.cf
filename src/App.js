import React, { Component } from 'react';
import './App.css';

class ShowMOTD extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, msg: null };
  }

  componentDidMount() {
    this.setState({ loading: true});
    fetch('/.netlify/functions/getMotd')
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }));
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
        <div class="header" style="text-align:center">
          <font size="20" color="#aa0000">Welcome To Pixtopia</font><br/>
          <ShowMOTD />
        </div>
        <div class="bottombar">
          <span className="link activelink">Home</span>
          <a href="bugreports.html" className="link">Report a bug</a>
        </div>
      </div>
    );
  }
}

export default App;
