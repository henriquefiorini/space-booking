import React from 'react';
import styled from 'styled-components';

import Avatar from './Avatar';

const StyledMedia = styled.div`
  display: flex;
  align-items: center;
`;

const MediaImage = styled.div`
  flex: 0;
  margin-right: 24px;
`;

const MediaContent = styled.div`
  flex: 1;
`;

function Media({ image, children }) {
  return (
    <StyledMedia>
      {
        image && (
          <MediaImage>
            <Avatar image={image} round />
          </MediaImage>
        )
      }
      <MediaContent>
        {children}
      </MediaContent>
    </StyledMedia>
  );
}

export default Media;
