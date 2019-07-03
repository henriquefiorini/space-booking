import React from 'react';
import { NavLink } from 'react-router-dom';
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

const TopBarLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  min-height: 24px;
  border-radius: 4px;
  color: #273444;
  font-weight: 600;
  line-height: 1;

  &:hover,
  &:focus,
  &:active {
    color: #009EEB;
    text-decoration: none;
    outline: none;
  }

  &:not(:last-child) {
    margin-right: 20px;
  }
`;

const TopBarLogo = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  min-height: 24px;
  margin-right: 24px;
  font-size: 16px;
  font-weight: bold;
  line-height: 1;
  cursor: default;
  user-select: none;

  span {
    margin-right: 8px;
    font-size: 24px;
  }
`;

function TopBar({ isLoggedIn }) {
  return(
    <StyledTopBar>
      <TopBarWrapper>
        <TopBarGroup>
          <TopBarLogo>
            <span role="img" aria-label="Space Travel">🛸</span> Space Travel
          </TopBarLogo>
          <TopBarLink to="/">Home</TopBarLink>
        </TopBarGroup>
        {isLoggedIn ? (
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
