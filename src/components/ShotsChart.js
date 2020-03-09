import React from 'react';
import PropTypes from 'prop-types';
import ShotPositions from './ShotPositions';
import { SHOT_TYPE } from '../constants/base';

const renderFieldGoal = shotPositions => {
  console.log(shotPositions)
  const shotMades = shotPositions.filter(shot => shot.type === SHOT_TYPE.MADE).length;
  const shotTakes = shotPositions.length;
  return (
    <p>{`FG: ${shotMades} - ${shotTakes}`}</p>
  )
}

function ShotsChart({ shotType, position, shotPositions, onClick, onMouseMove }) {
  return (
    <div className="App-logo-wrapper" onClick={onClick} onMouseMove={onMouseMove}>
      {renderFieldGoal(shotPositions)}
      <ShotPositions shotPositions={shotPositions} />
      <span style={{
        color: shotType === SHOT_TYPE.MADE ? 'red' : 'blue',
        fontSize: '20px',
        position: 'absolute',
        left: position.x - 8,
        top: position.y - 16,
        pointerEvents: 'none',
        zIndex: 100000,
      }}>{shotType}</span>
    </div>
  )
}

ShotsChart.propTypes = {
  shotType: PropTypes.string.isRequired,
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
  shotPositions: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  })).isRequired,
  onClick: PropTypes.func.isRequired,
  onMouseMove: PropTypes.func.isRequired,
}

export default ShotsChart;
