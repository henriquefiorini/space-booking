import React from 'react';
import { Mutation, ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';

import { RegisterForm } from '../containers';
import { Page, Header } from '../components';

const REGISTER_MUTATION = gql`
  mutation Register($email: String!, $password: String!) {
    register(email: $email, password: $password)
  }
`;

function RegisterPage(props) {
  return (
    <Page>
      <Header title="Create your account" icon="🦉" />
      <ApolloConsumer>
        {client => (
          <Mutation
            mutation={REGISTER_MUTATION}
            onCompleted={({ register }) => {
              localStorage.setItem('token', register);
              client.writeData({
                data: {
                  isLoggedIn: true,
                },
              });
              props.history.push('/');
            }}
          >
            {(register, { data }) => (
              <RegisterForm register={register} />
            )}
          </Mutation>
        )}
      </ApolloConsumer>
    </Page>
  );
}

export default RegisterPage;
