import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";

class App extends Component {
  render () {
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
            <NavLink to="/report" className="link" activeClassName="activelink">Bug Reports</NavLink>
          </div>
          <Switch>
            <Route exact strict path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/report" component={Report} />
            <Route path="/reportsuccess" component={ReportSuccess} />
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

const ReportSuccess = () => (
  <div>
    <h2>Thanks For Submitting Your Report. (Please note that being on this page does not mean you submitted the form, only that you were brought to this link)</h2>
  </div>
);

const Report = ({ match }) => (
  <form name="bug reports" method="POST" action="/reportsuccess" netlify>
    <textarea name="report text" rows="10" cols="100" placeholder="Please provide a detailed explanation of the bug including steps to reproduce it, what happens, and links to screenshots if possible. You may also include a contact email or any other information that might be useful..." autofocus required></textarea>
    <br />
    <button type="submit" value="Submit bug report">Tell Us!</button>
  </form>
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