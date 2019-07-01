import React from 'react';

import Board from './Board';


function LaunchTile({ launch }) {
  const { id, mission, rocket } = launch;
  return (
    <Board.Tile
      to={`/launch/${id}`}
      image={mission.missionPatch}
    >
      <h3>{mission.name}</h3>
      <p>{rocket.name}</p>
    </Board.Tile>
  );
}

export default LaunchTile;
