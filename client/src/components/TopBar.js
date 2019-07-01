import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledTopBar = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 56px;
  margin: 0;
  padding: 0;
  background-color: #FFF;
  box-shadow: 0px 4px 8px -3px rgba(0, 0, 0, .06);
  z-index: 90;
`;

const TopBarWrapper = styled.div`
  display: flex;
  flex: 0 0 auto;
  justify-content: space-between;
  width: 100%;
  max-width: 980px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 24px;
  padding-left: 24px;
`;

const TopBarGroup = styled.nav`
  display: flex;
  align-items: center;
`;

const TopBarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  min-height: 24px;
  border-radius: 4px;
  color: #8492A6;
  font-weight: bold;
  line-height: 1;

  &:hover,
  &:focus,
  &:active {
    color: #273444;
    text-decoration: none;
    outline: none;
  }

  &.active {
    color: #1FB6FF;
  }

  &:not(:last-child) {
    margin-right: 20px;
  }
`;

function TopBar({ isAuthenticated }) {
  return(
    <StyledTopBar>
      <TopBarWrapper>
        <TopBarGroup>
          <TopBarLink to="/">Home</TopBarLink>
        </TopBarGroup>
        {isAuthenticated ? (
          <TopBarGroup>
            <TopBarLink to="/cart">Cart</TopBarLink>
            <TopBarLink to="/profile">Profile</TopBarLink>
          </TopBarGroup>
        ) : (
          <TopBarGroup>
            <TopBarLink to="/login">Login</TopBarLink>
            <TopBarLink to="/register">Register</TopBarLink>
          </TopBarGroup>
        )}
      </TopBarWrapper>
    </StyledTopBar>
  );
}

export default TopBar;
