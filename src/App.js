import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";
import { Offline, Online, Detector } from "react-detect-offline";

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <OfflineMessage />
          <div className="header">
            <div className="welcomeMessage">Welcome To Pixtopia</div>
            <ShowMOTD />
          </div>
          <div className="header2">
            <div className="welcomeMessage">Welcome To Pixtopia</div>
            <ShowMOTD />
          </div>
          <div className="bottombar">
            <NavLink exact strict to="/" className="link" activeClassName="activelink">Home</NavLink>
            <NavLink to="/about" className="link" activeClassName="activelink">About Pixtopia</NavLink>
            <Offline><NavLink to="/disabled" activeClassName="activelink" className="link">Bug Reports</NavLink></Offline>
            <Online><a href="https://pixtopia.cf/report.html" class="link">Bug Reports</a></Online>
            <Offline><NavLink to="/disabled" activeClassName="activelink" className="link">Join Our Discord!</NavLink></Offline>
            <Online><a href="https://discord.gg/JkqhJWK" class="link">Join Our Discord!</a></Online>
          </div>
          <Switch>
            <Route exact strict path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/disabled" component={OfflineDisabled} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

class OfflineMessage extends Component {
  render() {
    return (
        <Offline><div className="noConnection">No Internet Connection</div></Offline>
    );
  }
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const NotFound = () => (
  <div>
    <h2>404 Error. Page Not Found</h2>
  </div>
);

const OfflineDisabled = () => (
  <div>
    <h2>This is disabled offline, Sorry for any inconvenience caused</h2>
  </div>
);

class ShowMOTD extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, msg: null };
  }
 
  componentDidMount() {
    const { loading, msg } = this.state;
    if ({msg}.msg === null) {
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
        <b className="motd">Status: Under Development, Motd: {msg}</b>
      </React.Fragment>
    );
  }
}

export default App;
