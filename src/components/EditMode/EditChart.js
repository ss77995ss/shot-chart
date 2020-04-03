import React from 'react';
import PropTypes from 'prop-types';
import { Box, Tabs } from '@chakra-ui/core';
import { useCourtState, useCourtDispatch } from '../../hooks/court';
import { useCourtPositionsState, useCourtPositionsDispatch } from '../../hooks/courtPositions';
import CourtTabs from './CourtTabs';
import FieldGoal from '../FieldGoal';
import ShotPositions from '../ShotPositions';
import { SHOT_TYPE } from '../../constants/base';

function EditChart({ shotType }) {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const { currentCourt } = useCourtState();
  const courtPositions = useCourtPositionsState();
  const courtDispatch = useCourtDispatch();
  const courtPositionsDispatch = useCourtPositionsDispatch();
  const currentShotPositions = courtPositions[currentCourt].value

  const handleMouseMove = event => {
    event.preventDefault();
    setPosition({ x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY });
  };

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

  const handleCourtChange = court => courtDispatch({
    type: 'SELECT_COURT',
    court: Object.values(courtPositions)[court].id,
  });

  return (
    <Tabs onChange={handleCourtChange}>
      <CourtTabs />
      <Box
        pointerEvents={currentCourt ? 'auto' : 'none'}
        className="App-logo-wrapper"
        onClick={handleClick}
        onMouseMove={handleMouseMove}
      >
        <FieldGoal shotPositions={currentShotPositions} />
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
    </Tabs>
  )
}

EditChart.propTypes = {
  shotType: PropTypes.string.isRequired,
}

export default EditChart;
