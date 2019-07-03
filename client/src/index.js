import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';

import GlobalStyle from './styles';
import App from './App';

import { typeDefs, resolvers } from './resolvers';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: process.env.REACT_APP_APOLLO_SERVER_URL,
  ...(!!localStorage.getItem('token') && {
    headers: {
      authorization: localStorage.getItem('token'),
    },
  }),
});

const client = new ApolloClient({
  cache,
  link,
  typeDefs,
  resolvers,
});

cache.writeData({
  data: {
    isLoggedIn: !!localStorage.getItem('token'),
    cartItems: [],
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyle />
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
