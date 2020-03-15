import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/core';
import { useCourtState } from '../contexts/court';
import { useCourtPositionsState, useCourtPositionsDispatch } from '../contexts/courtPositions';
import ShotPositions from './ShotPositions';
import { SHOT_TYPE } from '../constants/base';

const renderFieldGoal = shotPositions => {
  const shotMades = shotPositions.filter(shot => shot.type === SHOT_TYPE.MADE).length;
  const shotTakes = shotPositions.length;
  return (
    <p>{`FG: ${shotMades} - ${shotTakes}`}</p>
  )
}

function ShotsChart({ shotType, position, onMouseMove }) {
  const { currentCourt, selectedCourts } = useCourtState();
  const courtPositions = useCourtPositionsState();
  const courtPositionsDispatch = useCourtPositionsDispatch();
  const currentShotPositions = selectedCourts.map(court => courtPositions[court].value).flat();

  const handleClick = () => {
    courtPositionsDispatch({
      type: 'UPDATE_COURT_POSITIONS',
      currentCourt,
      positions: {
        type: shotType,
        position,
      },
    });
  }

  return (
    <Box pointerEvents={currentCourt ? 'auto' : 'none'} className="App-logo-wrapper" onClick={handleClick} onMouseMove={onMouseMove}>
      {renderFieldGoal(currentShotPositions)}
      <ShotPositions shotPositions={currentShotPositions} />
      <span style={{
        color: shotType === SHOT_TYPE.MADE ? 'red' : 'blue',
        fontSize: '20px',
        position: 'absolute',
        left: position.x - 8,
        top: position.y - 16,
        pointerEvents: 'none',
        zIndex: 100000,
      }}>{shotType}</span>
      <p>{`Current: ${currentCourt} X: ${position.x} Y: ${position.y}`}</p>
    </Box>
  )
}

ShotsChart.propTypes = {
  shotType: PropTypes.string.isRequired,
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
  onMouseMove: PropTypes.func.isRequired,
}

export default ShotsChart;
