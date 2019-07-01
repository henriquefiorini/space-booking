import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Board = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: space-between;
`;

const BoardItem = styled.li`
  position: relative;
  width: 24%;
  margin-bottom: 12px;
  padding: 0;
  transform: translate(0);
  cursor: pointer;

  @media only screen and (max-width: 711px) {
    width: 48%;
    margin-right: 2%;
  }

  @media only screen and (max-width: 750px) {
    width: 100%;
    padding-right: 0;
  }
`;

const BoardTile = styled(Link)`
  position: relative;
  display: block;
  height: 96px;
  border-radius: 4px;
  background-size: 200%;
  background-position: center;
  background-repeat: no-repeat;
  color: #FFF;
  line-height: 20px;
  padding: 8px;
  text-decoration: none;
  overflow: hidden;

  ${props => props.image
    ? `background-image:
        linear-gradient(rgba(31, 45, 61, 1),
        rgba(31, 45, 61, .5)), url(${props.image});
      `
    : 'background-color: #273444'
  }
`;

Board.Item = BoardItem;
Board.Tile = BoardTile;

export default Board;
