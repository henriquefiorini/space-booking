import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { TopBar } from './components';

import {
  LoginPage,
  RegisterPage,
  LaunchesPage,
  LaunchDetailsPage,
  CartPage,
  ProfilePage,
  NotFoundPage,
} from './pages';

function App() {
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />

        <Route exact path="/" component={LaunchesPage} />
        <Route exact path="/launch/:id" component={LaunchDetailsPage} />
        <Route exact path="/cart" component={CartPage} />
        <Route exact path="/profile" component={ProfilePage} />

        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
