import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { TopBar, AuthRoute, PrivateRoute } from './components';

import {
  LoginPage,
  RegisterPage,
  LaunchesPage,
  LaunchDetailsPage,
  CartPage,
  ProfilePage,
  NotFoundPage,
} from './pages';

const IS_LOGGED_IN_QUERY = gql`
  query IsLoggedIn {
    isLoggedIn @client
  }
`;

function App() {
  return (
    <Query query={IS_LOGGED_IN_QUERY}>
      {({ data }) => (
        <BrowserRouter>
          <TopBar isLoggedIn={data.isLoggedIn} />
          <Switch>
            <Route exact path="/" component={LaunchesPage} />
            <Route exact path="/launch/:id" component={LaunchDetailsPage} />

            <AuthRoute exact path="/login" component={LoginPage} isLoggedIn={data.isLoggedIn} />
            <AuthRoute exact path="/register" component={RegisterPage} isLoggedIn={data.isLoggedIn} />

            <PrivateRoute exact path="/cart" component={CartPage} isLoggedIn={data.isLoggedIn} />
            <PrivateRoute exact path="/profile" component={ProfilePage} isLoggedIn={data.isLoggedIn} />

            <Route component={NotFoundPage} />
          </Switch>
        </BrowserRouter>
      )}
    </Query>
  );
}

export default App;
