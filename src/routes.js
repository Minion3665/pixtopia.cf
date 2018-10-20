import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './pages/index/index.js';
import bugreports from './pages/bugreports/bugreports.js';
import notFound from './pages/404/404.js';

const Routes = (props) => (
  <BrowserRouter>
    <div>
      <Route path="/" component={App}/>
      <Route path="/bugreports" component={bugreports}/>
      <Route path="*" component={notFound}/>
    </div>
  </BrowserRouter>
);
export default Routes;