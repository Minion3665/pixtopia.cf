import url from 'url';
import React, { Component } from 'react';
import './App.css';
import pageContent from './pageContent'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

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

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/:page" component={pageContent}>
        </Route>
      </Router>
    );
  }
}

export default App;
