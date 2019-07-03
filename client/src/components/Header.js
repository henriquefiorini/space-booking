import React from 'react';
import styled from 'styled-components';

import Avatar from './Avatar';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding-top: 48px;
  padding-bottom: 48px;
  font-size: 20px;
  font-weight: 600;

  span {
    margin-left: 8px;
  }
`;

function Header({ image, title, icon }) {
  return (
    <StyledHeader>
      {image && (
        <Avatar
          image={image}
          style={{ marginRight: '12px' }}
        />
      )}
      {title}
      {icon && (
        <span role="img" aria-label={title}>{icon}</span>
      )}
    </StyledHeader>
  );
}

export default Header;
