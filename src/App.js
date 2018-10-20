import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

class App extends Component {
  render () {
    return (
      
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/report" component={Report} />
            <Route component={NotFound} />
          </Switch>
        </Router>
        <div className="bottombar">
          <Link to="/" activeClassName="activelink">Home</Link>
          <Link to="/about" activeClassName="activelink">About Pixtopia</Link>
          <Link to="/report" activeClassName="activelink">Bug Reports</Link>
        </div>
      </React.Fragment>
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

const Report = ({ match }) => (
  <form name="bug reports" method="POST" netlify>
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