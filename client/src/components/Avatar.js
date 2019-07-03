import React from 'react';
import styled from 'styled-components';

const StyledAvatar = styled.div`
  position: relative;
  display: inline-block;
  width: 64px;
  height: 64px;
  ${props => props.round && 'border-radius: 50%;'}
  vertical-align: middle;
  overflow: hidden;
  user-select: none;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
  }
`;

function Avatar({ image, ...rest }) {
  return (
    <StyledAvatar {...rest}>
      <img src={image} alt="" />
    </StyledAvatar>
  );
}

export default Avatar;
