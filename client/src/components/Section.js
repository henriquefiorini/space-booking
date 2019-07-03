import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  display: block;
  margin-bottom: 48px;
`;

const SectionTitle = styled.h2`
  display: block;
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 600;
  font-style: italic;
`;

function Section({ title, children, ...rest }) {
  return (
    <StyledSection {...rest}>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </StyledSection>
  );
}

export default Section;
