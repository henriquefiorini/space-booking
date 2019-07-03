import React from 'react';
import { ApolloConsumer } from 'react-apollo';
import styled from 'styled-components';

const StyledLogoutButton = styled.button`
  font-weight: 600;
  line-height: 1.5;
  color: #FF1616;

  &:hover,
  &:focus,
  &:active {
    text-decoration: underline;
  }
`;

function LogoutButton() {
  return (
    <ApolloConsumer>
      {client => (
        <StyledLogoutButton
          onClick={() => {
            client.writeData({
              data: {
                isLoggedIn: false,
              },
            });
            localStorage.clear();
          }}
        >
          Sign out
        </StyledLogoutButton>
      )}
    </ApolloConsumer>
  )
}

export default LogoutButton;
