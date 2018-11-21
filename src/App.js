import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";
import { Offline, Online, Detector } from "react-detect-offline";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Router>
        <Switch>
          <Route exact strict pass="/" component={Home}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    );
  }
}

const Home = () => (
  <div class="startinganimation">
    <a class="snackDiv" href="train.html"><span class="text">The Kid's Snack Train</span></a>
    <a class="delightDiv" href="delight.html"><span class="text">The Delight Bar</span></a>
    <a class="eveningDiv" href="evening.html"><span class="text">The Evening Delicacy Pack</span></a>
    <a class="supriseDiv" href="all.html"><span class="text">Suprises in every box</span></a>
    <div class="title">T & T</div>
  </div>
);

const NotFound = () => (
  <div class="startinganimation" class="title">Not Found</div>
);

export default App;
