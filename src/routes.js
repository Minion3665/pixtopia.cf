import React from 'react';
import { Router, Route } from 'react-router';

import App from './pages/index/index.js';
import bugreports from './pages/bugreports/bugreports.js';
import notFound from './pages/404/404.js';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <Route path="/bugreports" component={bugreports}/>
      <Route path="*" component={notFound}/>
    </Route>
  </Router>
);