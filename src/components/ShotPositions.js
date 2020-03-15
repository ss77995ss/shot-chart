import React from 'react';
import PropTypes from 'prop-types';
import { SHOT_TYPE } from '../constants/base';

function ShotPositions({ shotPositions }) {
  return (
    shotPositions.map((shot, index) => {
      const style = {
        color: shot.type === SHOT_TYPE.MADE ? 'red' : 'blue',
        fontSize: '20px',
        position: 'absolute',
        left: shot.position.x - 8,
        top: shot.position.y - 16,
        pointerEvents: 'none',
        zIndex: index,
      };
      return <span key={index} style={style}>{shot.type}</span>
    })
  );
}

ShotPositions.propTypes = {
  shotPositions: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  })).isRequired,
}

export default ShotPositions;
