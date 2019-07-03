import styled from 'styled-components';

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 160px);
  grid-gap: 24px;
`;

const GalleryImage = styled.div`
  position: relative;
  display: block;
  width: 160px;
  height: 160px;
  margin: 0;
  padding: 0;
  border-radius: 6px;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ${props => props.image &&
    `background-image: url(${props.image});`
  }

  cursor: pointer;
  text-decoration: none;
  overflow: hidden;
`;

Gallery.Image = GalleryImage;

export default Gallery;
