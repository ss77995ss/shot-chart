import React from 'react';
import PropTypes from 'prop-types';
import { SHOT_TYPE } from '../constants/base';

function FieldGoal({ shotPositions }) {
  const shotMades = shotPositions.filter(shot => shot.type === SHOT_TYPE.MADE).length;
  const shotTakes = shotPositions.length;

  return (
    <p>{`FG: ${shotMades} - ${shotTakes}`}</p>
  );
}

FieldGoal.propTypes = {
  shotPositions: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  })).isRequired,
}

export default FieldGoal;
