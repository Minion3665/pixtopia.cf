import url from 'url';
import React, { Component } from 'react';
import './App.css';

class ShowPageContent extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }

  render() {
    const values = url.parse(window.location.href);
    const page = values.hash;
    if (page == "home" || page == null || page == "") {
      return (
        <React.Fragment>
          Welcome To Pixtopia!
          <div className="bottombar">
            <span className="link activelink">Home</span>
            <a href="#bugreport" className="link">Report a bug</a>
          </div>
        </React.Fragment>
      );
    } else if (page == "#bugreport") {
      return (
        <React.Fragment>
          <h3>Report A Bug</h3>
          <form name="bug reports" method="POST" netlify>
            <textarea name="report text" rows="10" cols="100" placeholder="Please provide a detailed explanation of the bug including steps to reproduce it, what happens, and links to screenshots if possible. You may also include a contact email or any other information that might be useful..." autofocus required></textarea>
            <br/>
            <button type="submit" value="Submit bug report">Tell Us!</button>
          </form>
          <div className="bottombar">
            <a href="#home" className="link">Home</a>
            <span className="link activelink">Report a bug</span>
          </div>
        </React.Fragment>
      );
    } else {
      window.location.href = "/404";
      return (
        <h1>404 Error - Page Not Found</h1>
      );
    }
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
      </div>
    );
  }
}

export default App;
