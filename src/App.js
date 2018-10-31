import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";
import { Offline, Online, Detector } from "react-detect-offline";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {msg: "Searching For MOTD", status: "In Development"};
  }
  componentDidMount() {
    const { loading, msg } = this.state;
    this.setState({ loading: true});
    fetch('/.netlify/functions/getMotd')
      .then(response => response.json())
      .then(json => this.setState({ msg: json.msg, status: this.state.status })).then(json => document.title="Welcome To Pixtopia! MOTD: "+json.msg);
  };

  render () {
    return (
      <Router>
        <div>
          <div className="header">
            <div className="welcomeMessage">Welcome To Pixtopia</div>
            <Online><b className="motd">Status: {this.state.status}, Motd: {this.state.msg}</b></Online>
            <Offline><b className="offlineMotd">Running In Offline Mode. Some Functions Are Disabled</b></Offline>
          </div>
          <div className="header2">
            <div className="welcomeMessage">Welcome To Pixtopia</div>
            <Online><b className="motd">Status: {this.state.status}, Motd: {this.state.msg}</b></Online>
            <Offline><b className="offlineMotd">Running In Offline Mode. Some Functions Are Disabled</b></Offline>
          </div>
          <div className="bottombar">
            <NavLink exact strict to="/" className="link" activeClassName="activelink">Home</NavLink>
            <NavLink to="/about" className="link" activeClassName="activelink">About Pixtopia</NavLink>
            <Offline><NavLink to="/disabled" activeClassName="activelink" className="link">Bug Reports</NavLink></Offline>
            <Online><a href="https://pixtopia.cf/report.html" class="link">Bug Reports</a></Online>
            <Offline><NavLink to="/disabled" activeClassName="activelink" className="link">Join Our Discord!</NavLink></Offline>
            <Online><a href="https://discord.gg/JkqhJWK" class="link">Join Our Discord</a></Online>
            <div className="updateButton" onClick="location.reload();">Click Here To Update!</div>
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

const Home = () => (
  <div>
    <h2>Home</h2>
    Welcome To The Pixtopia Website!<br/>
    This is the official pixtopia website, find information, useful links, <del>downloads</del>(coming soon) and more!
    If you are on a mobile device then you can add us to your home screen! We even work offline.
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
    Pixtopia is an <b>unreleased</b> MMO game. In it you must take control of a small robot to climb towers and collect treasure to build your own tower. Sounds easy, right? Not quite as along your way there are many enemies and traps.
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

export default App;
