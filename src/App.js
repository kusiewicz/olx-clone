import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home, Browse } from './Pages';

// const browsePath = '/oferty/(:location|q-:search)?';
// const browsePath = '/oferty/:location/q-search?';

const App = () => (
  <Router>
    <Switch>
      <Route path={browsePath}>
        <Browse />
      </Route>

      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
