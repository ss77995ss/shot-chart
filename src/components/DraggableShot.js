import React from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
import { useCourtPositionsDispatch } from '../hooks/courtPositions';
import { SHOT_TYPE, POINTS_TYPE } from '../constants/base';
import { getPoints } from '../utils/common';

function DraggableShot({ currentCourt, index, shot }) {
  const { type, position } = shot;
  const [activeDrag, setActiveDrag] = React.useState(false);
  const courtPositionsDispatch = useCourtPositionsDispatch();
  const style = {
    color: shot.type === SHOT_TYPE.MADE ? 'red' : 'blue',
    fontSize: '20px',
    position: 'absolute',
    zIndex: index,
    cursor: activeDrag ? 'grabbing' : 'grab',
  };

  const handleStart = () => setActiveDrag(true);
  const handleStop = (e, ui) => {
    const position = {
      x: ui.x + 8,
      y: ui.y + 20,
    };
    const points = getPoints(position.x, position.y);

    if (points === POINTS_TYPE.INVALID) {
      alert('Position is invalid');
      return null;
    }

    courtPositionsDispatch({
      type: 'UPDATE_SHOT',
      currentCourt,
      selectedPoistionIndex: index,
      newShot: {
        type,
        points,
        position,
      },
    });
    setActiveDrag(false);
  };

  return (
    <Draggable
      position={{ x: position.x - 8, y: position.y - 20 }}
      bounds="parent"
      onStart={handleStart}
      onStop={handleStop}
    >
      <span style={style}>{type}</span>
    </Draggable>
  );
}

DraggableShot.propTypes = {
  currentCourt: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  shot: PropTypes.shape({
    type: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
};

export default DraggableShot;
