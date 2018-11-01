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
          <div class="text snackDiv">The Kid's Snack Train</div>
          <div class="text delightDiv">The Delight Bar</div>
          <div class="text eveningDiv">The Evening Delicacy Box</div>
          <div class="text supriseDiv">Suprises in every box</div>
          <div class="title">Treece & Turner</div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
