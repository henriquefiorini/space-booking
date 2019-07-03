import React from 'react';
import styled from 'styled-components';

const StyledPage = styled.main`
  display: block;
  width: 100%;
  max-width: 980px;
  margin-right: auto;
  margin-left: auto;
  padding: 56px 24px 48px;
`;

function Page(props) {
  return (
    <StyledPage>
      {props.children}
    </StyledPage>
  );
}

export default Page;
