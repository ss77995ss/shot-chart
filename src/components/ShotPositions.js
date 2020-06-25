import React from 'react';
import PropTypes from 'prop-types';
import { useCourtState } from '../hooks/court';
import { useCourtPositionsDispatch } from '../hooks/courtPositions';
import { SHOT_TYPE, MODE_TYPE } from '../constants/base';
import DraggableShot from './DraggableShot';

function ShotPositions({ mode, shotPositions }) {
  const { currentCourt } = useCourtState();
  const courtPositionsDispatch = useCourtPositionsDispatch();

  const handleDelete = (index) => () => {
    courtPositionsDispatch({
      type: 'DELETE_SHOT',
      currentCourt,
      selectedPoistionIndex: index,
    });
  };

  return shotPositions.map((shot, index) => {
    const style = {
      color: shot.type === SHOT_TYPE.MADE ? 'red' : 'blue',
      fontSize: '20px',
      position: 'absolute',
      transform: `translate(${shot.position.x - 8}px, ${shot.position.y - 20}px)`,
      pointerEvents: mode !== MODE_TYPE.INSERT ? 'auto' : 'none',
      zIndex: 1000 + index,
    };
    if (mode === MODE_TYPE.DELETE)
      return (
        <button key={index} style={style} onClick={handleDelete(index)}>
          {shot.type}
        </button>
      );
    if (mode === MODE_TYPE.DRAG)
      return <DraggableShot currentCourt={currentCourt} key={index} index={index} shot={shot} />;
    return (
      <span key={index} style={style}>
        {shot.type}
      </span>
    );
  });
}

ShotPositions.propTypes = {
  mode: PropTypes.string.isRequired,
  shotPositions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      x: PropTypes.number,
      y: PropTypes.number,
    }),
  ).isRequired,
};

export default ShotPositions;
