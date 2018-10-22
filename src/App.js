import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";
import 'https://pixtopia.cf/offline/offline';
import 'https://pixtopia.cf/offline/offline-theme.css';
import 'https://pixtopia.cf/offline/offline-language.css';

class App extends Component {
  render () {
    let reportlink = null;
    Offline.check();
    if (Offline.state == "down") {
      reportlink = "/disabled";
    } else {
      reportlink = "/report.html";
    }
    return (
      <Router>
        <div>
          <div className="header">
            <font size="20" color="#aa0000">Welcome To Pixtopia</font><br />
            <ShowMOTD />
          </div>
          <div className="header2">
            <font size="20" color="#aa0000">Welcome To Pixtopia</font><br />
            <ShowMOTD />
          </div>
          <div className="bottombar">
            <NavLink exact strict to="/" className="link" activeClassName="activelink">Home</NavLink>
            <NavLink to="/about" className="link" activeClassName="activelink">About Pixtopia</NavLink>
            <NavLink to="/report.html" activeClassName="activelink" className="link">Bug Reports</NavLink>
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
        <b>Status: Under Development, Motd: {msg}</b>
      </React.Fragment>
    );
  }
}

export default App;
