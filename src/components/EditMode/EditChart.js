import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from '@chakra-ui/core';
import { useCourtState, useCourtDispatch } from '../../hooks/court';
import { useCourtPositionsState, useCourtPositionsDispatch } from '../../hooks/courtPositions';
import { getPoints } from '../../utils/common';
import { SHOT_TYPE, MODE_TYPE, POINTS_TYPE } from '../../constants/base';
import CourtTabs from './CourtTabs';
import FieldGoal from '../FieldGoal';
import ShotPositions from '../ShotPositions';

function EditChart({ mode, shotType }) {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const { currentCourt } = useCourtState();
  const courtPositions = useCourtPositionsState();
  const courtDispatch = useCourtDispatch();
  const courtPositionsDispatch = useCourtPositionsDispatch();
  const currentShotPositions = courtPositions[currentCourt].value

  const handleMouseMove = event => {
    setPosition({ x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY });
  };

  const handleClick = () => {
    if (mode !== MODE_TYPE.INSERT) return null;
    const points = getPoints(position.x, position.y)

    if (points === POINTS_TYPE.INVALID) {
      alert('Position is invalid');
      return null;
    }

    courtPositionsDispatch({
      type: 'ADD_SHOT',
      currentCourt,
      positions: {
        type: shotType,
        points,
        position,
      },
    });
  }

  const handleCourtChange = court => courtDispatch({
    type: 'SELECT_COURT',
    court: Object.values(courtPositions)[court].id,
  });

  return (
    <Box ml="auto" onChange={handleCourtChange}>
      <CourtTabs />
      <Box
        className="App-logo-wrapper"
        onClick={handleClick}
        onMouseMove={handleMouseMove}
      >
        <FieldGoal shotPositions={currentShotPositions} />
        <ShotPositions mode={mode} shotPositions={currentShotPositions} />
        {
          mode === MODE_TYPE.INSERT &&
          <Text
            as="span"
            color={shotType === SHOT_TYPE.MADE ? '#f00' : '#00f'}
            fontSize={20}
            position="absolute"
            transform={`translate(${position.x - 8}px, ${position.y - 20}px)`}
            pointerEvents="none"
          >
            {shotType}
          </Text>
        }
      </Box>
    </Box>
  )
}

EditChart.propTypes = {
  mode: PropTypes.string.isRequired,
  shotType: PropTypes.string.isRequired,
}

export default EditChart;
