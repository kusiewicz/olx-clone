import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home, Browse } from './Pages';

const App = () => (
  <Router>
    <Switch>
      <Route path="/oferty">
        <Browse />
      </Route>

      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
