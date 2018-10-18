import React, { Component } from 'react';
import './App.css';

class ShowMOTD extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, msg: null };
  }

  componentDidMount() {
    const { loading, msg } = this.state;
    if ({msg} == null) {
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
          <html>
            <div class="header" style="text-align:center">
              <font size="20" color="#aa0000">Welcome To Pixtopia</font><br/>
              <ShowMOTD />
            </div>
            <div class="bottombar">
              <span class="link activelink">Home</span>
              <a href="bugreports.html" class="link">Report a bug</a>
            </div>
            <div class="header2" style="text-align:center">
              <font size="20" color="#aa0000">Welcome To Pixtopia</font><br/>
              <ShowMOTD />
            </div>
            <br/>
        </header>
      </div>
    );
  }
}

export default App;
