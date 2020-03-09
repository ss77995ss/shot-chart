import React from 'react';
import PropTypes from 'prop-types';
import { SHOT_TYPE } from '../constants/base';

function ShotTypeSelector({ onClick }) {
  return (
    <div>
      <button value={SHOT_TYPE.MADE} onClick={onClick}>MADE</button>
      <button value={SHOT_TYPE.MISS} onClick={onClick}>MISS</button>
      <button value={SHOT_TYPE.UNDO} onClick={onClick}>UNDO</button>
    </div>
  )
}

ShotTypeSelector.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default ShotTypeSelector;
