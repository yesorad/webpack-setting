import React from 'react';
import { Route, Switch } from 'react-router-dom';
import test from './pages/test';

function App() {
  return (
    <Switch>
      <Route path="/" component={test} exact />
    </Switch>
  );
}

export default App;
