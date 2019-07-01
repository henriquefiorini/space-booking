import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  padding-top: 48px;
  padding-bottom: 24px;
  font-size: 24px;
  font-weight: bold;

  span {
    margin-left: 8px;
  }
`;

function Header({ title, icon }) {
  return (
    <StyledHeader>
      {title}
      {icon && (
        <span role="img" aria-label={title}>{icon}</span>
      )}
    </StyledHeader>
  )
}

export default Header;
