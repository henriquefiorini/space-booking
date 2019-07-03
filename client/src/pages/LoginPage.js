import React from 'react';
import { Mutation, ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';

import { LoginForm } from '../containers';
import { Page, Header } from '../components';

const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

function LoginPage(props) {
  return (
    <Page>
      <Header title="Login" icon="🎈" />
      <ApolloConsumer>
        {client => (
          <Mutation
            mutation={LOGIN_MUTATION}
            onCompleted={({ login }) => {
              localStorage.setItem('token', login);
              client.writeData({
                data: {
                  isLoggedIn: true,
                },
              });
              props.history.push('/');
            }}
          >
            {(login, { data }) => (
              <LoginForm login={login} />
            )}
          </Mutation>
        )}
      </ApolloConsumer>
    </Page>
  );
}

export default LoginPage;
