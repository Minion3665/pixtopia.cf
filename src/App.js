import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <React.Fragment>
        <div class="startinganimation">
          <div class="snackDiv"><span class="text">The Kid's Snack Train</span></div>
          <div class="delightDiv"><span class="text">The Delight Bar</span></div>
          <div class="eveningDiv"><span class="text">The Evening Delicacy Box</span></div>
          <div class="supriseDiv"><span class="text">Suprises in every box</span></div>
          <div class="title">Treece & Turner</div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
