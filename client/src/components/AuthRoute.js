import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({
  component: Component,
  isLoggedIn,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => (
      isLoggedIn === false
        ? <Component {...props} />
        : <Redirect to="/" />
    )}
  />
);

export default AuthRoute;
